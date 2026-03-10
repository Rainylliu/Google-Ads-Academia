"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.parent !== window) {
      const sendHeight = () => {
        window.parent.postMessage(
          { type: "resize", height: document.body.scrollHeight },
          "*"
        );
      };
      sendHeight();
      const observer = new ResizeObserver(sendHeight);
      observer.observe(document.body);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <div style={{ visibility: loaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
