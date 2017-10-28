import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import boundActiionCreator from '../boundActionCreator';
import * as types from '../../application/types';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {
  Scene,
  Router,
  Actions,
  Stack,
} from 'react-native-router-flux';

import TaskView from '../TaskView/index';
import TutorealView from '../TutorealView/index';


class Root extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <Router>
        <Stack key="root">
          <Scene key="TutorealView" component={TutorealView} title="TutorealView" />
          <Scene key="TaskView" component={TaskView} title="TaskView" />
        </Stack>
      </Router>
    );
  }
}
export default connect(state => ({state}))(Root);

const styles = StyleSheet.create({
});
