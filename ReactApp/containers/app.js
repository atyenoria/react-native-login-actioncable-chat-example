/**
 * App - set all the things up
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  Navigator,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  WebView
} from 'react-native'

import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'
import SideMenu from 'react-native-side-menu'

// Actions
import * as SideMenuActions from '../actions/sidemenu'

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';
import AppUtil from '../util';

// Components
import Menu from '../components/menu';
import NavbarElements from '../components/navbar.elements';

// Screens
// import Index from '../screens/soon';
import Index from '../chat/chat';




// Cookie handle
import CookieManager from 'react-native-cookies';
const LOGIN_URL = "http://localhost:4000/login/";
const HOME_URL = "http://localhost:4000/";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});


/* Component ==================================================================== */
class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true, // debug:true
      loadedCookie: true // debug:true
    };
  }

  /**
    * On first load
    */
  componentDidMount = () => {
    // Status Bar
    StatusBar.setHidden(false, 'slide'); // Slide in on load
    StatusBar.setBackgroundColor(AppConfig.primaryColor, true); // Android Status Bar Color
  }


  componentWillMount () {
    CookieManager.get(HOME_URL, (cookie) => {
      console.log(cookie)
      let isAuthenticated;
      // If it differs, change `cookie.remember_me` to whatever the name for your persistent cookie is!!!
      if (cookie && cookie.indexOf('remember_me') != -1) {
        isAuthenticated = true;
      }
      else {
        isAuthenticated = true;
        // isAuthenticated = false; // debug
      }

      this.setState({
        loggedIn: isAuthenticated,
        loadedCookie: true
      });
    });
  }

  /**
    * An option was pressed in the Side Menu. Go to scene...
    */
  _onSideMenuPress = (title, component, extraProps) => {
    // Close menu
    this.props.closeSideMenu();

    if(AppUtil.objIsEmpty(extraProps)) extraProps = {};

    // Change Scene
    this.refs.rootNavigator.replace({
      title: title,
      component: component,
      index: 0,
      ...extraProps
    });
  }

  /**
    * Toggle Side Menu
    */
  _onSideMenuChange = (isOpen) => {
    if (isOpen != this.props.sideMenuIsOpen) {
      this.props.toggleSideMenu();
    }
  }

  /**
    * Render each scene with a Navbar and Sidebar
    */
  _renderScene = (route, navigator) => {
    // Show Hamburger Icon when index is 0, and Back Arrow Icon when index is > 0
    let leftButton = {
      onPress: (route.index > 0)
        ? this.refs.rootNavigator.pop
        : this.props.toggleSideMenu,
      icon: (route.index > 0)
        ? 'ios-arrow-back-outline'
        : 'ios-menu-outline'
    };

    // Show a cross icon when transition pops from bottom
    if(route.transition == 'FloatFromBottom')  {
      leftButton.icon = 'ios-close-outline';
    }

    return (
      <View style={[AppStyles.appContainer, AppStyles.container]}>
        <NavigationBar
          title={<NavbarElements.Title title={route.title || null} />}
          statusBar={{style: 'light-content', hidden: false}}
          style={[AppStyles.navbar]}
          tintColor={AppConfig.primaryColor}
          leftButton={<NavbarElements.LeftButton onPress={leftButton.onPress} icon={leftButton.icon} />} />

        <route.component navigator={navigator} route={route} {...route.passProps} />
      </View>
    );
  }

  /**
    * RENDER
    */
  onNavigationStateChange (navState) {
    // If we get redirected back to the HOME_URL we know that we are logged in. If your backend does something different than this
    // change this line.
    if (navState.url == HOME_URL) {
      this.setState({
        loggedIn: true,
      });
    }
  }



  render () {
    // If we have completed loading the cookie choose to show Login WebView or the LoggedIn component, else just show an empty View.
    if (this.state.loadedCookie) {
      if (this.state.loggedIn) {
        return (
          <SideMenu
            ref="rootSidebarMenu"
            menu={<Menu navigate={this._onSideMenuPress} ref="rootSidebarMenuMenu" />}
            disableGestures={this.props.sideMenuGesturesDisabled}
            isOpen={this.props.sideMenuIsOpen}
            onChange={this._onSideMenuChange}>

            <Navigator
              ref="rootNavigator"
              style={[AppStyles.container, AppStyles.appContainer]}
              renderScene={this._renderScene}
              configureScene={function(route, routeStack) {
                if(route.transition == 'FloatFromBottom')
                  return Navigator.SceneConfigs.FloatFromBottom;
                else
                  return Navigator.SceneConfigs.FloatFromRight;
              }}
              initialRoute={{
                component: Index,
                index: 0,
                navigator: this.refs.rootNavigator,
                passProps: {
                  showSplashScreen: false,
                }
              }} />

          </SideMenu>
       );
      }
      else {
        return (
          <View style={[styles.container]}>
            <WebView
              ref={'webview'}
              automaticallyAdjustContentInsets={false}
              style={styles.webView}
              source={{uri: LOGIN_URL}}
              javaScriptEnabled={true}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
              startInLoadingState={true}
              scalesPageToFit={true}
            />
          </View>
        );
      }
    }
    else {
      return (
        <View></View>
      );
    }
  }
}

// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  sideMenuIsOpen: state.sideMenu.isOpen,
});

// Define the actions this component may dispatch
const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
  closeSideMenu: SideMenuActions.close,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
