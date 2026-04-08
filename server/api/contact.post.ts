import { readBody, getRequestIP, createError } from 'h3'
import { contactSchema } from '../utils/validateContact'
import { sendContactEmail } from '../services/mailService'
import { isSpam } from '../utils/spamProtection'
import { checkRateLimit } from '../utils/rateLimit'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)

        const parsed = contactSchema.safeParse(body)

        if (!parsed.success) {
            throw createError({ statusCode: 400, statusMessage: 'Datos inválidos' })
        }

        const data = parsed.data

        // IP
        const ip = getRequestIP(event) || 'unknown'

        // Rate limit
        const allowed = checkRateLimit(ip)
        if (!allowed) {
            throw createError({
                statusCode: 429,
                statusMessage: 'Demasiadas solicitudes'
            })
        }

        // Spam protection
        if (isSpam(data)) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Spam detectado'
            })
        }

        await sendContactEmail(data)

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
