import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Landing'>;
};

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: 'one',
    title: 'All your favorites',
    text: 'Get all your loved foods in one place, you just place the order we do the rest',
    image: require('../assets/onboarding.png'),
    buttonText: 'Next',
  },
  {
    key: 'two',
    title: 'Order from choosen chef',
    text: 'Get all your loved foods in one place, you just place the order we do the rest',
    image: require('../assets/onboarding.png'),
    buttonText: 'Next',
  },
  {
    key: 'three',
    title: 'Free delivery offers',
    text: 'Get all your loved foods in one place, you just place the order we do the rest',
    image: require('../assets/onboarding.png'),
    buttonText: 'Get Started',
  },
];

export default function LandingScreen({ navigation }: Props) {
  const handleNavigation = () => {
    navigation.replace('Login'); // or 'Home' if user is already logged in
  };

  return (
    <Swiper loop={false} showsPagination={true} activeDotColor="#ff6c22">
      {slides.map((slide, index) => (
        <View key={slide.key} style={styles.slide}>
          <Image source={slide.image} style={styles.image} resizeMode="contain" />
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.text}>{slide.text}</Text>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.buttonText}>{slide.buttonText}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ff6c22',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
