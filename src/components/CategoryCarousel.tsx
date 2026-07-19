import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const categories = [
  {
    title: 'التراث',
    image: '/heritage.webp',
    gradient: 'from-surface-dim to-transparent',
  },
  {
    title: 'الاستثمار',
    image: '/investment.webp',
    gradient: 'from-surface-dim to-transparent',
  },
  {
    title: 'الثقافة',
    image: '/culture.webp',
    gradient: 'from-surface-dim to-transparent',
  },
]

export default function CategoryCarousel() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: false,
      breakpoints: {
        '(min-width: 768px)': { align: 'center' },
      },
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-10 md:py-12 overflow-hidden">
      <h2 className="font-headline-md text-headline-md text-on-background mb-6 px-margin-mobile md:px-margin-desktop">
        التصنيفات
      </h2>

      <div className="relative group/carousel">
        {/* Prev button */}
        <button
          onClick={scrollPrev}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 bg-surface-dim/80 backdrop-blur-md border border-white/10 text-on-surface hover:text-primary hover:border-primary/30 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          aria-label="السابق"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>

        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing mx-auto">
          <div className="flex gap-3 sm:gap-4 px-margin-mobile md:px-margin-desktop">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="min-w-[calc(100vw-40px)] sm:min-w-[240px] md:min-w-[300px] lg:min-w-[320px] shrink-0 relative rounded-xl overflow-hidden group cursor-pointer h-40 sm:h-44 md:h-52 aspect-video"
              >
                <div className="absolute inset-0">
                  {failedImages.has(cat.title) ? (
                    <div className="w-full h-full bg-surface-dim flex items-center justify-center">
                      <span className="text-on-surface-variant">صورة غير متوفرة</span>
                    </div>
                  ) : (
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages.has(cat.title) ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                      onError={() => setFailedImages((prev) => new Set(prev).add(cat.title))}
                      onLoad={() => setLoadedImages((prev) => new Set(prev).add(cat.title))}
                    />
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-90`} />
                </div>
                <div className="absolute inset-0 group-hover:inset-0 border border-white/10 rounded-xl group-hover:border-secondary-container/50 transition-colors pointer-events-none" />
                <div className="relative z-10 h-full p-4 sm:p-5 md:p-6 flex flex-col justify-end">
                  <h3 className="font-headline-md text-headline-md text-on-background leading-tight">{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={scrollNext}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 bg-surface-dim/80 backdrop-blur-md border border-white/10 text-on-surface hover:text-primary hover:border-primary/30 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          aria-label="التالي"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 md:mt-6 px-margin-mobile md:px-margin-desktop">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? 'w-6 bg-secondary'
                : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`الانتقال إلى الشريحة ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
