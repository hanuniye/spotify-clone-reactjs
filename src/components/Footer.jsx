import {
  Shuffle,
  PlayCircle,
  SkipNext,
  SkipPrevious,
  Repeat,
  PlaylistAdd,
  VolumeDown,
} from "@mui/icons-material";
import { Grid, Slider,  } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer flex justify-between items-center">
      <div className="left_footer flex items-center space-x-5 text-white">
        <img
          className="w-11 h-11"
          src="https://resizing.flixster.com/lFdqqf-ROS4HL0NhUg5NMbFDO74=/218x280/v2/https://flxt.tmsimg.com/assets/63862_v9_ba.jpg"
          alt=""
        />
        <div className="song_info">
          <h4 className="mb-1">All eyes on me</h4>
          <p className="text-sm">2bac</p>
        </div>
      </div>
      <div className="center_footer flex items-center justify-between w-56 text-white ">
        <Shuffle className="footer_center_icon text-green-500" />
        <SkipPrevious className="footer_center_icon" />
        <PlayCircle className="footer_center_icon" />
        <SkipNext className="footer_center_icon" />
        <Repeat className="footer_center_icon text-green-500" />
      </div>
      <div className="right_footer flex items-center space-x-3 w-60">
        <PlaylistAdd className="text-white" />
        <VolumeDown className="text-white" />
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};

export default Footer;
