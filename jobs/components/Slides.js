import React from 'react';
import { View, Text, Dimensions, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Slides = ({ data, onComplete }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={true}
      pagingEnabled
      data={data}
      keyExtractor={slide => slide.text}
      renderItem={({ item: slide }) => {
        return (
          <View style={{ ...styles.slideStyle, backgroundColor: slide.color }}>
            <Text style={styles.textStyle}>{slide.text}</Text>
            {slide.pageNo === data.length && (
              <Button
                title="Onwards!"
                raised
                buttonStyle={styles.buttonStyle}
                onPress={onComplete}
              />
            )}
          </View>
        );
      }}
    />
  );
};

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15
  }
};

export default Slides;
