import "./Home.css";
import Agents from "../Agents/Agents";
import Search from "../Search/Search";


const Home = (): JSX.Element => {
  return (
    <>
      <Search />
      <Agents />
    </>
  );
};

export default Home;
