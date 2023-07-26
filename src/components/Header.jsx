import { Search, ArrowDropDown } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import useStateProviderContext from "../hooks/useStateProviderContext"

const Header = ({spotify}) => {
  const [{user}] = useStateProviderContext();
  console.log(user);
  return (
    <div className="header flex justify-between items-center ">
      <div className="header__left space-x-2 bg-white text-gray-400 px-4 py-1 rounded-full">
        <Search style={{ fontSize: "20px"}} />
        <input className="border-none outline-none" type="text" placeholder="search" />
      </div>
      <div className="header__right flex space-x-1 items-center justify-center rounded-full text-white bg-black px-1 ">
        <Avatar sx={{ height: 20, width: 20}} src={user?.images[0]?.url} alt="" />
        <h6>{user?.display_name}</h6>
        <ArrowDropDown />
      </div>
    </div>
  )
}

export default Header
