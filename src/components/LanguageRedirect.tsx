
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { detectUserCountry, getLanguageFromCountry } from "../utils/languageDetection";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const LanguageRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n, t } = useTranslation();
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
        if (location.pathname === "/" && language !== "en") {
          // Change the language in i18n
          await i18n.changeLanguage(language);
          
          // Navigate to the language-specific page
          navigate(`/${language}`, { replace: true });
          
          // Show toast notification in the user's language
          toast(t("toast.redirected"));
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
  }, [navigate, location.pathname, i18n, t]);

  // Render nothing - this is just a utility component
  return null;
};

export default LanguageRedirect;
