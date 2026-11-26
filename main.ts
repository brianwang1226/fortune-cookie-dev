// Fortune Cookie Wisdom for Developers — make.fun entry.
// Writes one original fortune-cookie line for a software developer
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic, no network, no randomness: the same line every run.
//
// The line: a tired senior engineer has reviewed code for twenty years
// and still reads every line. This one is for the person writing code
// at midnight — a reminder that the reader of that code is a future
// version of yourself, and that a "kind comment" is both a code comment
// and a small act of kindness toward that future reader.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Your future self is already debugging the code you are about to write, so leave them a kind comment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${join(outDir, "entry.txt")}`);
