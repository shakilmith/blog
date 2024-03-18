import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"


const AboutPage=()=>{
    return(
        <Layout>
            <p>This is my about page.</p>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default AboutPage