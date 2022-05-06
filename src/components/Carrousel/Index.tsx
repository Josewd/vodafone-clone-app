import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, View, Pressable } from 'react-native';

// Style
import { classes } from './style';

// Types
import { Props } from './types';

const Carousel: React.FC<Props> = ({ elementsList }: Props) => {
  const [selectedElement, setSelectedElement] = useState(elementsList[0]);
  const [nextElement, setNextElement] = useState<React.ReactNode | undefined>();

  const slideAnimation = useRef(new Animated.Value(360)).current;
  const slideOutAnimation = useRef(new Animated.Value(0)).current;

  const getNextIndex = useCallback((): number => {
    const currentIndex = elementsList.findIndex(
      item => item === selectedElement,
    );
    return currentIndex + 1 === elementsList.length ? 0 : currentIndex + 1;
  }, [elementsList, selectedElement]);

  const onTransitionSlide = useCallback(() => {
    const nextIndex = getNextIndex();
    setNextElement(elementsList[nextIndex]);

    setTimeout(() => {
      setSelectedElement(elementsList[nextIndex]);
    }, 500);

    Animated.timing(slideAnimation, {
      toValue: 5,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setNextElement(undefined);
      slideAnimation.setValue(360);
    });

    Animated.timing(slideOutAnimation, {
      toValue: -360,
      duration: 600,
      useNativeDriver: true,
    }).start(() => slideOutAnimation.setValue(0));
  }, [elementsList, getNextIndex, slideAnimation, slideOutAnimation]);

  const mountDotsView = () => {
    return elementsList.map((item, idx) => {
      const currentCardIndex = elementsList.findIndex(
        card => card === selectedElement,
      );
      return (
        <View
          key={idx}
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
    }, 6000);
    return () => clearInterval(automateAnimation);
  }, [onTransitionSlide]);

  return (
    <Pressable onPress={onTransitionSlide} style={classes.container}>
      <Animated.View
        style={{
          ...classes.element,
          transform: [{ translateX: slideOutAnimation }],
        }}>
        <View style={classes.dotsContainer}>{mountDotsView()}</View>
        {selectedElement}
      </Animated.View>
      {nextElement && (
        <Animated.View
          style={{
            ...classes.nextElement,
            transform: [{ translateX: slideAnimation }],
          }}>
          <View style={classes.dotsContainer}>{mountDotsView()}</View>
          {nextElement}
        </Animated.View>
      )}
    </Pressable>
  );
};

export default Carousel;
