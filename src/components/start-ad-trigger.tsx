import { useEffect, useState } from "react";

const StartAdTrigger = ({ trigger }: { trigger: boolean }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!trigger || loaded) return;

    // Load popunder saat quiz dimulai
    const popScript = document.createElement("script");
    popScript.src =
      "//comelysouthbuilds.com/bf/12/77/bf12778bcad6a058e6decbc8f6544329.js";
    popScript.type = "text/javascript";
    document.body.appendChild(popScript);

    // Delay Social Bar 10 detik setelah quiz dimulai
    const timeout = setTimeout(() => {
      const socialScript = document.createElement("script");
      socialScript.src =
        "//comelysouthbuilds.com/b1/a4/f8/b1a4f8e00edfad94378e3b6815573ff4.js";
      socialScript.type = "text/javascript";
      document.body.appendChild(socialScript);
    }, 10000);

    setLoaded(true);
    return () => clearTimeout(timeout);
  }, [trigger, loaded]);

  return null;
};

export default StartAdTrigger;
