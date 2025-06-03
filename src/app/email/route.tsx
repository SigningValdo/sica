import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import Email from "../../../emails";
import { ContactData } from "@/components/Formulaire";

export async function POST(request: NextRequest) {
  const { Courriel, Téléphone, Prénom, Nom, Sujet, Message, originUrl } =
    (await request.json()) as ContactData & { originUrl: string };

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
  });

  const emailHtml = render(
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

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    cc: Courriel,
    subject: `Message de ${Nom} (${Courriel})`,
    html: await emailHtml,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          console.log("error: ", err.message);
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      message: "Merci de nous avoir contacté, nous avons bien reçu votre mail.",
    });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
