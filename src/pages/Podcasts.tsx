const podcasts = [
  {
    title: 'حوارات جزائرية',
    host: 'أحمد بن سعيد',
    episodes: 48,
    description: 'لقاءات أسبوعية مع أبرز الشخصيات الجزائرية في مختلف المجالات.',
    category: 'حوارات',
  },
  {
    title: 'تاريخ الجزائر',
    host: 'د. سارة محمود',
    episodes: 36,
    description: 'رحلات عبر تاريخ الجزائر من العصور القديمة إلى اليوم.',
    category: 'تاريخ',
  },
  {
    title: 'الاقتصاد الرقمي',
    host: 'علي منصوري',
    episodes: 24,
    description: 'تحليل معمق للتحول الرقمي في الجزائر وفرص الاستثمار.',
    category: 'اقتصاد',
  },
  {
    title: 'ثقافة وفنون',
    host: 'نورة حمدي',
    episodes: 31,
    description: 'نافذة على المشهد الثقافي والفني الجزائري المعاصر.',
    category: 'ثقافة',
  },
  {
    title: 'ريادة الأعمال',
    host: 'خالد بن علي',
    episodes: 19,
    description: 'قصص نجاح وإلهام من رواد الأعمال الجزائريين الشباب.',
    category: 'أعمال',
  },
  {
    title: 'الطبخ الجزائري',
    host: 'فاطمة الزهراء',
    episodes: 42,
    description: 'وصفات تقليدية وعصرية من مطابخ الجزائر المختلفة.',
    category: 'مطبخ',
  },
]

export default function Podcasts() {
  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
      <div className="mb-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-3">
          البودكاست
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          استمع إلى محتوى غني ومتنوع يغطي الثقافة، التاريخ، الاقتصاد، والفنون الجزائرية.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast) => (
          <div
            key={podcast.title}
            className="group relative rounded-xl overflow-hidden bg-surface-container-low border border-white/5 hover:border-secondary-container/50 transition-all duration-300 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-2xl">podcasts</span>
              </div>
              <div>
                <span className="font-label-caps text-label-caps text-secondary">{podcast.category}</span>
                <p className="font-body-md text-body-md text-on-surface-variant">{podcast.host}</p>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-2 group-hover:text-primary transition-colors">
              {podcast.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">
              {podcast.description}
            </p>
            <div className="flex items-center gap-2 text-outline font-label-caps text-label-caps">
              <span className="material-symbols-outlined text-sm">headphones</span>
              <span>{podcast.episodes} حلقة</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
