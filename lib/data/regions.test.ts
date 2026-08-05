import { describe, it, expect } from "vitest";
import { regions, getSidoList, getSigunguList } from "./regions";
import { regionEntrySchema } from "../schemas";

describe("regions data", () => {
  it("each entry matches regionEntrySchema", () => {
    for (const entry of regions) {
      expect(regionEntrySchema.safeParse(entry).success).toBe(true);
    }
  });

  it("includes 서울특별시 with 25 자치구", () => {
    const seoul = regions.find((r) => r.sido === "서울특별시");
    expect(seoul).toBeDefined();
    expect(seoul?.sigungus).toHaveLength(25);
  });
});

describe("getSidoList", () => {
  it("returns all sido names", () => {
    expect(getSidoList()).toContain("서울특별시");
  });
});

describe("getSigunguList", () => {
  it("returns sigungus for a known sido", () => {
    expect(getSigunguList("서울특별시")).toContain("강남구");
  });

  it("returns empty array for unknown sido", () => {
    expect(getSigunguList("없는도")).toEqual([]);
  });
});
