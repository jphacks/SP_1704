import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import boundActiionCreator from '../boundActionCreator';
import * as types from '../../application/types';

import TaskView from '../TaskView/index';
import TutorealView from '../TutorealView/index';


class TutorealList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [
        {
          title: "そば",
          img: "https://lohas.nicoseiga.jp//thumb/6494740cz?",
        },
        {
          title: "ピザ",
          img: "https://lohas.nicoseiga.jp/thumb/6746922i?1495815505",
        },
        {
          title: "あ",
          img: "https://lohas.nicoseiga.jp/thumb/6746922i?1495815505",
        },
        {
          title: "い",
          img: "https://lohas.nicoseiga.jp/thumb/6746922i?1495815505",
        },
        {
          title: "う",
          img: "https://lohas.nicoseiga.jp/thumb/6746922i?1495815505",
        },
        {
          title: "え",
          img: "https://lohas.nicoseiga.jp/thumb/6746922i?1495815505",
        },
        {
          title: "お",
          img: "https://lohas.nicoseiga.jp/thumb/6746922i?1495815505",
        },
        {
          title: "か",
          img: "https://lohas.nicoseiga.jp/thumb/6746922i?1495815505",
        },
        {
          title: "き",
          img: "https://lohas.nicoseiga.jp/thumb/6746922i?1495815505",
        },
      ],
    };
  }

  render() {
    const state = this.props.state;
    return (
      <ScrollView>
        <View style={styles.tutorealList}>
          {this.state.tutorials.map((tutoreal) => {
            return (
              <View key={tutoreal.title} style={styles.card}>
                <Text>{tutoreal.title}</Text>
                <Image
                  style={{width: 100, height: 100, resizeMode: 'cover'}}
                  source={{uri: tutoreal.img}}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
export default connect(state => ({state}))(TutorealList);

const styles = StyleSheet.create({
  tutorealList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
