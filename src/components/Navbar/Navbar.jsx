import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuBurger} from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
    const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav>
     <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
        {
            open === true ?
             <MdOutlineClose></MdOutlineClose>
             :<CiMenuBurger></CiMenuBurger>
        }

     
     </div>
      <ul className="md:flex">
       {
        routes.map(route => <Link
            route={route}
            key={route.id}/>)
       }
      </ul>
    </nav>
  );
};

export default Navbar;
