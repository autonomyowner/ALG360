import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const courses = [
  {
    title: 'الذكاء الاصطناعي',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    title: 'تعلم الآلة',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    title: 'فن الطبخ',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80',
  },
  {
    title: 'التصميم الجرافيكي',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    title: 'الرسم التشكيلي',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
  },
  {
    title: 'صناعة البطاقات',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80',
  },
]

export default function CoursesTrailer({ navigate }: { navigate: (to: string) => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
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
      <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop mb-6">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-background">
            التكوينات و الدورات
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            استعرض دوراتنا المتنوعة وطور مهاراتك
          </p>
        </div>
        <button
          onClick={() => navigate('/courses')}
          className="font-body-md text-body-md text-primary hover:text-secondary transition-colors flex items-center gap-1"
        >
          عرض الكل
          <span className="material-symbols-outlined text-lg">arrow_back</span>
        </button>
      </div>

      <div className="relative group/carousel">
        <button
          onClick={scrollPrev}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 bg-surface-dim/80 backdrop-blur-md border border-white/10 text-on-surface hover:text-primary hover:border-primary/30 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="السابق"
        >
          <span className="material-symbols-outlined text-lg">chevron_right</span>
        </button>

        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="flex gap-4 px-margin-mobile md:px-margin-desktop">
            {courses.map((course) => (
              <div
                key={course.title}
                className="min-w-[75vw] sm:min-w-[280px] md:min-w-[320px] shrink-0 relative rounded-xl overflow-hidden group cursor-pointer h-48 md:h-56"
              >
                <div className="absolute inset-0">
                  <img src={course.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                    <span className="material-symbols-outlined text-3xl text-on-primary">play_arrow</span>
                  </div>
                </div>
                <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-end">
                  <h3 className="font-headline-md text-headline-md text-on-background">{course.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant opacity-80 line-clamp-1">دورة تدريبية شاملة</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 bg-surface-dim/80 backdrop-blur-md border border-white/10 text-on-surface hover:text-primary hover:border-primary/30 w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="التالي"
        >
          <span className="material-symbols-outlined text-lg">chevron_left</span>
        </button>
      </div>

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
