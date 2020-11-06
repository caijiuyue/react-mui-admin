import { FunctionComponent } from "react"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"

export interface SideBarNavTypes {
	link: string,
	label: string,
	icons: FunctionComponent
}

const initSideBarNavs:Array<SideBarNavTypes> = [
	{
		link: "/dashboard",
		label: "首页",
		icons: HomeOutlinedIcon
	}
]


const getSidebarNavs = () =>{
	const newSidebarNavs:Array<SideBarNavTypes> = initSideBarNavs||[]
	return newSidebarNavs
}

export {
	getSidebarNavs,
}