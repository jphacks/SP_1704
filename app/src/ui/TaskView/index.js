import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import boundActionCreator from '../boundActionCreator';
import * as types from '../../application/types';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isTaskView: true };
  }
  render() {
    const active_tutoreal = this.props.state.application.tutoreals[this.props.state.application.active_titoreal_index];
    const active_skill = active_tutoreal.skill_set[this.props.state.application.active_skill_index];
    const active_task = active_skill.task_set[this.props.state.application.active_task_index];

    if(this.state.isTaskView) {
      return (
        <TouchableOpacity style={styles.taskView} onPress={() => boundActionCreator(types.SET_VIEW_STATE, {view_state: "tutoreal_view"})}>
          <View style={styles.modal}>
            <View style={styles.header}>
              <Text style={styles.text}>{active_task.name}</Text>
              <Text style={styles.close_button}>×</Text>
            </View>
            <Image
              style={styles.image}
              source={{uri: this.props.state.infrastructure.api_server + active_task.image_path}}
            />
            <Text style={styles.description}>{active_task.description}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
}
export default connect(state => ({state}))(Root);

import Dimensions from 'Dimensions';
const rect = Dimensions.get("window");
const styles = StyleSheet.create({
  taskView: {
    height: rect.height,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  close_button: {
    color: "#412A1B",
    fontSize: 20,
  },
  description: {
    padding: 10,
    color: "#412A1B",
  },
  text: {
    color: "#412A1B",
    padding: 10,
    width: 250,
    textAlign: "center",
  },
  modal: {
    bottom: -200,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: "#ECE97E",
    overflow: "hidden",
  },
});
