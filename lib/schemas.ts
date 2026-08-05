import { z } from "zod";

export const agencyTypeSchema = z.enum(["정부", "광역", "기초"]);
export type AgencyType = z.infer<typeof agencyTypeSchema>;

export const stageSchema = z.enum([
  "임신준비",
  "임신중",
  "출생출산",
  "영유아기",
  "유아",
]);
export type Stage = z.infer<typeof stageSchema>;

export const categorySchema = z.enum([
  "현금지원",
  "바우처",
  "의료비",
  "돌봄서비스",
  "주거",
  "세제혜택",
  "기타",
]);
export type Category = z.infer<typeof categorySchema>;

export const eligibilitySchema = z
  .object({
    parentAgeMin: z.number().int().nonnegative().optional(),
    parentAgeMax: z.number().int().nonnegative().optional(),
    childAgeMonthsMin: z.number().int().nonnegative().optional(),
    childAgeMonthsMax: z.number().int().nonnegative().optional(),
    incomePercentMax: z.number().positive().optional(),
    note: z.string().optional(),
  })
  .strict();
export type Eligibility = z.infer<typeof eligibilitySchema>;

export const regionValueSchema = z.union([
  z.literal("nationwide"),
  z
    .object({
      sido: z.string().min(1),
      sigungu: z.string().min(1).optional(),
    })
    .strict(),
]);
export type ProgramRegion = z.infer<typeof regionValueSchema>;

export const supportProgramSchema = z
  .object({
    id: z.string().min(1),
    title: z.string().min(1),
    agencyType: agencyTypeSchema,
    agencyName: z.string().min(1),
    region: regionValueSchema,
    stages: z.array(stageSchema).min(1),
    category: categorySchema,
    summary: z.string().min(1),
    benefit: z.string().min(1),
    eligibility: eligibilitySchema,
    applicationMethod: z.string().min(1),
    applicationPeriod: z.string().min(1),
    requiredDocuments: z.array(z.string()).optional(),
    officialLink: z.string().url(),
    lastVerifiedAt: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "YYYY-MM-DD 형식이어야 합니다"),
  })
  .strict();
export type SupportProgram = z.infer<typeof supportProgramSchema>;

export const regionEntrySchema = z
  .object({
    sido: z.string().min(1),
    sigungus: z.array(z.string().min(1)),
  })
  .strict();
export type RegionEntry = z.infer<typeof regionEntrySchema>;
