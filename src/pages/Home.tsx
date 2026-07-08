import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import CategoryCarousel from '../components/CategoryCarousel'
import MapTeaser from '../components/MapTeaser'
import ImageSection from '../components/ImageSection'
import MembershipCard from '../components/MembershipCard'
import CoursesTrailer from '../components/CoursesTrailer'
import Skeleton from '../components/Skeleton'

export default function Home({ navigate }: { navigate: (to: string) => void }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(t)
  }, [])

  if (loading) {
    return (
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-24 space-y-10">
        <Skeleton variant="image" className="h-[60dvh] w-full" />
        <Skeleton variant="card" />
        <Skeleton variant="card" />
      </div>
    )
  }

  return (
    <>
      <Hero navigate={navigate} />
      <CategoryCarousel />
      <MapTeaser />
      <ImageSection />
      <CoursesTrailer navigate={navigate} />
      <MembershipCard navigate={navigate} />
    </>
  )
}
