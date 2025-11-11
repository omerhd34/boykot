import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = dirname(__dirname);
const seedFilePath = join(projectRoot, "prisma", "seed.js");
const seedsDir = join(projectRoot, "prisma", "seeds");

const indentUnit = "  ";

function toIdentifier(slug) {
  return slug
    .split("-")
    .map((segment, index) =>
      index === 0 ? segment : segment.charAt(0).toUpperCase() + segment.slice(1)
    )
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");
}

function escapeBackticks(value) {
  return value.replace(/`/g, "\\`");
}

function escapeQuotes(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatString(value) {
  if (value.includes("\n")) {
    return "`" + escapeBackticks(value) + "`";
  }
  return `"${escapeQuotes(value)}"`;
}

function formatValue(value, level) {
  if (typeof value === "string") {
    return formatString(value);
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (Array.isArray(value)) {
    return formatArray(value, level);
  }
  if (value && typeof value === "object") {
    return formatObject(value, level);
  }
  if (value === null) {
    return "null";
  }
  return "undefined";
}

function formatObject(obj, level) {
  const indent = indentUnit.repeat(level);
  const innerIndent = indentUnit.repeat(level + 1);
  const entries = Object.entries(obj).map(([key, val]) => {
    return `${innerIndent}${key}: ${formatValue(val, level + 1)}`;
  });
  return `{\n${entries.join(",\n")}\n${indent}}`;
}

function formatArray(arr, level) {
  if (arr.length === 0) {
    return "[]";
  }
  const indent = indentUnit.repeat(level);
  const innerIndent = indentUnit.repeat(level + 1);
  const items = arr.map(
    (item) => `${innerIndent}${formatValue(item, level + 1)}`
  );
  return `[\n${items.join(",\n")}\n${indent}]`;
}

function extractCategorySeed(fileContent) {
  const target = "const categorySeed = [";
  const startIndex = fileContent.indexOf(target);

  if (startIndex === -1) {
    throw new Error("categorySeed tanımı bulunamadı.");
  }

  const bracketStart = fileContent.indexOf("[", startIndex);
  let depth = 0;
  let endIndex = -1;

  for (let i = bracketStart; i < fileContent.length; i += 1) {
    const char = fileContent[i];
    if (char === "[") {
      depth += 1;
    } else if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        endIndex = i;
        break;
      }
    } else if (char === "`") {
      i += 1;
      while (i < fileContent.length) {
        if (fileContent[i] === "`" && fileContent[i - 1] !== "\\") {
          break;
        }
        i += 1;
      }
    }
  }

  if (endIndex === -1) {
    throw new Error("categorySeed kapanış braketine ulaşılamadı.");
  }

  const arrayString = fileContent.slice(bracketStart, endIndex + 1);
  return eval(arrayString);
}

function generateCategoryFile(category) {
  const identifier = `${toIdentifier(category.slug)}Category`;
  const categoryObjectString = formatObject(category, 0);

  return `const ${identifier} = ${categoryObjectString};

export default ${identifier};
`;
}

function generateIndexFile(categories) {
  const importLines = categories.map(
    (category) =>
      `import ${toIdentifier(category.slug)}Category from "./seed-${
        category.slug
      }.js";`
  );

  const arrayLines = categories.map(
    (category) => `  ${toIdentifier(category.slug)}Category`
  );

  return `${importLines.join("\n")}

const categorySeed = [
${arrayLines.join(",\n")}
];

export default categorySeed;
`;
}

function main() {
  const seedContent = readFileSync(seedFilePath, "utf8");
  const categorySeed = extractCategorySeed(seedContent).sort(
    (a, b) => a.order - b.order
  );

  if (!existsSync(seedsDir)) {
    mkdirSync(seedsDir, { recursive: true });
  }

  for (const category of categorySeed) {
    const filePath = join(seedsDir, `seed-${category.slug}.js`);
    const fileContent = generateCategoryFile(category);
    writeFileSync(filePath, fileContent, "utf8");
  }

  const indexContent = generateIndexFile(categorySeed);
  writeFileSync(join(seedsDir, "index.js"), indexContent, "utf8");

  console.log(
    `Toplam ${categorySeed.length} kategori için seed dosyaları '${seedsDir}' dizinine yazıldı.`
  );
}

main();
