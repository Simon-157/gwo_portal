import {
  HomeIcon,
  TasksIcon,
  BoltIcon,
  ProfileIcon,
  GearIcon,
  LogoutIcon,
  MoreIcon,
  AddIcon,
} from "@/assets/icons/Icons";

export const PAGES = [
  {
    name: "home",
    path: "home",
    icon: <HomeIcon />,
  },  
  {
    name: "new blog",
    path: "new",
    icon: <AddIcon />,
  },
  {
    name: "published",
    path: "published",
    icon: <TasksIcon />,
  },
  {
    name: "analytics",
    path: "analytics",
    icon: <BoltIcon />,
  },
  {
    name: "profile",
    path: "profile",
    icon: <ProfileIcon />,
  },
  {
    name: "more",
    path: "more",
    icon: <MoreIcon />,
  },
];

export const EXTRA_MENU = [
  {
    name: "settings",
    path: "settings",
    icon: <GearIcon />,
  },
  {
    name: "logout",
    path: "#",
    icon: <LogoutIcon />,
  },
];
