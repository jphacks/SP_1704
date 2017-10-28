import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import boundActionCreator from '../boundActionCreator';
import * as types from '../../application/types';

class Skill extends React.Component {
  render() {
    const state = this.props.state;
    const tasks = this.props.task_set.sort((x1, x2) => x1.id > x2.id).map((task, i) =>
      <View key={task.name}>
        <TouchableOpacity style={styles.task} onPress={() => {
          boundActionCreator(types.SET_VIEW_STATE, {view_state: "task_view"});
          boundActionCreator(types.SET_ACTIVE_TASK_INDEX, {index: i});
        }}>
          <Text style={styles.task__num}>{i + 1}</Text>
          <Image
            style={{width: 100, height: 100, resizeMode: 'cover'}}
            source={{uri: task.image_path}}
          />
        </TouchableOpacity>
        <Text style={styles.task__name}>{task.name}</Text>
      </View>
    );

    return (
      <View style={styles.root}>
        {tasks}
      </View>
    );
  }
}
export default connect(state => ({state}))(Skill);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
  },
  task: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  task__num: {
    fontSize: 30,
    marginRight: 20,
  },
  task__name: {
    textAlign: "center",
  },
});
