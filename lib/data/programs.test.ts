import { describe, it, expect } from "vitest";
import { programs } from "./programs";
import { supportProgramSchema } from "../schemas";

describe("programs data", () => {
  it("every program matches supportProgramSchema", () => {
    for (const program of programs) {
      const result = supportProgramSchema.safeParse(program);
      if (!result.success) {
        throw new Error(`${program.id}: ${JSON.stringify(result.error.issues)}`);
      }
    }
  });

  it("has no duplicate ids", () => {
    const ids = programs.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("includes at least one 정부 program per relevant stage", () => {
    const govStages = new Set(
      programs.filter((p) => p.agencyType === "정부").flatMap((p) => p.stages)
    );
    expect(govStages.has("임신준비")).toBe(true);
    expect(govStages.has("임신중")).toBe(true);
    expect(govStages.has("출생출산")).toBe(true);
  });
});
