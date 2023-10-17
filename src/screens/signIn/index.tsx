import { useEffect, useState } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { Realm, useApp } from "@realm/react";
import { Container, Slogan, Title } from "./styles";
import backgroundSignIn from "../../assets/background-signIn.png";
import { Button } from "../../components/Button";
import { WEB_CLIENT_ID, IOS_CLIENT_ID } from "@env";
import { Alert } from "react-native";

GoogleSignin.configure({
  iosClientId: IOS_CLIENT_ID,
  webClientId: WEB_CLIENT_ID,
});

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const app = useApp();
  async function handleGoogleSignIn() {
    setIsAuthenticating(true);

    try {
      const { idToken } = await GoogleSignin.signIn();
      if (idToken) {
        const credentials = Realm.Credentials.jwt(idToken);
        app.logIn(credentials);
      }
    } catch (error) {
      setIsAuthenticating(false);
      console.log(error);
      Alert.alert("Não foi possível fazer login");
    }
  }

  return (
    <Container source={backgroundSignIn}>
      <Title>Ignite fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>

      <Button
        title={"Entrar com o google"}
        onPress={handleGoogleSignIn}
        isLoading={isAuthenticating}
      />
    </Container>
  );
}
