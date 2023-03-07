import { presetAnu, presetIconExtraProperties } from "anu-vue";
import { presetThemeDefault } from "@anu-vue/preset-theme-default";
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  toEscapedSelector as e,
  createValueHandler,
} from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: "RubikVariable, ui-sans-serif",
    },
    spacing: {
      xs: "0.75rem",
      sm: "1rem",
      DEFAULT: "1.5rem",
      lg: "2rem",
      xl: "3rem",
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: presetIconExtraProperties,
    }),
    presetTypography(),
    // anu-vue preset
    presetAnu(),

    // default theme preset
    presetThemeDefault(),
  ],
  rules: [
    //flow
    ["pt-flow", { "padding-top": "var(--flow-space)" }],
    ["pr-flow", { "padding-right": "var(--flow-space)" }],
    ["pb-flow", { "padding-bottom": "var(--flow-space)" }],
    ["pl-flow", { "padding-left": "var(--flow-space)" }],
    ["py-flow", { "padding-top": "var(--flow-space)", "padding-bottom": "var(--flow-space)" }],
    ["px-flow", { "padding-left": "var(--flow-space)", "padding-right": "var(--flow-space)" }],
    ["p-flow", { padding: "var(--flow-space)" }],
    ["mt-flow", { "margin-top": "var(--flow-space)" }],
    ["mr-flow", { "margin-right": "var(--flow-space)" }],
    ["mb-flow", { "margin-bottom": "var(--flow-space)" }],
    ["ml-flow", { "margin-left": "var(--flow-space)" }],
    ["my-flow", { "margin-top": "var(--flow-space)", "margin-bottom": "var(--flow-space)" }],
    ["mx-flow", { "margin-left": "var(--flow-space)", "margin-right": "var(--flow-space)" }],
    ["m-flow", { margin: "var(--flow-space)" }],
    ["gap-flow", { gap: "var(--flow-space)" }],
    [
      /^flow-([\w\d]+)$/,
      ([, d], { theme }) => {
        if (d === "base") d = "DEFAULT";
        const themeValue = theme.spacing[d];
        if (themeValue) return { "--flow-space": `${themeValue}` };
        if (isNaN(d)) retrun;
        return { "--flow-space": `${d / 4}rem` };
      },
    ],
    [
      /^flow-layout$/,
      (match, { rawSelector, currentSelector, variantHandlers }) => {
        const selector = e(rawSelector);
        return `${selector} > * + * {
          margin-block-start: var(--flow-space);
        }`;
      },
    ],
    [
      /^flow-layout-recursive$/,
      (match, { rawSelector, currentSelector, variantHandlers }) => {
        const selector = e(rawSelector);
        return `${selector} * + * {
          margin-block-start: var(--flow-space);
        }`;
      },
    ],
  ],
  include: [/.*\/anu-vue\.js(.*)?$/, /\.(vue)($|\?)/],
});
