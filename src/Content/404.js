import { Link } from "react-router-dom";
import "./404.css";
const NotFound = () => {
  return (
    <div>
      <h1>Oops....</h1>
      <h4>Page not found....</h4>
      <p>
        Go back to <Link to="/">Home page</Link>
      </p>
    </div>
  );
};

export default NotFound;
