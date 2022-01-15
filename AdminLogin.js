import React, { Component } from "react";
import { View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  LogBox} from "react-native";

Credentials = [
  {
    userName: "Anish",
    password: "abcdefgh",
    email: "",
    type: "User",
  },
  {
    userName: "Aryan",
    password: "abcdef",
    email: "",
    type: "Volunteer",
  },
];
export default class AdminLogin extends Component {
  state = {
    isLoading: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      typedText: "",
      typedPassword: "",
      newUser: false,
      modalVisible: false,
      UserName: null,
      PassWord: null,
      userNameError: null,
      passWordError: null,
      userNameAndPasswordError: null,
      inValidUser: null,
      data: null
    };
  }
  
  checkForCredentials(Username, Password) {
    let UserName = this.state.UserName;
    let PassWord = this.state.PassWord;
    if (Password == "" && Username == "") {
      this.setState({ UserName: "", PassWord: "" });
    } else if (Password == "") {
      this.setState({ PassWord: "" });
    } else if (Username == "") {
      this.setState({ UserName: "" });
    } else {
      const url = `http://localhost:8080/mongo/getUserDetailsByUserNameAndPassword?username=${Username}&password=${Password}`;
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({ checkCredential: json }, () => {
            this.validateCredential(json);
          })
            .catch((err) => {
              this.setState({ inValidUser: "" });
              console.error(err);
            })
            .finally(() => {
              this.setState({ fetching: false });
            });
        });
    }
  }

  validateCredential = (checkCredential) => {
    console.log("HEY HEY HEY HEY")
    console.log("checkCredential", checkCredential);
    if (
      !checkCredential ||
      (checkCredential && Object.keys(checkCredential).length === 0)
    ) {
      this.setState({ inValidUser: "" })
    } else if (checkCredential && checkCredential.hasOwnProperty("0")) {

          this.props.navigation.navigate("Dashboard", {
            user: checkCredential["0"],
            UserOrAdmin: "User"
          });
          console.log("HEY HEY HEY HEY")
        return true;
      }
    
  };
  /*<Text style={styles.subheadingStyle}>
          User Name: {JSON.stringify(USERNAME)}
        </Text>
        <Text style={styles.subheadingStyle}>
          Password: {JSON.stringify(PASSWORD)}
        </Text>*/
  render() {
    const NAME = this.props.navigation.getParam("Name", "value");
    const ADDRESS = this.props.navigation.getParam("Address", "value");
    const USERNAME = this.props.navigation.getParam("userName", "value");
    const PASSWORD = this.props.navigation.getParam("password", "value");
    const newCredentials = {
      userName: USERNAME,
      password: PASSWORD,
    };
    Credentials.push(NAME, newCredentials);
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
        keyboardVerticalOffset={100}
        enabled
      >
        <ScrollView>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
      <View style={{ backgroundColor: "#ffffff" }}>
        <View style = {{backgroundColor: "#3CB982"}}>
        <Text style={styles.titleStyle}>
          Login
          <Text style={styles.titleStyle2}> Page </Text>
        </Text>
        </View>
        <Text style={{ marginTop: 50 }}></Text>
        <Text style={styles.subheadingStyle2}>Please enter your email:</Text>
        <TextInput
          style={styles.emailstyle}
          keyboardType="email-address"
          placeholder="Please enter your Username/Email"
          placeholderTextColor="#808080"
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                typedText: text,
                UserName: text,
                inValidUser: undefined,
                //userNameAndPasswordError: text,
                //userNameError: text,
              };
            });
          }}
        />
        {this.state.UserName === "" && (
          <Text style={styles.errorText}>Please enter your Parent's email</Text>
        )}
        {this.state.inValidUser === "" && (
          <Text style={styles.errorText}>Your credentials are incorrect</Text>
        )}
        <Text style={{ marginBottom: 50 }}></Text>
        <Text style={styles.subheadingStyle}>Password:</Text>
        <TextInput
          style={styles.passwordstyle}
          keyboardType="email-address"
          placeholder="Please enter your password"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                typedPassword: text,
                PassWord: text,
                inValidUser: undefined,
                //userNameAndPasswordError: text,
                //passWordError: text,
              };
            });
          }}
        />
        {this.state.PassWord === "" && (
          <Text style={styles.errorText}>Please enter a Password</Text>
        )}
        {this.state.inValidUser === "" && (
          <Text style={styles.errorText}>Your credentials are incorrect</Text>
        )}
        <Text style={{ marginBottom: 50 }}></Text>
        <View style={{ fontSize: 30 }}>
          <Button
            title="Submit"
            color="#3CB982"
            onPress={() =>
              this.checkForCredentials(
                this.state.typedText,
                this.state.typedPassword
              )
            }
          ></Button>
        </View>
        <View style={styles.ButtonContainer}>
          <Text style={{ fontSize: 18, marginRight: 10 }}> New to app?     </Text>
          <Button
            title="Create an account"
            color="#3CB982"
            onPress={() => this.props.navigation.navigate("CreateAccount")}
          />
        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#008b8b",
  },
  emailstyle: {
    height: 40,
    margin: 20,
    borderTopWidth: 0,
    borderBottomColor: "#3CB982",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    marginTop: 20
  },
  passwordstyle: {
    height: 40,
    margin: 20,
    borderTopWidth: 0,
    borderBottomColor: "#3CB982",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  titleStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 100,
    marginBottom: 90,
  },
  titleStyle2: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 100,
    marginBottom: 55,
  },
  subheadingStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 22.5,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subheadingStyle2: {
    color: "black",
    textAlign: "center",
    fontSize: 22.5,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    alignItems: "center",
    marginLeft: 80,
  },
  errorText: {
    color: "red",
    marginTop: 0,
    marginLeft: 20,
    fontSize: 15,
    marginBottom: 0,
  },
});
