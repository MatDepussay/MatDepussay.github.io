import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { profile } from "../data/profile";

export default function Layout() {
  return (
    <div id="PageCentrale">
      <Nav />
      <Outlet />
      <Footer socials={profile.socials} contact={profile.contact} />
    </div>
  );
}
