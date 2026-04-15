import type { ContactRequest, ContactResponse } from '../../types/contact'
import { ref } from 'vue'

export const useContactForm = () => {
    const loading = ref(false)
    const success = ref(false)
    const error = ref<string | null>(null)

    const submit = async (payload: ContactRequest) => {
        loading.value = true
        success.value = false
        error.value = null

        try {
            const response = await $fetch<ContactResponse>('/api/contact', {
                method: 'POST',
                body: payload
            })

            success.value = response.success

            return response

        } catch (err) {
            error.value = 'No se pudo enviar el mensaje'
            throw err
        } finally {
            loading.value = false
        }
    }

    return {
        submit,
        loading,
        success,
        error
    }
}
