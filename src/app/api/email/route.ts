import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend("re_hptYWLzk_AFyhtu7mVbdig1CaJqdH9yE4");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // válido sin dominio propio
      to: ["victormanuelmartinezcampo178@gmail.com"],
      subject: "Hello world",
      html: "<p>Email enviado correctamente</p>",
    });

    console.log("Email enviado:", data);

    return new Response("ok", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error enviando email", { status: 500 });
  }
}
