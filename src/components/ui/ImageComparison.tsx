"use client";

import Image from "next/image";
import { asset } from "@/lib/utils";
import { useId, useState } from "react";

export default function ImageComparison() {
  const [position, setPosition] = useState(50);
  const id = useId();
  return (
    <figure className="comparison">
      <div className="comparison-images">
        <Image src={asset("/media/projects/blackboard/after.webp")} alt="Chalk strokes extracted with colour and edge masks" fill sizes="(max-width: 767px) 90vw, 45vw" className="object-cover" />
        <div className="comparison-before" style={{ clipPath: "inset(0 " + (100 - position) + "% 0 0)" }}>
          <Image src={asset("/media/projects/blackboard/before.webp")} alt="Original blackboard photo with glare and chalk dust" fill sizes="(max-width: 767px) 90vw, 45vw" className="object-cover" />
        </div>
        <span className="comparison-label left-3">BEFORE</span><span className="comparison-label right-3">AFTER</span>
        <div className="comparison-divider" style={{ left: position + "%" }} aria-hidden="true"><span>↔</span></div>
      </div>
      <div className="comparison-controls">
        <label htmlFor={id}>Compare before and after</label><span className="mono">{position}%</span>
        <input id={id} type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-valuetext={"Original photo visible: " + position + "%"} />
      </div>
    </figure>
  );
}
