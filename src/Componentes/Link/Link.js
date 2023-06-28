import { Link as NavLink } from "react-router-dom";

const Link = ({ to, ...props }) => (
  <NavLink {...props} to={process.env.PUBLIC_URL + to} />
);

export default Link;
