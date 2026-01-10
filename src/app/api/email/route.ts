import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST() {
  console.log(process.env.API_KEY_RESEND);
  const resend = new Resend("re_NgzRh7fN_2F2odyfpc85MJH5xbhRXAKGZ");
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["pctvillaclara@pctvc.cu"], // correo de la empresa
      subject: "Nuevo mensaje desde la web del PCTVC",
      replyTo: "victormanuelmartinezcampo178@gmail.com", // CLAVE
      html: `
    <p><strong>Nombre:</strong> Victor Manuel Martinez Campo</p>
    <p><strong>Email:</strong> victormanuelmartinezcampo178@gmail.com</p>
    <p><strong>Mensaje:</strong></p>
    <p>Quiero información sobre sus servicios</p>
  `,
    });

    console.log("Email enviado:", data);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error enviando email", { status: 500 });
  }
}
