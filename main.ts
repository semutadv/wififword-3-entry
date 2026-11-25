// One Word for Your Wi-Fi — batch3 entry (wififword)
// One word. It is the word the Wi-Fi says back, usually three
// seconds before the important part.
// Writes the word to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const THE_WORD = "Buffering";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), THE_WORD, "utf8");
}

main();
