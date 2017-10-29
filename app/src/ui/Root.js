import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, DeviceEventEmitter } from 'react-native';
import boundActionCreator from './boundActionCreator';
import * as types from '../application/types';
import BeaconEmitter from '../infrastructure/BeaconEmitter';
import * as infrastructure_types from '../infrastructure/types';
boundActionCreator(infrastructure_types.SET_BEACONS, {beacons: [{
  major: 1,
  minor: 1,
}]});
boundActionCreator(infrastructure_types.SET_BEACONS, {beacons: [{
  major: 4,
  minor: 4,
}]});
boundActionCreator(infrastructure_types.SET_BEACONS, {beacons: [{
  major: 3,
  minor: 3,
}]});

import TutorealList from './TutorealList/index';
import TutorealView from './TutorealView/index';
import TaskView from './TaskView/index';

class Root extends React.Component {
  render() {
    const state = this.props.state;

    const views = [
      [["tutoreal_list"], <TutorealList key="TutorealList" />],
      [["tutoreal_view"], <TutorealView key="TutorealView" />],
      [["task_view"], <TaskView key="TaskView" />]
    ];
    
    console.log(this.props.state.application.view_state);
    return (
      <View style={styles.root}>
        <View style={styles.root}>
          {this.props.state.application.view_state === "tutoreal_list" ? <TutorealList /> : null}
          {this.props.state.application.view_state === "tutoreal_view" || this.props.state.application.view_state === "task_view" ? <TutorealView /> : null}
        </View>
        {this.props.state.application.view_state === "task_view" ? <TaskView /> : null}
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
  ibeacon_emitter: {
    flex: 1,
  },
});
