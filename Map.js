  
import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, Button,
  Dimensions,
  TouchableOpacity,
  Platform,} from "react-native";
import MapView, {ProviderPropType,
Marker,
AnimatedRegion,} from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';


export default class Map extends Component {
      constructor() {
        super();
        this.state = {
             latitude: 36.3529,
             longitude: -94.2188,
             latitudeDelta: 0.05,
             longitudeDelta: 0.05,
             doneOne: false, 
             doneTwo: false,
             doneThree: false,
             doneFour: false,
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
                  latitude: 36.3299547,
                  longitude: -94.24491119999999,
                },
                {
                  latitude: 36.3271208,
                  longitude: -94.2440099,
                },
                {
                  latitude: 36.3260045,
                  longitude: -94.2377211,
                },
                {
                  latitude: 36.329386,
                  longitude: -94.22752849999999,
                },
                {
                  latitude: 36.3518829,
                  longitude: -94.1953693,
                },
              ]
              
        };
        this.mapView = null;
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
      }
      measureSliderWidth2 = (index) => {
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
      index2 = (index) => {
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
      }
      zoomIn = () => {
          console.log("Yes")
          console.log(this.state.latitudeDelta)
          console.log(this.state.longitudeDelta)
        if (this.state.latitudeDelta <= 0.1 || this.state.longitudeDelta <= 0.1) {
            console.log("NOOO")
            if (this.state.longitudeDelta <= 0.02|| this.state.longitudeDelta <= 0.02) {
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
      render() {
        
        return (
        <View style={styles.container}>
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
        {(this.state.doneOne == false && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[0]} />
        )}
        {(this.state.doneOne == false && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false) && (
          this.index(1)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[1]} />
        )}
        {(this.state.doneOne == true && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false) && (
          this.index(2)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == false && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[2]} />
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == false && this.state.doneFour == false) && (
          this.index(3)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == true && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[3]} />
        )}
        {(this.state.doneOne == false && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[4]} />
        )}
        {(this.state.doneOne == false && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false) && (
          this.index(1)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[5]} />
        )}
        {(this.state.doneOne == true && this.state.doneTwo == false && this.state.doneThree == false && this.state.doneFour == false) && (
          this.index2(2)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == false && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[6]} />
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == false && this.state.doneFour == false) && (
          this.index2(3)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == true && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[7]} />
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == false && this.state.doneFour == false) && (
          this.index2(4)
        )}
        {(this.state.doneOne == true && this.state.doneTwo == true && this.state.doneThree == true && this.state.doneFour == false) && (
          <MapView.Marker coordinate={this.state.coordinates3[8]} />
        )}
        
            <MapViewDirections
            origin={this.state.coordinates[0]}
            waypoints = {this.state.coordinates2}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            
            apikey={"AIzaSyCZFLVdL2BjQynBBsq1QFDTTwSq7lOwaBc"}
            strokeWidth={3}
            strokeColor="hotpink"
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`)
              console.log(`Duration: ${result.duration} min.`)

              
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
            </MapView>
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