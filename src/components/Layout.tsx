/*
 * Layout Compnent
*/ 
import React, {FC} from "react"
import { Drawer, makeStyles, createStyles, Theme } from "@material-ui/core"
import SideBar from "../components/SideBar"
import { getSidebarNavs } from "../utils/sidebar_navs"
interface LayoutProps {

}
const drawerWidth:number = 210
const sidebarNavs =  getSidebarNavs()

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
  }),
);


const Layout:FC<LayoutProps>= (props)=>{
	const {children} = props
	const classes = useStyles()
	return (
		<>
			<Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} open={true} variant="persistent" anchor="left">
				<SideBar items={sidebarNavs} />
			</Drawer>
			{children}
		</>
	)
}

export default Layout