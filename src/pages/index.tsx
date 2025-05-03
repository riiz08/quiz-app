import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";

export default function IndexPage() {
  const navigate = useNavigate();
  const title = "What Kind of Partner Are You? Take This Fun Quiz!";
  const description =
    "Discover your relationship style with this fun personality quiz. Take the quiz now and share your result!";
  const shareImage = "https://quizdateyou.web.id/images/png/logo-color.png"; // Placeholder image for the start quiz page

  const handleStartQuiz = () => {
    const popScript = document.createElement("script");
    popScript.src =
      "//comelysouthbuilds.com/bf/12/77/bf12778bcad6a058e6decbc8f6544329.js";
    popScript.type = "text/javascript";
    document.body.appendChild(popScript);

    setTimeout(() => {
      const socialScript = document.createElement("script");
      socialScript.src =
        "//comelysouthbuilds.com/b1/a4/f8/b1a4f8e00edfad94378e3b6815573ff4.js";
      socialScript.type = "text/javascript";
      document.body.appendChild(socialScript);
    }, 10000);

    navigate("/quiz");
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quizdateyou.web.id/quiz" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={shareImage} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl text-center space-y-6">
          <div className="flex flex-col items-center gap-2">
            <Sparkles className="h-10 w-10 text-purple-500" />
            <h1 className="text-3xl font-extrabold text-gray-800">
              What Kind of Partner Are You?
            </h1>
            <p className="text-gray-600 text-lg">
              Take this fun quiz and uncover your unique relationship style.
            </p>
          </div>
          <div className="bg-purple-100 text-purple-800 text-sm rounded-lg px-4 py-3">
            💡 Over 10,000 people have taken this quiz today!
          </div>
          <Button
            onPress={handleStartQuiz}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 text-lg font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition"
          >
            Start Quiz Now
          </Button>
          <p className="text-xs text-gray-400">
            100% free – no sign up required
          </p>
        </div>
      </div>
    </>
  );
}
