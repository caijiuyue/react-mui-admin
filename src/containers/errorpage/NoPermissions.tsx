import React from "react"
import { Container, Typography, Link } from "@material-ui/core"
import Logo from "../../components/Logo"

const NoPermissions = ()=>{
	return (
    <Container maxWidth="sm">
      <Logo className="w-32 mt-24" />
      <div className="my-4">
        <Typography  variant="subtitle1" component="span">
          您当前没有权限访问...
        </Typography>
        
      </div>
      <div className="mb-4">
        <Typography  variant="subtitle1" component="span">
          赶快向管理员申请吧，
          返回<Link href="/">首页</Link>。
        </Typography>
      </div>
    </Container>
	)
}

export default NoPermissions