import React from "react";
import {container} from "./layout.module.css"
const Layout=({children})=>{
  return(
    <div className={container}>
      {children}
    </div>
  )
}

export default Layout