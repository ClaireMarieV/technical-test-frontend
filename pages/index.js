import React from "react";
import Layout from "../components/Layout";
import Movies from "../components/Movies";

const IndexPage = () => (
  <Layout>
    <div id="index">
      <Movies title="Movies" />
    </div>
    <style jsx>{`
      #index {
        margin: 3rem;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
