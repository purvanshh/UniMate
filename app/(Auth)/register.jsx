import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Overlay } from 'react-native-elements';
import { Link } from '@react-navigation/native';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const submit = async () => {
    console.log('Form:', form);

    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        email: form.email,
        username: form.username,
        password: form.password,
      });
      if (response.status === 201) {
        router.push('/Profile');
      } else {
        setErrorMessage('Registration failed. Please try again.');
        setErrorVisible(true);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again.');
      setErrorVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.content}>
            <Text style={styles.heading}>Ready! Are you?</Text>
            <Text style={styles.headingText}>
              Connexus: Your one-stop app for news, events, and campus life.
            </Text>

        
            <FormField
              value={form.username}
              handleChangeText={(text) => setForm({ ...form, username: text })}
              placeholder="Enter your username"
              otherStyles={styles.input}
            />
            <FormField
              value={form.email}
              handleChangeText={(text) => setForm({ ...form, email: text })}
              placeholder="Enter your email"
              otherStyles={styles.input}
              keyboardType="email-address"
            />
            <FormField
              value={form.password}
              handleChangeText={(text) => setForm({ ...form, password: text })}
              placeholder="Enter your password"
              otherStyles={styles.input}
              secureTextEntry
            />

            {errorVisible && <Text style={styles.errorText}>{errorMessage}</Text>}
            <CustomButton
              handlePress={submit}
              containerStyles={styles.button}
              isLoading={isSubmitting}
              title="Sign Up"
            />

            <Text style={styles.middleText}>Already have an account?</Text>
            <Link to="/login" style={styles.linkText}>
              <Text>Log In</Text>
            </Link>

            <Text style={styles.middleText}>
              By clicking sign up, you agree to our Terms of Service and Privacy Policy
            </Text>

            <Text style={styles.footer}>Connexus</Text>
          </View>
        </ScrollView>
      </GestureHandlerRootView>

      <Overlay isVisible={errorVisible} onBackdropPress={() => setErrorVisible(false)}>
        <Text>{errorMessage}</Text>
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'beige',
    padding: 24,
  },
  heading: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 25,
    color: '#333',
    marginBottom: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    width: '150%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    backgroundColor: 'black',
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
    minWidth: 180,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  middleText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  linkText: {
    fontSize: 16,
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 20,
    fontSize: 60,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
  },
});

export default Register;
