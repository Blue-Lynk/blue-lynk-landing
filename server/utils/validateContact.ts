import { z } from 'zod'

export const contactSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    message: z.string().min(10).max(1000),
    company: z.string().optional(),
    service: z.string().optional(),
    honeypot: z.string().optional()
})
