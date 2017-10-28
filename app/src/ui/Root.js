import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, DeviceEventEmitter } from 'react-native';
import boundActiionCreator from './boundActionCreator';
import * as types from '../application/types';
import BeaconEmitter from '../infrastructure/BeaconEmitter';

import TutorealList from './TutorealList/index';
import TutorealView from './TutorealView/index';
import TaskView from './TaskView/index';

class Root extends React.Component {
  render() {
    const state = this.props.state;
    
    const views = {
      "tutoreal_list": <TutorealList />,
      "tutoreal_view": <TutorealView />,
      "task_view": <TaskView />,
    };
    
    return (
      <View style={styles.root}>
        {views[this.props.state.application.view_state]}
      </View>
    );
  }
}
export default connect(state => ({state}))(Root);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
  },
  state: {
    marginTop: 100,
  },
  ibeacon_emitter: {
    flex: 1,
  },
});
