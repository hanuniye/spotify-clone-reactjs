import React from 'react'
import SideBarOptions from './SideBarOptions';
import { Home, Search, LibraryMusic } from '@mui/icons-material';
import useStateProviderContext from '../hooks/useStateProviderContext';

const Sidebar = () => {
    const [{ playlists }] = useStateProviderContext();
    console.log(playlists);
  return (
    <div className='sidebar w-56 border border-black px-5 py-1 bg-[#040404] '>
      <img className='h-16' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify_logo" />
      <SideBarOptions title="Home" Icon= {Home} />
      <SideBarOptions title="Search" Icon= {Search} />
      <SideBarOptions title="Yout Library" Icon= {LibraryMusic} />

      <br/>
      <strong className='text-white text-sm font-bold'>PLAYLISTS</strong>
      <hr className='border border-[#282828] mt-3' />

      {
        playlists?.items?.map((playlist, index) => (
          <SideBarOptions key={index} title={playlist.name} />
        ))
      }
    </div>
  )
}

export default Sidebar
