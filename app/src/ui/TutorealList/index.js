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
                <Image
                  style={styles.image}
                  source={{uri: tutoreal.image_path}}
                />
                <Text style={styles.name}>{tutoreal.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
export default connect(state => ({state}))(TutorealList);

import Dimensions from 'Dimensions';
const rect = Dimensions.get("window");
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
  name: {
    padding: 10,
    textAlign: "center",
    color: "#412A1B",
    backgroundColor: "#EDEEA5",
  },
  image: {
    width: rect.width / 3.2,
    height: rect.width / 3.4, 
    resizeMode: 'cover'
  },
  card: {
    margin: 10,
    width: rect.width / 3.2,
    height: rect.height / 3.4,
  },
});
