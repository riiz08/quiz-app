import { useEffect, useState } from "react";

const ResultAdTrigger = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;

    // Opsional: bisa pakai iklan yang berbeda
    const resultScript = document.createElement("script");
    resultScript.src =
      "//comelysouthbuilds.com/b1/a4/f8/b1a4f8e00edfad94378e3b6815573ff4.js"; // Bisa script Social Bar lagi
    resultScript.type = "text/javascript";
    document.body.appendChild(resultScript);

    setLoaded(true);
  }, [loaded]);

  return null;
};

export default ResultAdTrigger;
