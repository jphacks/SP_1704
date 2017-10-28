import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
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
        <View style={styles.taskView}>
          <View style={styles.modal}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'cover'}}
              source={{uri: active_task.image_path}}
            />
            <Text>{active_task.name}</Text>
          </View>
        </View>
      );
    }
  }
}
export default connect(state => ({state}))(Root);

const styles = StyleSheet.create({
  taskView: {
    alignItems: 'center',
  },
  modal: {
    top: 50,
    width: 300,
    height: 400,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
  },
});
