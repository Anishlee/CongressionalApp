import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";

export default class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      fetching: true,
      timeOne: false,
      timeTwo: false,
      timeThree: false,
      timeFour: false,
      timeFive: false,
        
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: "#ffffff" }}>
        <Text style={styles.titleStyle}>
          Student
          <Text style={styles.titleStyle}> Info: </Text>
        </Text>
       
               <FlatList
               data={[{name: "Anish", title: "Anish's Information:", busNumber: 105, address: "2101 SW Pinoak Ave", school: "Bentonville High School", grade: "10th"}]}
               keyExtractor={(item) => item.busNumber}
               renderItem={({ item }) => {
             
                   return (
                     <View style={styles.item}>
                       <Text style={{ fontSize: 20 }}> {item.title} </Text>
                       <View style={{ flexDirection: "row" }}>
                       </View>
                       <Text style={{ fontSize: 18 }}>
                         Child's Name: {item.name} {"\n"}
                         Child's School: {item.school} {"\n"}
                         Child's Grade: {item.grade} {"\n"}
                         Bus Number: {item.busNumber} {"\n"}
                         User Address: {item.address} {"\n"}
                       </Text>
                     </View>
                   );
                 
               }}
             />
        
        {this.state.timeOne == true && this.state.timeTwo == true && this.state.timeThree == true && this.state.timeFour == true && this.state.timeFive == false && (
        Alert.alert(
        `Anish's bus is 1 minute away!`,
      [
        {text: 'Ok', onPress: () => console.log('Ok button clicked')},
      ],
      { 
        cancelable: true 
      }
        )
  
  )}
        <Text style = {{marginBottom: 600}}></Text>
      </View>
    );
    
  }
}
const styles = StyleSheet.create({
  titleStyle: {
    color: "#3CB982",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 50,
    marginBottom: 20,
  },
  titleStyle2: {
    color: "#3CB982",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 50,
    marginBottom: 20,
  },
  item: {
    flex: 1,
    marginHorizontal: 0,
    marginTop: 24,
    padding: 30,
    backgroundColor: "#ffffff",
  },
  item2: {
    flex: 1,
    marginHorizontal: 0,
    marginTop: 24,
    padding: 30,
    backgroundColor: "red",
  },
  text: {
    //flex: 1,
    marginHorizontal: 50,
    // marginTop: 24,
    //padding: 30,
    // backgroundColor: "#fffafa",
    fontSize: 16,
  },
});