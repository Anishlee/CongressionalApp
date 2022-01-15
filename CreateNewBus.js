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
import Geocoder from 'react-native-geocoding';
import {Picker} from '@react-native-picker/picker';
import { Button } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
export default class CreateNewBus extends Component {
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
      location: "",
      locationTwo : "",
      location2: "",
      location2Two: "",
      location3: "",
      location3Two: "",
      location4: "",
      location4Two: "",
      location5: "",
      location5Two: "",
      typedStopOne: "",
      typedStopTwo: "",
      typedStopThree: "",
      typedStopFour: "",
      typedStopFive: "",
      InvalidTypedStopOne: null,
      InvalidTypedStopTwo: null,
      InvalidTypedStopThree: null,
      InvalidTypedStopFour: null,
      InvalidTypedStopFive: null,
    };
  }
  onPress2(location1, location2, location3, location4, location5) { 
    console.log("SWAGDOG")
    console.log(location1)
          console.log(location2)
          console.log(location3)
          console.log(location4)
          console.log(location5)
  }
  onPress(
    BusNumber,
    DriverName,
    MorningStartTime,
    EveningStartTime,
    Stop1,
    Stop2,
    Stop3,
    Stop4,
    Stop5,
  ) {
    if (
      BusNumber.length != 0 &&
      DriverName.length != 0,
      MorningStartTime.length != 0 &&
      EveningStartTime.length != 0 &&
      Stop1.length != 0 &&
      Stop2.length != 0 &&
      Stop3.length != 0 &&
      Stop4.length != 0 &&
      Stop5.length != 0 
    ) {
      var location1 = null
      var location2 = null
      var location3 = null
      var location4 = null
      var location5 = null
      Geocoder.init("AIzaSyCZFLVdL2BjQynBBsq1QFDTTwSq7lOwaBc");
      for(var i = 0; i < 5; i++) {
        console.log(i)
        if (i == 0) {
          Geocoder.from(Stop1)
      .then(json => {
          location = json.results[0].geometry.location;
          location1 = json.results[0].geometry.location;
          console.log("Y(*)")
          console.log(location["lng"])
          console.log(location["lat"])
          this.setState({location: location["lng"]})
          this.setState({locationTwo: location["lat"]}) 
          console.log(this.state.location)
          console.log(this.state.locationTwo)
      })
      .catch(error => console.warn(error));
        }
        else if (i == 1) {
          Geocoder.from(Stop2)
      .then(json => {
        console.log("Y(*)(*)")
          location = json.results[0].geometry.location;
          location2 = json.results[0].geometry.location;
          this.setState({location2: location["lng"]})
          this.setState({location2Two: location["lat"]}) 
      })
      .catch(error => console.warn(error));
        }
        else if (i == 2) {
          Geocoder.from(Stop3)
      .then(json => {
          location = json.results[0].geometry.location;
          location3 = json.results[0].geometry.location;
          this.setState({location3: location["lng"]})
          this.setState({location3Two: location["lat"]}) 
      })
      .catch(error => console.warn(error));
        }
        else if (i == 3) {
          Geocoder.from(Stop4)
      .then(json => {
          location = json.results[0].geometry.location;
          location4 = json.results[0].geometry.location;
          this.setState({location4: location["lng"]})
          this.setState({location4Two: location["lat"]}) 
      })
      .catch(error => console.warn(error));
        }
        else if (i == 4) {
          Geocoder.from(Stop5)
      .then(json => {
          location = json.results[0].geometry.location;
          location5 = json.results[0].geometry.location;
          this.setState({location5: location["lng"]})
          this.setState({location5Two: location["lat"]}) 
          console.log("DUASE")
          console.log(location1["lat"])
          console.log(location2)
          console.log(location3)
          console.log(location4)
          console.log(location5)
        fetch("http://localhost:8080/mongo/insertOrUpdateBusDetails", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            busNumber: parseInt(BusNumber),
            driverName: DriverName,
            stopOneLat: location1["lat"],
            stopOneLong: location1["lng"],
            stopTwoLat: location2["lat"],
            stopTwoLong: location2["lng"],
            stopThreeLat: location3["lat"],
            stopThreeLong: location3["lng"],
            stopFourLat: location4["lat"],
            stopFourLong: location4["lng"],
            stopFiveLat: location5["lat"],
            stopFiveLong: location5["lng"],
            morningStartTime: MorningStartTime,
            endingStartTime: EveningStartTime,
        })
      });
      })
      .catch(error => console.warn(error));
        }
      }
      
      
      
      
      
      
      
      
    console.log(this.state.location, " YOLO33333");
    console.log(this.state.locationTwo, " YOLO3333333333")
      console.log(this.state.location)
      console.log(this.state.location.long)
      console.log(BusNumber)
      console.log(DriverName)
      console.log(MorningStartTime)
      console.log(EveningStartTime)
      this.props.navigation.navigate("Dashboard");
      return true;
    } else {
      if (BusNumber.length == 0) {
            this.setState({ InvalidId: "" });
      }
      if (/^\d+$/.test(BusNumber) == false) {
            this.setState({ nonNumericId: "" });
      }
      if (DriverName.length == 0) {
        this.setState({ InvalidBus: "" });
      }
      if (MorningStartTime.length == 0) {
        this.setState({ InvalidUsername: "" });
      }
      if (EveningStartTime.length == 0) {
        this.setState({ InvalidPassword: "" });
      }
      if (Stop1.length == 0) {
        this.setState({ InvalidTypedStopOne: "" });
      }
      if (Stop2.length == 0) {
        this.setState({ InvalidTypedStopTwo: "" });
      }
      if (Stop3.length == 0) {
        this.setState({ InvalidTypedStopThree: "" });
      }
      if (Stop4.length == 0) {
        this.setState({ InvalidTypedStopFour: "" });
      }
      if (Stop5.length == 0) {
        this.setState({ InvalidTypedStopFive: "" });
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
                Add
                <Text style={styles.titleStyle2}> a </Text>
                <Text style={styles.titleStyle}>New Bus </Text>
                
              </Text>
              </View>
              
              <Text style={styles.subheadingStyle3}> Enter the Bus Number </Text>
              <Text style = {{marginTop: 25}}></Text>
              <TextInput
                placeholder="Please enter the Number"
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
                <Text style={styles.errorText}>Please enter a Bus Number</Text>
              )}
              {(this.state.nonNumericId == "" && this.state.InvalidId != "") && (
                <Text style={styles.errorText}>The Bus Number can't have letters!</Text>
              )}
              
              <Text style={styles.subheadingStyle}> Enter the Bus Driver's Name </Text>
              <TextInput
                placeholder="Please enter the Name"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedBus: text,
                      InvalidBus: text,
                    };
                  });
                }}
              />
              {this.state.InvalidBus == "" && (
                <Text style={styles.errorText}> Please enter the Driver's Name</Text>
              )}
              <Text style={styles.subheadingStyle2}> Enter Stop 1 {"\n"} </Text>
              <TextInput
                placeholder="Please enter Stop 1"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedStopOne: text,
                      InvalidTypedStopOne: text
                    };
                  });
                }}
              />
               {this.state.InvalidTypedStopOne == "" && (
                <Text style={styles.errorText}>Please enter Stop 1</Text>
              )}
              <Text style={styles.subheadingStyle2}> Enter Stop 2 {"\n"} </Text>
              <TextInput
                placeholder="Please enter Stop 2"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedStopTwo: text,
                      InvalidTypedStopTwo: text
                    };
                  });
                }}
              />
               {this.state.InvalidTypedStopTwo == "" && (
                <Text style={styles.errorText}>Please enter Stop 2</Text>
              )}
              <Text style={styles.subheadingStyle2}> Enter Stop 3 {"\n"} </Text>
              <TextInput
                placeholder="Please enter Stop 3"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedStopThree: text,
                      InvalidTypedStopThree: text
                    };
                  });
                }}
              />
               {this.state.InvalidTypedStopThree == "" && (
                <Text style={styles.errorText}>Please enter Stop 3</Text>
              )}
              <Text style={styles.subheadingStyle2}> Enter Stop 4 {"\n"} </Text>
              <TextInput
                placeholder="Please enter Stop 4"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedStopFour: text,
                      InvalidTypedStopFour: text
                    };
                  });
                }}
              />
               {this.state.InvalidTypedStopFour == "" && (
                <Text style={styles.errorText}>Please enter Stop 4</Text>
              )}
              <Text style={styles.subheadingStyle2}> Enter Stop 5 {"\n"} </Text>
              <TextInput
                placeholder="Please enter Stop 5"
                placeholderTextColor="#808080"
                keyboardType="email-address"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedStopFive: text,
                      InvalidTypedStopFive: text
                    };
                  });
                }}
              />
               {this.state.InvalidTypedStopFive == "" && (
                <Text style={styles.errorText}>Please enter Stop 5</Text>
              )}
              <View>
              <Text style={styles.subheadingStyle}>
                {" "}
                Enter the Morning Start Time{" "}
              </Text>
              <TextInput
                placeholder="Please enter the Morning Time"
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
              {this.state.InvalidUsername == "" && (
                <Text style={styles.errorText}>Please enter a Morning Start Time</Text>
              )}

              <View>
              <Text style={styles.subheadingStyle}>
                {" "}
                Enter the Afternoon Start Time {" "}
              </Text>
              <TextInput
                placeholder="Please enter the Afternoon Time"
                keyboardType="email-address"
                placeholderTextColor="#808080"
                style={styles.emailstyle}
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typedPassword: text,
                      InvalidPassword: text,
                    };
                  });
                }}
              />
              </View>

              {this.state.InvalidPassword == "" && (
                <Text style={styles.errorText}>Please enter a Ending Start Time</Text>
              )}
                <Button
                large
                full
                style={styles.StyleforButton}
                onPress={() =>
                  this.onPress(
                    this.state.Id,
                    this.state.typedBus,
                    this.state.typedText,
                    this.state.typedPassword,
                    this.state.typedStopOne,
                    this.state.typedStopTwo,
                    this.state.typedStopThree,
                    this.state.typedStopFour,
                    this.state.typedStopFive,
                  )
                }
                >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    textAlign: 'center',
                    color: "white"
                  }}>
                  {' '}
                  Submit{' '}
                </Text>
              </Button>
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