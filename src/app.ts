import { mkdtemp } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";

async function main() {
    console.log("TMPDIR or TMP: ", process.env.TMPDIR ?? process.env.TMP);
    const tmpDir = tmpdir();
    console.log("tmpdir(): ", tmpDir);
    const directory = await mkdtemp(join(tmpDir, "test-"));
    console.log("directory: ", directory);
}

main();
