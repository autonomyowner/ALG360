export default function Hero({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section className="relative w-full min-h-[80dvh] md:h-[618px] flex items-end pb-10 md:pb-12">
      <div className="absolute inset-0 z-0">
        <img src="/hero.png" alt="" className="w-full h-full object-cover object-[50%_30%] md:object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 md:bg-gradient-to-t md:from-black/60 md:via-black/20 md:to-transparent" />
      </div>
      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <span className="inline-block font-label-caps text-label-caps text-secondary mb-3 md:mb-4 tracking-[0.2em] uppercase">
          رؤية المستقبل
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-3 md:mb-4 text-balance">
          بوابة الثقافة والاستثمار
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 md:mb-8 max-w-2xl text-balance">
          اكتشف الإمكانيات اللامحدودة والتراث الغني من خلال منصتنا التفاعلية المتطورة.
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <button onClick={() => navigate('/login')} className="bg-secondary-container text-on-primary font-body-md text-body-md px-6 py-3 rounded-full hover:bg-secondary transition-colors">
            ابدأ الاستكشاف
          </button>
        </div>
      </div>
    </section>
  )
}
