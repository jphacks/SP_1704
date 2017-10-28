import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import boundActionCreator from '../boundActionCreator';
import * as types from '../../application/types';

import TaskView from '../TaskView/index';
import TutorealView from '../TutorealView/index';


class TutorealList extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <View>
        <Text>tutoreal list</Text>
      </View>
    );
  }
}
export default connect(state => ({state}))(TutorealList);

const styles = StyleSheet.create({
});
