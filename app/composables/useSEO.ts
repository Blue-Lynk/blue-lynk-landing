import { computed, unref } from 'vue'

export const useSEO = (
  title: any,
  description: any,
  image: any = '/og-default.jpg'
) => {
  const route = useRoute()
  const baseUrl = 'https://bluelynk.dev'

  const fullUrl = computed(() => `${baseUrl}${route.path}`)

  useHead({
    title: () => `${unref(title)} | Blue Lynk`,
    meta: [
      {
        name: 'description',
        content: () => unref(description)
      },

      // OG
      {
        property: 'og:title',
        content: () => unref(title)
      },
      {
        property: 'og:description',
        content: () => unref(description)
      },
      {
        property: 'og:image',
        content: () => unref(image)
      },
      {
        property: 'og:url',
        content: () => fullUrl.value
      }
    ]
  })
}