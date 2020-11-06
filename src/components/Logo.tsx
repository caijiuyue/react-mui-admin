import React, {  }  from "react"
import logo from '../logo.svg'


const Logo:React.ElementType = (props)=>{
  
  return <img className={`w-1/4 ${props.className}`} {...props} src={logo} alt="logo" />
}

export default Logo