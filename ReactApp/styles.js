/**
 * Global App Styles
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

// App Globals
import AppConfig from './config';

/* Styles ==================================================================== */
module.exports = StyleSheet.create({
	appContainer: {
    backgroundColor: "#000",
	},

	/* Default */
	container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  windowSize: {
    height: AppConfig.windowHeight,
    width: AppConfig.windowWidth,
  },

  /* Aligning items */
  rightAligned: {
    alignItems: 'flex-end',
  },

  /* Text Styles */
  baseText: {
    fontFamily: AppConfig.baseFont,
    fontWeight: '500',
    color: AppConfig.textColor,
    fontSize: AppConfig.baseFontSize,
    lineHeight: parseInt(AppConfig.baseFontSize + (AppConfig.baseFontSize * 0.5)),
  },
  h1: {
    fontFamily: AppConfig.baseFont,
    fontSize: AppConfig.baseFontSize * 2,
    lineHeight: parseInt((AppConfig.baseFontSize * 2) + (AppConfig.baseFontSize * 0.5)),
    color: AppConfig.primaryColor,
    fontWeight: '800',
    margin: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h2: {
    fontFamily: AppConfig.baseFont,
    color: AppConfig.primaryColor,
    fontSize: AppConfig.baseFontSize * 1.5,
    lineHeight: parseInt((AppConfig.baseFontSize * 1.5) + (AppConfig.baseFontSize * 0.5)),
    margin: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h3: {
    fontFamily: AppConfig.baseFont,
    fontWeight: '500',
    color: AppConfig.primaryColor,
    fontSize: AppConfig.baseFontSize * 1.25,
    lineHeight: parseInt((AppConfig.baseFontSize * 1.25) + (AppConfig.baseFontSize * 0.5)),
    margin: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h4: {
    fontFamily: AppConfig.baseFont,
    fontWeight: '800',
    color: AppConfig.primaryColor,
    fontSize: AppConfig.baseFontSize * 1.1,
    lineHeight: parseInt((AppConfig.baseFontSize * 1.1) + (AppConfig.baseFontSize * 0.5)),
    margin: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  p: {
    fontFamily: AppConfig.baseFont,
    marginBottom: 8,
    fontWeight: '500',
    color: AppConfig.textColor,
    fontSize: AppConfig.baseFontSize,
    lineHeight: parseInt(AppConfig.baseFontSize + (AppConfig.baseFontSize * 0.5)),
  },
  strong: {
    fontWeight: '900',
  },

  /* Helper Text Styles */
  centered: {
    textAlign: 'center',
  },
  textRightAligned: {
    textAlign: 'right',
  },

  /* Give me padding */
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  paddingLeft: {
    paddingLeft: 20,
  },
  paddingRight: {
    paddingRight: 20,
  },
  paddingVertical: {
    paddingVertical: 20,
  },
  paddingTop: {
    paddingTop: 20,
  },
  paddingBottom: {
    paddingBottom: 20,
  },
  paddingHorizontalSml: {
    paddingHorizontal: 10,
  },
  paddingLeftSml: {
    paddingLeft: 10,
  },
  paddingRightSml: {
    paddingRight: 10,
  },
  paddingVerticalSml: {
    paddingVertical: 10,
  },
  paddingTopSml: {
    paddingTop: 10,
  },
  paddingBottomSml: {
    paddingBottom: 10,
  },

  /* General Spacing */
  hr: {
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: AppConfig.borderColor,
    height: 1,
    backgroundColor: 'transparent',
    marginTop: 20,
    marginBottom: 20,
  },
  spacer_5: {
    left: 0, right: 0, height: 1,
    marginTop: 5,
  },
  spacer_10: {
    left: 0, right: 0, height: 1,
    marginTop: 10,
  },
  spacer_15: {
    left: 0, right: 0, height: 1,
    marginTop: 15,
  },
  spacer_20: {
    left: 0, right: 0, height: 1,
    marginTop: 20,
  },
  spacer_25: {
    left: 0, right: 0, height: 1,
    marginTop: 25,
  },
  spacer_30: {
    left: 0, right: 0, height: 1,
    marginTop: 30,
  },
  spacer_40: {
    left: 0, right: 0, height: 1,
    marginTop: 40,
  },

  /* Grid */
  row: {
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
 
  /* Forms */
  formLabel: {
    textAlign: 'left',
    marginBottom: 10,
  },
  formInputText: {
    height: 36,
    borderColor: '#cccccc',
    borderWidth: 0.75,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});