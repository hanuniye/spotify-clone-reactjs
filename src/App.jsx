import { useState, useEffect } from 'react';
import Login from './pages/Login';
import { getAccessToken } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import useStateProviderContext from './hooks/useStateProviderContext';
import { DISCOVER_WEEKLY, PLAYLISTS_TYPE, TOKEN_TYPE, USER_TYPE } from './context/reducer';
import Player from './pages/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [ {user, token }, dispatch ] = useStateProviderContext();

  useEffect(() => {
    const _token = getAccessToken();
    window.location.hash = "";
    
    if(_token) {
      dispatch(
        {type: TOKEN_TYPE,
        payload: _token}
      )
      spotify.setAccessToken(_token);

      // u can fetch info. about current user by spotify.getMe() it returns promise that cries info about user
      spotify.getMe().then(user => {
        dispatch({
          type: USER_TYPE,
          payload: user
        })
      })

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: PLAYLISTS_TYPE,
          payload: playlists
        })
        
      })  
      
      spotify.getPlaylist("773bxOwIL7WF9Yo9U0yg2S").then(res => {
        dispatch({
          type: DISCOVER_WEEKLY,
          payload: res
        })
      })    
    }
  }, [])

  return (
    <div className="app" >
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  )
}

export default App


