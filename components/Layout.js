import React from "react";

const Layout = ({ children }) => (
  <div className="layout">
    <link rel="stylesheet" href="https://use.typekit.net/nfm0nuv.css"></link>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
      }}
    >
      <main>{children}</main>
      <style jsx global>{`
        html {
          overflow: auto;
          height: 100%;
        }
        main {
          perspective: 2px;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
          font-family: arboria, sans-serif;
          color: #40363e;
          text-align: justify;
        }
        body {
          margin: 0;
          overflow-x: hidden;
          overflow-y: auto;
          height: 100%;
          perspective: 1px;
          background-color: #fffff;
        }

        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  </div>
);
export default Layout;
