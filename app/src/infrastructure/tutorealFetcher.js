import boundActionCreator from '../ui/boundActionCreator';
import * as types from '../application/types';

const fetch_tutorials = beacon => {
  fetch(`http://104.154.184.10/api/v1/tutorials/?major=${beacon.major}&minor=${beacon.minor}`).then(res => res.json()).then(tutoreals => tutoreals[0]).then(tutoreal => {
    tutoreal.beacon = beacon;
    boundActionCreator(types.ADD_TUTOREAL, {tutoreal});
  });
};

const fetch_from_beacons = beacons => {
  for(let beacon of beacons){
    fetch_tutorials(beacon);
  }
};

const tutorealFetcher = store => next => action => {
  const old_beacons = store.getState().infrastructure.beacons;
  next(action);
  const new_beacons = store.getState().infrastructure.beacons;
  if(old_beacons.length !== new_beacons.length)fetch_from_beacons(new_beacons.filter(x => !old_beacons.includes(x)));
  console.log("@middleware", store.getState());
}

export default tutorealFetcher;
