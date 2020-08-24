import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, seterrorEmail] = useState(" ");
  const [errorPassword, seterrorPassword] = useState(" ");
  const [hiddenTextEmail, sethiddenTextEmail] = useState(0);
  const [hiddenTextPassword, sethiddenTextPassword] = useState(0);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function onLogin() {
    // Email validation
    if (username.length > 0) {
      validateEmail(username)
        ? (seterrorEmail(" "), sethiddenTextEmail(0))
        : (seterrorEmail(
            "Please enter your email address in format: yourname@example.com"
          ),
          sethiddenTextEmail(20));
    } else {
      seterrorEmail("Username Field is Empty");
      sethiddenTextEmail(20);
    }

    // Password Validation
    password.length > 0
      ? (seterrorPassword(" "), sethiddenTextPassword(0))
      : (seterrorPassword("Password Field is Empty"),
        sethiddenTextPassword(20));
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>This is from login screen</Text>
      <TextInput
        style={{
          width: "100%",
          height: 50,
          borderColor: "gray",
          borderWidth: 1,
          marginVertical: 10,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        placeholder="Email"
        placeholderTextColor="#000"
        onChangeText={(name) => {
          setUsername(name);
        }}
        value={username}
      ></TextInput>
      <Text
        style={{
          color: "red",
          lineHeight: hiddenTextEmail,
          fontSize: 13,
        }}
      >
        {errorEmail}
      </Text>
      <TextInput
        style={{
          width: "100%",
          height: 50,
          borderColor: "gray",
          borderWidth: 1,
          marginVertical: 10,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        placeholder="Password"
        placeholderTextColor="#000"
        secureTextEntry
        onChangeText={(password) => {
          setPassword(password);
        }}
        value={password}
      ></TextInput>
      <Text
        style={{
          color: "red",
          lineHeight: hiddenTextPassword,
          fontSize: 13,
        }}
      >
        {errorPassword}
      </Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          onLogin();
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  Button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
});

export default Login;
