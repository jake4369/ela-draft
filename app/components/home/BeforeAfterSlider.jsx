"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { IconArrowsHorizontal } from "@tabler/icons-react";

const imageSizes = `
  (max-width: 639px) calc(100vw - 40px),
  (max-width: 1023px) calc(100vw - 64px),
  820px
`;

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  // Convert pointer position into a percentage.
  function updatePosition(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    const percentage = ((event.clientX - rect.left) / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, Math.round(percentage))));
  }

  function handlePointerDown(event) {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isDragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);

    updatePosition(event);
  }

  function handlePointerMove(event) {
    if (!isDragging.current) return;

    updatePosition(event);
  }

  function handlePointerUp(event) {
    if (!isDragging.current) return;

    updatePosition(event);
    isDragging.current = false;
  }

  function handlePointerCancel() {
    isDragging.current = false;
  }

  return (
    <div>
      <div
        className="
    relative isolate aspect-[4/3] lg:aspect-[3/2] w-full
    cursor-ew-resize overflow-hidden
    rounded-2xl bg-slate-200
    select-none touch-pan-y
    focus-within:outline-4
    focus-within:outline-offset-4
    focus-within:outline-[#086bd4]
        "
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {/* BEFORE IMAGE */}
        <Image
          src="/assets/images/slider/before.webp"
          alt="Exterior surface before professional cleaning"
          fill
          sizes={imageSizes}
          className="object-cover object-center"
          loading="lazy"
          draggable={false}
        />

        {/* AFTER IMAGE */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 0 0 ${position}%)`,
          }}
        >
          <Image
            src="/assets/images/slider/after.webp"
            alt="The same exterior surface after professional cleaning"
            fill
            sizes={imageSizes}
            className="object-cover object-center"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* BEFORE LABEL */}
        <span
          className="
            pointer-events-none absolute left-4 top-4 z-10
            rounded-md bg-[#06152c]/85 px-3 py-2
            text-xs font-semibold uppercase
            tracking-wider text-white
            sm:left-6 sm:top-6
          "
        >
          Before
        </span>

        {/* AFTER LABEL */}
        <span
          className="
            pointer-events-none absolute right-4 top-4 z-10
            rounded-md bg-[#06152c]/85 px-3 py-2
            text-xs font-semibold uppercase
            tracking-wider text-white
            sm:right-6 sm:top-6
          "
        >
          After
        </span>

        {/* COMPARISON DIVIDER */}
        <div
          aria-hidden="true"
          className="
    pointer-events-none absolute inset-y-0 z-10
    w-0.5 -translate-x-1/2
    bg-white shadow-md
  "
          style={{ left: `${position}%` }}
        />

        {/* COMPARISON HANDLE */}
        <div
          aria-hidden="true"
          className="
    pointer-events-none absolute top-1/2 z-20
    flex h-12 w-12
    -translate-x-1/2 -translate-y-1/2
    items-center justify-center
    rounded-full border-2 border-white
    bg-[#086bd4] text-white
    shadow-lg
  "
          style={{
            left: `clamp(24px, ${position}%, calc(100% - 24px))`,
          }}
        >
          <IconArrowsHorizontal size={22} stroke={1.8} />
        </div>

        {/* ACCESSIBLE KEYBOARD CONTROL */}
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Before and after image comparison"
          aria-valuetext={`${position}% of the before image visible`}
          aria-describedby="comparison-instructions"
          className="sr-only"
        />
      </div>

      <p
        id="comparison-instructions"
        className="
          mt-4 text-center text-sm
          leading-6 text-slate-600
        "
      >
        Drag the slider left or right to compare the results. You can also use
        the arrow keys when the slider is focused.
      </p>
    </div>
  );
}
