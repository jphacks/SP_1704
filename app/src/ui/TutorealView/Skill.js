import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import boundActiionCreator from '../boundActionCreator';
import * as types from '../../application/types';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class Skill extends React.Component {
  render() {
    const state = this.props.state;
    return (
      <View style={styles.root}>
        <Text>Skill {this.props.skill_index}</Text>
      </View>
    );
  }
}
export default connect(state => ({state}))(Skill);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
