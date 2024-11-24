import Image from "next/image";
import { Symbols } from "@/lib/calc";
import { Button } from "@/components/ui/button";

export function SymbolPicker({ name, value, onChange }: { name: string, value: number, onChange: (n: number) => void }) {
  return <>
    <h2 className="text-2xl font-bold">{name}</h2>
    {Symbols.map(n =>
      <Button onClick={() => onChange(n)} key={n} size="icon" disabled={n === value}>
        <Image width={60} height={40} alt={"Symbol " + n} src={"/" + n + ".svg"} />
      </Button>
    )}
  </>
}
