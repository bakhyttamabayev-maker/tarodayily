"use client";
import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function SubscribeForm() {
  const [status, setStatus] = useState("");
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify(Object.fromEntries(form.entries())) });
    if (res.ok) {
      setStatus("Спасибо! Подписка активирована.");
      trackEvent("subscribe_submit_success");
      e.currentTarget.reset();
    } else {
      setStatus("Ошибка отправки. Попробуйте позже.");
    }
  };
  return (
    <form onSubmit={onSubmit} className="card space-y-3">
      <label className="block">Email<input required name="email" type="email" className="mt-1 w-full rounded border p-2" /></label>
      <label className="block">Темы<select name="topic" className="mt-1 w-full rounded border p-2"><option value="daily">Расклад дня</option><option value="love">Любовь</option><option value="career">Карьера</option><option value="money">Финансы</option></select></label>
      <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <button className="btn" type="submit">Подписаться</button>
      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}
