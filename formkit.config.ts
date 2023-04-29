// @unocss-include
import { generateClasses } from '@formkit/themes'
import { defaultConfig } from '@formkit/vue'

export default defaultConfig({
  config: {
    classes: generateClasses({
      search: {
        outer: 'lg:w-80 flex flow-xs',
        inner: 'flex items-center rounded border-primary bg-surface',
        input: 'border-none focus:border-none flex-grow bg-transparent',
        label: 'text-xs uppercase font-medium tracking-wide text-secondary',
      },
    }),
  },
})
