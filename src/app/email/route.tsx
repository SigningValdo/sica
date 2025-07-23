import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import Email from "../../../emails";
import { ContactData } from "@/components/Formulaire";

// Configuration Gmail avec variables cohérentes
const createGmailTransporter = () => {
  // Vérification des variables d'environnement
  if (!process.env.MY_EMAIL || !process.env.GOOGLE_PASSWORD) {
    throw new Error("Variables d'environnement Gmail manquantes");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
    secure: true,
    port: 465,
    // Options supplémentaires pour la production
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    rateDelta: 20000,
    rateLimit: 5,
  });
};

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    console.log("🚀 Début du traitement email...");

    const { Courriel, Téléphone, Prénom, Nom, Sujet, Message, originUrl } =
      (await request.json()) as ContactData & { originUrl: string };

    // Validation renforcée
    const errors = [];
    if (!Courriel || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Courriel)) {
      errors.push("Email invalide");
    }
    if (!Nom?.trim() || Nom.trim().length < 2) {
      errors.push("Nom requis");
    }
    if (!Prénom?.trim() || Prénom.trim().length < 2) {
      errors.push("Prénom requis");
    }
    if (!Sujet?.trim() || Sujet.trim().length < 3) {
      errors.push("Sujet requis");
    }
    if (!Message?.trim() || Message.trim().length < 3) {
      errors.push("Message trop court");
    }

    if (errors.length > 0) {
      console.log("❌ Validation échouée:", errors);
      return NextResponse.json(
        {
          success: false,
          error: "Données invalides",
          details: errors,
        },
        { status: 400 }
      );
    }

    // Vérification de la configuration
    console.log("🔧 Vérification configuration...");
    console.log("MY_EMAIL configuré:", !!process.env.MY_EMAIL);
    console.log("GOOGLE_PASSWORD configuré:", !!process.env.GOOGLE_PASSWORD);

    let transporter;
    try {
      transporter = createGmailTransporter();
    } catch (configError) {
      console.error("❌ Erreur configuration:", configError);
      return NextResponse.json(
        {
          success: false,
          error: "Erreur de configuration email",
          details:
            process.env.NODE_ENV === "development"
              ? configError instanceof Error
                ? configError.message
                : String(configError)
              : undefined,
        },
        { status: 500 }
      );
    }

    // Test de connexion avec timeout
    console.log("🔌 Test connexion Gmail...");
    try {
      await Promise.race([
        transporter.verify(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout connexion Gmail")), 10000)
        ),
      ]);
      console.log("✅ Connexion Gmail vérifiée");
    } catch (error) {
      console.error("❌ Erreur connexion Gmail:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Impossible de se connecter au service email",
          details:
            process.env.NODE_ENV === "development"
              ? error instanceof Error
                ? error.message
                : String(error)
              : undefined,
        },
        { status: 503 }
      );
    }

    // Rendu du template avec gestion d'erreur
    console.log("🎨 Rendu template...");
    let emailHtml;
    try {
      emailHtml = await render(
        <Email
          Courriel={Courriel}
          Message={Message}
          Nom={Nom}
          Prénom={Prénom}
          Sujet={Sujet}
          Téléphone={Téléphone}
          originUrl={originUrl}
        />
      );
    } catch (renderError) {
      console.error("❌ Erreur rendu template:", renderError);
      return NextResponse.json(
        {
          success: false,
          error: "Erreur lors de la génération de l'email",
          details:
            process.env.NODE_ENV === "development"
              ? renderError instanceof Error
                ? renderError.message
                : String(renderError)
              : undefined,
        },
        { status: 500 }
      );
    }

    // Variables d'email cohérentes
    const adminEmail = process.env.MY_EMAIL || "immosica@gmail.com";
    const fromName = "SICA Québec";

    // Email vers admin - VARIABLES COHÉRENTES
    const mailOptionsAdmin: Mail.Options = {
      from: `"${fromName}" <${adminEmail}>`,
      to: adminEmail, // Même variable partout
      subject: `🔔 Nouveau contact - ${Sujet} (${Prénom} ${Nom})`,
      html: emailHtml,
      replyTo: Courriel,
      headers: {
        "X-Priority": "3",
        "X-Mailer": "SICA-Quebec-Website",
        "X-Environment": process.env.NODE_ENV || "production",
      },
    };

    // Envoi email admin avec timeout
    console.log("📤 Envoi email admin...");
    let adminResult;
    try {
      adminResult = await Promise.race([
        transporter.sendMail(mailOptionsAdmin),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Timeout envoi admin")), 15000)
        ),
      ]);
      console.log(
        "✅ Email admin envoyé:",
        adminResult &&
          typeof adminResult === "object" &&
          "messageId" in adminResult
          ? adminResult.messageId
          : undefined
      );
    } catch (adminError) {
      console.error("❌ Erreur envoi admin:", adminError);
      return NextResponse.json(
        {
          success: false,
          error: "Erreur lors de l'envoi de l'email admin",
          details:
            process.env.NODE_ENV === "development"
              ? adminError instanceof Error
                ? adminError.message
                : String(adminError)
              : undefined,
        },
        { status: 500 }
      );
    }

    // Email de confirmation client
    console.log("🎨 Rendu confirmation...");
    let confirmationHtml;
    try {
      confirmationHtml = await render(
        <ConfirmationEmailGmail
          prénom={Prénom}
          nom={Nom}
          sujet={Sujet}
          originUrl={originUrl}
          adminEmail={adminEmail as string} // Variable cohérente et jamais undefined
        />
      );
    } catch (confirmRenderError) {
      console.warn("⚠️ Erreur rendu confirmation:", confirmRenderError);
      // On continue sans confirmation si le rendu échoue
    }

    // Envoi confirmation client (optionnel)
    let clientResult = null;
    if (confirmationHtml) {
      const mailOptionsClient: Mail.Options = {
        from: `"${fromName}" <${adminEmail}>`, // Variable cohérente
        to: Courriel,
        subject: `✅ Confirmation de réception - ${Sujet}`,
        html: confirmationHtml,
        headers: {
          "X-Priority": "3",
          "X-Mailer": "SICA-Quebec-Website",
          "X-Environment": process.env.NODE_ENV || "production",
        },
      };

      try {
        console.log("📤 Envoi confirmation client...");
        clientResult = await Promise.race([
          transporter.sendMail(mailOptionsClient),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout client")), 10000)
          ),
        ]);
        console.log(
          "✅ Confirmation client envoyée:",
          clientResult &&
            typeof clientResult === "object" &&
            "messageId" in clientResult
            ? clientResult.messageId
            : undefined
        );
      } catch (clientError) {
        console.warn("⚠️ Erreur confirmation client:", clientError);
        // On continue même si la confirmation échoue
      }
    }

    // Fermeture propre
    try {
      transporter.close();
    } catch (closeError) {
      console.warn("⚠️ Erreur fermeture connexion:", closeError);
    }

    const processingTime = Date.now() - startTime;
    console.log(`✅ Traitement terminé en ${processingTime}ms`);

    // Réponse de succès avec données cohérentes
    return NextResponse.json({
      success: true,
      message:
        "Merci de nous avoir contacté, nous avons bien reçu votre message.",
      details: {
        adminEmailId:
          adminResult &&
          typeof adminResult === "object" &&
          "messageId" in adminResult
            ? adminResult.messageId
            : undefined,
        clientEmailId:
          clientResult &&
          typeof clientResult === "object" &&
          "messageId" in clientResult
            ? clientResult.messageId
            : null,
        from: adminEmail,
        to: adminEmail,
        timestamp: new Date().toISOString(),
        service: "Gmail",
        environment: process.env.NODE_ENV || "production",
        processingTime: `${processingTime}ms`,
      },
    });
  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error("❌ Erreur globale dans POST /contact:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
        details:
          process.env.NODE_ENV === "development"
            ? {
                message:
                  error instanceof Error ? error.message : "Erreur inconnue",
                stack: error instanceof Error ? error.stack : undefined,
                processingTime: `${processingTime}ms`,
                environment: process.env.NODE_ENV || "production",
                configCheck: {
                  MY_EMAIL: !!process.env.MY_EMAIL,
                  GOOGLE_PASSWORD: !!process.env.GOOGLE_PASSWORD,
                },
              }
            : {
                timestamp: new Date().toISOString(),
                reference: `ERR-${Date.now().toString().slice(-6)}`,
              },
      },
      { status: 500 }
    );
  }
}

// Composant React Email pour confirmation (inchangé mais avec meilleure gestion d'erreur)
function ConfirmationEmailGmail({
  prénom,
  nom,
  sujet,
  originUrl,
  adminEmail,
}: {
  prénom: string;
  nom: string;
  sujet: string;
  originUrl: string;
  adminEmail: string;
}) {
  const currentDate = new Date().toLocaleDateString("fr-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmation - SICA Québec</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#f8fafc",
          color: "#334155",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            backgroundColor: "white",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* En-tête SICA avec gradient ROUGE #E52E2D */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #E52E2D 0%, #B91C1C 50%, #DC2626 100%)",
              padding: "40px 30px",
              textAlign: "center" as const,
              color: "white",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "32px",
                fontWeight: "700",
                letterSpacing: "-0.025em",
              }}
            >
              SICA Québec
            </h1>
            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "16px",
                opacity: 0.9,
                fontWeight: "300",
              }}
            >
              Service Informatique et Communication Avancée
            </p>
          </div>

          {/* Contenu principal */}
          <div style={{ padding: "40px 30px" }}>
            <div style={{ textAlign: "center" as const, marginBottom: "30px" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h2
                style={{
                  color: "#E52E2D",
                  margin: 0,
                  fontSize: "28px",
                  fontWeight: "600",
                }}
              >
                Message bien reçu !
              </h2>
            </div>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              Bonjour{" "}
              <strong style={{ color: "#E52E2D" }}>
                {prénom} {nom}
              </strong>
              ,
            </p>

            <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
              Nous avons bien reçu votre message concernant :<br />
              <em
                style={{
                  color: "#E52E2D",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                &quot;{sujet}&quot;
              </em>
            </p>

            {/* Section timeline avec couleur rouge */}
            <div
              style={{
                background: "linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)",
                border: "2px solid #E52E2D",
                borderRadius: "12px",
                padding: "24px",
                margin: "30px 0",
              }}
            >
              <h3
                style={{
                  color: "#E52E2D",
                  marginTop: 0,
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                ⏱️ Que se passe-t-il maintenant ?
              </h3>
              <div style={{ color: "#E52E2D" }}>
                <div
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>📧</span>
                  <span>Votre message a été transmis à notre équipe</span>
                </div>
                <div
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>⏰</span>
                  <span>
                    Nous vous répondrons dans les{" "}
                    <strong>24-48h ouvrables</strong>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "8px" }}>👨‍💻</span>
                  <span>Un expert vous contactera directement</span>
                </div>
              </div>
            </div>

            {/* Bouton avec couleur rouge */}
            <div style={{ textAlign: "center" as const, margin: "35px 0" }}>
              <a
                href={originUrl || "https://sica-quebec.ca"}
                style={{
                  background:
                    "linear-gradient(135deg, #E52E2D 0%, #B91C1C 100%)",
                  color: "white",
                  padding: "14px 28px",
                  textDecoration: "none",
                  borderRadius: "8px",
                  display: "inline-block",
                  fontWeight: "600",
                  fontSize: "16px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                🌐 Retour au site web
              </a>
            </div>

            {/* Signature */}
            <div
              style={{
                borderTop: "1px solid #e2e8f0",
                paddingTop: "20px",
                marginTop: "30px",
              }}
            >
              <p style={{ fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
                Cordialement,
                <br />
                <strong style={{ color: "#E52E2D" }}>
                  L&apos;équipe SICA Québec
                </strong>
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  margin: "8px 0 0 0",
                }}
              >
                {currentDate}
              </p>
            </div>
          </div>

          {/* Pied de page */}
          <div
            style={{
              backgroundColor: "#f1f5f9",
              padding: "24px 30px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#64748b",
                fontSize: "12px",
                textAlign: "center" as const,
                lineHeight: 1.5,
              }}
            >
              Cet email a été envoyé depuis le site web de{" "}
              <strong>SICA Québec</strong>
              <br />
              Service Informatique et Communication Avancée
              <br />
              📧 {adminEmail} | 🌐 sica-quebec.ca
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
