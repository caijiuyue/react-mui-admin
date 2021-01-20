import React from "react"
import { Switch, Route } from "react-router-dom"

// containers
import Login from "./account/Login"
import Dashboard from "./Dashboard"
import NoMatch from "./errorpage/NoMatch"
import NoNetwork from "./errorpage/NoNetwork"
import NoPermissions from "./errorpage/NoPermissions"
import Layout from "../components/Layout"

const Root = ()=>{
	return (
		<Switch>
		  {/* <Layout> */}
    		<Route exact path="/" component={Dashboard} />
		  {/* </Layout> */}
		  <Route path="/login" component={Login} />
		  {/* 错误报警页 */}
      	  <Route path="/nonetwork" component={NoNetwork} />
		  <Route path="/403" component={NoPermissions} />
      	  <Route path="*" component={NoMatch} />
		</Switch>
	)
}

export default Root