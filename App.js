import React, { Component } from 'react';
import { AppRegistry, Image, View, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  appName: {
    fontSize: 60,
    color: '#153944',
    fontFamily: 'Roboto',
    marginTop: 50,
  },
  image: {
    width: 350,
    height: 250,
    resizeMode: "stretch",
    alignItems: 'center',
    margin: 'auto',
    marginTop: 20,
  },
  dashesContainer: {
    justifyContent: 'center',
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  word: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dashes: {
    borderBottomWidth: 3,
    width: 50,
    margin: 5,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  hintBox: {
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#d3d3d3',
  },
  hint: {
    fontSize: 24,
  },
  letter: {
    fontSize: 24,
    textAlign: 'center',
    padding: 5,
  }
});

export default class Bananas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      maxGuesses: 8,
      numberWrong: 0,
      numberRight: 0,
      usedLetters: [],
      remainingLetter: [],
      answer: "",
      hint: "",
    }

    initializeGame = () => {
      this.setState({gameState:
        [
          
        ]

      });
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>HANGMAN</Text>
        <Image source={require('./assets/hangman.jpg')} style={styles.image}/>

        <View style={styles.dashesContainer}>
          <View style={styles.word}>
            <View style={styles.dashes} />
            <View style={styles.dashes} />
            <View style={styles.dashes} />
            <View style={styles.dashes} />
          </View>
          <View style={styles.word}>
            <View style={styles.dashes}><Text style={styles.letter}>a</Text></View>
            <View style={styles.dashes} />
            <View style={styles.dashes} />
          </View>
        </View>

        <View style={styles.hintBox}>
          <Text style={styles.hint}>
          Hint: brown eyes
          </Text>
        </View>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
