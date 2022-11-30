import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import image from '../../images/matrix-removebg-preview.png';

import "./featured.scss"


function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type ==="movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="histroical">Histroical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
                
            </div>
        )}
        <img src="https://thecinemaholic.com/wp-content/uploads/2019/05/easy-review.jpg" alt="" />
        
        <div className="info">
            <img src={image} alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum nemo ducimus 
                consectetur magni minus cupiditate, consectetur magni minus cupiditate,
                culpa asperiores. Eius autem harum ipsum culpa aut est ratione mollitia assumenda,
                corporis error. consectetur magni minus cupiditate,
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    
    </div>
  )
}

export default Featured