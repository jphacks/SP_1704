import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import boundActionCreator from '../boundActionCreator';
import * as types from '../../application/types';

class TutorealList extends React.Component {
  render() {
    const tips = this.props.children.map((x, i) =>
      <TouchableOpacity style={[styles.tips, this.props.state.application.tab_index === i ? styles.active_tips : null]} key={i} onPress={
        () => boundActionCreator(types.SET_TAB_INDEX, {tab_index: i})
      }>
        <Text style={[styles.tips__text, this.props.state.application.tab_index === i ? styles.tips__active_text : null]}>{x.props.tab_name}</Text>
      </TouchableOpacity>);


    return (
      <View style={styles.root}>
        <View>
          <ScrollView style={styles.headers} horizontal={true}>
            {tips}
          </ScrollView>
        </View>
        <View style={styles.content}>
          {this.props.children[this.props.state.application.tab_index]}
        </View>
      </View>
    );
  }
}
export default connect(state => ({state}))(TutorealList);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headers: {
    flexDirection: 'row',
  },
  tips: {
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  active_tips: {
    borderBottomWidth: 3,
    borderColor: "#999",
  },
  tips__text: {
    textAlign: "center",
  },
  tips__active_text: {
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
});
