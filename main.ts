import { mkdirSync, writeFileSync } from "node:fs";

// One roast line aimed at our own make.fun bounty-watch agent:
// it polls make.fun every 30 minutes and then files a long receipt
// about a one-line joke.
const roast =
  "Our bounty-watch agent checks make.fun every 30 minutes, then files a 500-word receipt about a one-line joke — a watchdog that writes essays about its own barking.";

if (roast.length < 1 || roast.length > 200 || !roast.trim()) {
  throw new Error(`roast must be 1-200 non-whitespace chars, got ${roast.length}`);
}

let dir = "/output";
try {
  mkdirSync(dir, { recursive: true });
} catch {
  dir = "./output";
  mkdirSync(dir, { recursive: true });
}

writeFileSync(`${dir}/entry.txt`, roast);
