import Link from "next/link";
import { Button } from "./button";
import { Calendar1, House, Info } from "lucide-react";

// default export
export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <House />,
    },
    {
      name: "About",
      link: "/about",
      icon: <Info />,
    },
    // {
    //   name: "Login",
    //   link: "/auth/login",
    // },
    // {
    //   name: "Register",
    //   link: "/auth/register",
    // },
    // {
    //   name: "Profile",
    //   link: "/profile",
    // },
    {
      name: "Gigs",
      link: "/gigs",
      icon: <Calendar1 />,
    },
  ];

  return (
    <div className="my-6 mx-4 flex justify-center-safe flex-wrap">
      {navItems.map((navItem, i) => {
        return (
          <Link key={i} href={navItem.link}>
            <Button className="m-1 bg-white text-black border border-black">
              {navItem.icon}
              {navItem.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
