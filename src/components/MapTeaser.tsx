export default function MapTeaser() {
  return (
    <section className="py-10 md:py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="relative rounded-xl overflow-hidden bg-surface-container-low border border-white/5 min-h-[280px] md:h-[400px]">
        {/* Top-right corner scan */}
        <div className="absolute top-0 right-0 scan-h bg-gradient-to-l from-secondary via-secondary/30 to-transparent h-px" />
        <div className="absolute top-0 right-0 scan-v bg-gradient-to-b from-secondary via-secondary/30 to-transparent w-px" />

        {/* Bottom-left corner scan */}
        <div className="absolute bottom-0 left-0 scan-h-delay bg-gradient-to-r from-secondary via-secondary/30 to-transparent h-px" />
        <div className="absolute bottom-0 left-0 scan-v-delay bg-gradient-to-t from-secondary via-secondary/30 to-transparent w-px" />

        <div className="absolute inset-0 bg-gradient-to-r from-surface-dim/90 via-surface-dim/70 to-transparent p-6 md:p-8 flex flex-col justify-center">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-background mb-2">
            دليل الاستثمار في الجزائر
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[260px] md:max-w-xs mb-5 md:mb-6">
            تعرّف على فرص الاستثمار والمناطق الاقتصادية الحرة عبر خرائطنا التفاعلية المحدثة.
          </p>
          <button className="self-start flex items-center gap-2 text-secondary hover:text-secondary-fixed transition-colors font-body-md">
            <span>استكشف الفرص</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  )
}
