import Hero from '../components/Hero'
import CategoryCarousel from '../components/CategoryCarousel'
import MapTeaser from '../components/MapTeaser'
import ImageSection from '../components/ImageSection'
import MembershipCard from '../components/MembershipCard'

export default function Home({ navigate }: { navigate: (to: string) => void }) {
  return (
    <>
      <Hero navigate={navigate} />
      <CategoryCarousel />
      <MapTeaser />
      <ImageSection />
      <MembershipCard navigate={navigate} />
    </>
  )
}
