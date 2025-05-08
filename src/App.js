import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import {
  FaArrowRight,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCode,
  FaBriefcase,
  FaUserTie,
  FaMoneyBillWave,
  FaEdit,
  FaTrash,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "emailjs-com";
import logo from "./assets/logo.jpeg";
import bgVideo1 from "./assets/bgvideo1.mp4";
import bgVideo2 from "./assets/bgvideo2.mp4";
import Login from "./components/Login";
import Register from "./components/Register";
import Application from "./components/Application";
import "./App.css";

const CareerSection = ({ jobs, handleApply }) => {
  const [expandedJobIds, setExpandedJobIds] = useState([]);

  const handleToggleDescription = (jobId) => {
    setExpandedJobIds((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  return (
    <section id="career" className="relative py-12 px-4 md:px-8 lg:px-20 z-10">
      <div className="max-w-7xl mx-auto rounded-xl shadow-xl p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white text-center leading-tight mb-8">
          Elevate Your Career with Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobs.slice(0, 3).map((job) => (
            <div
              key={job._id}
              className="bg-white border border-[#f06321] opacity-90 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-5 space-y-4">
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <div className="space-y-3">
                  {/* Skills */}
                  <div className="flex items-start">
                    <FaCode className="text-[#f06321] opacity-90 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Skills</p>
                      <p className="text-sm text-gray-800">{job.skills}</p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-start">
                    <FaUserTie className="text-[#f06321] opacity-90 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Experience</p>
                      <p className="text-sm text-gray-800">{job.experience}</p>
                    </div>
                  </div>

                  {/* Salary */}
                  <div className="flex items-start">
                    <FaMoneyBillWave className="text-[#f06321] opacity-90 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Salary</p>
                      <p className="text-sm text-gray-800">₹{job.salary}</p>
                    </div>
                  </div>

                  {/* Job Description with View More */}
                  <div className="relative">
                    <p className="text-sm font-medium text-gray-600 mb-1">Job Description</p>
                    <div className={`transition-all duration-300 ${expandedJobIds.includes(job._id) ? 'block' : 'hidden'}`}>
                      <p className="text-sm text-gray-800">
                        {job.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleToggleDescription(job._id)}
                      className="flex items-center text-sm text-[#f06321] mt-2"
                    >
                      {expandedJobIds.includes(job._id) ? (
                        <>
                          <FaChevronUp className="mr-1" /> View Less
                        </>
                      ) : (
                        <>
                          <FaChevronDown className="mr-1" /> View More
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Apply Now Button */}
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={() => handleApply(job.title)}
                  className="w-full py-2 px-4 bg-[#f06321] opacity-90 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Jobs Button */}
        {jobs.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {/* handleViewMore() here if needed */}}
              className="border-2 border-[#f06321]/90 bg-[#f06321]/90 text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-[#f06321] transition-all duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const MoreJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, []);

  const handleApply = (jobTitle) => {
    navigate("/job-application", { state: { jobTitle } });
  };

  return (
    <div id="MoreOpportunities" className="min-h-screen bg-black py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white text-center leading-tight mb-8">
          More Career Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-orange-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaCode className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Skills</p>
                      <p className="text-sm text-gray-800">{job.skills}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaUserTie className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Experience</p>
                      <p className="text-sm text-gray-800">{job.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMoneyBillWave className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Salary</p>
                      <p className="text-sm text-gray-800">₹{job.salary}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={() => handleApply(job.title)}
                  className="w-full py-2 px-4 bg-[#f06321]/90 text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/career")}
            className="border-2 border-[#f06321]/90 bg-[#f06321]/90 text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-[#f06321] transition-all duration-300"
          >
            Back to Careers
          </button>
        </div>
      </div>
    </div>
  );
};

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

const Navbar = () => {
  const [menu, openMenu] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(true);
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) => {
    if (path === "/login" || path === "/register") {
      navigate(path);
    } else {
      navigate(path);
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    openMenu(false);
    setShowMenu(true);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md flex flex-wrap justify-between md:items-center bg-[#f06321] opacity-100 text-white px-4 sm:px-10 py-6 font-robotoSlab z-50">
      <div className="flex items-center space-x-4">
        <img
          className="rounded-2xl"
          src={logo}
          width={60}
          height={60}
          alt="Gollamudi Technology and Software Logo"
          loading="lazy"
          decoding="async"
        />
        <span className="hidden md:block md:text-2xl font-semibold">
          Gollamudi Technology and Software
        </span>
      </div>
      <ul
        className={`${
          menu ? "block" : "hidden"
        } w-full md:w-auto py-2 mt-10 font-semibold md:mt-0 rounded-xl backdrop-blur-md md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-4 lg:gap-8`}
      >
        <li
          className="hover:opacity-95 hover:scale-105 md:hover:underline transition p-2 md:p-0 text-white text-lg md:text-2xl cursor-pointer"
          onClick={() => handleNavigation("/home", "home")}
        >
          Home
        </li>
        <li
          className="hover:opacity-95 hover:scale-105 md:hover:underline transition p-2 md:p-0 text-white text-lg md:text-2xl cursor-pointer"
          onClick={() => handleNavigation("/services", "services")}
        >
          Our Services
        </li>
        <li
          className="hover:opacity-95 hover:scale-105 md:hover:underline transition p-2 md:p-0 text-white text-lg md:text-2xl cursor-pointer"
          onClick={() => handleNavigation("/career", "career")}
        >
          Careers
        </li>
        <li
          className="hover:opacity-95 hover:scale-105 md:hover:underline transition p-2 md:p-0 text-white text-lg md:text-2xl cursor-pointer"
          onClick={() => handleNavigation("/contact", "contact")}
        >
          Contact Us
        </li>
        <li
          className="flex justify-center items-center gap-1 hover:opacity-95 border border-1 border-gray-300 hover:scale-105 rounded-lg transition duration-300 md:p-1 text-white text-lg md:text-2xl cursor-pointer"
          onClick={() => handleNavigation("/login", "")}
        >
          Log in <FaArrowRight />
        </li>
      </ul>
      {showMenu ? (
        <RiMenu3Fill
          size={40}
          className="md:hidden absolute right-5 top-8 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseFill
          size={40}
          className="md:hidden absolute right-5 top-8 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

const Homepage = () => {
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate("/services");
    const servicesSection = document.getElementById("services");
    if (servicesSection) servicesSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-auto bg-white">
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center md:justify-end px-4 py-12 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={bgVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 w-full h-full bg-black opacity-60 z-[1]" />
        <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl xl:max-w-2xl text-center md:text-right">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-6 leading-tight">
            Innovative Digital Solutions for Your Business
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white leading-relaxed mb-8">
            At Gollamudi Technology and Software, we create cutting-edge web and
            mobile applications that drive growth and innovation. Our expert
            team transforms ideas into powerful, user-friendly solutions using
            the latest technology. Whether you're a startup or an enterprise, we
            deliver high-performance, scalable, and visually stunning
            applications tailored to your needs.
          </p>
          <button
            onClick={handleServicesClick}
            className="inline-block bg-[#f06321] text-base sm:text-lg md:text-xl text-white font-semibold px-6 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Explore Our Services
          </button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ lottieSrc, title, description }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="group h-72 w-full max-w-sm mx-auto perspective cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
          <DotLottieReact
            src={lottieSrc}
            loop
            autoplay
            className="w-full h-full object-contain p-6"
          />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg p-6 flex flex-col justify-center text-center bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-md border border-orange-500/30">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const AllSections = () => {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const form = React.useRef();
  const [alertMessage, setAlertMessage] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [projectsCompleted, setProjectsCompleted] = React.useState(0);
  const [clientSatisfaction, setClientSatisfaction] = React.useState(0);
  const [yearsOfExperience, setYearsOfExperience] = React.useState(0);
  const [mobileResponsive, setMobileResponsive] = React.useState(0);
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProjectsCompleted((prev) => (prev < 10 ? prev + 1 : prev));
      setClientSatisfaction((prev) => (prev < 98 ? prev + 1 : prev));
      setYearsOfExperience((prev) => (prev < 2 ? prev + 1 : prev));
      setMobileResponsive((prev) => (prev < 100 ? prev + 1 : prev));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, []);

  const services = [
    {
      title: "App Development",
      description: "We create custom mobile applications tailored to your business needs using cutting-edge technology.",
      lottieSrc:
        "https://lottie.host/69dd8df4-bc8c-4ce2-9f3f-8345d3ba3482/csDNqlAUes.lottie",
    },
    {
      title: "Web Development",
      description: "Our team builds responsive, modern websites designed to enhance your online presence.",
      lottieSrc:
        "https://lottie.host/25a94245-fc3f-4a93-9376-f4cb3bb1318f/iOpltwc20O.lottie",
    },
  ];

  const missionVision = [
    {
      title: "Mission",
      description: "Our mission is to empower businesses by delivering innovative and reliable technology solutions. Through custom software, web, and mobile applications, we aim to simplify challenges, enhance user experiences, and drive meaningful growth for our clients.",
      icon: "https://cdn-icons-png.flaticon.com/128/14676/14676084.png",
    },
    {
      title: "Vision",
      description: "Our vision is to be a global leader in innovative technology solutions, empowering businesses with cutting-edge software, web applications, and mobile solutions. We strive to transform ideas into reality by delivering exceptional quality, seamless user experiences, and fostering long-term partnerships for digital success.",
      icon: "https://cdn-icons-png.flaticon.com/128/10434/10434252.png",
    },
  ];

  const validateForm = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const phone = form.current.user_phone.value.trim();
    const message = form.current.message.value.trim();

    if (!name) {
      setAlertMessage("Please enter your name.");
      setShowAlert(true);
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setAlertMessage("Please enter a valid email address.");
      setShowAlert(true);
      return false;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      setAlertMessage("Please enter a valid 10-digit phone number.");
      setShowAlert(true);
      return false;
    }
    if (!message) {
      setAlertMessage("Please enter your message.");
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    emailjs
      .sendForm(
        "service_6dmiyzx",
        "template_xxeyn07",
        form.current,
        "pilFSvoqFoHBRuGBG"
      )
      .then(() => {
        setAlertMessage("Message sent successfully!");
        setShowAlert(true);
        form.current.reset();
      })
      .catch(() => {
        setAlertMessage("Failed to send message. Please try again.");
        setShowAlert(true);
      });
  };

  const handleApply = (jobTitle) => {
    navigate('/job-application', { state: { jobTitle } });
  };

  const handleViewMore = () => {
    navigate('/more-jobs');
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 w-full h-full bg-black opacity-60 z-[1]" />

      <section
        id="about"
        className="relative my-8 flex items-center justify-center z-10"
      >
        <div className="max-w-8xl mx-auto w-full px-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-6 animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-6 leading-tight">
                About Us
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed opacity-90">
                Gollamudi Technology and Software delivers innovative technology solutions for businesses. We specialize in custom software, web, and mobile applications, ensuring high quality, user-friendly experiences. Our expert team focuses on innovation, collaboration, and modern strategies to help businesses grow and succeed in the digital world.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <DotLottieReact
                src="https://lottie.host/6a5486d6-9a46-460e-bb83-1895d12aa914/jrbH08hw5e.lottie"
                loop
                autoplay
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative flex items-center justify-center z-10 my-8"
      >
        <div className="relative z-20 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-tight text-white text-center mb-12 md:mb-16 drop-shadow-lg">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                lottieSrc={service.lottieSrc}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <CareerSection jobs={jobs} handleApply={handleApply} />

      <section
        id="missionVision"
        className="relative flex items-center justify-center z-10 mb-8"
      >
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white">
              Our Mission & Vision
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-2xl text-white leading-relaxed mt-1 sm:mt-2 md:mt-3 lg:mt-4">
              Driving innovation with purpose...
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4 md:gap-6 lg:gap-10 px-5 md:px-0">
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                className="relative group border border-1 border-[#f06321] opacity-90 shadow-lg rounded-lg p-2 sm:p-3 md:p-4 lg:p-8 text-center transform transition hover:scale-105"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <div className="relative">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto h-6 sm:h-8 md:h-10 lg:h-14 w-6 sm:w-8 md:w-12 lg:w-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-2xl sm:text-3xl md:text-3xl mx-5 md:mx-0 font-bold text-white group-hover:text-black transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-xl text-white mt-1 sm:mt-2 md:mt-3 lg:mt-4 group-hover:text-black transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="relative flex items-center justify-center z-10 mb-8"
      >
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-12 md:mb-16 animate-fade-in">
            Our Achievements
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            <div className="flex flex-col items-center bg-[#f06321] opacity-90 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <span className="text-6xl font-bold text-white">
                {projectsCompleted}+
              </span>
              <span className="text-xl text-white mt-2">
                Working in progress
              </span>
            </div>
            <div className="flex flex-col items-center bg-[#f06321] opacity-90 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <span className="text-6xl font-bold text-white">
                {clientSatisfaction}%
              </span>
              <span className="text-xl text-white mt-2">
                Client Satisfaction
              </span>
            </div>
            <div className="flex flex-col items-center bg-[#f06321] opacity-90 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <span className="text-6xl font-bold text-white">
                {yearsOfExperience}+
              </span>
              <span className="text-xl text-white mt-2">
                Years of Industry Expertise
              </span>
            </div>
            <div className="flex flex-col items-center bg-[#f06321] opacity-90 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <span className="text-6xl font-bold text-white">
                {mobileResponsive}%
              </span>
              <span className="text-xl text-white mt-2">Mobile-Responsive</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative flex items-center justify-center z-10 mb-8"
      >
        <div className="relative w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6 lg:p-10 transform transition-transform duration-300 ease-in-out z-20">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white hover:translate-x-2 transition-transform duration-300">
              Get In Touch With Us
            </h2>
            <p className="text-sm md:text-lg lg:text-2xl text-white">
              Together, we can create something extraordinary. Let's talk!
            </p>
            <DotLottieReact
              src="https://lottie.host/41b7c3e3-80f0-43f7-be66-c12408e4e87d/3P7voN3sI3.lottie"
              loop
              autoplay
              className="w-full rounded-lg"
            />
          </div>
          <div className="border border-1 border-white shadow-2xl p-4 md:p-6 lg:p-8 rounded-lg relative transform hover:scale-105 transition-transform duration-300">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 md:space-y-6"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="text-white text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-transparent border-b-2 border- focus:outline-none focus:border-white placeholder-white"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="text-white text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-transparent border-b-2 border- focus:outline-none focus:border-white placeholder-white"
                required
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                className="text-white text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-transparent border-b-2 border- focus:outline-none focus:border-white placeholder-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="text-white text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-transparent border-b-2 border- focus:outline-none focus:border-white placeholder-white"
                required
              ></textarea>
              <button
                type="submit"
                className="text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-[#f06321] opacity-90 text-white font-semibold rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {showAlert && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-lg">
              <p className="text-sm md:text-lg font-semibold mb-2 md:mb-4">
                {alertMessage}
              </p>
              <button
                onClick={() => {
                  setShowAlert(false);
                  setAlertMessage("");
                }}
                className="bg-[#f06321] opacity-90 text-white px-3 md:px-4 py-2 md:py-2 rounded-lg text-sm md:text-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#f06321] opacity-90 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center w-constant text-center">
          <div className="flex items-center justify-center space-x-4 md:px-10 lg:pl-36 pb-3 sm:pb-0">
            <img
              className="rounded-2xl hover:opacity-90 hover:scale-105 transition duration-300"
              src={logo}
              width={90}
              alt="Logo"
            />
          </div>
          <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
            <h2 className="font-bold text-sm md:text-2xl hover:opacity-90 hover:scale-105 transition duration-300">
              About Us
            </h2>
            <a
              onClick={() => navigate("/services")}
              className="cursor-pointer mt-2 text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
            >
              Our Services
            </a>
          </div>
          <div className="block md:hidden container mx-auto px-4 flex-col md:flex-row justify-center items-center mt-4 border-t pt-4"></div>
          <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
            <h2 className="font-bold text-sm md:text-2xl hover:opacity-90 hover:scale-105 transition duration-300">
              Support
            </h2>
            <a
              onClick={() => navigate("/contact")}
              className="cursor-pointer mt-2 text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
            >
              Contact
            </a>
          </div>
          <div className="block md:hidden container mx-auto px-4 flex-col md:flex-row justify-center items-center mt-4 border-t pt-4"></div>
          <div className="flex flex-col md:w-1/3">
            <h2 className="font-bold text-sm md:text-2xl hover:opacity-90 hover:scale-105 transition duration-300">
              Social
            </h2>
            <a
              href="https://www.linkedin.com/company/gollamudi-technology-and-software/"
              className="mt-2 flex items-center justify-center text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="mr-2 text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300" />{" "}
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-3xl mx-auto">
          <div className="bg-black p-2 md:px-3 rounded-full flex items-center space-x-2 text-white hover:opacity-90 transition duration-300 w-full sm:w-auto justify-center">
            <a
              href="mailto:rohithsai.g@gtands.com"
              className="flex items-center w-full justify-center"
            >
              <div className="bg-[#ff4500] rounded-full p-2">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <span className="text-sm md:text-lg ml-2">
                rohithsai.g@gtands.com
              </span>
            </a>
          </div>
          <div className="bg-black p-2 md:px-3 rounded-full flex items-center space-x-2 text-white w-full sm:w-auto justify-center">
            <div className="flex items-center w-full justify-center">
              <div className="bg-[#ff4500] rounded-full p-2">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <span className="text-sm md:text-lg ml-2">
                Tenali, Andhra Pradesh
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center mt-8 border-t pt-4">
          <p className="mb-4 md:mb-0 text-center text-lg md:text-xl hover:opacity-90 hover:scale-105 transition duration-300">
            Copyright ©{" "}
            <a href="#" className="md:mr-4 text-sm md:text-xl">
              2025 Gollamudi Technology and Software
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <AllSections />
      <Footer />
    </>
  );
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/job-application" &&
      location.pathname !== "/more-jobs"
    ) {
      const section = location.pathname.split("/")[1] || "home";
      const element = document.getElementById(section);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job-application" element={<Application />} />
        <Route path="/more-jobs" element={<MoreJobs />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;