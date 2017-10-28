import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import boundActiionCreator from '../boundActionCreator';
import * as types from '../../application/types';
import TabView from './TabView';
import Skill from './Skill';

class TutorealView extends React.Component {
  render() {
    const state = this.props.state;
    const skills = Array.from({length: 5}, (x, i) => i).map(x => <Skill tab_name={`skill ${x}`} skill_index={x} key={x} />);
    
    return (
      <TabView>
        {skills}
      </TabView>
    );
  }
}
export default connect(state => ({state}))(TutorealView);

const styles = StyleSheet.create({
});
