import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, DeviceEventEmitter } from 'react-native';
import boundActiionCreator from './boundActionCreator';
import * as types from '../application/types';
import BeaconEmitter from '../infrastructure/BeaconEmitter';

console.log("!!", BeaconEmitter);

class Root extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <View>
        <BeaconEmitter style={styles.ibeacon_emitter} />
        <Text>state</Text>
        <Text>{JSON.stringify(state, null, "  ")}</Text>
        <Button title="count up" onPress={() => boundActiionCreator(types.INCREMENT)} />
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
