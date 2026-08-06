"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectImageProps = {
  src: string;
  alt: string;
  gallery?: string[];
};

export function ProjectImage({ src, alt, gallery = [] }: ProjectImageProps) {
  const slides = gallery.length > 0 ? gallery : [src];
  const hasGallery = slides.length > 1;
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const current = slides[index] ?? src;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!open || !hasGallery) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, hasGallery, goPrev, goNext]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setIndex(0);
      }}
    >
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group/image relative mb-5 block w-full overflow-hidden rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={
            hasGallery
              ? `View gallery for ${alt}`
              : `View full size: ${alt}`
          }
        >
          <Image
            alt={alt}
            className="h-[220px] sm:h-[280px] w-full object-cover transition-transform duration-700 group-hover/image:scale-[1.03]"
            height={300}
            src={src}
            width={400}
          />
          <span
            className="pointer-events-none absolute inset-0 bg-olive/0 transition-colors duration-300 group-hover/image:bg-olive/35"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/image:opacity-100"
            aria-hidden
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-stone/90 text-olive shadow-md backdrop-blur-sm">
              <ZoomIn className="h-5 w-5" strokeWidth={1.75} />
            </span>
          </span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-olive/80 backdrop-blur-sm data-[state=open]:animate-fade-in" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 focus:outline-none data-[state=open]:animate-fade-in"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {hasGallery
              ? `Image gallery for ${alt}. Use arrow keys or buttons to navigate.`
              : `Full size preview of ${alt}`}
          </Dialog.Description>

          <div
            className="relative flex w-full max-w-6xl flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[min(80vh,900px)] w-full">
              <Image
                alt={
                  hasGallery
                    ? `${alt} — image ${index + 1} of ${slides.length}`
                    : alt
                }
                src={current}
                fill
                className="object-contain rounded-sm drop-shadow-2xl"
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority
              />

              {hasGallery ? (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-1 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-stone/95 text-olive shadow-md transition-colors hover:bg-moss/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss sm:left-2"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-1 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-stone/95 text-olive shadow-md transition-colors hover:bg-moss/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss sm:right-2"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" strokeWidth={1.75} />
                  </button>
                </>
              ) : null}
            </div>

            {hasGallery ? (
              <p className="text-center text-sm text-stone/90">
                {index + 1} / {slides.length}
              </p>
            ) : null}
          </div>

          <Dialog.Close
            className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-11 w-11 items-center justify-center rounded-full bg-stone text-olive shadow-md transition-colors hover:bg-moss/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
