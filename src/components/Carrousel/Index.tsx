import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Animated, View } from 'react-native';

// Style
import { classes } from './style';

// Types
import { Props } from './types';

const Carrousel: React.FC<Props> = ({ elementsList }: Props) => {
  const [selectedElement, setSelectedElement] = useState(elementsList[0]);
  const [nextElement, setNextElement] = useState<React.ReactNode | undefined>();

  const slideAnimation = useRef(new Animated.Value(360)).current;

  const onTransitionSlide = useCallback(() => {
    const currentCardIndex = elementsList.findIndex(
      card => card === selectedElement,
    );

    const next =
      currentCardIndex + 1 === elementsList.length
        ? elementsList[0]
        : elementsList[currentCardIndex + 1];
    setNextElement(next);

    Animated.timing(slideAnimation, {
      toValue: 5,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setSelectedElement(next);
      setNextElement(undefined);
      slideAnimation.setValue(360);
    });
  }, [elementsList, selectedElement, slideAnimation]);

  const mountDotsView = () => {
    return elementsList.map((item, idx) => {
      const currentCardIndex = elementsList.findIndex(
        card => card === selectedElement,
      );
      return (
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...classes.dot,
            backgroundColor: currentCardIndex === idx ? 'black' : '#888888',
          }}
        />
      );
    });
  };

  useEffect(() => {
    const automateAnimation = setInterval(() => {
      onTransitionSlide();
    }, 4000);
    return () => clearInterval(automateAnimation);
  }, [onTransitionSlide]);

  return (
    <TouchableOpacity
      onPress={() => onTransitionSlide()}
      activeOpacity={1}
      style={classes.container}>
      <View style={classes.dotsContainer}>{mountDotsView()}</View>
      {selectedElement}
      {nextElement && (
        <Animated.View
          style={{
            ...classes.nextElement,
            transform: [{ translateX: slideAnimation }],
          }}>
          {nextElement}
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

export default Carrousel;
