export const ZOOM_LEVEL = 15;
export const FLY_TO_SETUP = {
  duration: 1.5, // Animation duration in seconds
  easeLinearity: 0.25, // Easing linearity (adjust as needed)
  noMoveStart: false, // Fire the move event at the start of the animation
  animate: true, // Smooth animation
  maxZoom: 18, // Maximum zoom level during the animation
  easeOutPower: 3, // Power of the easing out (higher values for more abrupt stops)
  panInsideBounds: true, // Ensure the destination is within the map's bounds
  maxBounds: [
    [50, -180],
    [-50, 180],
  ], // Maximum bounds for panning
  paddingTopLeft: [0, 0], // Padding from the top-left corner of the map container
  paddingBottomRight: [0, 0], // Padding from the bottom-right corner of the map container
};
