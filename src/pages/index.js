import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";

const IndexPage=()=>{

  return(
    <Layout>
      <h1>
        Home Page.
      </h1>
      <p>
        <Link to="/about">About Page.</Link>
      </p>
    </Layout>
  )
}

export const Head=()=> <title>Home Page</title>

export default IndexPage