import React, { Component } from "react";
import { Text, View , StyleSheet, ScrollView} from "react-native";
import { Button } from "native-base";
import FastImage from 'react-native-fast-image';
export default class HomePage extends Component {
  render() {
    return (
      <View style = {{backgroundColor: "#ffffff"}}>
        <ScrollView>
        <FastImage
              style={{
                width: 200,
                height: 200,
                marginBottom: '10%',
                marginTop: '2%',
                alignSelf: "center"
              }}
              source={require('./bus.png')}
            />
        <Text style = {styles.titleStyle}> Welcome to the App! </Text>
        <Button
                  large
                  full
                  style={styles.StyleforButton}
                  onPress = {() => this.props.navigation.navigate("UserLogin")}
                  >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      textAlign: 'center',
                      color: "white"
                    }}>
                    {' '}
                    User{' '}
                  </Text>
                </Button>
                <Button
                  large
                  full
                  style={styles.StyleforButton}
                  onPress = {() => this.props.navigation.navigate("AdminLogin")}
                  >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      textAlign: 'center',
                      color: "white"
                    }}>
                    {' '}
                    Admin{' '}
                  </Text>
                </Button>
                <Button
                  large
                  full
                  style={styles.StyleforButton2}
                  onPress = {() => this.props.navigation.navigate("CreateAccount")}
                  >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      textAlign: 'center',
                    }}>
                    {' '}
                    New User?{' '}
                  </Text>
                </Button>
        <Text style ={{marginBottom: 600}}></Text>
        </ScrollView>
       
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
      color: "#3CB982",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 38,
      marginTop: 10,
      marginBottom: 30,
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
        borderColor: '#3CB982',
        backgroundColor: '#3CB982',
        padding: 10,
        fontSize: 20,
        marginLeft: '15%',
        marginRight: '15%',
        marginBottom: '5%',
        marginTop: '5%',
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
      StyleforButton2: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#3CB982',
        backgroundColor: 'transparent',
        padding: 10,
        fontSize: 20,
        marginLeft: '15%',
        marginRight: '15%',
        marginBottom: '5%',
        marginTop: '5%',
      },
  });