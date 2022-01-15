import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
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
      InvalidProfession: null
    };
  }
  onPress3(Name,
    Username,
    Password,
    UserType,
    LastName,
    Id,
    StreetAddress,
    School,
    Bus) {
    console.log("Print")
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
    Bus
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
      Bus.length != 0
    ) {
      fetch("http://localhost:8080/mongo/insertOrUpdateUser", {
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
          bus: Bus
        })
      });
      this.props.navigation.navigate("HomePage");
      return true;
    } else {
      if (Name.length == 0) {
        this.setState({ InvalidName: "" });
      }
      if (Bus.length == 0) {
        this.setState({ InvalidBus: "" });
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
            <View style={{ backgroundColor: "#ffffff" }}>
            <View style = {{backgroundColor: "#3CB982"}}> 
              <Text style={styles.titleStyle}>
                {" "}
                Create
                <Text style={styles.titleStyle2}> an </Text>
                <Text style={styles.titleStyle}>Account </Text>
              </Text>
              </View>
              <Text style={{marginBottom: 50}}> </Text>
              <Text style = {styles.subheadingStyle}>Choose which bus to delete:</Text>
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
            <Picker.Item label="142" value="143" />
            <Picker.Item label="143" value="143" />
            </Picker>
              {this.state.InvalidUserType == "" && (
                <Text style={styles.errorText2}>
                  Please choose either User or Volunteer
                </Text>
              )}

                <Button
                large
                full
                style={styles.StyleforButton}
                // onPress={() =>
                //   this.onPress2(
                //     this.state.typedName,
                //     this.state.typedText,
                //     this.state.typedPassword,
                //     this.state.UserOrVolunteer,
                //     this.state.LastName,
                //     this.state.Id,
                //     this.state.typedAddress,
                //     this.state.typedSchool,
                //     this.state.Profession
                //   )
                // }
                >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    textAlign: 'center',
                    color: "white"
                  }}>
                  {' '}
                  Delete{' '}
                </Text>
              </Button>
              <Text style = {{marginBottom: 500}}>

              </Text>
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
    borderBottomColor: "#3CB982",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    padding: 10,
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
  },
  titleStyle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 100,
    marginBottom: 100,
    justifyContent: 'center'
  },
  titleStyle2: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'center'
  },

  subheadingStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 22.5,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subheadingStyle2: {
    color: "#3CB982",
    textAlign: "center",
    fontSize: 22.5,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subheadingStyle3: {
    color: "black",
    textAlign: "center",
    fontSize: 22.5,
    fontWeight: "bold",
    marginBottom: -30,
    marginTop: 50
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
    borderColor: '#3CB982',
    backgroundColor: '#3CB982',
    padding: 10,
    fontSize: 20,
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '5%',
    marginTop: '5%',
  },
});