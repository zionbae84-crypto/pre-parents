"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { programs } from "@/lib/data/programs";
import { stageSchema, agencyTypeSchema, categorySchema, type Stage } from "@/lib/schemas";
import { AgencyBadge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

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

      <div className="mt-8 flex flex-col gap-4">
        {filtered.map((program) => (
          <Card key={program.id}>
            <div className="mb-2 flex items-center gap-2">
              <AgencyBadge agencyType={program.agencyType} agencyName={program.agencyName} />
              <span className="text-[13px] text-brown/60">{program.category}</span>
            </div>
            <h3 className="font-display text-[19px] text-brown">{program.title}</h3>
            <p className="mt-1 text-brown/80">{program.summary}</p>
            <Link href={`/programs/${program.id}`} className="mt-3 inline-block font-bold text-coral">
              자세히 보기 →
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
