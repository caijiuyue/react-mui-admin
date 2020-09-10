import React from "react"
import { Card, CardContent, Typography, Button,  TextField, Link } from "@material-ui/core"
import { ArrowDropDown } from "@material-ui/icons"
import logo from '../../logo.svg'

const Login:React.FC = ()=>{
  
	return (
		<div className="w-screen h-screen flex items-center">
      <div className="flex-grow">
        <Card className="mx-auto max-w-md p-4 mb-4" variant="outlined">
          <CardContent>
            <div className="text-center">
              <img className="w-1/4" src={logo} alt="logo" />
            </div>
            <Typography className="mb-6" align="center" variant="h5">登录</Typography>
            <TextField className="mb-4" label="邮箱地址或用户名" variant="outlined" fullWidth />
            <TextField className="mb-4" label="密码" variant="outlined" fullWidth />
            <Button className="mb-4" color="primary" variant="contained" size="large" fullWidth>登录</Button>
            <div className="flex justify-between">
              <Link variant="button" align="right">创建账号</Link>
              <Link variant="button" align="right">忘记密码？</Link>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between max-w-md mx-auto">
          <Button endIcon={<ArrowDropDown />} size="small">
            简体中文
          </Button>
          <div className="flex-grow text-right">
            <Link className="mr-4" color="textPrimary" variant="button" align="right" href="/">帮助</Link>
            <Link variant="button" color="textPrimary" align="right">条款</Link>
          </div>
        </div>
      </div>
		</div>
	)
}

export default Login