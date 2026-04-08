import { readBody, createError, defineEventHandler } from 'h3'
import { contactSchema } from '../utils/validateContact'
import { sendContactEmail } from '../services/mailService'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        // Validación schema
        const parsed = contactSchema.safeParse(body)

        if (!parsed.success) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Datos inválidos'
            })
        }

        const data = parsed.data

        // Honeypot (anti-bot)
        if (data.honeypot) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Spam detectado'
            })
        }

        // Envío de email
        await sendContactEmail({
            name: data.name,
            email: data.email,
            message: data.message,
            company: data.company,
            service: data.service
        })

        return {
            success: true,
            message: 'Mensaje enviado correctamente'
        }

    } catch (error) {
        console.error('CONTACT ERROR:', error)

        throw createError({
            statusCode: 500,
            statusMessage: 'Error al procesar la solicitud'
        })
    }
})
