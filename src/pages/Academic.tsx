const courses = [
  {
    title: 'اللغة الأمازيغية للمبتدئين',
    instructor: 'د. ماسينيسا أمقران',
    lessons: 24,
    students: 1280,
    level: 'مبتدئ',
    description: 'دورة شاملة لتعلم أساسيات اللغة الأمازيغية بقواعدها ومفرداتها.',
  },
  {
    title: 'تاريخ الجزائر الحديث',
    instructor: 'أ.د. سعيد بلعباس',
    lessons: 18,
    students: 950,
    level: 'متوسط',
    description: 'دراسة تحليلية لتاريخ الجزائر من الاحتلال إلى الاستقلال.',
  },
  {
    title: 'الاقتصاد الجزائري',
    instructor: 'د. نوال حركات',
    lessons: 15,
    students: 720,
    level: 'متقدم',
    description: 'تحليل السياسات الاقتصادية الجزائرية والتحديات المعاصرة.',
  },
  {
    title: 'الأدب الجزائري المعاصر',
    instructor: 'د. عبد القادر بن محمد',
    lessons: 20,
    students: 640,
    level: 'متوسط',
    description: 'دراسة لأبرز التيارات الأدبية الجزائرية في القرنين 20 و21.',
  },
  {
    title: 'الجيولوجيا والثروات الطبيعية',
    instructor: 'د. جميلة مسعودي',
    lessons: 12,
    students: 510,
    level: 'متقدم',
    description: 'استكشاف الثروات المعدنية والطاقوية الجزائرية.',
  },
  {
    title: 'الفنون الإسلامية في الجزائر',
    instructor: 'د. حسن زيتوني',
    lessons: 16,
    students: 380,
    level: 'متوسط',
    description: 'دورة حول العمارة والفنون الإسلامية في الجزائر عبر العصور.',
  },
]

export default function Academic() {
  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
      <div className="mb-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-3">
          المركز الأكاديمي
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          منصة تعليمية متكاملة تقدم دورات أكاديمية متخصصة في الثقافة، التاريخ، والاقتصاد الجزائري.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.title}
            className="group rounded-xl overflow-hidden bg-surface-container-low border border-white/5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-label-caps text-label-caps text-primary">{course.level}</span>
                <span className="text-outline">•</span>
                <span className="font-label-caps text-label-caps text-outline">{course.lessons} درس</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-background mb-2 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">
                {course.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="font-body-md text-body-md text-on-surface-variant">
                  {course.instructor}
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  {course.students} طالب
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
