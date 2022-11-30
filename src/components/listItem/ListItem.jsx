import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./listItem.scss"
import { useState } from "react"

function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);
  // const trailer = "https://player.vimeo.com/video/197757517?h=2fbbbf8d0a";
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (

    <div className="listItem" 
      style={{left: isHovered && index * 250 -50 + index * 2.5}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)}>
      <img 
        src="https://thecinemaholic.com/wp-content/uploads/2019/05/easy-review.jpg" 
        alt="" 
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay muted loop />
          <div className="itemsInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemsInfoTop">
              <span> 1 hour 24 mins </span>
              <span className="limits">+16</span>
              <span>2022</span>
            </div>
          <div className="dscp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
          <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem