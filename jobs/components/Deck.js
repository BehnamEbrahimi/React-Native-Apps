import React, { useState, useEffect } from 'react';
import {
  Animated,
  PanResponder,
  Dimensions, // gives access the dimensions of the real device
  LayoutAnimation,
  UIManager
} from 'react-native';
import CustomCard from './CustomCard';
import NoMoreCard from './NoMoreCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Deck = ({
  data,
  keyProp = 'id',
  onSwipeRight = () => {},
  onSwipeLeft = () => {}
}) => {
  // if no props passed, uses default values
  const [index, setIndex] = useState(0);

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    // for handling gestures
    onStartShouldSetPanResponder: () => true, // anytime use taps on the screen, this functions is called. if we returns true it means that this panResponder should be responsible for the gesture. we can have complex logic in this func to figure out if this is the right responder
    onPanResponderMove: (event, gesture) => {
      // anytime user moves their finger (dragging). this function is called many times
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, gesture) => {
      // when they remove their hand
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipe('right');
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipe('left');
      } else {
        resetPosition();
      }
    }
  });

  useEffect(() => {
    setIndex(0);
  }, [data]);

  useEffect(() => {
    // to prevent the jump in each render if the layout has been changed in different renders
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true); // for Android
    LayoutAnimation.spring();
  }, [index]);

  const forceSwipe = direction => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = direction => {
    const item = data[index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    setIndex(index + 1);
    position.setValue({ x: 0, y: 0 });
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 }
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      // we want to map the amount of distance each card has been dragged to the amount of rotation-> we should use interpolate function
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  };

  return (
    <>
      {index >= data.length ? (
        <NoMoreCard />
      ) : (
        data
          .map((item, i) => {
            if (i < index) {
              return null;
            }

            if (i === index) {
              // only the current index is registered for the panResponder (handler will be attached)
              return (
                <Animated.View
                  key={item[keyProp]}
                  style={[getCardStyle(), styles.cardStyle, { zIndex: 99 }]}
                  {...panResponder.panHandlers}>
                  <CustomCard cardData={item} />
                </Animated.View>
              );
            }

            return (
              <Animated.View // if we had used View instead of Animated.View for the rest of the cards behind the top card, when they became visible they would have flashed because View would be promoted to Animated View
                key={item[keyProp]}
                style={[
                  styles.cardStyle,
                  { top: 10 * (i - index), zIndex: 5 } // top will be added to the top of each element-> cascade effect
                ]}>
                <CustomCard cardData={item} />
              </Animated.View>
            );
          })
          .reverse() // the first card should be on top of stack
      )}
    </>
  );
};

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
};

export default Deck;
