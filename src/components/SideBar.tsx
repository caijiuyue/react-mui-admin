import React, { FC } from "react"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { SideBarNavTypes } from "../utils/sidebar_navs"

interface SideBarTypes {
	items: Array<SideBarNavTypes>
}
const SideBar:FC<SideBarTypes> = (props) =>{
	const { items } = props
	return (
		<List>
			{items.map((item:SideBarNavTypes, idx:number )=>(
				<ListItem key={idx} button>
					<ListItemIcon><item.icons /></ListItemIcon>
					<ListItemText>{item.label}</ListItemText>
				</ListItem>
			))}
		</List>
	)
}	

export default SideBar