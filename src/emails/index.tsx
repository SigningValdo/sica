import { ContactData } from "@/components/Formulaire";

interface EmailProps extends Omit<ContactData, "politique"> {
  originUrl: string;
}

export default function Email({
  Courriel,
  Message,
  Nom,
  Prénom,
  Sujet,
  Téléphone,
  originUrl,
}: EmailProps) {
  const currentDate = new Date().toLocaleDateString("fr-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("fr-CA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nouveau contact - SICA Québec</title>
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
          {/* En-tête */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #06b6d4 100%)",
              padding: "30px",
              textAlign: "center" as const,
              color: "white",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "28px",
                fontWeight: "700",
              }}
            >
              🔔 Nouveau message de contact
            </h1>
            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "14px",
                opacity: 0.9,
              }}
            >
              Reçu le {currentDate} à {currentTime}
            </p>
          </div>

          {/* Contenu principal */}
          <div style={{ padding: "30px" }}>
            {/* Informations du contact */}
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h2
                style={{
                  color: "#1e40af",
                  margin: "0 0 16px 0",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                👤 Informations du contact
              </h2>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "8px 0",
                        color: "#64748b",
                        width: "120px",
                      }}
                    >
                      Nom complet :
                    </td>
                    <td
                      style={{
                        padding: "8px 0",
                        fontWeight: "600",
                        color: "#1e293b",
                      }}
                    >
                      {Prénom} {Nom}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px 0", color: "#64748b" }}>
                      Courriel :
                    </td>
                    <td style={{ padding: "8px 0" }}>
                      <a
                        href={`mailto:${Courriel}`}
                        style={{ color: "#3b82f6", textDecoration: "none" }}
                      >
                        {Courriel}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px 0", color: "#64748b" }}>
                      Téléphone :
                    </td>
                    <td style={{ padding: "8px 0" }}>
                      <a
                        href={`tel:${Téléphone}`}
                        style={{ color: "#3b82f6", textDecoration: "none" }}
                      >
                        {Téléphone}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Sujet */}
            <div
              style={{
                background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)",
                border: "2px solid #3b82f6",
                borderRadius: "8px",
                padding: "16px 20px",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  color: "#1e40af",
                  margin: "0 0 8px 0",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                📋 Sujet
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1e40af",
                }}
              >
                {Sujet}
              </p>
            </div>

            {/* Message */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <h3
                style={{
                  color: "#1e40af",
                  margin: "0 0 12px 0",
                  fontSize: "14px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                💬 Message
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#334155",
                  whiteSpace: "pre-wrap",
                }}
              >
                {Message}
              </p>
            </div>

            {/* Bouton répondre */}
            <div style={{ textAlign: "center" as const, margin: "30px 0" }}>
              <a
                href={`mailto:${Courriel}?subject=Re: ${Sujet}`}
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
                }}
              >
                ✉️ Répondre à {Prénom}
              </a>
            </div>
          </div>

          {/* Pied de page */}
          <div
            style={{
              backgroundColor: "#f1f5f9",
              padding: "20px 30px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#64748b",
                fontSize: "12px",
                textAlign: "center" as const,
              }}
            >
              Message envoyé depuis{" "}
              <a
                href={originUrl || "https://sica-quebec.ca"}
                style={{ color: "#3b82f6" }}
              >
                {originUrl || "sica-quebec.ca"}
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
