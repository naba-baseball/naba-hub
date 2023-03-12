import { useStorage } from '@vueuse/core'
export const isTableCompact = () => useStorage('isTableCompact', false)
export const isTableFullWidth = () => useStorage('isTableFullWidth', false)
