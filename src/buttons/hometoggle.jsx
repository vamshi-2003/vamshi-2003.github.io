import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useDraggable from "../hooks/useDraggable"; // Import the custom hook
import { TbLetterV } from "react-icons/tb";

function Hometoggle() {
  const { position, elementRef } = useDraggable({ x: 25, y: 25 }); // Use the hook
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Scroll to the element specified by the hash
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div
        ref={elementRef}
        style={{
          position: "fixed",
          bottom: position.y,
          left: position.x,
          cursor: "grab",
          zIndex: 30,
        }}
        className="w-[50px] h-[50px] flex items-center justify-center p-2 rounded-xl
          dark:bg-purple-800 hover:dark:bg-purple-700 hover:bg-purple-400 bg-purple-300 dark:text-gray-200 text-gray-600 border-2 dark:border-gray-200 border-gray-600"
      >
        <Link
          className="text-3xl display:center md:text-3xl"
          to="/home" // Updated link with hash
        >
          <h1><b>V</b></h1>
        </Link>
      </div>
    </>
  );
}

export default Hometoggle;
