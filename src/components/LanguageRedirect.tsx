
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { detectUserCountry, getLanguageFromCountry } from "../utils/languageDetection";
import { toast } from "sonner";

const LanguageRedirect: React.FC = () => {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    const redirectToLanguage = async () => {
      try {
        // Check if we've already redirected (to prevent loops)
        const hasRedirected = sessionStorage.getItem("languageRedirected");
        if (hasRedirected) {
          setIsRedirecting(false);
          return;
        }

        const countryCode = await detectUserCountry();
        const language = getLanguageFromCountry(countryCode);
        
        // Only redirect if we're on the root path and not already on a language page
        const currentPath = window.location.pathname;
        if (currentPath === "/" && language !== "en") {
          navigate(`/${language}`, { replace: true });
          toast(`Redirected to ${language.toUpperCase()} version based on your location`);
        }
        
        // Mark as redirected to prevent loops
        sessionStorage.setItem("languageRedirected", "true");
      } catch (error) {
        console.error("Error during language redirect:", error);
      } finally {
        setIsRedirecting(false);
      }
    };

    redirectToLanguage();
  }, [navigate]);

  // Render nothing - this is just a utility component
  return null;
};

export default LanguageRedirect;
