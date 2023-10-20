import { HIGH_ACCURACY, TIMEOUT } from '../constants/pageSetup';

export const getGPSLocation = (successCallback, errorCallback) => {
  if ('geolocation' in navigator) {
    const options = {
      enableHighAccuracy: HIGH_ACCURACY,
      timeout: TIMEOUT,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        successCallback({ latitude, longitude });
      },
      (error) => {
        let errorMessage = 'Unknown error';

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'User denied the request for geolocation.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'The request to get user location timed out.';
            break;
          default:
            errorMessage = 'An unknown error occurred.';
        }

        errorCallback({ message: errorMessage });
      },
      options
    );
  } else {
    errorCallback({ message: 'Geolocation is not available' });
  }
};
