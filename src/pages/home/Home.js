import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import List from "../../components/list/List";
import "./home.css"; 

const home = () => {
  return (
    <div className='home'>
        <Navbar/> 
        <Featured type="movie"/>
        <List />
        <List />
        <List />
        <List />
        

    </div>
  )
}

export default home