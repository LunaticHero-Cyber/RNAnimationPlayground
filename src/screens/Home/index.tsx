import React, {useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '@navigators/Root';
import {BoxSpace, Container, Header} from 'components/Common';

type OrderRequestDetailScreenProp = StackNavigationProp<StackParamList, 'Home'>;

const styles = StyleSheet.create({
  continueButton: {
    zIndex: -10,
  },
  buttonMargin: {
    marginTop: 16,
  },
  mainContainer: {
    padding: 16,
  },
});

const Home = ({navigation}: {navigation: OrderRequestDetailScreenProp}) => {
  const [buttonPosX, setButtonPosX] = useState(0);
  const [buttonPosY, setButtonPosY] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [isStopButtonDisabled, setIsStopButtonDisabled] = useState(true);

  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const continueButtonAnim = useRef(new Animated.Value(-34)).current;
  const fadeAnim2 = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const showContinueButtonProcess = Animated.timing(continueButtonAnim, {
    toValue: 16,
    duration: 1000,
    useNativeDriver: false,
  });

  const hideContinueButtonProcess = Animated.timing(continueButtonAnim, {
    toValue: -34,
    duration: 1000,
    useNativeDriver: false,
  });

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

  const handleShowContinueButton = () => {
    showContinueButtonProcess.start();
  };
  const handleHideContinueButton = () => {
    hideContinueButtonProcess.start();
  };

  const handleAnim2Stop = () => {
    setCanContinue(true);
    setIsStopButtonDisabled(true);
    handleShowContinueButton();
    fadeAnim2.stopAnimation();
  };

  const resetAnim2 = () => {
    setCanContinue(false);
    setIsStopButtonDisabled(true);
    handleHideContinueButton();
    Animated.timing(fadeAnim2, {
      toValue: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const loop = Animated.loop(
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
  );

  const showAnim2 = () => {
    setCanContinue(true);
    setIsStopButtonDisabled(false);
    handleHideContinueButton();
    loop.start();
  };

  const continueAnim2 = () => {
    setCanContinue(true);
    setIsStopButtonDisabled(false);
    handleHideContinueButton();

    if (buttonPosX === 0 && buttonPosY < 0) {
      Animated.sequence([
        Animated.timing(fadeAnim2, {
          toValue: {x: 0, y: 0},
          duration: 500,
          useNativeDriver: false,
        }),
        loop,
      ]).start();
    } else if (buttonPosX === 0 && buttonPosY < 100) {
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
        loop,
      ]).start();
    } else if (buttonPosX < 100 && buttonPosY === 100) {
      Animated.sequence([
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
        loop,
      ]).start();
    } else if (buttonPosX === 100 && buttonPosY > -100) {
      Animated.sequence([
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
        loop,
      ]).start();
    } else if (buttonPosX > 0 && buttonPosY === -100) {
      Animated.sequence([
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
        loop,
      ]).start();
    }
  };

  useEffect(() => {
    fadeAnim2.x.addListener(e => {
      setButtonPosX(e.value);
    });
    fadeAnim2.y.addListener(e => {
      setButtonPosY(e.value);
    });

    return () => {
      fadeAnim2.x.removeAllListeners();
      fadeAnim2.y.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Button
          title={!canContinue ? 'Start moving the button below' : 'Reset'}
          onPress={!canContinue ? showAnim2 : resetAnim2}
        />

        <Animated.View
          style={{
            ...styles.continueButton,
            marginTop: continueButtonAnim,
          }}>
          <Button title="Continue?" onPress={continueAnim2} />
        </Animated.View>
        <Animated.View
          style={{
            ...styles.buttonMargin,
            top: fadeAnim2.x,
            left: fadeAnim2.y,
          }}>
          <Button
            disabled={isStopButtonDisabled}
            title="Stop This Animation"
            onPress={handleAnim2Stop}
          />
        </Animated.View>
      </View>
    </Container>
  );
};

export default Home;
