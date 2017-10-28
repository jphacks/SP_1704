import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import boundActiionCreator from '../boundActionCreator';
import * as types from '../../application/types';

class Root extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <View>
        <Text>task view</Text>
      </View>
    );
  }
}
export default connect(state => ({state}))(Root);

const styles = StyleSheet.create({
});
