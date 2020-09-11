import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

// containers
import Login from "./account/Login"
import Dashboard from "./Dashboard"
import NoMatch from "./errorpage/NoMatch"


const Root = ()=>{
	return (
		<Switch>
      <Redirect exact from="/" to="/login" />
			<Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="*" component={NoMatch} />
		</Switch>	
	)
}

export default Root