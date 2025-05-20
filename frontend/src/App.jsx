import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { getMyInfo } from "./Firebase/RealtimeDatabase/functions";
import AdminLogin from "./Pages/AdminLogin";
import { useSelector } from "react-redux";
import AdminDashboard from "./Pages/AdminDashboard";
import ForgetPasswordAdmin from "./Pages/AdminForgetPassword";
import NotFound from "./Pages/NotFound";
import { getHome } from "./Apis/apis";
import UploadForm from "./Pages/UploadApplication";
// Cursor light effect
function CursorLight() {
  useEffect(() => {
    const light = document.createElement("div");
    light.id = "cursor-light";
    light.className =
      "fixed pointer-events-none w-52 h-52 rounded-full z-[9999] mix-blend-screen transition-transform duration-75 bg-gradient-radial from-sky-400/30 via-indigo-400/20 to-transparent";
    document.body.appendChild(light);

    const moveLight = (e) => {
      light.style.transform = `translate(${e.pageX - 100}px, ${
        e.pageY - 100
      }px)`; // Centering
    };

    document.addEventListener("mousemove", moveLight);
    return () => {
      document.removeEventListener("mousemove", moveLight);
      document.body.removeChild(light);
    };
  }, []);

  return null;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [myInfo, setMyInfo] = useState([]);
  useEffect(() => {
    getHome();
    getMyInfo().then((res) => {
      if (res == undefined) {
        console.log("IN App");
        setMyInfo([]);
      } else {
        console.log("IN App");
        console.log(res);
        setMyInfo(res);
      }
    });
  }, []);

  const admin = useSelector((state) => state?.adminReducer);
  const [adminDataLength, setAdminDataLength] = useState(0);
  useEffect(() => {
    admin.then((res) => {
      console.log("Admin Data:", res?.length);
      console.log("Admin Data:", res);
      setAdminDataLength(res?.length);
    });
  }, [admin]);
  return (
    <>
      <CursorLight />

      <Router>
        <Navbar
          logo={{ src: "/logo.png", alt: "Site Logo", text: "DevOps" }}
          navItems={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Projects", href: "/projects" },
            { label: "About Us", href: "/about" },
          ]}
          cta={{ label: "Hire Me", href: "/contact" }}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <AboutUs
                fullName={"Om Shahane"}
                role={"Software Developer"}
                rating={5}
                desc={
                  "Expert in MERN stack with a passion for innovative problem-solving."
                }
                userImg={"https://avatars.githubusercontent.com/u/71377782?v=4"}
              />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/admin"
            element={adminDataLength != 0 ? <AdminDashboard /> : <AdminLogin />}
          />
          <Route
            path="/forgetPasswordAdmin"
            element={<ForgetPasswordAdmin />}
          />
          <Route
            path="/blogUpload"
            element={<UploadForm application={"Blog Post"} />}
          />
          <Route
            path="/projectUpload"
            element={<UploadForm application={"Project"} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
        <Footer
          info={{ UserName: myInfo.UserName, designation: myInfo.designation }}
        />

        {/* Floating Scroll-to-Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white transform rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
      </Router>
    </>
  );
}

export default App;
