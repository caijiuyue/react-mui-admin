import React from "react"
import { Container, Typography, Link } from "@material-ui/core"
import Logo from "../../components/Logo"

const NoMatch = ()=>{
	return (
		<Container maxWidth="sm">
      <Logo className="w-32 mt-24" />
	    <div className="my-4">
        <Typography  variant="subtitle1" component="span">
          404
        </Typography>
        <Typography variant="subtitle1" component="span" color="textSecondary">
          . 出现了错误!
        </Typography>
      </div>
      <div className="mb-4">
        <Typography  variant="subtitle1" component="span">
          您来到了知识的荒漠
        </Typography>
        <Typography variant="subtitle1" component="span" color="textSecondary">
          . 10s 后将自动跳回
          <Link href="/">首页</Link>。
        </Typography>
      </div>
		</Container>	
	)
}

export default NoMatch