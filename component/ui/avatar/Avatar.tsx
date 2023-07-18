import { FC } from "react";
import { Container, Img, Initials } from "./avatar.styles";

interface AvatarProps {
  src?: string;
  initials?: string;
}

const Avatar: FC<AvatarProps> = ({ src, initials }) => {
  return (
    <Container>
      {src ? (
        <Img
          src={src}
          width={100}
          height={100}
          alt={initials ? initials : "avatar"}
        />
      ) : (
        <Initials>{initials}</Initials>
      )}
    </Container>
  );
};

export default Avatar;
