import Home from "@/app/components/home/home";
import About from "@/app/components/about/about";
import Gallery from "@/app/components/gallery/gallery";
import ContactUs from "@/app/components/contactus/contactus";
import Hiring from "@/app/components/hiring/hiring";
import AboutSecondary from "@/app/components/aboutsecondary/aboutsecondary";
import Map from "@/app/components/map/map";
import Footer from "@/app/components/footer/footer";

export default function App() {
  return (
    <main className="min-h-full h-full">
      <Home />
      <div className="min-h-full px-4 sm:px-10 w-full overflow-hidden">
        <About/>
        <Gallery />
        <AboutSecondary />
        <Hiring />
        {/* <ContactUs /> */}
        <Map address="Community 11 Post Office ; off Tema General Hospital Road" />
      </div>
      <Footer />
    </main>
  )
}