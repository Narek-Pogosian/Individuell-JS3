import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="products/create">Create</Link>
    </div>
  );
};

export default Home;