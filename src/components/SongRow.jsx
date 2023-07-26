
const SongRow = ({track}) => {
  return (
    <div className="flex items-center space-x-3 mt-7">
      <img className="h-[10vh] w-[10vh]" src={track?.album.images[0].url} alt="" />
      <div>
        <h4 className="font-bold capitalize tracking-wider">{track.name}</h4>
        <p className="text-[grey]">{
          track?.artists.map(artist => artist.name).join(" - ")} , {track?.album.name}</p>
      </div>
    </div>
  )
}

export default SongRow
