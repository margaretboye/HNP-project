import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";

const K = {
  NAVLINKS: [
    {
      name: "HOME",
      icon: <AiOutlineHome size={25} />,
      id: "#home",
    },
    {
      name: "ABOUT US",
      icon: <AiOutlineUser size={23} />,
      id: "#about",
    },
    {
      name: "SERVICES",
      icon: <RiCustomerServiceLine size={23} />,
      id: "#services",
    },

    {
      name: "CONTACT US",
      icon: <IoCallOutline size={23} />,
      id: "#contact",
    },
  ],
};

export default K;
