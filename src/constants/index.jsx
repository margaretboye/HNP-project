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
      name: "Resources",
      icon: <RiCustomerServiceLine size={23} />,
      id: "#resources",
    },

    {
      name: "Contact",
      icon: <IoCallOutline size={23} />,
      id: "#contact",
    },
  ],
};

export default K;
