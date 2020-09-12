import React from "react"
import { Container, Typography, Link } from "@material-ui/core"
import Logo from "../../components/Logo"

const NoNetwork = ()=>{
	return (
    <Container maxWidth="sm">
      <Logo className="w-32 mt-24" />
      <div className="my-4">
        <Typography  variant="subtitle1" component="span">
          呀！村里断网了。
        </Typography>
        
      </div>
      <div className="mb-4">
        <Typography  variant="subtitle1" component="span">
          赶快查一查，是不是网线备抖掉了。
        </Typography>
      </div>
    </Container>
	)
}

export default NoNetwork