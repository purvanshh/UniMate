import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const CreateLostItem = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('description', data.description);
      if (image) {
        formData.append('photo', {
          uri: image,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
      }

      await axios.post('http://localhost:8080/lost-found/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Lost item reported');
      reset();
      setImage(null);
      onClose();  // Close the modal on successful creation
    } catch (error) {
      console.error('Error reporting lost item:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Lost Item</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter item description"
            placeholderTextColor="#888"
            multiline
          />
        )}
        name="description"
        rules={{ required: 'Description is required' }}
        defaultValue=""
      />
      {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}

      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text style={styles.imageButtonText}>Pick an image</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  imageButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  imageButtonText: {
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
  },
});

export default CreateLostItem;
