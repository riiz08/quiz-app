import { useEffect } from "react";

export function useAdsterra() {
  useEffect(() => {
    const urls = [
      "//comelysouthbuilds.com/bf/12/77/bf12778bcad6a058e6decbc8f6544329.js", // Popunder
      "//comelysouthbuilds.com/b1/a4/f8/b1a4f8e00edfad94378e3b6815573ff4.js", // Social Bar
    ];

    urls.forEach((src) => {
      // Prevent duplicate scripts
      if (document.querySelector(`script[src="${src}"]`)) return;

      const script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      script.async = true;
      script.setAttribute("data-injected", "adsterra");

      document.body.appendChild(script);
    });

    return () => {
      // Optional: clean up if needed on unmount (SPA edge case)
    };
  }, []);
}
