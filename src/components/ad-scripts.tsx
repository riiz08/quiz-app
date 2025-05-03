// src/components/AdScripts.tsx
import { useEffect } from "react";

const AdScripts = () => {
  useEffect(() => {
    const popScript = document.createElement("script");
    popScript.src =
      "//comelysouthbuilds.com/bf/12/77/bf12778bcad6a058e6decbc8f6544329.js";
    popScript.type = "text/javascript";
    document.body.appendChild(popScript);

    const delay = setTimeout(() => {
      const socialScript = document.createElement("script");
      socialScript.src =
        "//comelysouthbuilds.com/b1/a4/f8/b1a4f8e00edfad94378e3b6815573ff4.js";
      socialScript.type = "text/javascript";
      document.body.appendChild(socialScript);
    }, 8000); // tampilkan social bar setelah 8 detik

    return () => clearTimeout(delay);
  }, []);

  return null;
};

export default AdScripts;
