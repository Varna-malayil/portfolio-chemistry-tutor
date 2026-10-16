"use client";

/** Renders the current year in the browser so it never goes stale in a prebuilt page. */
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
