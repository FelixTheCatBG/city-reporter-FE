"use client";
import Link from "next/link";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      <Link href="/reports">
        <Button variant="contained">Reports</Button>
      </Link>
    </main>
  );
}
