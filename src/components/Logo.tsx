import React, {  }  from "react"
import logo from '../logo.svg'


const Logo:React.ElementType = (props)=>{
  
  return <img {...props} src={logo} alt="logo" />
}

export default Logo