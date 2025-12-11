"use client";
import { useState, useEffect } from "react";
import "../../src/app/styles/css/bootstrap.min.css";
import "../../src/app/styles/css/style.css";
import "../../src/app/styles/css/style-dark.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap"
        />
      </head>
      <body className="scroll-smooth">
        {loading ? (
          <div className="preloader"></div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
