import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, toEscapedSelector as e, presetTypography, presetUno } from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: 'RubikVariable',
    },
  },
  rules: [
    ['flow', { '--flow-space': '2rem' }],
    ['flow-sm', { '--flow-space': '1rem' }],
    ['flow-xs', { '--flow-space': '0.8125rem' }],
    ['ml', { 'margin-left': 'var(--flow-space)' }],
    ['mt', { 'margin-top': 'var(--flow-space)' }],
    ['mr', { 'margin-right': 'var(--flow-space)' }],
    ['mb', { 'margin-bottom': 'var(--flow-space)' }],
    ['pl', { 'padding-left': 'var(--flow-space)' }],
    ['pt', { 'padding-top': 'var(--flow-space)' }],
    ['pr', { 'padding-right': 'var(--flow-space)' }],
    ['pb', { 'padding-bottom': 'var(--flow-space)' }],
    ['gap', { gap: 'var(--flow-space)' }],
    [
      /^flow-layout$/,
      (match, { rawSelector }) => {
        return `${e(rawSelector)} > * + * {
          margin-block-start: var(--flow-space);
        }`
      },
    ],
    [
      /^flow-layout-recursive$/,
      (match, { rawSelector }) => {
        return `${e(rawSelector)} * + * {
          margin-block-start: var(--flow-space);
        }`
      },
    ],
    [
      /^space-x$/,
      (match, { rawSelector }) => {
        return `${e(rawSelector)} > * ~ *{
        margin-left: var(--flow-space)
      }`
      },
    ],
  ],
  shortcuts: {
    'm': 'mt mr mb ml',
    'mx': 'ml mr',
    'my': 'mb mt',
    'p': 'pt pr pb pl',
    'px': 'pl pr',
    'py': 'pb pt',
    'text-secondary': 'text-stone-600',
    'text-primary': 'text-stone-900',
    'base-grid': 'grid gap grid-cols-1 lg:grid-cols-3',
    'card-bordered': 'border rounded border-gray-900',
    'card': 'flow-sm bg-white p flow-layout flex flex-col [&>p]:text-secondary',
    'card-title': 'text-xl font-bold',
    'btn': 'cursor-pointer inline-flex flex-shrink-0 flex-wrap text-sm uppercase tracking-wider px-5 py-2 rounded',
    'btn-primary': 'bg-black text-white',
    'input-bordered': 'border rounded',
    'input': '',
    'label': '',
    'bg-surface': 'bg-white',
    'bg-primary': 'bg-stone-100',
    'border-primary': 'border border-stone-900',
  },
  transformers: [transformerVariantGroup()],
  presets: [presetUno(), presetTypography(), presetForms(), presetIcons()],
})
