"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container-fluid flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="text-sm text-gray-700 mr-6 mb-4 md:mb-0">
          This website uses cookies as well as similar tools and technologies to understand visitors' experiences. By continuing to use this website, you
          consent to Duke University's usage of cookies and similar technologies, in accordance with the{" "}
          <Link href="/privacy" className="text-duke-blue hover:underline">
            Duke Privacy Statement.
          </Link>
        </div>
        <Button
          onClick={handleAccept}
          className="bg-[#f8c222] hover:bg-[#e2b01d] text-black font-bold"
        >
          I ACCEPT
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
