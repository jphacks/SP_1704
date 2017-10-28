import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import boundActionCreator from '../boundActionCreator';
import * as types from '../../application/types';

class TutorealList extends React.Component {
  render() {
    const headers = this.props.children.map((x, i) => <TouchableOpacity key={i} onPress={
      () => boundActionCreator(types.SET_TAB_INDEX, {tab_index: i})
    }><Text>{x.props.tab_name}</Text></TouchableOpacity>);
    
    
    return (
      <View>
        {headers}
        {this.props.children[this.props.state.application.tab_index]}
      </View>
    );
  }
}
export default connect(state => ({state}))(TutorealList);

const styles = StyleSheet.create({
});
