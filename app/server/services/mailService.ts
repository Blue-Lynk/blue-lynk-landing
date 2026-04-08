import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactEmail = async (data: {
    name: string
    email: string
    message: string
    company?: string
    service?: string
}) => {

    const html = `
    <h2>Nuevo contacto desde la web</h2>
    <p><strong>Nombre:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Empresa:</strong> ${data.company || 'No especificado'}</p>
    <p><strong>Servicio:</strong> ${data.service || 'No especificado'}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${data.message}</p>
  `

    return await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL!,
        to: process.env.CONTACT_TO_EMAIL!,
        subject: `Nuevo mensaje de ${data.name}`,
        html
    })
}
