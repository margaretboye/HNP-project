import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

const K = {
  NAVLINKS: [
    {
      name: "Home",
      icon: <AiOutlineHome size={25} />,
      id: "#home",
    },
    {
      name: "About",
      icon: <AiOutlineUser size={23} />,
      id: "#about",
    },
    {
      name: "Products",
      icon: <RiCustomerServiceLine size={23} />,
      id: "#products",
    },
    {
      name: "Contact",
      icon: <IoCallOutline size={23} />,
      id: "#contact",
    },
  ],
  DISTRIBUTORS: [
    { name: "Distributor A", location: "Accra, Ghana" },
    { name: "Distributor B", location: "Kumasi, Ghana" },
    { name: "Distributor C", location: "Tamale, Ghana" },
    { name: "Distributor D", location: "Takoradi, Ghana" },
  ],
};

export default K;
