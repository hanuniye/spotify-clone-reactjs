
const SideBarOptions = ({ title, Icon}) => {
  return (
    <div className="sidebar_options flex items-center space-x-2 text-gray-300 mt-3 hover:text-white cursor-pointer transition-all duration-200 ease-in-out">
      {Icon && <Icon className="text-white " style={{ fontSize: "20px"}} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SideBarOptions
