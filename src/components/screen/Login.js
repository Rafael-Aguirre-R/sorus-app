import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  useEffect(() => {
    navigation.setOptions({ title: "", headerShown: false });
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("src/assets/sorus.png")} />
      <Text style={styles.text}>SORUS</Text>

      {/* InputEmail */}
      <Text style={styles.textE}>Correo electrónico</Text>
      <View style={styles.inputViewEmail}>
        <TextInput
          value={email}
          style={[styles.TextInput, { width: "100%" }]}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      {/* InputPassword */}
      <Text style={styles.textP}>Contraseña</Text>
      <View style={styles.inputViewPass}>
        <TextInput
          style={styles.TextInput}
          placeholder="*****************"
          autoCompleteType="password"
          autoCorrect={false}
          secureTextEntry={hidePass ? true : false}
          onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
          <Icon name={hidePass ? "eye-slash" : "eye"} size={20} color="grey" />
        </TouchableOpacity>
      </View>

      {/* Boton olvide contraseña */}
      <TouchableOpacity style={{ alignSelf: "flex-end", paddingRight: 40 }}>
        <Text style={styles.forgot_button}>Olvide la contraseña</Text>
      </TouchableOpacity>

      {/* Boton inicio de sesion */}
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Boton registrarse */}
      <TouchableOpacity style={styles.singinBtn}>
        <Text style={styles.singinText}>Registrarse</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272640",
    alignItems: "center",
  },
  image: {
    marginTop: 80,
    width: 132,
    height: 119,
  },
  inputViewEmail: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: 340,
    height: 40,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  inputViewPass: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: 340,
    height: 40,
    marginBottom: 10,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  TextInput: {
    height: 50,
    padding: 10,
    width: 305,
    fontFamily: "Roboto",
  },

  forgot_button: {
    height: 15,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 14,
    color: "#FFFFFF",
  },

  loginBtn: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    width: "40%",
    height: 38,
    backgroundColor: "#4D194D",
    marginTop: 20,
  },
  loginText: {
    position: "absolute",
    height: 22,
    top: 8,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    color: "#FFFFFF",
  },

  singinBtn: {
    display: "flex",
    alignItems: "center",
    borderRadius: 10,
    width: "40%",
    height: 38,
    backgroundColor: "#737373",
    marginTop: 10,
  },

  singinText: {
    position: "absolute",
    height: 22,
    top: 9,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    color: "#FFFFFF",
  },

  text: {
    textAlign: "center",
    alignItems: "center",
    width: "30%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 42,
    color: "#FFFFFF",
  },
  textE: {
    alignSelf: "flex-start",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 20,
    color: "#FFFFFF",
    marginLeft: 40,
    marginTop: 20,
  },
  textP: {
    alignSelf: "flex-start",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    color: "#FFFFFF",
    marginLeft: 40,
    marginBottom: 5,
  },
  icon: {
    color: "#000",
    backgroundColor: "#000",
  },
  inputPassword: {},
});
