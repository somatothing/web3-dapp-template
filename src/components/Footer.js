import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import metaAggregator from "../utils/metaAggregator"; // Use the aggregator for dynamic imports
import styles from "./Footer.module.css"; // Ensure this file exists or customize as needed

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Links for the footer
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Service", to: "/terms" },
  ];

  return (
    <footer className={`${styles.footer} w-full bg-background py-4`}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center space-x-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-foreground hover:text-anchor transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 text-sm text-foreground">
          © {currentYear || "Loading..."} Your Project Name. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
