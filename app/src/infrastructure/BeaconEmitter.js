'use strict';

import React, {
  Component
}                             from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  DeviceEventEmitter
}                             from 'react-native';
import Beacons                from 'react-native-beacons-manager';
import BluetoothState         from 'react-native-bluetooth-state';
import boundActionCreator from '../ui/boundActionCreator';
import * as infrastructure_types from './types';

class BeaconEmitter extends Component {
  render() {
    return (
      <View>
        <Text>
        </Text>
      </View>
    );
  }
}

export default BeaconEmitter;
