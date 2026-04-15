export interface ContactRequest {
    name: string
    email: string
    message: string
    company?: string
    service?: string
    honeypot?: string
}

export interface ContactResponse {
    success: boolean
    message: string
}
