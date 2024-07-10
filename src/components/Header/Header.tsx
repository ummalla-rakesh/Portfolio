import { FC } from "react";
import "./Header.scss";
import { MdDarkMode } from "react-icons/md";
import { ReactComponent as RakeshLog } from "./rakesh-logo.svg";
const Header: FC = () => {
  const homeEventHandler = () => {};
  const projectEventHandler = () => {};
  const ExperienceEventHandler = () => {};
  return (
    <header>
      <nav className="navigation">
        <RakeshLog />
        <ul className="navigation__list">
          <li onClick={homeEventHandler}>Home</li>
          <li onClick={projectEventHandler}>Projects</li>
          <li onClick={ExperienceEventHandler}>Experience</li>
          <li>
            <button className="btn primary">Get in contact</button>
          </li>
          <li>
            <button className="btn-icon">
              <MdDarkMode size={24}/>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
