import { DeviceEventEmitter } from 'react-native'
import Beacons from 'react-native-beacons-manager'

// Define a region which can be identifier + uuid,
// identifier + uuid + major or identifier + uuid + major + minor
// (minor and major properties are numbers)
const region = {
    identifier: 'Estimotes',
    uuid: 'AC4F29C3-FFCE-4F9B-8FB5-10D342F18D7A'
};

export const WillMount = () => {
  //
  // ONLY non component state aware here in componentWillMount
  //
  // Request for authorization while the app is open
  //Beacons.requestWhenInUseAuthorization();
  // Define a region which can be identifier + uuid,
  // identifier + uuid + major or identifier + uuid + major + minor
  // (minor and major properties are numbers)
  // Range for beacons inside the region
  Beacons.startRangingBeaconsInRegion(region);
  //Beacons.startUpdatingLocation();
};

export const DidMount = () => {
  //
  // component state aware here - attach events
  //
  // Ranging: Listen for beacon changes
  this.beaconsDidRange = DeviceEventEmitter.addListener(
    'beaconsDidRange',
    (data) => {
      console.log(data);
    }
  );

  // listen bluetooth state change event
  BluetoothState.subscribe(
    bluetoothState => {
      this.setState({ bluetoothState: bluetoothState });
    }
  );
  BluetoothState.initialize();
};
