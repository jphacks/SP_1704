'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  DeviceEventEmitter
} from 'react-native';
import Beacons from 'react-native-beacons-manager';
import BluetoothState from 'react-native-bluetooth-state';
import { Provider } from 'react-redux';
import store from './src/store/index'
import Root from './src/ui/Root';

class TutoReal extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(
  'reactNativeBeaconExample',
  () => TutoReal
);
