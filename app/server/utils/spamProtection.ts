export const isSpam = (data: {
    honeypot?: string
    message: string
}) => {

    // Honeypot
    if (data.honeypot) return true

    // Mensaje sospechosamente corto
    if (data.message.length < 10) return true

    // Links excesivos (heurística básica)
    const links = (data.message.match(/http/g) || []).length
    if (links > 3) return true

    return false
}
