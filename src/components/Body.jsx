import useStateProviderContext from '../hooks/useStateProviderContext'
import Header from './Header'
import { Favorite, PlayCircleFilled, MoreHoriz} from "@mui/icons-material"
import SongRow from './SongRow';

const Body = ({spotify}) => {
  const [{discover_weekly}, dispatch] = useStateProviderContext();
  console.log(discover_weekly?.tracks.items);

  return (
    <div className='body w-screen py-4 px-10'>
      <Header spotify={spotify} />

      <div className="discover__weekly flex space-x-4 mt-6">
        <img className='dsicover-img w-[30vh]' src={discover_weekly?.images[0]?.url} alt="" />

        <div className="discover_right text-white self-end ">
          <strong className='uppercase'>playlist</strong>
          <h2 className='text-5xl font-bold uppercase'>{discover_weekly?.name}</h2>
          <p className='capitalize'>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="songs text-white mt-10 ">
       <div className="body__icons cursor-pointer space-x-3">
       <PlayCircleFilled className='play__circule' />
        <Favorite fontSize={'large'}/>
        <MoreHoriz />
       </div>
       {
        discover_weekly?.tracks.items.map(item => {
          return <SongRow track={item.track} />
        })
       }
      </div>
    </div>
  )
}

export default Body
