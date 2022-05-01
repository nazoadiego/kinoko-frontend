import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import BasicUsage from '../components/BasicUsage'
import TrackingTime from '../components/TrackingTime'
import Tags from '../components/Tags'
import MushroomForest from '../components/MushroomForest'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <BasicUsage/>
      <TrackingTime/>
      <Tags/>
      <MushroomForest/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default HomePage;
