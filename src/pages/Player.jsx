import Body from "../components/Body";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Player = ({ spotify }) => (
  <div className='player '>
    <div className="player_body flex">
      <Sidebar />
      <Body spotify={spotify} />
    </div>
    <Footer />
  </div>
)

export default Player
