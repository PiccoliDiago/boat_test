import React, { useEffect } from 'react';
import { Dimensions, Image, View } from 'react-native';

import Animated, {
  useAnimatedProps,
  useSharedValue,
  interpolate,
  Easing,
  withTiming,
  withRepeat
} from 'react-native-reanimated'

import { Svg, Circle, Path } from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient';

import {
  Container,
  Pier,
  Tower,
  LineTower,
  LineHorTower
} from './style'

const { width, height } = Dimensions.get('window');

import boat from '../../assets/images/boat.png'

const AnimatedPath = Animated.createAnimatedComponent(Path)
const AnimatedImage = Animated.createAnimatedComponent(View)
const Water = Animated.createAnimatedComponent(View)

export function Home() {

  useEffect(() => {
    animateWaves()
  }, [])

  const heightAnimated = { value: 180 }
  const waterLeftAnimated = useSharedValue(0)
  const waveAnimated = useSharedValue(5)
  const boatAnimated = useSharedValue(2)
  const boatLeftAnimated = useSharedValue(-width)

  const waterProps = useAnimatedProps(() => {
    return {
      left: waterLeftAnimated.value
    }
  })

  const firstWaveProps = useAnimatedProps(() => {
    return {
      d: `
      M 0 0
      Q 60 ${waveAnimated.value} 100 0
      T 180 0
      T 270 0
      T 360 0
      T 500 0
      T 540 0
      V ${heightAnimated.value}
      H 0
      Z
    `
    }
  })

  const secondWaveProps = useAnimatedProps(() => {
    return {
      d: `
      M 0 0
      Q 45 ${waveAnimated.value + 10} 70 0
      T 120 0
      T 190 0
      T 280 0
      T 350 0
      T 520 0
      V ${heightAnimated.value}
      H 0
      Z
    `
    }
  })

  const boatProps = useAnimatedProps(() => {
    return {
      transform: [
        { translateY: boatAnimated.value },
      ],
      left: boatLeftAnimated.value,
      position: 'absolute',
      bottom: 138,
    }
  })

  function animateWaves() {

    waterLeftAnimated.value = 0;
    waveAnimated.value = 5;
    boatAnimated.value = 2;
    boatLeftAnimated.value = -width / 1.8;

    waveAnimated.value = withRepeat(
      withTiming(13, {
        duration: 800,
        easing: Easing.ease
      }), 0, true
    )

    boatAnimated.value = withRepeat(
      withTiming(-2, {
        duration: 800,
        easing: Easing.ease
      }), 0, true
    )
    //  setTimeout(() => {

    waterLeftAnimated.value = withTiming(
      -100, {
      duration: 10000,
      easing: Easing.ease
    })

    boatLeftAnimated.value = withTiming(
      width - (width / 2.2), {
      duration: 10000,
      easing: Easing.ease
    })

    //  }, 1000)

  }

  return (
    <LinearGradient
      colors={['#6195ac', '#f1f1f1',]}
      style={{
        width: width,
        height: height,
        justifyContent: 'flex-end'
      }}>

      <AnimatedImage
        animatedProps={boatProps}
      >
        <Image
          source={boat}
          style={{
            width: width / 1.5,
            height: width / 2.5
          }}
        />

      </AnimatedImage>

      <Water
        animatedProps={waterProps}
        style={{
          width: width * 2
        }}>

        <Tower>

          <LineTower />
          <LineHorTower />
          <Circle />
          <Circle />

        </Tower>

        <Pier />

        <Svg
          width={width * 2}
          height={heightAnimated.value}
          viewBox={`0 0 ${width * 2} ${heightAnimated.value}`}>

          <AnimatedPath
            animatedProps={firstWaveProps}
            fill={"#1998ce"}
            transform={"translate(0, 10)"}
          />

          <AnimatedPath
            animatedProps={secondWaveProps}
            fill={"#14739c"}
            transform={"translate(0, 15)"}
          />

        </Svg>

      </Water>

    </LinearGradient>

  );
}