import nodemailer from "nodemailer";




export async function POST(request: Request) {
  const body = await request.json();
  const { email, nome } = body;


  // Configuração do Nodemailer
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }

  });

  const mailOptions = {
    from: 'noreply.acrdchave@gmail.com',
    to: `${email}`,
    subject: 'Confirmação de Inscrição e Informações de Pagamento',
    text: `
Olá ${nome},

Agradecemos pela sua inscrição.

Informação pagamento:
(Na descrição deve identificar o evento e a pessoa ou pessoas em causa)

•IBAN: PT50 0045 3160 4013 9761 8667 0


•Valor: 10,00€ (dez euros)
Deve enviar o comprovativo de pagamento para acrdchave1997@gmail.com identificando o evento e a ou as pessoas em causa.

O percurso será revelado em breve e enviado por email e recomendamos que verifique regularmente o nosso site e redes sociais para atualizações.
•Data do evento: 5 de Julho de 2025
Por favor, não responda a este e-mail.
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email enviado com sucesso!" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Erro ao enviar email" }), { status: 500 });
  }
}