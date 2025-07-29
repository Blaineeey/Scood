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

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const { height } = Dimensions.get('window');

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Log In</Text>
        <Text style={styles.subtitle}>Please sign in to your existing account</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.remember}>☐ Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>SIGN UP</Text>
        </Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  remember: {
    fontSize: 12,
    color: '#555',
  },
  forgot: {
    fontSize: 12,
    color: '#e95caa',
  },
  loginButton: {
    backgroundColor: '#ff6501',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
    color: '#444',
  },
  signupLink: {
    color: '#e95caa',
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 12,
    color: '#999',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 10,
  },
});
