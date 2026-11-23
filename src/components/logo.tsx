import { Link } from "react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
        <span className="flex h-3.5 items-center gap-[2px]" aria-hidden="true">
          {[0.5, 1, 0.7, 0.9, 0.45].map((h, i) => (
            <span
              key={i}
              className="w-[2px] rounded-full bg-primary-foreground"
              style={{ height: `${h * 100}%` }}
            />
          ))}
        </span>
      </span>
      <span className="text-[15px]">Video Speed Reader</span>
    </Link>
  );
}
