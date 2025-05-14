import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-black overflow-scroll no-scrollbar relative z-0">
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
