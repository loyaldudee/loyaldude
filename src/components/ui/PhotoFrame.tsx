import Image from "next/image";
import { User } from "lucide-react";
import { site } from "@/data/site";

type PhotoFrameProps = {
  variant: "arch" | "polaroid";
  priority?: boolean;
};

/** Photo (or empty placeholder while `site.photoSrc` is null). */
function Photo({ priority }: { priority?: boolean }) {
  if (site.photoSrc) {
    return (
      <Image
        src={site.photoSrc}
        alt={`${site.name} — portrait`}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 420px, 80vw"
        className="object-cover object-[50%_35%]"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label="Photo placeholder"
      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-paper to-line text-muted"
    >
      <User size={72} strokeWidth={1} aria-hidden="true" />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
        Your photo here
      </span>
    </div>
  );
}

export default function PhotoFrame({ variant, priority }: PhotoFrameProps) {
  if (variant === "arch") {
    return (
      <div className="relative mx-auto w-full max-w-[420px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-b-2xl rounded-t-[999px] bg-sage/40"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-b-2xl rounded-t-[999px] border border-line bg-paper">
          <Photo priority={priority} />
        </div>
      </div>
    );
  }

  return (
    <figure className="relative mx-auto w-full max-w-[380px] -rotate-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-[#f3d5cb]"
      />
      <div className="relative rounded-sm border border-line bg-[#fbf9f4] p-4 pb-12 shadow-sm">
        <span
          aria-hidden="true"
          className="absolute -top-3 left-6 z-10 h-6 w-20 -rotate-6 bg-gold/35"
        />
        <span
          aria-hidden="true"
          className="absolute -top-3 right-6 z-10 h-6 w-20 rotate-6 bg-gold/35"
        />
        <div className="relative aspect-square overflow-hidden bg-ink/90">
          <Photo />
        </div>
        <figcaption className="absolute inset-x-0 bottom-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {site.name.replace(" ", "_")} — {site.photoCaption}
        </figcaption>
      </div>
    </figure>
  );
}
