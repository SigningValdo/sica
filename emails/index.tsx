import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Hr,
  // Img,
  Button,
} from "@react-email/components";

interface EmailProps {
  Courriel: string;
  Téléphone?: string;
  Prénom: string;
  Nom: string;
  Sujet: string;
  Message: string;
  originUrl: string;
}

export default function Email({
  Courriel,
  Téléphone,
  Prénom,
  Nom,
  Sujet,
  Message,
  originUrl,
}: EmailProps) {
  const currentDate = new Date().toLocaleDateString("fr-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* En-tête avec gradient rouge SICA */}
          <Section style={header}>
            <Row>
              <Column>
                <Heading style={headerTitle}>SICA Québec</Heading>
                <Text style={headerSubtitle}>
                  Service Informatique et Communication Avancée
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Badge nouveau message */}
          <Section style={badgeSection}>
            <div style={badge}>
              <Text style={badgeText}>📧 NOUVEAU MESSAGE DE CONTACT</Text>
            </div>
          </Section>

          {/* Informations du contact */}
          <Section style={contentSection}>
            <Heading style={sectionTitle}>Informations du contact</Heading>

            <div style={contactCard}>
              <Row style={contactRow}>
                <Column style={labelColumn}>
                  <Text style={label}>👤 Nom complet :</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>
                    {Prénom} {Nom}
                  </Text>
                </Column>
              </Row>

              <Row style={contactRow}>
                <Column style={labelColumn}>
                  <Text style={label}>📧 Email :</Text>
                </Column>
                <Column style={valueColumn}>
                  <Link href={`mailto:${Courriel}`} style={emailLink}>
                    {Courriel}
                  </Link>
                </Column>
              </Row>

              {Téléphone && (
                <Row style={contactRow}>
                  <Column style={labelColumn}>
                    <Text style={label}>📞 Téléphone :</Text>
                  </Column>
                  <Column style={valueColumn}>
                    <Link href={`tel:${Téléphone}`} style={phoneLink}>
                      {Téléphone}
                    </Link>
                  </Column>
                </Row>
              )}

              <Row style={contactRow}>
                <Column style={labelColumn}>
                  <Text style={label}>📝 Sujet :</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={subjectText}>{Sujet}</Text>
                </Column>
              </Row>

              <Row style={contactRow}>
                <Column style={labelColumn}>
                  <Text style={label}>🌐 Origine :</Text>
                </Column>
                <Column style={valueColumn}>
                  <Link href={originUrl} style={originLink}>
                    {originUrl}
                  </Link>
                </Column>
              </Row>
            </div>
          </Section>

          {/* Message */}
          <Section style={messageSection}>
            <Heading style={sectionTitle}>Message</Heading>
            <div style={messageCard}>
              <Text style={messageText}>{Message}</Text>
            </div>
          </Section>

          {/* Actions rapides */}
          <Section style={actionsSection}>
            <Heading style={sectionTitle}>Actions rapides</Heading>
            <Row>
              <Column style={actionColumn}>
                <Button
                  style={primaryButton}
                  href={`mailto:${Courriel}?subject=Re: ${Sujet}`}
                >
                  📧 Répondre par email
                </Button>
              </Column>
              {Téléphone && (
                <Column style={actionColumn}>
                  <Button style={secondaryButton} href={`tel:${Téléphone}`}>
                    📞 Appeler
                  </Button>
                </Column>
              )}
            </Row>
          </Section>

          {/* Informations système */}
          <Section style={systemSection}>
            <Text style={systemTitle}>ℹ️ Informations système</Text>
            <div style={systemInfo}>
              <Text style={systemText}>
                <strong>Date de réception :</strong> {currentDate}
              </Text>
              <Text style={systemText}>
                <strong>{"IP d'origine :"}</strong> Détection automatique
              </Text>
              <Text style={systemText}>
                <strong>User Agent :</strong> Formulaire web SICA
              </Text>
              <Text style={systemText}>
                <strong>Priorité :</strong> Normale
              </Text>
            </div>
          </Section>

          <Hr style={separator} />

          {/* Pied de page */}
          <Section style={footer}>
            <Text style={footerText}>
              Cet email a été généré automatiquement depuis le formulaire de
              contact du site web{" "}
              <Link href={originUrl} style={footerLink}>
                SICA Québec
              </Link>
              .
            </Text>
            <Text style={footerText}>
              {"Pour répondre à ce message, utilisez directement l'adresse"}
              <Link href={`mailto:${Courriel}`} style={footerLink}>
                {Courriel}
              </Link>
              .
            </Text>
            <Text style={footerSignature}>
              <strong>SICA Québec</strong> - Service Informatique et
              Communication Avancée
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles avec la couleur primaire #E52E2D
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
  borderRadius: "12px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
};

const header = {
  background: "linear-gradient(135deg, #E52E2D 0%, #B91C1C 50%, #DC2626 100%)",
  padding: "40px 30px",
  textAlign: "center" as const,
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "700",
  margin: "0",
  letterSpacing: "-0.025em",
};

const headerSubtitle = {
  color: "#fecaca",
  fontSize: "16px",
  margin: "8px 0 0 0",
  fontWeight: "400",
};

const badgeSection = {
  padding: "20px 30px 0px",
  textAlign: "center" as const,
};

const badge = {
  backgroundColor: "#FEF2F2",
  border: "2px solid #E52E2D",
  borderRadius: "24px",
  padding: "12px 24px",
  display: "inline-block",
  margin: "0 auto",
};

const badgeText = {
  color: "#E52E2D",
  fontSize: "14px",
  fontWeight: "700",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const contentSection = {
  padding: "30px 30px 20px",
};

const sectionTitle = {
  color: "#1f2937",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 20px 0",
  borderBottom: "2px solid #E52E2D",
  paddingBottom: "8px",
};

const contactCard = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px",
};

const contactRow = {
  marginBottom: "12px",
};

const labelColumn = {
  width: "140px",
  verticalAlign: "top" as const,
};

const valueColumn = {
  verticalAlign: "top" as const,
};

const label = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const value = {
  color: "#1f2937",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
};

const emailLink = {
  color: "#E52E2D",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
};

const phoneLink = {
  color: "#E52E2D",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
};

const subjectText = {
  color: "#E52E2D",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const originLink = {
  color: "#6b7280",
  textDecoration: "none",
  fontSize: "13px",
};

const messageSection = {
  padding: "20px 30px",
};

const messageCard = {
  backgroundColor: "#ffffff",
  border: "2px solid #E52E2D",
  borderRadius: "8px",
  padding: "20px",
  borderLeft: "4px solid #E52E2D",
};

const messageText = {
  color: "#1f2937",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const actionsSection = {
  padding: "20px 30px",
  backgroundColor: "#f9fafb",
};

const actionColumn = {
  textAlign: "center" as const,
  padding: "0 10px",
};

const primaryButton = {
  backgroundColor: "#E52E2D",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 20px",
  border: "none",
  cursor: "pointer",
  margin: "4px",
};

const secondaryButton = {
  backgroundColor: "transparent",
  borderRadius: "6px",
  color: "#E52E2D",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 20px",
  border: "2px solid #E52E2D",
  cursor: "pointer",
  margin: "4px",
};

const systemSection = {
  padding: "20px 30px",
  backgroundColor: "#f3f4f6",
};

const systemTitle = {
  color: "#6b7280",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 12px 0",
};

const systemInfo = {
  backgroundColor: "#ffffff",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
  padding: "16px",
};

const systemText = {
  color: "#4b5563",
  fontSize: "13px",
  margin: "4px 0",
  fontFamily: "monospace",
};

const separator = {
  borderColor: "#e5e7eb",
  margin: "20px 30px",
};

const footer = {
  padding: "20px 30px 30px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "8px 0",
};

const footerLink = {
  color: "#E52E2D",
  textDecoration: "none",
};

const footerSignature = {
  color: "#E52E2D",
  fontSize: "14px",
  fontWeight: "600",
  margin: "16px 0 0 0",
};
