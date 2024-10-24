import React, { useState, useEffect } from "react";
import {
  FaSun,
  FaMoon,
  FaQuestionCircle,
  FaHome,
  FaStar,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import image1 from "./images/Screenshot 2024-10-14 205320.svg";

// Scroll to section helper
const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", String(newMode)); // Save preference in local storage
      return newMode;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Vector24</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-300 ${
                darkMode ? "bg-yellow-400" : "bg-gray-800"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-gray-900" />
              ) : (
                <FaMoon className="text-white" />
              )}
            </button>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button className="md:hidden" onClick={toggleMenu}>
            <div
              className={`relative w-8 h-6 transition-all duration-300 transform ${
                isMenuOpen ? "rotate-40" : ""
              }`}
            >
              {/* Top bar */}
              <span
                className={`block absolute h-1 w-full bg-black dark:bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-2.5" : "rotate-0 top-0"
                }`}
              />
              {/* Middle bar (hidden when open) */}
              <span
                className={`block absolute h-1 w-full bg-black dark:bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100 top-2.5"
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`block absolute h-1 w-full bg-black dark:bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-2.5" : "rotate-0 top-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-20 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center space-y-4 p-4">
              <button
                onClick={() => {
                  scrollToSection("home");
                  toggleMenu();
                }}
                className="flex items-center w-full text-center py-4 px-6 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-500 transition duration-200"
              >
                <FaHome className="mr-2 text-xl" />
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection("features");
                  toggleMenu();
                }}
                className="flex items-center w-full text-center py-4 px-6 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-500 transition duration-200"
              >
                <FaStar className="mr-2 text-xl" />
                Features
              </button>
              <button
                onClick={() => {
                  scrollToSection("about");
                  toggleMenu();
                }}
                className="flex items-center w-full text-center py-4 px-6 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-500 transition duration-200"
              >
                <FaInfoCircle className="mr-2 text-xl" />
                About
              </button>
              <button
                onClick={() => {
                  scrollToSection("faq");
                  toggleMenu();
                }}
                className="flex items-center w-full text-center py-4 px-6 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-500 transition duration-200"
              >
                <FaQuestionCircle className="mr-2 text-xl" />
                FAQ
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  toggleMenu();
                }}
                className="flex items-center w-full text-center py-4 px-6 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-500 transition duration-200"
              >
                <FaEnvelope className="mr-2 text-xl" />
                Contact
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center justify-center w-full text-center py-4 px-6 rounded-lg transition-transform duration-300 ${
                  darkMode
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-gray-800 text-white"
                }`}
              >
                {darkMode ? (
                  <FaSun className="mr-2 text-xl" />
                ) : (
                  <FaMoon className="mr-2 text-xl" />
                )}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/public/aviation-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-12 rounded-lg animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 text-white">Vector24</h2>
          <p className="text-lg mb-8 text-gray-300">
            The solution for controllers on ATC24.
          </p>
          <a
            href="https://github.com/awdev1/Vector24"
            className="px-8 py-4 bg-[#80c9ff] rounded-full text-white font-semibold shadow-lg hover:bg-[#66b3e6] transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore on GitHub
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="min-h-screen flex items-center py-20 p-20 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Project Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Interactive Vector Drawing</h4>
              <p className="text-gray-600 dark:text-gray-300">
              Click and drag to draw vectors, with heading (angle) displayed dynamically.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">
              Position Selection
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
              You can select you controlling position so people can see where you are controlling
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">
              Discord Rich Presence Integration.
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
              Automatically updates your Discord status to reflect drawing activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 p-20 bg-gray-200 dark:bg-gray-900 min-h-screen"
      >
        <div className="container mx-auto text-center">
          {/* Heading */}
          <h3 className="text-4xl font-bold mb-12">About Vector24</h3>

          {/* Content section with image and text */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Image on the left */}
            <div className="md:w-1/2 flex-shrink-0 mb-8 md:mb-0">
              <img
                src={image1} // Replace with your image path
                alt="Vector24 Overview"
                className="mx-auto rounded-lg shadow-lg w-full max-w-md"
              />
            </div>

            {/* Text on the right */}
            <div className="md:w-1/2 md:text-left text-center md:pl-8">
              <p className="text-lg mb-8">
                Vector24 (VTR24) is a simple vector drawing tool made in python
                and overlays over the roblox minimap without violating TOS. It
                lets you click and drag to get the heading of an aircraft and
                draw an approach/extended centreline overlaying the map. This
                makes vectoring more easier now on ATC24 so you no longer have
                to guess your headings or where the approach is!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="min-h-screen flex items-center py-20 p-20 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container  mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">
            Frequently Asked Questions
          </h3>
          <div className="text-left max-w-3xl mx-auto space-y-4">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold">What is Vector24?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Vector24 is an innovative platform aimed at streamlining air
                traffic control processes.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold">Is there support for Mac?</h4>
              <p className="text-gray-600 dark:text-gray-300">
               Mac is currently in beta testing and should be available soon!
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold">Can I contribute?</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, Vector24 is open source, and code suggestions and changes
                are welcome!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Need Support ? </h3>
          <p className="text-lg mb-8">
            Join our Discord server for inquiries and support:{" "}
            <a
              href="https://discord.com/invite/kyDgZbnHz3" // Replace with your Discord invite link
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vector24 Discord
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
