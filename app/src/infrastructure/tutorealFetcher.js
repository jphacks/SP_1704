import boundActionCreator from '../ui/boundActionCreator';
import * as types from '../application/types';

const beacon_num = 0;

const fetch_tutorials = beacon => {
  fetch(`http://104.154.184.10/api/v1/detailed_tutorial/?major=${beacon.major}&minor=${beacon.minor}`).then(res => res.json()).then(tutoreal => {
    boundActionCreator(types.ADD_TUTOREAL, {tutoreal});
  });
};

const fetch_from_beacons = beacons => {
  if(beacons.length > beacon_num){
    for(let beacon of beacons){
      fetch_tutorials(beacon);
    }
    beacon_num = beacons.length;
  }
};

const tutorealFetcher = store => next => action => {
  const old_beacons = store.getState().infrastructure.beacons;
  next(action);
  const new_beacons = store.getState().infrastructure.beacons;
  console.log(old_beacons, new_beacons, action.type);
  if(old_beacons.length !== new_beacons.length)fetch_from_beacons(new_beacons.filter(x1 => !old_beacons.find(x2 => x1.id === x2.id) !== undefined));
  // console.log("@middleware", store.getState());
}

export default tutorealFetcher;
