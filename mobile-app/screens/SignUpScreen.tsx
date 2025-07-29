import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

const { height } = Dimensions.get('window');

export default function SignUpScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create a new account</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput style={styles.input} placeholder="example@gmail.com" placeholderTextColor="#aaa" />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />

        <Text style={styles.label}>CONFIRM PASSWORD</Text>
        <TextInput style={styles.input} placeholder="Re-enter password" placeholderTextColor="#aaa" secureTextEntry />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.loginRedirect}>Already have an account? <Text style={styles.link}>Log In</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0d1b',
  },
  header: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 8,
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    marginTop: -30,
  },
  label: {
    fontSize: 12,
    color: '#999',
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f3f3f3',
    padding: 12,
    borderRadius: 10,
    fontSize: 14,
    color: '#333',
  },
  signupButton: {
    backgroundColor: '#ff6501',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginRedirect: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
    color: '#444',
  },
  link: {
    color: '#e95caa',
    fontWeight: 'bold',
  },
});
