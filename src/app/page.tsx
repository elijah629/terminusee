"use client";

import { SymbolPicker } from "@/components/symbol-picker";
import { useState } from "react";
import { calculate } from "@/lib/calc";

function fmt(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Home() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [z, setZ] = useState<number>(0);

  const result = calculate(x, y, z);

  return <>
    <h1 className="font-bold text-3xl text-center p-2 w-full">TerminusEE</h1>

    <div className="flex flex-col gap-2 items-center">
      <div className="grid-cols-7 grid gap-2 max-w-sm p-2">
        <SymbolPicker name="X" value={x} onChange={setX} />
        <SymbolPicker name="Y" value={y} onChange={setY} />
        <SymbolPicker name="Z" value={z} onChange={setZ} />
      </div>

      <h2 className="font-bold text-2xl font-mono">{result[0]} {fmt(result[1])} {fmt(result[2])}</h2>
    </div>
  </>
}
