import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '@navigators/Root';
import {BoxSpace, Container, Header} from 'components/Common';

type OrderRequestDetailScreenProp = StackNavigationProp<StackParamList, 'Home'>;

const styles = StyleSheet.create({
  buttonMargin: {
    marginTop: 16,
  },
  mainContainer: {
    padding: 16,
  },
});

const Home = ({navigation}: {navigation: OrderRequestDetailScreenProp}) => {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const anim1Process = Animated.timing(fadeAnim1, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: false,
  });

  const animHide1Process = Animated.timing(fadeAnim1, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: false,
  });

  const handleShowAnim1 = () => {
    anim1Process.start();
  };
  const handleHideAnim1 = () => {
    animHide1Process.start();
  };

  const handleAnim2Stop = () => {
    fadeAnim2.stopAnimation();
  };

  const showAnim2 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim2, {
          toValue: {x: 0, y: 100},
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim2, {
          toValue: {x: 100, y: 100},
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim2, {
          toValue: {x: 100, y: -100},
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim2, {
          toValue: {x: 0, y: -100},
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim2, {
          toValue: {x: 0, y: 0},
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
      {
        iterations: 4,
      },
    ).start();
  };

  return (
    <Container>
      <Header title="Animation test" />
      <View style={styles.mainContainer}>
        <Button title="Show Height" onPress={handleShowAnim1} />
        <Button title="Hide Height" onPress={handleHideAnim1} />
        <Animated.View
          style={{
            height: fadeAnim1,
          }}>
          <Text>Surprises comes after</Text>
        </Animated.View>
        <BoxSpace.D />
        <Button title="Move the button below" onPress={showAnim2} />
        <Animated.View
          style={{
            ...styles.buttonMargin,
            top: fadeAnim2.x,
            left: fadeAnim2.y,
          }}>
          <Button
            title="Stop Animation This Animation"
            onPress={handleAnim2Stop}
          />
        </Animated.View>
      </View>
    </Container>
  );
};

export default Home;
