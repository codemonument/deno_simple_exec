import { assert, describe, it } from "std_testing";
import { simpleExec } from "@/mod.ts";

describe(`mod.ts`, () => {
  it(`should export correct objects and types`, () => {
    assert(simpleExec);
  });

  it(`should run ls`, async () => {
    const res = await simpleExec("ls", ["-la"]);
    console.log(res.stdout);

    if (res.stderr) {
      console.error(res.stderr);
    }
  });
});
