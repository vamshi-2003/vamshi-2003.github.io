import React, { useEffect, useState } from "react";

function Pre({ load }) {
  // Initialize dark mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "true" || false;
  });

  // Update body class for no-scroll
  useEffect(() => {
    if (load) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [load]);

  // Dynamically select the image class based on dark mode
  const image = !darkMode ? "bg-preloader-image" : "dark-bg-preloader-image";

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-black ${
        load ? `${image} bg-no-repeat bg-center` : "opacity-0 pointer-events-none"
      } transition-opacity duration-500 z-50`}
    ></div>
  );
}

export default Pre;
