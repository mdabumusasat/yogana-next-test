import React from 'react';
import Link from "next/link";

type PageTitleProps = {
  pageName: string;
  pageBigTitle?: string; 
};

const PageTitle = ({ pageName, pageBigTitle }: PageTitleProps) => {
  return (
    <section
      className="page-title"
      style={{
        backgroundImage: "url(/assets/images/background/page-title-bg.png)",
      }}
    >
      {pageBigTitle && <h1 className="large-title">{pageBigTitle}</h1>}

      <div className="image-curve"></div>

      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{pageName}</h1>

          <ul className="page-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
