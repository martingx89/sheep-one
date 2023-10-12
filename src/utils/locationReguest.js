import { HIGH_ACCURACY, TIMEOUT } from "../constants/mapSettings";

export const getGPSLocation = (successCallback, errorCallback) => {
    if ('geolocation' in navigator) {
      const options = {
        enableHighAccuracy: HIGH_ACCURACY,
        timeout: TIMEOUT
      };
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          successCallback({ latitude, longitude });
        },
        (error) => {
          errorCallback(error);
        },
        options
      );
    } else {
      errorCallback({ message: 'Geolocation is not available' });
    }
  };