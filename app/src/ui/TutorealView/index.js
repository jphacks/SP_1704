import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import boundActionCreator from '../boundActionCreator';
import * as types from '../../application/types';
import TabView from './TabView';
import Skill from './Skill';

class TutorealView extends React.Component {
  render() {
    const state = this.props.state;
    const skills = this.props.state.application.tutoreals[this.props.state.application.active_titoreal_index].skill_set.map(x => <Skill tab_name={`${x.name}`} skill_index={x.name} key={x.id} />);

    return (
      <View style={styles.root}>
        <TouchableOpacity style={styles.back_button} onPress={() => boundActionCreator(types.SET_VIEW_STATE, {view_state: "tutoreal_list"})}>
          <Text style={styles.back_button__text}>＜戻る</Text>
        </TouchableOpacity>
        <TabView>
          {skills}
        </TabView>
      </View>
    );
  }
}
export default connect(state => ({state}))(TutorealView);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  back_button: {
    backgroundColor: "#F7F7F7",
  },
  back_button__text: {
    padding: 10,
    color: "#057FF2",
  },
});
