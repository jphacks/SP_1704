import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import boundActionCreator from '../boundActionCreator';
import * as types from '../../application/types';

class TutorealList extends React.Component {
  render() {
    const tips = this.props.children.map((x, i) =>
      <TouchableOpacity style={[styles.tips, this.props.state.application.active_skill_index === i ? styles.active_tips : null]} key={i} onPress={
        () => boundActionCreator(types.SET_ACTIVE_SKILL_INDEX, {index: i})
      }>
        <Text style={[styles.tips__text, this.props.state.application.active_skill_index === i ? styles.tips__active_text : null]}>{x.props.tab_name}</Text>
      </TouchableOpacity>);


    return (
      <View style={styles.root}>
        <View>
          <ScrollView style={styles.headers} horizontal={true}>
            {tips}
          </ScrollView>
        </View>
        <View style={styles.content}>
          {this.props.children[this.props.state.application.active_skill_index]}
        </View>
      </View>
    );
  }
}
export default connect(state => ({state}))(TutorealList);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#B5CC39",
  },
  headers: {
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderColor: "#A6B846",
  },
  tips: {
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#EDEEA5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  active_tips: {
    backgroundColor: "#9DB133",
  },
  tips__text: {
    textAlign: "center",
  },
  tips__active_text: {
    color: "#412A1B",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
