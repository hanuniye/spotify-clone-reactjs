import {loginUri} from "../spotify";

const Login = () => {
  return (
    <div className="login grid place-items-center bg-black h-screen">
        <img className="w-full" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify_logo"  />
        <a href={loginUri} className="bg-spotGreen py-3 px-5 rounded-full text-white uppercase">
            login with spotify
        </a>
    </div>
  )
}

export default Login
