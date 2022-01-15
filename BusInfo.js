import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";

export default class CompletedOrders extends Component {
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

  
  timer = () => {
    if (this.state.timeOne == false) {
    setTimeout(() => this.setState({timeOne: true}), 1000)
    return(
        <FlatList
          data={[{name: "Anish", title: "Anish's Bus Information:", busNumber: 105, eta: 4, address: "2101 SW Pinoak Ave", school: "Bentonville High School", delays: false, busDriver: "Jeff"}]}
          keyExtractor={(item) => item.busNumber}
          renderItem={({ item }) => {
        
              return (
                <View style={styles.item}>
                  <Text style={{ fontSize: 20 }}> {item.title} </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 18 }}>
                        ETA: {item.eta} min
                    </Text>
                  </View>
                  <Text style={{ fontSize: 18 }}>
                    Child's Name: {item.name} {"\n"}
                    Child's School: {item.school} {"\n"}
                    Status: {"Arriving"} {"\n"}
                    Bus Number: {item.busNumber} {"\n"}
                    User Address: {item.address} {"\n"}
                    Bus Driver Name: {item.busDriver} {"\n"}
                  </Text>
                </View>
              );
            
          }}
        />
    )
    }
    else if (this.state.timeTwo == false) {
        setTimeout(() => this.setState({timeTwo: true}), 1000)
        return (
            <FlatList
          data={[{name: "Anish", title: "Anish's Bus Information:", busNumber: 105, eta: 5, address: "2101 SW Pinoak Ave", school: "Bentonville High School", delays: false, busDriver: "Jeff"}]}
          keyExtractor={(item) => item.busNumber}
          renderItem={({ item }) => {
        
              return (
                <View style={styles.item}>
                  <Text style={{ fontSize: 20 }}> {item.title} </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 18 }}>
                        ETA: {item.eta - 1} min
                    </Text>
                  </View>
                  <Text style={{ fontSize: 18 }}>
                    Child's Name: {item.name} {"\n"}
                    Child's School: {item.school} {"\n"}
                    Status: {"Arriving"} {"\n"}
                    Bus Number: {item.busNumber} {"\n"}
                    User Address: {item.address} {"\n"}
                    Bus Driver Name: {item.busDriver} {"\n"}
                  </Text>
                </View>
              );
            
          }}
        />
        )
    }
    else if (this.state.timeThree == false) {
    setTimeout(() => this.setState({timeThree: true}), 1000)
    return (
        <FlatList
      data={[{name: "Anish", title: "Anish's Bus Information:", busNumber: 105, eta: 5, address: "2101 SW Pinoak Ave", school: "Bentonville High School", delays: false, busDriver: "Jeff"}]}
      keyExtractor={(item) => item.busNumber}
      renderItem={({ item }) => {
    
          return (
            <View style={styles.item}>
              <Text style={{ fontSize: 20 }}> {item.title} </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18 }}>
                    ETA: {item.eta - 2} min
                </Text>
              </View>
              <Text style={{ fontSize: 18 }}>
                Child's Name: {item.name} {"\n"}
                Child's School: {item.school} {"\n"}
                Status: {"Arriving"} {"\n"}
                Bus Number: {item.busNumber} {"\n"}
                User Address: {item.address} {"\n"}
                Bus Driver Name: {item.busDriver} {"\n"}
              </Text>
            </View>
          );
        
      }}
    />
    )
    }
    else if (this.state.timeFour == false) {
        console.log("HEYYYYY")
        setTimeout(() => this.setState({timeFour: true}), 1000)
        return (
            <FlatList
          data={[{name: "Anish", title: "Anish's Bus Information:", busNumber: 105, eta: 5, address: "2101 SW Pinoak Ave", school: "Bentonville High School", delays: false, busDriver: "Jeff"}]}
          keyExtractor={(item) => item.busNumber}
          renderItem={({ item }) => {
        
              return (
                <View style={styles.item}>
                  <Text style={{ fontSize: 20 }}> {item.title} </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 18 }}>
                        ETA: {item.eta - 3} min
                    </Text>
                  </View>
                  <Text style={{ fontSize: 18 }}>
                    Child's Name: {item.name} {"\n"}
                    Child's School: {item.school} {"\n"}
                    Status: {"Arriving"} {"\n"}
                    Bus Number: {item.busNumber} {"\n"}
                    User Address: {item.address} {"\n"}
                    Bus Driver Name: {item.busDriver} {"\n"}
                  </Text>
                </View>
              );
            
          }}
        />
        )
    }
    else {
        console.log("BAYYY")
        setTimeout(() => this.setState({timeFive: true}), 1000)
        return (
            <FlatList
          data={[{name: "Anish", title: "Anish's Bus Information:", busNumber: 105, eta: 5, address: "2101 SW Pinoak Ave", school: "Bentonville High School", delays: false, busDriver: "Jeff"}]}
          keyExtractor={(item) => item.busNumber}
          renderItem={({ item }) => {
        
              return (
                <View style={styles.item}>
                  <Text style={{ fontSize: 20 }}> {item.title} </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 18 }}>
                        ETA: {item.eta - 4} min
                    </Text>
                  </View>
                  <Text style={{ fontSize: 18 }}>
                    Child's Name: {item.name} {"\n"}
                    Child's School: {item.school} {"\n"}
                    Status: {"Arriving"} {"\n"}
                    Bus Number: {item.busNumber} {"\n"}
                    User Address: {item.address} {"\n"}
                    Bus Driver Name: {item.busDriver} {"\n"}
                  </Text>
                </View>
              );
            
          }}
        />
        )
    }
  }
  render() {
    return (
      <View style={{ backgroundColor: "#ffffff" }}>
        <Text style={styles.titleStyle}>
          Bus
          <Text style={styles.titleStyle}> Info: </Text>
        </Text>
        {this.state.timeOne == false && this.state.timeTwo == false && this.state.timeThree == false && this.state.timeFour == false && this.state.timeFive == false && (
            this.timer()
        )}
        {this.state.timeOne == true && this.state.timeTwo == false && this.state.timeThree == false && this.state.timeFour == false && this.state.timeFive == false && (
            this.timer()
        )}
        {this.state.timeOne == true && this.state.timeTwo == true && this.state.timeThree == false && this.state.timeFour == false && this.state.timeFive == false && (
            this.timer()
        )}
        {this.state.timeOne == true && this.state.timeTwo == true && this.state.timeThree == true && this.state.timeFour == false && this.state.timeFive == false && (
            this.timer()
        )}
        {this.state.timeOne == true && this.state.timeTwo == true && this.state.timeThree == true && this.state.timeFour == true && this.state.timeFive == false && (
               <FlatList
               data={[{name: "Anish", title: "Anish's Bus Information:", busNumber: 105, eta: 5, address: "2101 SW Pinoak Ave", school: "Bentonville High School", delays: false, busDriver: "Jeff"}]}
               keyExtractor={(item) => item.busNumber}
               renderItem={({ item }) => {
             
                   return (
                     <View style={styles.item2}>
                       <Text style={{ fontSize: 20 }}> {item.title} </Text>
                       <View style={{ flexDirection: "row" }}>
                         <Text style={{ fontSize: 18 }}>
                             ETA: 1 min
                         </Text>
                       </View>
                       <Text style={{ fontSize: 18 }}>
                         Child's Name: {item.name} {"\n"}
                         Child's School: {item.school} {"\n"}
                         Status: {"Arriving"} {"\n"}
                         Bus Number: {item.busNumber} {"\n"}
                         User Address: {item.address} {"\n"}
                         Bus Driver Name: {item.busDriver} {"\n"}
                       </Text>
                     </View>
                   );
                 
               }}
             />
             
        )}
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