import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Features from "./components/Features"
import AppleIntelli from "./components/AppleIntelli"
import Cards from "./components/Cards"
import CameraControl from "./components/CameraControl"


const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <AppleIntelli />
      <Cards />
      <CameraControl />
    </main>
  )
}

export default App
