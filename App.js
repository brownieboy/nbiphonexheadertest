/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Body, Header, Container, Content } from "native-base";
import { Platform, StyleSheet, Text, SafeAreaView } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Header stuff</Text>
          </Body>
        </Header>
        <Content>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text>
            Eiusmod velit sit ea ex. Sit ipsum enim id magna. Aliquip excepteur
            cupidatat elit laboris. Mollit nulla ullamco consectetur deserunt
            pariatur officia labore est consectetur aliqua. Mollit dolore et eu
            dolore excepteur esse officia esse nulla dolor laborum ea nisi.
            Excepteur dolore incididunt duis sint eu labore culpa aute ex.
            Ullamco exercitation sint voluptate proident exercitation labore
            aute ipsum. Non dolore labore sint esse adipisicing nulla. Minim
            dolore ipsum aute mollit anim ullamco in mollit eu eiusmod laboris
            reprehenderit sint proident. Officia culpa labore veniam excepteur
            consequat occaecat cupidatat voluptate. Consectetur incididunt
            dolore reprehenderit ullamco duis mollit labore non. Minim eu do
            excepteur labore do. Et do excepteur labore cupidatat nostrud labore
            in commodo commodo fugiat officia laboris. Officia ex veniam qui
            irure nisi dolore in Lorem. Est quis sunt esse amet ipsum qui tempor
            irure nisi velit sint tempor. Reprehenderit aliquip eu dolore sunt
            duis minim eiusmod in nisi enim tempor amet id. Veniam minim eu
            aliquip quis quis cupidatat consequat enim elit et duis mollit
            minim. Officia consectetur sit ullamco id cillum minim fugiat culpa
            ullamco aliqua reprehenderit nisi eu aliqua. Dolore eu tempor
            aliquip anim eiusmod veniam voluptate.
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
