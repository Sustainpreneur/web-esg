import Homepage from "../pages/Homepage";
import Insight from "../pages/Insight";
import Solutions from "../pages/Solutions";
import ESGProfile from "../pages/ESGProfile";
import AboutUs from "../pages/AboutUs";

export const MASTER_ROUTER_MODEL = [
  {
    id: "1",
    name: "HOME",
    title:"Home",
    router_path: "/",
    router_component: <Homepage />,
    items: [],
    is_active: true,
    is_show:true,
    is_banner:true
  },
  {
    id: "2",
    name: "SOLUTIONS",
    title:"Solutions",
    router_path: "/Solutions",
    router_component: <Solutions />,
    items: [],
    is_active: true,
    is_show:true,
    is_banner:true
  },
  {
    id: "3",
    name: "INSIGHT",
    title:"Insight",
    router_path: "/Insight",
    router_component: <Insight />,
    items: [],
    is_active: true,
    is_show:true,
    is_banner:true
  },
  {
    id: "4",
    name: "ESG-Profile",
    title:"ESG-Profile",
    router_path: "/ESG-Profile/:id",
    router_component: <ESGProfile />,
    items: [],
    is_active: true,
    is_show:false,
    is_banner:true
  },
  {
    id: "5",
    name: "AboutUs",
    title:"ABOUT US",
    router_path: "/About-Us",
    router_component: <AboutUs />,
    items: [],
    is_active: true,
    is_show:true,
    is_banner:true
  }
];