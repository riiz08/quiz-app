import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const query = new URLSearchParams(useLocation().search);
  const type = query.get("type") || "Mystery Lover";

  const title = `I’m a ${type}! What kind of partner are you? 💘`;
  const description = `I just took this fun personality quiz and found out I'm a "${type}". Take the quiz and find out yours too!`;
  const shareImage = `https://quizdateyou.web.id/images/results/${type.toLowerCase().replace(/\s+/g, "-")}.png`; // Example: 'loyal-lover.jpg'

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://your-domain.com/result?type=${encodeURIComponent(type)}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={shareImage} />
      </Helmet>

      {/* Your Result Page UI */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-6 text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">{type}</h1>
        <p className="text-gray-600 mb-6">
          You are the kind of partner everyone dreams of. Share your result and
          find out what your friends get!
        </p>
        <img
          src={shareImage}
          alt={`${type} thumbnail`}
          className="max-w-xs rounded-xl shadow-lg mb-6"
        />
        <div className="flex gap-4 justify-center">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://your-domain.com/result?type=${encodeURIComponent(type)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Share on Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=I got '${type}' on this fun quiz! 👉 https://your-domain.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
          >
            Share on Twitter
          </a>
        </div>
      </div>
    </>
  );
}
