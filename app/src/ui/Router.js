import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, DeviceEventEmitter } from 'react-native';
import boundActiionCreator from './boundActionCreator';
import * as types from '../application/types';
import BeaconEmitter from '../infrastructure/BeaconEmitter';
import TutorealView from './TutorealView/index';

class Router extends React.Component {
  render() {
  }
}
export default connect(state => ({state}))(Router);

const styles = StyleSheet.create({
  root: {
    paddingTop: 20,
  },
  ibeacon_emitter: {
    flex: 1,
  },
});
