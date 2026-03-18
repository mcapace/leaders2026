"use client";

import { galleryImages } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const arrowBtnStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg, #98652b, #fee2b2 51%, #cc9933)",
  border: "0.0625rem solid #cc9933",
  padding: "1.15rem",
  fontSize: "1.3rem",
  lineHeight: 1,
  borderRadius: "100%",
};

const lightboxBtnClass =
  "rounded-full border border-[#cc9933] bg-transparent px-4 py-2 text-sm font-semibold text-[#fee2b2] transition hover:bg-[#98652b]/30";

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMd, setIsMd] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const n = galleryImages.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsMd(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + n) % n);
  }, [n]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % n);
  }, [n]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (dx > 40) prev();
    else if (dx < -40) next();
  };

  const idx1 = current;
  const idx2 = (current + 1) % n;
  const visibleIndices = isMd && n > 1 ? [idx1, idx2] : [idx1];

  const counterStart = current + 1;
  const counterEnd = isMd && n > 1 ? ((current + 1) % n) + 1 : current + 1;
  const counterLabel = `${counterStart}–${counterEnd} / ${n}`;

  if (n === 0) {
    return (
      <section
        id="gallery"
        className="border-y px-4 py-24"
        style={{
          backgroundColor: "#fefcf7",
          borderColor: "#fee2b2",
          borderWidth: "0.0625rem",
        }}
      >
        <p className="text-center text-neutral-600">
          Add gallery images in lib/data.ts.
        </p>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="border-y px-4 py-24"
      style={{
        backgroundColor: "#fefcf7",
        borderColor: "#fee2b2",
        borderWidth: "0.0625rem",
      }}
    >
      <div className="mx-auto w-full max-w-[81.25rem]">
        <header className="mx-auto max-w-[40.625rem] px-6 text-center">
          <h2 className="section-title gradient-text">
            2024 Celebration Highlights
          </h2>
        </header>

        <div className="relative mx-auto mt-12 max-w-5xl px-10 md:px-12">
          <button
            type="button"
            aria-label="Previous slides"
            className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 text-[#98652b] shadow-sm transition hover:opacity-90"
            style={arrowBtnStyle}
            onClick={prev}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slides"
            className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 text-[#98652b] shadow-sm transition hover:opacity-90"
            style={arrowBtnStyle}
            onClick={next}
          >
            ›
          </button>

          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {visibleIndices.map((imgIndex) => (
              <motion.button
                key={`${current}-${imgIndex}`}
                type="button"
                className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-md border-0 bg-transparent p-0 text-left"
                onClick={() => setLightboxIndex(imgIndex)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={galleryImages[imgIndex]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.button>
            ))}
          </div>
        </div>

        <p
          className="mt-6 text-center font-medium"
          style={{ color: "#98652b" }}
        >
          {counterLabel}
        </p>
      </div>

      {portalReady &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {lightboxIndex !== null && galleryImages[lightboxIndex] && (
              <motion.div
                key="gallery-lightbox"
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                style={{
                  backgroundColor: "rgba(20, 20, 20, 0.95)",
                  WebkitBackdropFilter: "blur(8px)",
                  backdropFilter: "blur(8px)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxIndex(null)}
                role="presentation"
              >
                <motion.div
                  className="relative flex max-h-[90vh] w-full max-w-6xl flex-col items-center gap-4"
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative aspect-[4/3] w-full max-h-[75vh] min-h-[200px]">
                    <Image
                      src={galleryImages[lightboxIndex]}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      className={lightboxBtnClass}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex((i) =>
                          i === null ? null : (i - 1 + n) % n
                        );
                      }}
                      aria-label="Previous image"
                    >
                      ‹ Prev
                    </button>
                    <button
                      type="button"
                      className={lightboxBtnClass}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(null);
                      }}
                      aria-label="Close"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className={lightboxBtnClass}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex((i) =>
                          i === null ? null : (i + 1) % n
                        );
                      }}
                      aria-label="Next image"
                    >
                      Next ›
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
