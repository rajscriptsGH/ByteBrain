import { useEffect, useRef } from "react";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
  detail: string;
}

function getYouTubeEmbedUrl(url: string): string {
  if (url.includes("embed")) return url;

  try {
    if (url.includes("watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    return "";
  }

  return "";
}


export const Card = ({ title, link, type, detail }: CardProps) => {
  const twitterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === "twitter" && window?.twttr?.widgets) {
      window.twttr.widgets.load(twitterRef.current);
    }
  }, [type, link]);


  const normalizedLink = link.replace("x.com", "twitter.com");

  return (
    <div className="flex justify-between flex-col  border border-slate-300 min-w-72 rounded-lg mt-10 mx-5 my-5 py-3 px-5 shadow-md">

      {/* Header section */}
      <div className="flex justify-between">
        <div className="flex gap-3">
          <ShareIcon size="lg" />
          <p className="font-semibold">{title}</p>
        </div>
        <div className="flex gap-3">
          <ShareIcon size="lg" />
          <ShareIcon size="lg" />
        </div>
      </div>

      {/* content section */}
      <div className="w-full h-80 mt-5 mb-12">
        {type === "youtube" && (
          <iframe
            className="rounded-2xl min-h-80 w-full mt-5"
            src={getYouTubeEmbedUrl(link)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <div ref={twitterRef}>

            <blockquote className="twitter-tweet">
              <a href={normalizedLink}></a>
            </blockquote>
          </div>
        )}
      </div>

      {/* Footer section */}
      <div>
        {detail}
      </div>
    </div>
  );
};
