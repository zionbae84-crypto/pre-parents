"use client";

import { useEffect, useState } from "react";

interface VisitorStats {
  today: number;
  total: number;
  configured: boolean;
}

export function VisitorCounter() {
  const [stats, setStats] = useState<VisitorStats | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/visitors")
      .then((res) => (res.ok ? (res.json() as Promise<VisitorStats>) : null))
      .then((data) => {
        if (!cancelled && data) setStats(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!stats || !stats.configured) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-0.5 rounded-lg border border-brown/15 bg-white/90 px-3 py-2 text-[11px] leading-tight text-brown/60 shadow-sm backdrop-blur">
      <span>오늘 방문자 {stats.today.toLocaleString("ko-KR")}명</span>
      <span>누적 방문자 {stats.total.toLocaleString("ko-KR")}명</span>
    </div>
  );
}
