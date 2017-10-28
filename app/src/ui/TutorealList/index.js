import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import boundActionCreator from '../boundActionCreator';
import * as types from '../../application/types';

import TaskView from '../TaskView/index';
import TutorealView from '../TutorealView/index';


class TutorealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [...Array.from({length: 200}, (x, i) => i).map(x => ({title: x, img: "https://lohas.nicoseiga.jp//thumb/6494740cz?"}))],
    };
  }

  render() {
    const state = this.props.state;
    return (
      <ScrollView style={styles.tutorealListContainer}>
        <View style={styles.tutorealList}>
          {this.props.state.application.tutoreals.map((tutoreal, i) => {
            return (
              <TouchableOpacity key={tutoreal.name} style={styles.card} onPress={() => {
                boundActionCreator(types.SET_VIEW_STATE, {view_state: "tutoreal_view"});
                boundActionCreator(types.SET_ACTIVE_TUTOREAL_INDEX, {index: i});
              }}>
                <Text>{tutoreal.name}</Text>
                <Image
                  style={{width: 100, height: 100, resizeMode: 'cover'}}
                  source={{uri: tutoreal.image_path}}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
export default connect(state => ({state}))(TutorealList);

const styles = StyleSheet.create({
  tutorealListContainer: {
    flex: 1,
  },
  tutorealList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width: 100,
    height: 100,
  },
});
