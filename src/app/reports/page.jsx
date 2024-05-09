"use client";

import Link from "next/link";
import Button from "@mui/material/Button";

export default function Reports() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Reports
      <Link href="/">
        <Button variant="contained">Home</Button>
      </Link>
    </main>
  );
}
