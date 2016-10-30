'use strict';

import {
  load
} from '../api/playlist';
import {
  PLAYLIST_UPDATE
} from '../actionTypes';

let timer;

export function playlistUpdate() {
  return (dispatch) => {
    load()
      .then(data => dispatch({ type: PLAYLIST_UPDATE, data: data.songs }))
      .catch(err => console.log(err));
  };
}

export function playlistStart() {
  return (dispatch) => {
    dispatch(playlistUpdate());
    timer = setInterval(() => {
      dispatch(playlistUpdate());
    }, 20000);
  };
}

export function playlistStop() {
  clearInterval(timer);
  return { type: null };
}