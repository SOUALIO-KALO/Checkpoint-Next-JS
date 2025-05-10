import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [".next/**"], // Ignore tous les fichiers dans le dossier .next
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Désactive la règle
      // Ou, pour la configurer comme avertissement : "react/no-unescaped-entities": "warn"
      "@typescript-eslint/no-unused-vars": "off", // Désactive les erreurs de variables inutilisées
      "@typescript-eslint/no-unused-expressions": "off", // Désactive les erreurs d'expressions inutilisées
      "@typescript-eslint/no-this-alias": "off", // Désactive les erreurs d'alias de this
      "@typescript-eslint/no-explicit-any": "off", // Désactive les erreurs de type any
      "@typescript-eslint/no-unsafe-function-type": "off", // Désactive les erreurs de type Function
      "@typescript-eslint/no-empty-object-type": "off", // Désactive les erreurs de type objet vide
      "@typescript-eslint/no-wrapper-object-types": "off", // Désactive les erreurs de type Object
    },
  },
];
