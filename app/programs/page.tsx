"use client";

import { useMemo, useState } from "react";
import { programs } from "@/lib/data/programs";
import { stageSchema, agencyTypeSchema, categorySchema, type Stage } from "@/lib/schemas";
import { ProgramGroupedGrid } from "@/components/programs/ProgramGroupedGrid";

const ALL = "전체";

export default function ProgramsPage() {
  const [stageFilter, setStageFilter] = useState<string>(ALL);
  const [agencyFilter, setAgencyFilter] = useState<string>(ALL);
  const [categoryFilter, setCategoryFilter] = useState<string>(ALL);

  const filtered = useMemo(() => {
    return programs.filter((p) => {
      if (stageFilter !== ALL && !p.stages.includes(stageFilter as Stage)) return false;
      if (agencyFilter !== ALL && p.agencyType !== agencyFilter) return false;
      if (categoryFilter !== ALL && p.category !== categoryFilter) return false;
      return true;
    });
  }, [stageFilter, agencyFilter, categoryFilter]);

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="font-display text-[32px] text-coral">전체 지원사업</h1>

      <div className="mt-6 flex flex-wrap gap-4">
        <select
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
          className="rounded-button border-2 border-brown/20 px-3 py-2"
        >
          <option value={ALL}>단계 전체</option>
          {stageSchema.options.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          value={agencyFilter}
          onChange={(e) => setAgencyFilter(e.target.value)}
          className="rounded-button border-2 border-brown/20 px-3 py-2"
        >
          <option value={ALL}>기관 전체</option>
          {agencyTypeSchema.options.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="rounded-button border-2 border-brown/20 px-3 py-2"
        >
          <option value={ALL}>카테고리 전체</option>
          {categorySchema.options.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <p className="text-brown/60">
            선택한 조건에 맞는 지원사업이 아직 없어요. 다른 조건으로 다시 확인해 보세요.
          </p>
        ) : (
          <ProgramGroupedGrid programs={filtered} />
        )}
      </div>
    </main>
  );
}
