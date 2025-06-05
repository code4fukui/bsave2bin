import { BSAVE } from "https://code4fukui.github.io/BSAVE/BSAVE.js";

const fnbsave = Deno.args[0];
const fnbin = Deno.args[1];
if (!fnbsave || !fnbin) {
  console.log("bsave2bin [bsave file] [bin file]");
  Deno.exit(1);
}

const bin0 = await Deno.readFile(fnbsave);
const bsave = BSAVE.decode(bin0);
//if (bsave.start != 0x8000) throw new Error("not ROM address");
const bin = bsave.data;
await Deno.writeFile(fnbin, bin);
