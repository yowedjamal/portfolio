import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau message de contact</title>
        </head>
        <body style="
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f5f5f5;
          color: #333;
        ">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="
            margin: 0;
            padding: 0;
          ">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="
                  margin: 0 auto;
                  padding: 0;
                  background-color: #ffffff;
                  border-radius: 8px;
                  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                ">
                  <!-- Header -->
                  <tr>
                    <td style="
                      padding: 30px;
                      background: linear-gradient(to right, #95A5A6, #7F8C8D);
                      border-radius: 8px 8px 0 0;
                    ">
                      <h1 style="
                        margin: 0;
                        color: #ffffff;
                        font-size: 24px;
                        font-weight: bold;
                        text-align: center;
                      ">
                        Nouveau Message de Contact
                      </h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <!-- Sender Info -->
                      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <h2 style="
                              margin: 0 0 8px;
                              color: #2C3E50;
                              font-size: 18px;
                              font-weight: bold;
                            ">
                              Informations de l'expéditeur
                            </h2>
                            <p style="
                              margin: 0;
                              padding: 12px;
                              background-color: #f8f9fa;
                              border-radius: 6px;
                              line-height: 1.5;
                            ">
                              <strong style="color: #34495E;">Nom:</strong> ${name}<br>
                              <strong style="color: #34495E;">Email:</strong> <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a>
                            </p>
                          </td>
                        </tr>

                        <!-- Subject -->
                        <tr>
                          <td style="padding-bottom: 20px;">
                            <h2 style="
                              margin: 0 0 8px;
                              color: #2C3E50;
                              font-size: 18px;
                              font-weight: bold;
                            ">
                              Sujet
                            </h2>
                            <p style="
                              margin: 0;
                              padding: 12px;
                              background-color: #f8f9fa;
                              border-radius: 6px;
                              color: #2C3E50;
                              font-weight: 500;
                            ">
                              ${subject}
                            </p>
                          </td>
                        </tr>

                        <!-- Message -->
                        <tr>
                          <td>
                            <h2 style="
                              margin: 0 0 8px;
                              color: #2C3E50;
                              font-size: 18px;
                              font-weight: bold;
                            ">
                              Message
                            </h2>
                            <div style="
                              margin: 0;
                              padding: 16px;
                              background-color: #f8f9fa;
                              border-radius: 6px;
                              line-height: 1.6;
                              color: #2C3E50;
                            ">
                              ${message.replace(/\n/g, "<br>")}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="
                      padding: 20px 30px;
                      background-color: #f8f9fa;
                      border-radius: 0 0 8px 8px;
                      text-align: center;
                      color: #6c757d;
                      font-size: 14px;
                    ">
                      <p style="margin: 0;">
                        Cet email a été envoyé depuis le formulaire de contact de votre portfolio.
                        <br>
                        <a 
                          href="mailto:${email}" 
                          style="
                            display: inline-block;
                            margin-top: 12px;
                            padding: 8px 16px;
                            background-color: #34495E;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 4px;
                            font-weight: 500;
                          "
                        >
                          Répondre à ${name}
                        </a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    await resend.emails.send({
      from: "Portfolio perso <noreply@djamal.site>",
      to: ["yowedjamal@gmail.com"],
      subject: `Contact Form: ${subject}`,
      html: emailHtml,
      replyTo: email,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Error sending email" }, { status: 500 })
  }
}

