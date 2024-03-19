"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed z-50 bottom-10 right-10 rounded-full p-2 text-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 ${
        showButton ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUpIcon className="h-6 w-6" />
    </div>
  );
};

export default ScrollToTopButton;
