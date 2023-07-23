import { assets } from "@/public/assets";
import ServiceMenu from "../serviceMenu";
import Avatar from "../ui/avatar/Avatar";
import { Container } from "./userDropdown.styles";

const UserDropdown = () => {
  return (
    <Container>
      <ServiceMenu
        trigger={<Avatar initials="ph" />}
        routes={[
          { name: "Profile", path: "/profile" },
          { name: "Dashboard", path: "/dashboard" },
          { name: "signOut", path: "/" },
        ]}
      />
    </Container>
  );
};

export default UserDropdown;
