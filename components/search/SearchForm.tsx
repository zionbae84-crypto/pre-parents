"use client";

import { useState, type FormEvent } from "react";
import { regions, getSigunguList } from "@/lib/data/regions";
import type { UserStageInput } from "@/lib/stage";

export interface SearchFormValues {
  sido: string;
  sigungu: string;
  stageInput: UserStageInput;
  parentAge: number;
  householdSize: number;
  monthlyIncome: number;
}

type PregnancyStatus = "preparing" | "pregnant" | "born";

const STATUS_LABEL: Record<PregnancyStatus, string> = {
  preparing: "임신 준비중",
  pregnant: "임신중",
  born: "출산 완료",
};

export function SearchForm({
  onSubmit,
}: {
  onSubmit: (values: SearchFormValues) => void;
}) {
  const [sido, setSido] = useState(regions[0].sido);
  const [sigungu, setSigungu] = useState("");
  const [status, setStatus] = useState<PregnancyStatus>("preparing");
  const [dueDate, setDueDate] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [parentAge, setParentAge] = useState(30);
  const [householdSize, setHouseholdSize] = useState(3);
  const [monthlyIncome, setMonthlyIncome] = useState(4000000);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const stageInput: UserStageInput =
      status === "preparing"
        ? { status: "preparing" }
        : status === "pregnant"
          ? { status: "pregnant", dueDate }
          : { status: "born", birthDate };

    onSubmit({ sido, sigungu, stageInput, parentAge, householdSize, monthlyIncome });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-card border-2 border-brown/10 bg-white p-6"
    >
      <div>
        <label className="mb-2 block font-bold text-brown">거주지</label>
        <div className="flex gap-3">
          <select
            value={sido}
            onChange={(e) => {
              setSido(e.target.value);
              setSigungu("");
            }}
            className="rounded-button border-2 border-brown/20 px-3 py-2"
          >
            {regions.map((r) => (
              <option key={r.sido} value={r.sido}>
                {r.sido}
              </option>
            ))}
          </select>
          <select
            value={sigungu}
            onChange={(e) => setSigungu(e.target.value)}
            className="rounded-button border-2 border-brown/20 px-3 py-2"
          >
            <option value="">전체</option>
            {getSigunguList(sido).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block font-bold text-brown">현재 상태</label>
        <div className="flex gap-4">
          {(Object.keys(STATUS_LABEL) as PregnancyStatus[]).map((s) => (
            <label key={s} className="flex items-center gap-2 text-brown">
              <input
                type="radio"
                name="status"
                checked={status === s}
                onChange={() => setStatus(s)}
              />
              {STATUS_LABEL[s]}
            </label>
          ))}
        </div>
        {status === "pregnant" && (
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            aria-label="출산예정일"
            className="mt-3 rounded-button border-2 border-brown/20 px-3 py-2"
          />
        )}
        {status === "born" && (
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
            aria-label="자녀 생년월일"
            className="mt-3 rounded-button border-2 border-brown/20 px-3 py-2"
          />
        )}
      </div>

      <div>
        <label className="mb-2 block font-bold text-brown">부모 나이</label>
        <input
          type="number"
          min={0}
          value={parentAge}
          onChange={(e) => setParentAge(Number(e.target.value))}
          className="w-32 rounded-button border-2 border-brown/20 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-2 block font-bold text-brown">가구원수</label>
        <input
          type="number"
          min={1}
          value={householdSize}
          onChange={(e) => setHouseholdSize(Number(e.target.value))}
          className="w-32 rounded-button border-2 border-brown/20 px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-2 block font-bold text-brown">가구월소득(원)</label>
        <input
          type="number"
          min={0}
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
          className="w-48 rounded-button border-2 border-brown/20 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="rounded-button bg-coral px-6 py-3 font-bold text-white hover:bg-coral-dark"
      >
        내 지원금 찾기
      </button>
    </form>
  );
}
