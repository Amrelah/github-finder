import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
            //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
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
