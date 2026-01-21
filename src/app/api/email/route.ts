import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, apellidos, correo, asunto, mensaje } = body;

    // Validación básica
    if (!nombre || !correo || !mensaje) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const nombreCompleto = apellidos ? `${nombre} ${apellidos}` : nombre;
    const asuntoEmail = asunto || "Nuevo mensaje desde la web del PCTVC";

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["pctvillaclara@pctvc.cu"], // correo de la empresa
      // to: ["victormanuelmartinezcampo178@gmail.com"], // correo de la empresa
      subject: asuntoEmail,
      replyTo: correo,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombreCompleto}</p>
        <p><strong>Email:</strong> ${correo}</p>
        ${asunto ? `<p><strong>Asunto:</strong> ${asunto}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br>")}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error enviando email:", error);
    return new Response(JSON.stringify({ error: "Error enviando email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
