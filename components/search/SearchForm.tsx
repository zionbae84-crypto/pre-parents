"use client";

import { useState, type FormEvent } from "react";
import { regions, getSigunguList } from "@/lib/data/regions";
import type { UserStageInput } from "@/lib/stage";

export interface SearchFormValues {
  sido: string;
  sigungu: string;
  stageInput: UserStageInput;
  motherAge: number;
  householdSize: number;
  monthlyIncome: number;
  birthOrder: number;
  isMultipleBirth: boolean;
}

type PregnancyStatus = "preparing" | "pregnant" | "born";

const STATUS_LABEL: Record<PregnancyStatus, string> = {
  preparing: "임신 준비중",
  pregnant: "임신중",
  born: "출산 완료",
};

const labelClass = "mb-2 block text-[15px] font-bold text-brown";
const fieldClass =
  "w-full rounded-button border-2 border-brown/20 bg-white px-3 py-2 shadow-sm outline-none transition-shadow duration-150 focus:border-coral focus:shadow-md";
const selectedButtonClass =
  "whitespace-nowrap rounded-button border-2 border-coral bg-coral px-2 py-2 text-center text-[15px] font-bold text-white shadow-[0_3px_10px_rgba(244,112,63,0.35)] transition-shadow duration-150";
const unselectedButtonClass =
  "whitespace-nowrap rounded-button border-2 border-brown/20 bg-white px-2 py-2 text-center text-[15px] text-brown shadow-sm transition-shadow duration-150 hover:shadow-md";

function formatIncome(value: number | ""): string {
  return value === "" ? "" : value.toLocaleString("ko-KR");
}

function parseIncome(input: string): number | "" {
  const digitsOnly = input.replace(/[^0-9]/g, "");
  return digitsOnly === "" ? "" : Number(digitsOnly);
}

export function SearchForm({
  onSubmit,
  initialValues,
}: {
  onSubmit: (values: SearchFormValues) => void;
  initialValues?: SearchFormValues;
}) {
  const [sido, setSido] = useState(initialValues?.sido ?? regions[0].sido);
  const [sigungu, setSigungu] = useState(initialValues?.sigungu ?? "");
  const [status, setStatus] = useState<PregnancyStatus>(
    initialValues?.stageInput.status ?? "preparing"
  );
  const [dueDate, setDueDate] = useState(
    initialValues?.stageInput.status === "pregnant" ? initialValues.stageInput.dueDate : ""
  );
  const [childAgeMonths, setChildAgeMonths] = useState<number | "">(
    initialValues?.stageInput.status === "born" ? initialValues.stageInput.childAgeMonths : 0
  );
  const [motherAge, setMotherAge] = useState<number | "">(initialValues?.motherAge ?? 30);
  const [householdSize, setHouseholdSize] = useState<number | "">(
    initialValues?.householdSize ?? 3
  );
  const [monthlyIncome, setMonthlyIncome] = useState<number | "">(
    initialValues?.monthlyIncome ?? 4000000
  );
  const [birthOrder, setBirthOrder] = useState<number | "">(initialValues?.birthOrder ?? 1);
  const [isMultipleBirth, setIsMultipleBirth] = useState(initialValues?.isMultipleBirth ?? false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const stageInput: UserStageInput =
      status === "preparing"
        ? { status: "preparing" }
        : status === "pregnant"
          ? { status: "pregnant", dueDate }
          : { status: "born", childAgeMonths: childAgeMonths === "" ? 0 : childAgeMonths };

    onSubmit({
      sido,
      sigungu,
      stageInput,
      motherAge: motherAge === "" ? 0 : motherAge,
      householdSize: householdSize === "" ? 1 : householdSize,
      monthlyIncome: monthlyIncome === "" ? 0 : monthlyIncome,
      birthOrder: birthOrder === "" ? 1 : birthOrder,
      isMultipleBirth,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-card border-2 border-brown/10 bg-white p-6"
    >
      <div>
        <label className={labelClass}>거주지</label>
        <div className="flex gap-3">
          <select
            value={sido}
            onChange={(e) => {
              setSido(e.target.value);
              setSigungu("");
            }}
            className={fieldClass}
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
            className={fieldClass}
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
        <label className={labelClass}>현재 상태</label>
        <div role="radiogroup" aria-label="현재 상태" className="grid grid-cols-3 gap-2">
          {(Object.keys(STATUS_LABEL) as PregnancyStatus[]).map((s) => {
            const selected = status === s;
            return (
              <button
                key={s}
                type="button"
                role="radio"
                aria-pressed={selected}
                aria-checked={selected}
                onClick={() => setStatus(s)}
                className={selected ? selectedButtonClass : unselectedButtonClass}
              >
                {STATUS_LABEL[s]}
              </button>
            );
          })}
        </div>
        {status === "pregnant" && (
          <div className="mt-3">
            <label className="mb-2 block text-[13px] text-brown/60">출산예정일</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              aria-label="출산예정일"
              className={fieldClass}
            />
          </div>
        )}
        {status === "born" && (
          <div className="mt-3">
            <label className="mb-2 block text-[13px] text-brown/60">현재 개월수</label>
            <input
              type="number"
              min={0}
              value={childAgeMonths}
              onChange={(e) =>
                setChildAgeMonths(e.target.value === "" ? "" : Number(e.target.value))
              }
              required
              aria-label="자녀 현재 개월수"
              className={fieldClass}
            />
          </div>
        )}
      </div>

      <div>
        <label className={labelClass}>이 아이는 몇째인가요?</label>
        <input
          type="number"
          min={1}
          value={birthOrder}
          onChange={(e) => setBirthOrder(e.target.value === "" ? "" : Number(e.target.value))}
          className={fieldClass}
        />
      </div>

      <div>
        <label className={labelClass}>쌍둥이(다태아)인가요?</label>
        <div role="radiogroup" aria-label="쌍둥이(다태아) 여부" className="flex gap-2">
          <button
            type="button"
            role="radio"
            aria-checked={!isMultipleBirth}
            onClick={() => setIsMultipleBirth(false)}
            className={`flex-1 ${!isMultipleBirth ? selectedButtonClass : unselectedButtonClass}`}
          >
            단태아
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={isMultipleBirth}
            onClick={() => setIsMultipleBirth(true)}
            className={`flex-1 ${isMultipleBirth ? selectedButtonClass : unselectedButtonClass}`}
          >
            쌍둥이 이상
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>엄마 나이</label>
          <input
            type="number"
            min={0}
            value={motherAge}
            onChange={(e) => setMotherAge(e.target.value === "" ? "" : Number(e.target.value))}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass}>가구원수</label>
          <input
            type="number"
            min={1}
            value={householdSize}
            onChange={(e) =>
              setHouseholdSize(e.target.value === "" ? "" : Number(e.target.value))
            }
            className={fieldClass}
          />
        </div>
      </div>
      <p className="-mt-3 text-[13px] text-brown/60">
        가구원수는 소득 기준(중위소득 %) 계산에 사용돼요
      </p>

      <div>
        <label className={labelClass}>가구월소득(원)</label>
        <input
          type="text"
          inputMode="numeric"
          value={formatIncome(monthlyIncome)}
          onChange={(e) => setMonthlyIncome(parseIncome(e.target.value))}
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="rounded-button bg-coral px-6 py-3 font-bold text-white shadow-[0_3px_10px_rgba(244,112,63,0.35)] transition-shadow duration-150 hover:bg-coral-dark hover:shadow-lg"
      >
        내 지원금 찾기
      </button>
    </form>
  );
}
