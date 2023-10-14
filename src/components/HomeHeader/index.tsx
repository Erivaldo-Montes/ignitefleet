import { Power } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { Container, Greeting, Message, Name, Picture } from "./styles";
import { useUser, useApp } from "@realm/react";
import theme from "../../theme";

export function HomeHeader() {
  const user = useUser();
  const app = useApp();

  async function handleLogout() {
    await app.currentUser?.logOut();
  }

  return (
    <Container>
      <Picture
        source={user.profile.pictureUrl}
        placeholder={"L18NqdoffQof00ayfQay~qj[fQj["}
      />
      <Greeting>
        <Message>Olá,</Message>

        <Name>{user.profile.name}</Name>
      </Greeting>
      <TouchableOpacity onPress={handleLogout} activeOpacity={0.7}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
}
