import { StyleSheet } from 'react-native';

export const classes = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '95%',
    position: 'relative',
    overflow: 'hidden',
  },
  nextElement: {
    width: '100%',
    position: 'absolute',
    zIndex: 99,
  },
  element: {
    width: '100%',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    margin: 2,
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 9999,
  },
});
