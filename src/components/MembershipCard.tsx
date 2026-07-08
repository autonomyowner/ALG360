export default function MembershipCard({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section className="py-10 md:py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="rounded-[1.5rem] p-1 bg-gradient-to-br from-tertiary/40 to-surface-dim relative group">
        <div className="bg-surface-container-high rounded-[1.4rem] p-6 md:p-8 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -inset-24 bg-tertiary/10 blur-[80px] rounded-full z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="font-headline-md text-headline-md text-on-background mb-2">العضوية الذهبية</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-md text-balance">
              احصل على وصول حصري للتقارير المعمقة، تحليلات السوق، التكوينات والدورات، والمحتوى الثقافي المميز.
            </p>
            <button onClick={() => navigate('/login')} className="bg-surface-dim border border-tertiary text-tertiary font-body-md text-body-md px-8 py-3 rounded-full hover:bg-tertiary hover:text-on-tertiary transition-all">
              ترقية الحساب
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
