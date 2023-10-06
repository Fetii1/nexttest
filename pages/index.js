import AboutSection from '@/components/sections/AboutSection'
import FindUsSection from '@/components/sections/FindUsSection'
import HeroSection from '@/components/sections/HeroSection'
import MenuSection from '@/components/sections/MenuSection'
import WorkingHoursSection from '@/components/sections/WorkingHoursSection'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Good Taste">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <WorkingHoursSection />
      <FindUsSection />
    </Layout>
  )
}
