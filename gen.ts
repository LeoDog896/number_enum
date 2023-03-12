import converter from "https://esm.sh/number-to-words@1.2.4"

const numbers = Array.from({ length: 1000001 }, (_, i) => i).map(x => converter.toWords(x).toUpperCase().replaceAll(/[ -]/g, "_").replaceAll(",", ""));

await Deno.writeTextFile("index.ts", `export enum Number {
    ${numbers.join(",\n    ")}
}`);