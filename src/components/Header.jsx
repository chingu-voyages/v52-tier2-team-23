import { Link } from "react-router-dom";
import logo from "/placeholder-logo.webp";
import { Button } from "./ui/button";

export default function Header() {
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Why Solar",
      link: "#why-solar",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header className=" text-black py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              className="h-14 w-auto"
              src={logo}
              alt="Solar Energy Solutions"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {menuItems &&
              menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="hover:text-orange-400">
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="flex gap-4">
          <Link to="/admin-login">
            <Button>Admin Login</Button>
          </Link>
          <Button variant="outline">Register</Button>
        </div>
      </div>
    </header>
  );
}
