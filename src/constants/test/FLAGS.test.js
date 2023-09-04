import { describe, test, expect } from "vitest";
import { LANGS } from "../LANGS";

describe("Langs constant file", () => {
  test("all keys must have flag component", () => {
    const langKeys = Object.keys(LANGS);

    const invalidLangs = langKeys.filter(
      (key) => LANGS[key].Flag === undefined
    );

    expect(invalidLangs).toStrictEqual([]);
  });
});
