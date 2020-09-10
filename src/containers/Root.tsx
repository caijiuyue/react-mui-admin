import React from "react"
import { Switch, Route } from "react-router-dom"

// containers
import Login from "./account/Login"

const Root = ()=>{
	return (
		<Switch>
			<Route path="/login" component={Login} />
		</Switch>	
	)
}

export default Root