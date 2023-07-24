import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {GithubProvider} from "./context/github/GithubContext";
import {AlertProvider} from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import UserProfile from "./pages/UserProfile";

function App() {

    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar/>

                        <main className="container mx-auto px-3 pb-12 mt-20">
                            <Alert/>
                            <Routes>
                                <Route exact path="/" element={< Home />}/>
                                <Route exact path="/about" element={< About />}/>
                                <Route exact path="/user/:login" element={<UserProfile/>}/>
                                <Route path="/*" element={< NotFound />}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    )
}

export default App
