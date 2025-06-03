import {
  Body,
  Container,
  Column,
  Heading,
  Html,
  Img,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface NotificationEmailProps {
  nom?: string;
  phone?: number;
  email?: string;
  message?: string;
}
export const NotificationEmail = ({
  nom,
  phone,
  email,
  message,
}: NotificationEmailProps) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Html>
        <Body className="bg-white font-sans">
          <Container>
            <Section className="border border-gray-200 rounded-lg">
              {/* <Row>
                <Img
                  width={200}
                  src={`https://soudureca.com/logo.svg`}
                  className="w-full h-[200px]"
                />
              </Row> */}

              <Row className="px-6 pb-0">
                <Column>
                  <Heading className="text-2xl font-bold text-center"></Heading>
                  <Heading className="text-xl font-bold text-center">
                    Une nouvelle personne vient de vous contacter
                  </Heading>

                  <Text className="text-lg">
                    <b>Nom: </b>
                    {nom}
                  </Text>
                  <Text className="mt-1 text-lg">
                    <b>Téléphone: </b>
                    {phone}
                  </Text>
                  <Text className="mt-1 text-lg">
                    <b>Adresse: </b>
                    {email}
                  </Text>
                  <Text className="mt-1 text-lg">
                    <b>Message: </b>
                    {message}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
export default NotificationEmail;
