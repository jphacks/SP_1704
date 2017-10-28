import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, DeviceEventEmitter } from 'react-native';
import boundActiionCreator from './boundActionCreator';
import * as types from '../application/types';
import BeaconEmitter from '../infrastructure/BeaconEmitter';
import TutorealList from './TutorealList/index';

class Root extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <View>
        <BeaconEmitter style={styles.ibeacon_emitter} />
        <TutorealList />
        <Text>state</Text>
        <Text>{JSON.stringify(state, null, "  ")}</Text>
      </View>
    );
  }
}
export default connect(state => ({state}))(Root);

const styles = StyleSheet.create({
  ibeacon_emitter: {
    flex: 1,
  }
});
