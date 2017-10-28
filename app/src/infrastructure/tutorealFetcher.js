import Beacons                from 'react-native-beacons-manager';
import BluetoothState         from 'react-native-bluetooth-state';
import boundActionCreator from '../ui/boundActionCreator';
import * as infrastructure_types from './types';

const tutorealFetcher = store => next => action => {
  console.log("start", store.getState().application.beacons.length);
  next(action);
  console.log("end", store.getState().application.beacons.length);
}

export default BeaconEmitter;
