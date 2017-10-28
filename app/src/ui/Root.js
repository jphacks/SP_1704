import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, DeviceEventEmitter } from 'react-native';
import boundActiionCreator from './boundActionCreator';
import * as types from '../application/types';

class Root extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <View style={styles.container}>
        <Text>{state.application.count}</Text>
        <Button title="count up" onPress={() => boundActiionCreator(types.INCREMENT)} />
      </View>
    );
  }
}
export default connect(state => ({state}))(Root);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
