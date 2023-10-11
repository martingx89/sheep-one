import React from 'react';
import { usePosition } from 'use-position';
import { SET_WATCH } from '../../constants/mapSettings';

export const UserPosition = () => {

  const { latitude, longitude, speed, timestamp, accuracy, heading, error } = usePosition(SET_WATCH);

  return (
    <code>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      speed: {speed}
      <br />
      timestamp: {timestamp}
      <br />
      accuracy: {accuracy && `${accuracy} meters`}
      <br />
      heading: {heading && `${heading} degrees`}
      <br />
      error: {error}
    </code>
  );
};
