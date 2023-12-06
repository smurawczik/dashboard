import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";
  const isHome = location.pathname === "/";

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">TEAMER</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isHome}>
          <Link color={!isHome ? "foreground" : "primary"} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isDashboard}>
          <Link
            color={!isDashboard ? "foreground" : "primary"}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/sign-up" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
