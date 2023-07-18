import { assets } from "@/public/assets";
import ServiceMenu from "../serviceMenu";
import Avatar from "../ui/avatar/Avatar";
import { Container, Overlay, Trigger } from "./userDropdown.styles";

const UserDropdown = () => {
  return (
    <Container>
      <ServiceMenu
        trigger={<Avatar initials="ph" />}
        routes={[
          { name: "profile", path: "/" },
          { name: "Dashboard", path: "/" },
          { name: "signOut", path: "/" },
        ]}
      />
    </Container>
  );
};

export default UserDropdown;
