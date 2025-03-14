import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...ComposedChart.config({
    extends: ['next'],
    rules: {
      'next/core-web-vitals': 'off',
      'next/typescript': 'off'
    },
  }),
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
