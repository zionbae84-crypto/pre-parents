import type { Stage } from "./schemas";

export type UserStageInput =
  | { status: "preparing" }
  | { status: "pregnant"; dueDate: string; today?: string }
  | { status: "born"; birthDate: string; today?: string };

function todayString(): string {
  return new Date().toISOString().slice(0, 10);
}

export function calculateAgeInMonths(
  birthDate: string,
  today: string = todayString()
): number {
  const birth = new Date(birthDate);
  const now = new Date(today);
  let months =
    (now.getFullYear() - birth.getFullYear()) * 12 +
    (now.getMonth() - birth.getMonth());
  if (now.getDate() < birth.getDate()) {
    months -= 1;
  }
  return Math.max(0, months);
}

export function calculatePregnancyWeek(
  dueDate: string,
  today: string = todayString()
): number {
  const due = new Date(dueDate);
  const now = new Date(today);
  const diffDays = Math.round(
    (due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );
  const daysSinceConception = 280 - diffDays;
  return Math.max(0, Math.min(42, Math.floor(daysSinceConception / 7)));
}

export function determineStages(input: UserStageInput): Stage[] {
  switch (input.status) {
    case "preparing":
      return ["임신준비"];
    case "pregnant":
      return ["임신중"];
    case "born": {
      const months = calculateAgeInMonths(input.birthDate, input.today);
      if (months <= 0) return ["출생출산", "영유아기"];
      if (months < 12) return ["영유아기"];
      return ["유아"];
    }
  }
}
