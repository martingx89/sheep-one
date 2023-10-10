import React from 'react';
import { usePosition } from 'use-position';

export const UserPosition = () => {
  const watch = true;
  const { latitude, longitude, speed, timestamp, accuracy, heading, error } = usePosition(watch);

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
