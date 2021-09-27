import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import {Picker} from '@react-native-picker/picker';
import { Button } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: "",
      typedPassword: "",
      typedName: "",
      typedAddress: "",
      typedZipCode: "",
      typedCity: "",
      typedState: "",
      typedPhoneNumber: "",
      UserOrVolunteer: "Admin",
      InvalidName: null,
      InvalidAddress: null,
      InvalidCity: null,
      InvalidZipCode: null,
      InvalidState: null,
      InvalidUsername: null,
      InvalidPassword: null,
      InvalidPhoneNumber: null,
      InvalidUserType: null,
      nonNumericPhoneNumber: null,
      LastName : "",
      InvalidLastName: null,
      Id: "",
      InvalidId: null,
      nonNumericId: null,
      typedSchool: "",
      InvalidSchool: null,
      typedBus: "",
      InvalidBus: null,
      Profession: "",
      InvalidProfession: null,
      data: null,
    };
  }
  componentDidMount() {
    const url = `http://localhost:8080/mongo/getBusDetails`;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json})
        console.log(json)
          .catch((err) => console.error(err))
          .finally(() => {
            this.setState({fetching: false});
          });
      });
      
  }
  onPress(
    Name,
    Username,
    Password,
    UserType,
    LastName,
    Id,
    StreetAddress,
    School,
  ) {
    
    if (
      Name.length != 0 &&
      Username.length != 0 &&
      Password.length != 0 &&
      UserType.length != 0 && 
      LastName.length != 0 &&
      Id.length != 0,
      StreetAddress.length != 0 &&
      School.length != 0 
    ) {
      console.log("SUP")
      console.log(parseInt(Id))
      fetch("http://localhost:8080/mongo/insertOrUpdateUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //2100 SW I St
        body: JSON.stringify({
          name: Name,
          username: Username,
          password: Password,  
          usertype: UserType,
          lastName: LastName,
          address: StreetAddress,
          id: Id,
          school: School,
        })
      });
      this.props.navigation.navigate("HomePage");
      return true;
    } else {
      if (Name.length == 0) {
        this.setState({ InvalidName: "" });
      }
      if (School.length == 0) {
        this.setState({ InvalidSchool: "" });
      }
      if (Username.length == 0) {
        this.setState({ InvalidUsername: "" });
      }
      if (Password.length == 0) {
        this.setState({ InvalidPassword: "" });
      }
      if (UserType.length == 0) {
        this.setState({ InvalidUserType: "" });
      }
      if (LastName.length == 0) {
        this.setState({ InvalidLastName: "" });
      }
      if (Id.length == 0) {
        this.setState({ InvalidId: "" });
      }
      if (/^\d+$/.test(Id) == false) {
        this.setState({ nonNumericId: "" });
      }
      if (StreetAddress.length == 0) {
        this.setState({ InvalidAddress: "" });
      }
    }
    
  }
  onPressed(itemValue) { 
    console.log(itemValue)
    this.setState({typedBus: itemValue}),
    this.setState({InvalidBus: itemValue})
    console.log("YO:O")
    console.log(this.state.typedBus)
    console.log("YO:O))))")
    console.log(this.state.typedBus)
  }
  onPress2(
    Name,
    Username,
    Password,
    UserType,
    LastName,
    Id,
    StreetAddress,
    School,
    Profession
  ) {
    if (
      Name.length != 0 &&
      Username.length != 0 &&
      Password.length != 0 &&
      UserType.length != 0 && 
      LastName.length != 0 &&
      Id.length != 0,
      StreetAddress.length != 0 &&
      School.length != 0 &&
      Profession.length != 0
    ) {
      fetch("http://localhost:8080/mongo/insertOrUpdateUserProfession", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          username: Username,
          password: Password,  
          usertype: UserType,
          lastName: LastName,
          address: StreetAddress,
          id: Id,
          school: School,
          profession: Profession
        })
      });
      this.props.navigation.navigate("HomePage");
      return true;
    } else {
      if (Name.length == 0) {
        this.setState({ InvalidName: "" });
      }
      if (Profession.length == 0) {
        this.setState({ InvalidProfession: "" });
      }
      if (School.length == 0) {
        this.setState({ InvalidSchool: "" });
      }
      if (Username.length == 0) {
        this.setState({ InvalidUsername: "" });
      }
      if (Password.length == 0) {
        this.setState({ InvalidPassword: "" });
      }
      if (UserType.length == 0) {
        this.setState({ InvalidUserType: "" });
      }
      if (LastName.length == 0) {
        this.setState({ InvalidLastName: "" });
      }
      if (Id.length == 0) {
        this.setState({ InvalidId: "" });
      }
      if (/^\d+$/.test(Id) == false) {
        this.setState({ nonNumericId: "" });
      }
      if (StreetAddress.length == 0) {
        this.setState({ InvalidAddress: "" });
      }
    }
    
  }
  render() {
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
            <View style={{ backgroundColor: "#f0ffff" }}>
              <Text style={styles.titleStyle}>
                {" "}
                Create
                <Text style={styles.titleStyle2}> an </Text>
                <Text style={styles.titleStyle}>Account </Text>
              </Text>
              <Text style = {styles.subheadingStyle}>Admin or Parent?</Text>
              <Text style = {{marginBottom: -25}}></Text>
              <Picker
            selectedValue={this.state.UserOrVolunteer}
            onValueChange={(itemValue, itemIndex) => {
                if (this.state.InvalidUserType == "") {
                  this.setState({InvalidUserType: "Admin"})
                }
                if (this.state.InvalidProfession == "") {
                  this.setState({InvalidProfession: "Profession"})
                }
                console.log(this.state.Profession)
                this.setState({UserOrVolunteer: itemValue}),
                this.setState({InvalidUserType: itemValue})
            }
            }>
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="Parent" value="Parent" />
            </Picker>
              {this.state.InvalidUserType == "" && (
                <Text style={styles.errorText2}>
                  Please choose either User or Volunteer
                </Text>
              )}

              <Text style={styles.subheadingStyle2}> Enter your First Name </Text>
              <TextInput
                placeholder="Please enter your First Name"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedName: text,
                      InvalidName: text,
                    };
                  });
                }}
              />
              {this.state.InvalidName == "" && (
                <Text style={styles.errorText}>Please enter a First Name</Text>
              )}
              <Text style={styles.subheadingStyle}> Enter your Last Name </Text>
              <TextInput
                placeholder="Please enter your Last Name"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      LastName: text,
                      InvalidLastName: text,
                    };
                  });
                }}
              />
              {this.state.InvalidLastName == "" && (
                <Text style={styles.errorText}>Please enter a Last Name</Text>
              )}
              <Text style={styles.subheadingStyle2}> Enter your Student Id  </Text>
              <TextInput
                placeholder="Please enter your Student Id"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      Id: text,
                      InvalidId: text,
                      nonNumericId: text
                    };
                  });
                }}
              />
              {this.state.InvalidId == "" && (
                <Text style={styles.errorText}>Please enter a Id</Text>
              )}
              {(this.state.nonNumericId == "" && this.state.InvalidId != "") && (
                <Text style={styles.errorText}>Your Id can't have letters!</Text>
              )}
              {this.state.UserOrVolunteer == "Parent" && (
              <View>
              <Text style={styles.subheadingStyle}>
                {" "}
                Enter your Parent or Guardian's Email{" "}
              </Text>
              <TextInput
                placeholder="Please enter the email here"
                keyboardType="email-address"
                placeholderTextColor="#808080"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedText: text,
                      InvalidUsername: text,
                    };
                  });
                }}
              />
              </View>
              )}
              {this.state.UserOrVolunteer == "Admin" && (
              <View>
              <Text style={styles.subheadingStyle}>
                {" "}
                Enter your Admin Email{" "}
              </Text>
              <TextInput
                placeholder="Please enter the email here"
                keyboardType="email-address"
                placeholderTextColor="#808080"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedText: text,
                      InvalidUsername: text,
                    };
                  });
                }}
              />
              </View>
              )}
              {this.state.InvalidUsername == "" && (
                <Text style={styles.errorText}>Please enter a Username</Text>
              )}
              <Text style={styles.subheadingStyle2}> Enter a Password</Text>
              <TextInput
                placeholder="Please enter your new password"
                keyboardType="email-address"
                placeholderTextColor="#808080"
                style={styles.passwordstyle}
                secureTextEntry={true}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedPassword: text,
                      InvalidPassword: text,
                    };
                  });
                }}
              />
              {this.state.InvalidPassword == "" && (
                <Text style={styles.errorText}>Please enter a Password</Text>
              )}
              <Text style={styles.subheadingStyle}> Enter your Address </Text>
              <TextInput
                placeholder="Please enter your Street Address"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedAddress: text,
                      InvalidAddress: text,
                    };
                  });
                }}
              />
              {this.state.InvalidAddress == "" && (
                <Text style={styles.errorText}>Please enter a Address</Text>
              )}
               <Text style={styles.subheadingStyle2}> Enter your School </Text>
              <TextInput
                placeholder="Please enter your School"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedSchool: text,
                      InvalidSchool: text,
                    };
                  });
                }}
              />
              {this.state.InvalidSchool == "" && (
                <Text style={styles.errorText}>Please enter a School</Text>
              )}
             
              {this.state.UserOrVolunteer == "Admin" && (
                <View>
               <Text style={styles.subheadingStyle2}> Enter your Profession </Text>
              <TextInput
                placeholder="Please enter your Profession (e.x. Bus Driver, Counselor.)"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      Profession: text,
                      InvalidProfession: text,
                    };
                  });
                }}
              />
            </View>
              )
              }
              {this.state.InvalidProfession == "" && (
                <Text style={styles.errorText}>Please enter a Profession</Text>
              )}
              {this.state.UserOrVolunteer == "Parent" && (
                <Button
                large
                full
                style={styles.StyleforButton}
                onPress={() =>
                  this.onPress(
                    this.state.typedName,
                    this.state.typedText,
                    this.state.typedPassword,
                    this.state.UserOrVolunteer,
                    this.state.LastName,
                    this.state.Id,
                    this.state.typedAddress,
                    this.state.typedSchool,
                  )
                }
                >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>
                  {' '}
                  Submit{' '}
                </Text>
              </Button>
              )}
              {this.state.UserOrVolunteer == "Admin" && (
                <Button
                large
                full
                style={styles.StyleforButton}
                onPress={() =>
                  this.onPress2(
                    this.state.typedName,
                    this.state.typedText,
                    this.state.typedPassword,
                    this.state.UserOrVolunteer,
                    this.state.LastName,
                    this.state.Id,
                    this.state.typedAddress,
                    this.state.typedSchool,
                    this.state.Profession,
                   )
                }
                >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>
                  {' '}
                  Submit{' '}
                </Text>
              </Button>
              )}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  emailstyle: {
    height: 40,
    margin: 20,
    borderTopWidth: 0,
    borderBottomColor: "black",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    padding: 10,
  },
  passwordstyle: {
    height: 40,
    margin: 20,
    borderTopWidth: 0,
    borderBottomColor: "black",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    padding: 10,
  },
  titleStyle: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 50,
    marginBottom: 20,
  },
  titleStyle2: {
    color: "#008b8b",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 50,
    marginBottom: 20,
  },

  subheadingStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 22.5,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subheadingStyle2: {
    color: "#008b8b",
    textAlign: "center",
    fontSize: 22.5,
    fontWeight: "bold",
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    marginLeft: 20,
    fontSize: 15,
    marginBottom: 10,
  },
  errorText2: {
    color: "red",
    marginLeft: 20,
    fontSize: 15,
    marginBottom: 10,
  },
  StyleforButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#4EA688',
    backgroundColor: 'transparent',
    padding: 10,
    fontSize: 20,
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '5%',
    marginTop: '5%',
  },
});