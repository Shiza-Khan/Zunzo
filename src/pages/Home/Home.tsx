import HeroSection from './Hero/HeroSection'
import StatsSection from './StatsSection/StatsSection'
import About from './About/About'
import ClientsSection from './Clients/ClientsSection'
import RunningBenefitsSection from './Benefit/RunningBenefitsSection'
import RunningEventsSection from './Events/RunningEventsSection'
import CoursesSection from './Courses/CoursesSection'
import TestimonialSection from './Testimonial/TestimonialSection'
import ContactUsSection from './Contact/ContactUsSection'
function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <About />
      <ClientsSection />
      <RunningBenefitsSection />
      <RunningEventsSection />
      <CoursesSection />
      <TestimonialSection />
      <ContactUsSection />
    </>
  )
}

export default Home
