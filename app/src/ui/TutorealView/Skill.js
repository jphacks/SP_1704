import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
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
          <Text style={styles.task__num}>{("0" + (i + 1)).slice( -2 )}</Text>
          <Image
            style={{width: 100, height: 100, resizeMode: 'cover', borderRadius: 10}}
            source={{uri: task.image_path}}
          />
        </TouchableOpacity>
      </View>
    );

    return (
      <ScrollView style={styles.root}>
        {tasks}
      </ScrollView>
    );
  }
}
export default connect(state => ({state}))(Skill);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 0,
  },
  task: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  task__num: {
    color: "#485535",
    fontWeight: "bold",
    fontSize: 40,
    marginRight: 30,
  },
});
