import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import Email from "../../../emails";
import { ContactData } from "@/components/Formulaire";

// Configuration Gmail
const createGmailTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail", // Service prédéfini Gmail
    auth: {
      user: process.env.MY_EMAIL, // Votre adresse Gmail
      pass: process.env.GOOGLE_PASSWORD, // Mot de passe d'application (pas votre mot de passe normal)
    },
    // Options supplémentaires pour Gmail
    secure: true,
    port: 465,
  });
};

export async function POST(request: NextRequest) {
  try {
    const { Courriel, Téléphone, Prénom, Nom, Sujet, Message, originUrl } =
      (await request.json()) as ContactData & { originUrl: string };

    // Validation des champs obligatoires
    if (!Courriel || !Nom || !Prénom || !Sujet || !Message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    const transporter = createGmailTransporter();

    // Vérification de la connexion Gmail
    try {
      await transporter.verify();
      console.log("✅ Connexion Gmail vérifiée");
    } catch (error) {
      console.error("❌ Erreur connexion Gmail:", error);
      throw new Error("Impossible de se connecter à Gmail");
    }

    // Rendu du template email principal
    const emailHtml = await render(
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

    // Email vers Jacob (admin) depuis votre Gmail
    const mailOptionsAdmin: Mail.Options = {
      from: `"SICA Québec" <${process.env.MY_EMAIL}>`, // Votre Gmail
      to: process.env.MY_EMAIL,
      subject: `🔔 Nouveau contact - ${Sujet} (${Prénom} ${Nom})`,
      html: emailHtml,
      replyTo: Courriel, // Permet de répondre directement au client
      // Ajout d'informations dans les headers
      headers: {
        "X-Priority": "3",
        "X-Mailer": "SICA-Quebec-Website",
      },
    };

    // Envoi email admin
    console.log("📤 Envoi email admin...");
    const adminResult = await transporter.sendMail(mailOptionsAdmin);
    console.log("✅ Email admin envoyé:", adminResult.messageId);

    // Email de confirmation pour le client
    const confirmationHtml = await render(
      <ConfirmationEmailGmail
        prénom={Prénom}
        nom={Nom}
        sujet={Sujet}
        originUrl={originUrl}
        adminEmail={process.env.MY_EMAIL || "immosica@gmail.com"}
      />
    );

    const mailOptionsClient: Mail.Options = {
      from: `"SICA Québec" <${process.env.MY_EMAIL || "immosica@gmail.com"}>`,
      to: Courriel,
      subject: `✅ Confirmation de réception - ${Sujet}`,
      html: confirmationHtml,
      headers: {
        "X-Priority": "3",
        "X-Mailer": "SICA-Quebec-Website",
      },
    };

    // Envoi email confirmation (optionnel)
    let clientResult = null;
    try {
      console.log("📤 Envoi confirmation client...");
      clientResult = await transporter.sendMail(mailOptionsClient);
      console.log("✅ Confirmation client envoyée:", clientResult.messageId);
    } catch (error) {
      console.error("⚠️ Erreur confirmation client:", error);
      // On continue même si la confirmation échoue
    }

    // Fermeture de la connexion
    transporter.close();

    return NextResponse.json({
      success: true,
      message:
        "Merci de nous avoir contacté, nous avons bien reçu votre message.",
      details: {
        adminEmailId: adminResult.messageId,
        clientEmailId: clientResult?.messageId,
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        timestamp: new Date().toISOString(),
        service: "Gmail",
      },
    });
  } catch (error) {
    console.error("❌ Erreur dans POST /contact:", error);

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
              }
            : undefined,
      },
      { status: 500 }
    );
  }
}

// Composant React Email pour confirmation avec Gmail
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
          {/* En-tête SICA avec gradient */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)",
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
            {/* Message principal */}
            <div
              style={{
                textAlign: "center" as const,
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "16px",
                }}
              >
                ✅
              </div>
              <h2
                style={{
                  color: "#1e40af",
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
              <strong style={{ color: "#1e40af" }}>
                {prénom} {nom}
              </strong>
              ,
            </p>

            <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
              Nous avons bien reçu votre message concernant :
              <br />
              <em
                style={{
                  color: "#1e40af",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                &quot;{sujet}&quot;
              </em>
            </p>

            {/* Informations de suivi */}
            <div
              style={{
                background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)",
                border: "2px solid #3b82f6",
                borderRadius: "12px",
                padding: "24px",
                margin: "30px 0",
              }}
            >
              <h3
                style={{
                  color: "#1e40af",
                  marginTop: 0,
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                ⏱️ Que se passe-t-il maintenant ?
              </h3>
              <div style={{ color: "#1e40af" }}>
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

            {/* Informations de contact */}
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "8px",
                padding: "20px",
                margin: "25px 0",
                border: "1px solid #e2e8f0",
              }}
            >
              <h4
                style={{
                  margin: "0 0 12px 0",
                  color: "#475569",
                  fontSize: "16px",
                }}
              >
                📞 Besoin d&apos;une réponse urgente ?
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#64748b",
                }}
              >
                Vous pouvez nous joindre directement à{" "}
                <strong>{adminEmail}</strong>
              </p>
            </div>

            {/* Bouton retour site */}
            <div style={{ textAlign: "center" as const, margin: "35px 0" }}>
              <a
                href={originUrl || "https://sica-quebec.ca"}
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
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
                <strong style={{ color: "#1e40af" }}>
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
