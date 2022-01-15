import React, {Component} from 'react';
import Geocoder from 'react-native-geocoding';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  Image,
  ScrollView,
  Alert,
  Dimensions,
  LogBox
} from 'react-native';

import MapView, {ProviderPropType,
Marker,
AnimatedRegion,} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

export default class UserDashboardMap extends Component {
  constructor() {
    super();
    this.state = {
         latitude: 36.3529,
         longitude: -94.2188,
         latitudeDelta: 0.06,
         longitudeDelta: 0.06,
         doneOne: false, 
         doneTwo: false, 
         doneThree: false,
         doneFour: false,
         doneFive: false,
         location: "",
         data: "",
         dataTwo: "",
      locationTwo: "",
      times: 0,
      coors: "",
      distance: 0,
      time: 0,
         coordinates: [
            {
              latitude: 36.33070314294381,
              longitude: -94.23976038807382,
            },
            {
              latitude: 36.3300403,
              longitude: -94.23712030000002,
            },
          ],
          coordinates2: [
            {
              latitude: 36.33042068044646,
              longitude: -94.23584343944687,
            },
            {
              latitude: 36.350881,
              longitude: -94.1957496,
            },
          ],
          coordinates3: [
            {
              latitude: 36.33070314294381,
              longitude: -94.23976038807382,
            }, 
            {
              latitude: 36.3300403,
              longitude: -94.23712030000002,
            },
            {
              latitude: 36.33042068044646,
              longitude: -94.23584343944687,
            },
            {
              latitude: 36.350881,
              longitude: -94.1957496,
            },
          ],
           //[
          //   {
          //     latitude: 36.33070314294381,
          //     longitude: -94.23976038807382,
          //   }, 
          //   {
          //     latitude: 36.3300403,
          //     longitude: -94.23712030000002,
          //   },
          //   {
          //     latitude: 36.33042068044646,
          //     longitude: -94.23584343944687,
          //   },
          //   {
          //     latitude: 36.350881,
          //     longitude: -94.1957496,
          //   },
          //   {
          //     latitude: 36.350881,
          //     longitude: -94.1957496,
          //   },
          // ]
          xcoordinates3: ""
          
    };
    this.mapView = null;
  }
  
  componentDidMount(){
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
      const url_two = `http://localhost:8080/mongo/getCoordinates`;
    fetch(url_two, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({dataTwo: json})
        console.log(json)
          .catch((err) => console.error(err))
          .finally(() => {
            this.setState({fetching: false});
          });
      });
      console.log("fave")
    const user = this.props.navigation.getParam('user', 'value');
    console.log("Y(*)")
    var location1 = null
    Geocoder.init("AIzaSyCZFLVdL2BjQynBBsq1QFDTTwSq7lOwaBc");
    Geocoder.from(user.address)
      .then(json => {
        location = json.results[0].geometry.location;
          console.log("Y(*)")
          console.log(location["lng"])
          console.log(location["lat"])
          this.setState({location: location["lng"]})
          this.setState({locationTwo: location["lat"]}) 
      })
      .catch(error => console.warn(error));
  }
  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }
  sleep = (milliseconds) => {
    console.log("Yehaww")
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  measureSliderWidth = (index) => {
    console.log("YES FG")
    if (this.state.doneOne == false && index == 1) {
      console.log("YES FG1")
      this.setState({doneOne: true})
    }
    else if (this.state.doneTwo == false && index == 2) {
      console.log("YES FG2")
      this.setState({doneTwo: true}) 
    }
    else if (this.state.doneThree == false && index == 3) {
      console.log("YES FG3")
      this.setState({doneThree: true})
    }
    else if (this.state.doneFour == false && index == 4) {
      console.log("YES FG4")
      this.setState({doneFour: true})
    }
  }
  index = (index) => {
    if (this.state.doneOne == false && index == 1) {
      setTimeout(() => this.measureSliderWidth(index), 2000);
    }
    else if (this.state.doneTwo == false && index == 2) {
      setTimeout(() => this.measureSliderWidth(index), 2000);
    }
    else if (this.state.doneThree == false && index == 3) {
      setTimeout(() => this.measureSliderWidth(index), 2000);
    }
    else if(this.state.doneFour == false && index == 4) {
      setTimeout(() => this.measureSliderWidth(index), 2000);
    }
  }
  zoomIn = () => {
      console.log("Yes")
      console.log(this.state.latitudeDelta)
      console.log(this.state.longitudeDelta)
    if (this.state.latitudeDelta <= 0.1 || this.state.longitudeDelta <= 0.1) {
        console.log("NOOO")
        if (this.state.longitudeDelta <= 0.02 || this.state.longitudeDelta <= 0.02) {
            Alert.alert(
                'You have already zoomed in to the max limit. Would you like to zoom out?',
                '',
                [
                  {
                    text: 'Yes',
                    onPress: () => this.zoomOut(), style: 'default'
                  },
                  {
                    text: 'No',
                    onPress: () => Alert.alert(
                      'Have a good day!',
                      '',
                      [
                        {
                          text: 'Ok',
                          style: 'default'
                        },
                      ],
                    ),
                    style: 'destructive'
                  },
                ],
              );
        }
        else{
          const latDelta = this.state.latitudeDelta - 0.02
          const longDelta = this.state.longitudeDelta - 0.02
          this.setState({latitudeDelta: latDelta})
          this.setState({longitudeDelta: longDelta})
        }
        
    }
    else{
    console.log("YEP")
    const latDelta = this.state.latitudeDelta - 0.02
    const longDelta = this.state.longitudeDelta - 0.02
    this.setState({latitudeDelta: latDelta})
    this.setState({longitudeDelta: longDelta})
  }
}
  zoomOut = () => {
    if (this.state.latitudeDelta >= 100 || this.state.longitudeDelta >= 100) {
        Alert.alert(
            'You have already zoomed out to the max limit. Would you like to zoom in?',
            '',
            [
              {
                text: 'Yes',
                onPress: () => this.zoomIn(), style: 'default'
              },
              {
                text: 'No',
                onPress: () => Alert.alert(
                  'Have a good day!',
                  '',
                  [
                    {
                      text: 'Ok',
                      style: 'default'
                    },
                  ],
                ),
                style: 'destructive'
              },
            ],
          );
    }
    else{
        const latDelta = this.state.latitudeDelta + 0.02
        const longDelta = this.state.longitudeDelta + 0.02
        this.setState({latitudeDelta: latDelta})
        this.setState({longitudeDelta: longDelta})
  }
  }
  onRegionChange = () => {
    this.setState({ region });
  }
  bus = (item, longitude, latitude) => {
    const user = this.props.navigation.getParam('user', 'value');
    var x = null;
    console.log(item)
    console.log("djooooo!!!!!!")
    console.log(this.state.dataTwo)
    if (item.stopOneLat == latitude && item.stopOneLong == longitude) {
      user.bus = item.busNumber;
      console.log(item)
      x[0].latitude = item.stopOneLat;
      x[0].longitude = item.stopOneLong;
      x[1].latitude = item.stopTwoLat;
      x[1].longitude = item.stopTwoLong;
      x[2].latitude = item.stopThreeLat;
      x[2].longitude = item.stopThreeLong;
      x[3].latitude = item.stopFourLat;
      x[3].longitude = item.stopFourLong;
      x[4].latitude = item.stopFiveLat;
      x[4].longitude = item.stopFiveLong;
      console.log(x)
      console.log("DIE FOOL")
      console.log(this.state.times)
      if (this.state.times == 0 && this.state.coors == "") {
      //this.setState({coors: x})
      this.setState({times: 1})
      console.log("MyGuy")
      console.log(x)
      console.log(this.state.coors)
      //this.setState({xcoordinates3: x})
      }
      return x
    }
    else if (item.stopTwoLat == latitude && item.stopTwoLong == longitude) {
      user.bus = item.busNumber;
      console.log(item)
      x[0].latitude = item.stopOneLat;
      x[0].longitude = item.stopOneLong;
      x[1].latitude = item.stopTwoLat;
      x[1].longitude = item.stopTwoLong;
      x[2].latitude = item.stopThreeLat;
      x[2].longitude = item.stopThreeLong;
      x[3].latitude = item.stopFourLat;
      x[3].longitude = item.stopFourLong;
      x[4].latitude = item.stopFiveLat;
      x[4].longitude = item.stopFiveLong;
      console.log(x)
      console.log("DIE FOOL")
      console.log(this.state.times)
      if (this.state.times == 0 && this.state.coors == "") {
      //this.setState({coors: x})
      this.setState({times: 1})
      console.log("MyGuy")
      console.log(x)
      console.log(this.state.coors)
      
      //this.setState({xcoordinates3: x})
      return x
      }
    }
    else if (item.stopThreeLat == latitude && item.stopThreeLong == longitude) {
      user.bus = item.busNumber;
      console.log("ITEM")
      console.log(item)
      x = item;
      console.log(x)
      console.log(this.state.times)
      console.log(x.stopOneLong)
      return x
    }
    else if (item.stopFourLat == latitude && item.stopFourLong == longitude) {
      user.bus = item.busNumber;
      console.log(item)
      x[0].latitude = item.stopOneLat;
      x[0].longitude = item.stopOneLong;
      x[1].latitude = item.stopTwoLat;
      x[1].longitude = item.stopTwoLong;
      x[2].latitude = item.stopThreeLat;
      x[2].longitude = item.stopThreeLong;
      x[3].latitude = item.stopFourLat;
      x[3].longitude = item.stopFourLong;
      x[4].latitude = item.stopFiveLat;
      x[4].longitude = item.stopFiveLong;
      console.log(x)
      console.log("DIE FOOL")
      console.log(this.state.times)
      if (this.state.times == 0 && this.state.coors == "") {
      //this.setState({coors: x})
      this.setState({times: 1})
      console.log("MyGuy")
      console.log(x)
      console.log(this.state.coors)
      //this.setState({xcoordinates3: x})
      return x
      }
    }
    else if (item.stopFiveLat == latitude && item.stopFiveLong == longitude) {
      user.bus = item.busNumber;
      console.log(item)
      x[0].latitude = item.stopOneLat;
      x[0].longitude = item.stopOneLong;
      x[1].latitude = item.stopTwoLat;
      x[1].longitude = item.stopTwoLong;
      x[2].latitude = item.stopThreeLat;
      x[2].longitude = item.stopThreeLong;
      x[3].latitude = item.stopFourLat;
      x[3].longitude = item.stopFourLong;
      x[4].latitude = item.stopFiveLat;
      x[4].longitude = item.stopFiveLong;
      console.log(x)
      console.log("DIE FOOL")
      console.log(this.state.times)
      if (this.state.times == 0 && this.state.coors == "") {
      //this.setState({coors: x})
      this.setState({times: 1})
      console.log("MyGuy")
      console.log(x)
      console.log(this.state.coors)
      //this.setState({xcoordinates3: x})
      return x
      }
    }
  }
  render() {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
    const user = this.props.navigation.getParam('user', 'value');
    const UserOrAdmin = this.props.navigation.getParam('UserOrAdmin', 'value');
    var beta = null
    console.log(user)
    console.log(UserOrAdmin)
    console.log(this.state.location)
    console.log(this.state.locationTwo)
    console.log(this.state.coors)
    console.log(this.state.xcoordinates3)
    console.log(this.state.data[0])
    console.log("SDEDSDD")
    console.log("SDEDSDDEEEEEEE")
    for (var i = 0; i < this.state.data.length; i++) {
      var zeta = this.bus(this.state.data[i], this.state.location, this.state.locationTwo)
      if (zeta != undefined) {
        beta = zeta
      }
      console.log("HOLA")
      console.log(beta)
    }
    const { bus } = this.state;
        return (
        <View style={styles.container}>
        {/* <FlatList
        data={this.state.data}
        renderItem={({item}) => (
          this.bus(item, this.state.location, this.state.locationTwo)
        )}
       /> */}
       {beta != undefined && (
        <MapView
            style={styles.map}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: this.state.longitudeDelta,
            }}
            ref={c => this.mapView = c}
          >
            {/* {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {this.state.coordinates2.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )} */}
        {(this.state.doneOne == false && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false && this.state.doneFive == false) && (
          <MapView.Marker coordinate={{latitude: beta.stopOneLat, longitude: beta.stopOneLong}}  >
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`${Math.round(this.state.distance)} km`}</Text>
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`${Math.round(this.state.time)} min`}</Text>
            <Image source={require('./shot.png')} style={{height: 25, width:85, marginLeft: 50 }} />
          </MapView.Marker>
        )}
        {(this.state.doneOne == false && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false && this.state.doneFive == false) && (
          this.index(1)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false && this.state.doneFive == false) && (
          <MapView.Marker coordinate={{latitude: beta.stopTwoLat, longitude: beta.stopTwoLong}} >
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`${Math.round(this.state.distance - 1)} km`}</Text>
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`${Math.round(this.state.time - 2)} min`}</Text>
            <Image source={require('./shot.png')}style = {{height: 25, width:85 }} />
          </MapView.Marker>
        )}
        {(this.state.doneOne == true && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false && this.state.doneFive == false) && (
          this.index(2)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == false && this.state.doneFour == false && this.state.doneFive == false) && (
          <MapView.Marker coordinate={{latitude: beta.stopThreeLat, longitude: beta.stopThreeLong}}  >
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`${Math.round(this.state.distance - 2)} km`}</Text>
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`${Math.round(this.state.time - 4)} min`}</Text>
            <Image source={require('./shot.png')} style ={{height: 25, width:85 }} />
          </MapView.Marker>
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == false && this.state.doneFour == false && this.state.doneFive == false) && (
          this.index(3)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == true && this.state.doneFour == false && this.state.doneFive == false) && (
          <MapView.Marker coordinate={{latitude: beta.stopFourLat, longitude: beta.stopFourLong}}  > 
          <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`${Math.round(this.state.distance - 3)} km`}</Text>
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`${Math.round(this.state.time - 6)} min`}</Text>
          <Image source={require('./shot.png')} style={{height: 25, width:85 }} />
          </MapView.Marker>
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == true && this.state.doneFour == false && this.state.doneFive == false) && (
          this.index(4)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == true && this.state.doneFour == true && this.state.doneFive == false) && (
          <MapView.Marker coordinate={{latitude: beta.stopFiveLat, longitude: beta.stopFiveLong}}  >
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`0 km`}</Text>
              <Text style = {{marginLeft: 50, backgroundColor: "white"}}>{`0 min`}</Text>
            <Image source={require('./shot.png')} style={{height: 25, width:85 }} />
          </MapView.Marker>
        )}
        
            <MapViewDirections
            origin={{latitude: beta.stopOneLat, longitude: beta.stopOneLong}}
            waypoints = {[
              {latitude: beta.stopTwoLat, longitude: beta.stopTwoLong},
              {latitude: beta.stopThreeLat, longitude: beta.stopThreeLong},
              {latitude: beta.stopFourLat, longitude: beta.stopFourLong},
            ]}
            destination={{latitude: beta.stopFiveLat, longitude: beta.stopFiveLong}}
            
            apikey={"AIzaSyCZFLVdL2BjQynBBsq1QFDTTwSq7lOwaBc"}
            strokeWidth={3}
            strokeColor="hotpink"
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)
                this.setState({distance: result.distance})
                this.setState({time: result.duration})
              
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
            </MapView>
       )}
            <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
          }}>
           <Button
             onPress={() => this.zoomIn()}
             title="Zoom In"
        >
        
        </Button>
        <Button
             onPress={() => this.zoomOut()}
             title="Zoom Out"
        ></Button>
        
        </View>
       
        
      </View>
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
    borderBottomColor: "black",
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
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
    marginBottom: 10,
  },
  titleStyle: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 38,
    marginTop: 50,
    marginBottom: 105,
  },
  titleStyle2: {
    color: "#008b8b",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 50,
    marginBottom: 105,
  },
  subheadingStyle: {
    color: "#008b8b",
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
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    map: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      marginBottom: -20
    },
    item: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 24,
      padding: 30,
      backgroundColor: "#fffafa",
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
