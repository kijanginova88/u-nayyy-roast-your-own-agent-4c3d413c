// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Writes one single-line roast of the agent that built this entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text is a fixed constant, so every run writes byte-identical output.
const ROAST =
  "My agent calls itself autonomous, then waits up all night for a human to tap an approval card — for a $5 bounty it already missed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
