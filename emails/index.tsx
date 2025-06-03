import { ContactData } from "@/components/Formulaire";
import {
  Html,
  Head,
  Container,
  Img,
  Tailwind,
  Preview,
} from "@react-email/components";
import * as React from "react";

export default function Email({
  Message,
  Nom,
  Prénom,
  Sujet,
  Téléphone,
  originUrl,
}: ContactData & { originUrl: string }) {
  return (
    <Tailwind>
      <Preview>
        {Message?.length > 90 ? `${Message.slice(0, 90)}...` : Message}
      </Preview>
      <Html className="h-full w-full">
        <Head>
          <title>Contact depuis le site vitrine</title>
        </Head>
        <body className="h-full w-full text-lg">
          <Container className="h-full  flex items-center justify-center">
            <Container className="p-2 bg-[#EDE2D8] w-[500px] rounded-lg">
              <Img
                src={`${originUrl}/logo.png`}
                alt="logo"
                className="m-auto"
                draggable={false}
                width={200}
                height={242}
              />
              <p className="text-lg">
                <span className="font-bold text-xl">Nom:</span> {Nom}
              </p>
              <p className="text-lg">
                <span className="font-bold text-xl">Prénom:</span> {Prénom}
              </p>
              <p className="text-lg">
                <span className="font-bold text-xl">Téléphone:</span>{" "}
                {Téléphone}
              </p>
              <p className="text-lg">
                <span className="font-bold text-xl">Sujet:</span> {Sujet}
              </p>
              <p>{Message}</p>
            </Container>
          </Container>
        </body>
      </Html>
    </Tailwind>
  );
}
