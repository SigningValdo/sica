// // import { render } from "@react-email/components";
// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";
// import Email from "../../../emails";
// import { ContactData } from "@/components/Formulaire";
// // import { ContactData } from "@/components/HomeSection3";

// export async function POST(request: NextRequest) {
//   const { Nom, Prénom, Courriel, Téléphone, Sujet, Message, originUrl } =
//     (await request.json()) as ContactData & { originUrl: string };

//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.GOOGLE_PASSWORD,
//     },
//   });

//   const emailHtml = render(
//     <Email
//       email={email}
//       message={message}
//       name={name}
//       phone_number={phone_number}
//       originUrl={originUrl}
//     />
//   );

//   const mailOptions: Mail.Options = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MY_EMAIL,
//     cc: email,
//     subject: `Message de ${name} (${email})`,
//     html: emailHtml,
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           console.log("error: ", err.message);
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({
//       message: "Merci de nous avoir contacté, nous avons bien reçu votre mail.",
//     });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }
