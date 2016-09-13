/**
 * First Load
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

// Components
import Button from '../components/button'

// Screens
import Form from './forms'

/* Component ==================================================================== */
class FirstLoad extends Component {
  static componentName = 'FirstLoad';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    close: React.PropTypes.func.isRequired,
  }

	/**
	  * Navigates to Sign Up
	  */
	_navigate = () => {
    this.props.close();

	  this.props.navigator.push({
	    title: 'Sign Up',
	    component: Form,
	    index: 2,
	  });
	}


  async _getMoviesFromApi (a) {
    console.log(a)
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      console.log(responseJson)
      return responseJson.movies;
    } catch(error) {
      console.error(error);
    }
  }
  /**
    * RENDER
    */
  render = () => {
    return (
      <View style={[AppStyles.container, styles.containerCover]}>
      	<View style={[AppStyles.paddingHorizontal]}>
          <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
            Sign Up Now!
          </Text>

          <View style={[AppStyles.spacer_10]} />

          <View style={[AppStyles.row]}>
          	<View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
		          <Button
		            text={'Sign In/Up Now'}
		            onPress={()=>this._getMoviesFromApi("a")} />
            </View>

            <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
		          <Button
		            text={'Skip'}
		            type={'outlined'}
		            onPress={this.props.close} />
        		</View>
      		</View>
      	</View>
      </View>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
	containerCover: {
		marginTop: -AppConfig.navbarHeight,
		backgroundColor: "#FFF",
		justifyContent: 'center',
	},
});

/* Export Component ==================================================================== */
export default FirstLoad