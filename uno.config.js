import { createRegExp } from "magic-regexp";

import { defineConfig, presetUno, presetTypography } from "unocss";

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ["RubikVariable"],
    },
  },
  rules: [
    ["flow", { "--flow-space": "2rem" }],
    ["flow-sm", { "--flow-space": "1rem" }],
    ["ml", { "margin-left": "var(--flow-space)" }],
    ["mt", { "margin-top": "var(--flow-space)" }],
    ["mr", { "margin-right": "var(--flow-space)" }],
    ["mb", { "margin-bottom": "var(--flow-space)" }],
    ["pl", { "padding-left": "var(--flow-space)" }],
    ["pt", { "padding-top": "var(--flow-space)" }],
    ["pr", { "padding-right": "var(--flow-space)" }],
    ["pb", { "padding-bottom": "var(--flow-space)" }],
    ["gap-flow", { gap: "var(--flow-space)" }],
  ],
  shortcuts: {
    m: "mt mr mb ml",
    mx: "ml mr",
    my: "mb mt",
    p: "pt pr pb pl",
    px: "pl pr",
    py: "pb pt",
    "base-grid": "grid gap-flow grid-cols-1 lg:grid-cols-3",
    "card-bordered": "border rounded",
    card: "flow-sm p flex flex-col",
    "card-title": "text-xl font-bold",
    btn: "cursor-pointer inline-flex flex-shrink-0 flex-wrap text-sm text-decoration-none uppercase p flow-sm",
    "btn-primary": "bg-black text-white",
  },
  presets: [presetUno(), presetTypography()],
});
