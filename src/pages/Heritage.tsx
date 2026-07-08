const heritageItems = [
  {
    title: 'القصبة',
    region: 'الجزائر العاصمة',
    era: 'القرن 17',
    description: 'قلعة تاريخية ومدينة عتيقة مدرجة ضمن التراث العالمي لليونسكو، تتميز بأزقتها الضيقة وهندستها المعمارية الفريدة.',
    icon: 'location_city',
  },
  {
    title: 'طاسيلي ناجّر',
    region: 'إليزي',
    era: 'ما قبل التاريخ',
    description: 'أكبر متحف فني في الهواء الطلق، يحتوي على آلاف الرسوم الصخرية التي تعود إلى 12000 سنة.',
    icon: 'landscape',
  },
  {
    title: 'قسنطينة',
    region: 'قسنطينة',
    era: 'العصر النوميدي',
    description: 'مدينة الجسور المعلقة، عاصمة الشرق الجزائري بتاريخها العريق الممتد لآلاف السنين.',
    icon: 'bridge',
  },
  {
    title: 'جبال الأوراس',
    region: 'باتنة',
    era: 'عبر العصور',
    description: 'سلسلة جبلية تاريخية كانت مسرحاً لأحداث كبرى من المقاومة الشعبية إلى الثورة الجزائرية.',
    icon: 'terrain',
  },
  {
    title: 'تيمقاد',
    region: 'باتنة',
    era: '100م',
    description: 'مدينة رومانية أثرية مصنفة ضمن التراث العالمي، تعرف باسم "بومباي أفريقيا".',
    icon: 'account_balance',
  },
  {
    title: 'وادي ميزاب',
    region: 'غرداية',
    era: 'القرن 11',
    description: 'مجمع عمراني فريد بقُصوره الخمسة المدرجة ضمن التراث العالمي، يعكس عبقرية العمارة الإباضية.',
    icon: 'villa',
  },
  {
    title: 'الزرنة والمنشدات',
    region: 'عبر التراب الوطني',
    era: 'تراث شفهي',
    description: 'فن غنائي تقليدي يؤدى في الأفراح والمناسبات، مسجل ضمن التراث الثقافي غير المادي لليونسكو.',
    icon: 'music_note',
  },
  {
    title: 'الملحفة والبرنوس',
    region: 'عبر التراب الوطني',
    era: 'تراث مادي',
    description: 'أزياء تقليدية جزائرية عريقة تعكس التنوع الثقافي والجغرافي للبلاد.',
    icon: 'checkroom',
  },
]

export default function Heritage() {
  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
      <div className="mb-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-3">
          التراث الجزائري
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          استكشف التراث الغني والمتنوع للجزائر، من المواقع الأثرية إلى الفنون التقليدية والعمارة العريقة.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {heritageItems.map((item) => (
          <div
            key={item.title}
            className="group rounded-xl overflow-hidden bg-surface-container-low border border-white/5 hover:border-tertiary/30 transition-all duration-300"
          >
            <div className="h-40 bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-tertiary/40 group-hover:text-tertiary/60 transition-colors">
                {item.icon}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-label-caps text-label-caps text-tertiary">{item.region}</span>
                <span className="text-outline">•</span>
                <span className="font-label-caps text-label-caps text-outline">{item.era}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background mb-2 group-hover:text-tertiary transition-colors">
                {item.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
