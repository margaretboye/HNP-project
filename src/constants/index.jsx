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
    { id: 1, name: "Distributor 1" },
    { id: 2, name: "Distributor 2" },
  ],

  GALLERY: [
    { src: "/images/gallery1.jpg", alt: "Gallery Image 1" },
    { src: "/images/gallery2.jpg", alt: "Gallery Image 2" },
  ],
};

export default K;
