import {
  Html,
  Head,
  Container,
  Img,
  Tailwind,
  Preview,
} from "@react-email/components";
import * as React from "react";
import { ContactData } from "@/components/HomeSection3";

export default function Email({
  message,
  name,
  phone_number,
  originUrl,
}: ContactData & { originUrl: string }) {
  return (
    <Tailwind>
      <Preview>
        {message?.length > 90 ? `${message.slice(0, 90)}...` : message}
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
                <span className="font-bold text-xl">Nom:</span> {name}
              </p>
              <p className="text-lg">
                <span className="font-bold text-xl">Téléphone:</span>{" "}
                {phone_number}
              </p>
              <p>{message}</p>
            </Container>
          </Container>
        </body>
      </Html>
    </Tailwind>
  );
}
