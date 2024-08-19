import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = ({ profileImage, initialName, initialUsername, initialEmail, initialLinks, initialBio }) => {
  const [name, setName] = useState(initialName);
  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail);
  const [links, setLinks] = useState(initialLinks);
  const [bio, setBio] = useState(initialBio);

  const handleEdit = () => {
    // Implement edit functionality here
    Alert.alert('Edit Profile', 'Edit profile functionality is not yet implemented.');
  };

  const handleFeedback = () => {
    // Implement feedback functionality here
    Alert.alert('Feedback', 'Feedback functionality is not yet implemented.');
  };

  return (
    <LinearGradient
      colors={['#1A0D30', '#000000']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: profileImage || 'https://avatarfiles.alphacoders.com/207/thumb-1920-207641.jpg'}}
          style={styles.profileImage}
        />

        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.textInput, styles.bioInput]}
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={3}
            placeholder="Tell us about yourself"
            placeholderTextColor="#aaa"
          />
        </View>

        <TouchableOpacity style={styles.feedbackButton} onPress={handleFeedback}>
          <Text style={styles.feedbackButtonText}>Feedback</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 100,
    color: '#ffffff',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#0D99FF',
    marginBottom: 20,
  },
  editButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#333333',
    marginTop: 20,
  },
  feedbackButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
