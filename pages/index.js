import Layout from '@/layout/Layout'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import MenuSection from '@/components/sections/MenuSection'
import WorkingHoursSection from '@/components/sections/WorkingHoursSection'
import FindUsSection from '@/components/sections/FindUsSection'

export default function Home() {
  return (
    <Layout title="Home">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <WorkingHoursSection />
      <FindUsSection />
    </Layout>
  )
}
