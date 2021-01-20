/*
 * Login Page
 */ 
import React, { useState } from "react"
import { Card, CardContent, Typography, Button,  TextField, Link } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { ArrowDropDown } from "@material-ui/icons"
import LinearProgress from '@material-ui/core/LinearProgress'
import Logo from '../../components/Logo'

const Login:React.FC = ()=>{
  const history = useHistory()
  // 页面请求状态
  const [ isFetching, setFetching ] = useState(false)
  // 表单数据绑定
  const [user, setUser] = useState({username: "admin", password: "111111"})
  const {username, password} = user

  const handleSubmit = (event: React.ChangeEvent<{}>) =>{
    // 登录提交点击触发函数
    setFetching(true)
    history.push("/dashboard")
  }
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    // input 输入框值更改
    setUser({...user, [event.target.name]: event.target.value||''})
  }
	return (
		<div className="w-screen h-screen flex items-center">
      <div className="flex-grow">
        <Card className="mx-auto max-w-md  mb-4" variant="outlined">
          <div className="h-1">{isFetching&&<LinearProgress />}</div>
          <CardContent className="px-6">
            <div className="text-center">
              <Logo />
            </div>
            <Typography className="mb-6" align="center" variant="h5">登录</Typography>
            <TextField name='username' onChange={handleValueChange} value={username} className="mb-4" label="邮箱地址或用户名" variant="outlined" fullWidth />
            <TextField name='password' onChange={handleValueChange} value={password} className="mb-4" label="密码" variant="outlined" fullWidth />
            <Button disabled={isFetching} className="mb-4" color="primary" variant="contained" size="large" onClick={handleSubmit} fullWidth>登录</Button>
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