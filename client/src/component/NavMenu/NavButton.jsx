import { Link } from "react-router-dom";

const NavButton = ({ to, children, className }) => {
  return (
    <li className={className}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavButton;