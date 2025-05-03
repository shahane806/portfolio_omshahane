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
import { getMyInfo, setMyInfo, setProfessionalDataExperienceData } from "./Firebase/RealtimeDatabase/functions";
import AdminLogin from "./Pages/AdminLogin";
import { useSelector } from "react-redux";
import AdminDashboard from "./Pages/AdminDashboard";
import ForgetPasswordAdmin from "./Pages/AdminForgetPassword";
import NotFound from "./Pages/NotFound";

// Cursor light effect
function CursorLight() {
  useEffect(() => {
    const light = document.createElement("div");
    light.id = "cursor-light";
    light.className =
      "fixed pointer-events-none w-52 h-52 rounded-full z-[9999] mix-blend-screen transition-transform duration-75 bg-gradient-radial from-sky-400/30 via-indigo-400/20 to-transparent";
    document.body.appendChild(light);

    const moveLight = (e) => {
      light.style.transform = `translate(${e.pageX - 100}px, ${e.pageY - 100
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

  // Show the button when the user scrolls down 300px
  useEffect(() => {

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [myInfo,setMyInfo] = useState([]);
  useEffect(() => {
    getMyInfo().then((res)=>{
      if(res == undefined){
        console.log("IN App")
         setMyInfo([]);
      }else{
        console.log("IN App")
        console.log(res)
         setMyInfo(res);
      }
    })
    // setMyInfo({
    //   UserName: "Om Shahane",
    //   designation: "Full-Stack Developer",
    // })
    // setProfessionalDataExperienceData(
    //    [ {
    //       title: "Software Developer",
    //       company: "Hiray Media and Technology",
    //       duration: "Nov 2024 - Present",
    //       description:
    //         "Developing and maintaining Android applications using Flutter and Dart.",
    //       skills: ["Flutter", "Dart", "Firebase", "PHP"],
    //     },
    //     {
    //       title: "Intern",
    //       company: "NullClass",
    //       duration: "Jan 2024 - March 2024",
    //       description:
    //         "Learn to Build Realtime Website like Stack Overflow using MERN Stack.",
    //       skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    //     },
    //     {
    //       title: "Intern AIML",
    //       company: "YBI Foundation",
    //       duration: "Oct 2023 - Dec 2023",
    //       description:
    //         "Learn to implement supervised and unsupervised machine learning algorithms.",
    //       skills: ["Python", "Machine Learning", "Deep Learning"],
    //     }]
    // )
  }, [])

  const adminLogin = useSelector((state)=>{state?.baseReducer});
  

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
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin" element={adminLogin != [] ? <AdminLogin/> : <AdminDashboard/>}/>
          <Route path="/forgetPasswordAdmin" element={<ForgetPasswordAdmin/>}/>
          <Route path="*" element={<NotFound/>}/>
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
