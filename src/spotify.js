const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "f1b868de105e49f7b30769853ea99786";
const redirectUri = process.env.ENVIRO === "production" ? "https://spotify-zeta-lyart.vercel.app/" : "http://localhost:5173/" ;

const permissions = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUri = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${permissions.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// get accesstoken from url 
export const getAccessToken = () => {
  return window.location.hash.substring(1).split("&")[0].split('=')[1]
}
