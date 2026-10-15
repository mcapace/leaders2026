"use client";

import { eventGallery, galleryImages } from "@/lib/data";
import { Camera, ChevronLeft, ChevronRight, Close } from "@/components/Icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const arrowBtnClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-[#98652b]/60 bg-[#fefcf7]/90 text-[#98652b] shadow-[0_4px_14px_rgba(20,20,20,0.12)] backdrop-blur transition hover:border-[#cc9933] hover:bg-[#fee2b2] hover:text-[#141414] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc9933]";

const lightboxBtnClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-[#fee2b2]/40 bg-white/5 text-[#fee2b2] transition hover:border-[#cc9933] hover:bg-[#fee2b2] hover:text-[#141414] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc9933]";


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
        className="relative overflow-hidden border-y px-4 py-24 text-white"
        style={{
          backgroundColor: "#141414",
          borderColor: "#98652b66",
          borderWidth: "0.0625rem",
          backgroundImage: `linear-gradient(180deg, rgba(20,20,20,0.88) 0%, rgba(20,20,20,0.72) 50%, rgba(20,20,20,0.92) 100%), url('${eventGallery.backdrop}')`,
          backgroundSize: "cover",
          backgroundPosition: "50% 35%",
        }}
      >
        <div className="mx-auto w-full max-w-[81.25rem]">
          <motion.div
            className="mx-auto max-w-[40.625rem] px-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#cc9933]/70 px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#fee2b2]">
              <Camera size={16} />
              {eventGallery.comingSoon}
            </span>
            <h2 className="section-title gradient-text mt-5">
              {eventGallery.heading}
            </h2>
            <p
              className="mt-2 text-white"
              style={{ opacity: 0.8, fontSize: "1.0625rem", lineHeight: "1.5625rem" }}
            >
              {eventGallery.blurb}
            </p>
            <a
              href="#contact"
              className="btn-alt mt-8 inline-block no-underline"
              style={{ fontSize: "0.72rem", padding: "0.8rem 1.4rem" }}
            >
              Ask about event photos
            </a>
          </motion.div>
        </div>
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
            {eventGallery.heading}
          </h2>
          <p
            className="mt-4"
            style={{
              opacity: 0.8,
              color: "#141414",
              fontSize: "1.0625rem",
              lineHeight: "1.5625rem",
            }}
          >
            Scenes from the Leaders Awards dinner at The Pierre, New York.
            Tap any photo to enlarge.
          </p>
        </header>

        <div className="relative mx-auto mt-12 max-w-5xl px-10 md:px-12">
          <button
            type="button"
            aria-label="Previous slides"
            className={arrowBtnClass + " absolute -left-1 top-1/2 z-10 -translate-y-1/2 md:-left-2"}
            onClick={prev}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next slides"
            className={arrowBtnClass + " absolute -right-1 top-1/2 z-10 -translate-y-1/2 md:-right-2"}
            onClick={next}
          >
            <ChevronRight />
          </button>

          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {visibleIndices.map((imgIndex) => (
              <div key={`${current}-${imgIndex}`} className="min-w-0">
                <motion.button
                  type="button"
                  className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-md border-0 bg-transparent p-0 text-left"
                  onClick={() => setLightboxIndex(imgIndex)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={galleryImages[imgIndex].src}
                    alt={galleryImages[imgIndex].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.button>
                <p
                  className="mt-2 text-[0.8rem] leading-snug text-[#141414]"
                  style={{ opacity: 0.7 }}
                >
                  {galleryImages[imgIndex].alt}
                </p>
              </div>
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
                      src={galleryImages[lightboxIndex].src}
                      alt={galleryImages[lightboxIndex].alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                  <p className="max-w-3xl text-center text-sm text-[#fee2b2]/85">
                    {galleryImages[lightboxIndex].alt}
                  </p>
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
                      <ChevronLeft />
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
                      <Close />
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
                      <ChevronRight />
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
