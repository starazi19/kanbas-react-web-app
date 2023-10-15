import { Link, useLocation } from "react-router-dom";

// figure out how to import fontawesome + bootstrap

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = ["fa-solid fa-user","fa-solid fa-gauge-high", "fa-solid fa-book", "fa-solid fa-calendar-days", "fa-solid fa-inbox", "fa-solid fa-clock", "fa-solid fa-desktop", "fa-solid fa-right-from-bracket", "fa-solid fa-circle-question"];
  const { pathname } = useLocation();
  return (
    <ul className="list-group">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {icons.map((icon, index) => (
            <i key={index} className={icon}></i>
          ))}
          {link}
        </Link>
      ))}
    </ul>
  );
}
export default KanbasNavigation;