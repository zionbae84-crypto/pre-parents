import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const COOKIE_NAME = "pp_visited";
const TOTAL_KEY = "visitors:total";
const KST_OFFSET_MS = 9 * 60 * 60 * 1000;

function todayKey(): string {
  const kstDate = new Date(Date.now() + KST_OFFSET_MS).toISOString().slice(0, 10);
  return `visitors:daily:${kstDate}`;
}

function secondsUntilKstMidnight(): number {
  const kstNow = new Date(Date.now() + KST_OFFSET_MS);
  const kstMidnight = Date.UTC(
    kstNow.getUTCFullYear(),
    kstNow.getUTCMonth(),
    kstNow.getUTCDate() + 1,
  );
  return Math.floor((kstMidnight - kstNow.getTime()) / 1000);
}

function hasRedisEnv(): boolean {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return Boolean(url && token);
}

export async function GET(request: NextRequest) {
  if (!hasRedisEnv()) {
    return NextResponse.json({ today: 0, total: 0, configured: false });
  }

  try {
    const redis = Redis.fromEnv();
    const dailyKey = todayKey();
    const alreadyVisited = request.cookies.get(COOKIE_NAME)?.value === "1";

    const [today, total] = alreadyVisited
      ? await Promise.all([
          redis.get<number>(dailyKey).then((v) => v ?? 0),
          redis.get<number>(TOTAL_KEY).then((v) => v ?? 0),
        ])
      : await Promise.all([redis.incr(dailyKey), redis.incr(TOTAL_KEY)]);

    if (!alreadyVisited) {
      await redis.expire(dailyKey, 60 * 60 * 24 * 2);
    }

    const response = NextResponse.json({ today, total, configured: true });
    if (!alreadyVisited) {
      response.cookies.set(COOKIE_NAME, "1", {
        maxAge: secondsUntilKstMidnight(),
        httpOnly: true,
        sameSite: "lax",
        path: "/",
      });
    }
    return response;
  } catch {
    return NextResponse.json({ today: 0, total: 0, configured: false });
  }
}
