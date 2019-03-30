import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'
import LoginForm from './src/components/LoginForm'
import TabelaVelocidade from './src/components/TabelaVelocidade'
import Splash from './src/components/Splash'

export default class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBez6h5K5USOfxZzFB3vE7Q39OxlJS7La8",
      authDomain: "personalclub-52112.firebaseapp.com",
      databaseURL: "https://personalclub-52112.firebaseio.com",
      projectId: "personalclub-52112",
      storageBucket: "personalclub-52112.appspot.com",
      messagingSenderId: "1096701126602"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  isLoggedIn() {
    switch (this.state.loggedIn) {
      case null:
        return <Splash />
      case true:
        return <Quem />
      case false:
        return <LoginForm />
    }
  }
  render() {
    return (
      <View>
        <TabelaVelocidade />
      </View>
    );
  }
}