import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import React, { useState } from 'react';
import CreateAnnouncement from '../../components/CreateAnnouncements';

const Announcements = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCreateAnnouncement = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Announcements</Text>

      <TouchableOpacity style={styles.createButton} onPress={handleCreateAnnouncement}>
        <Text style={styles.createButtonText}>+</Text>
      </TouchableOpacity>

      <ActivityIndicator size="large" color="#ffffff" style={styles.loading} />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CreateAnnouncement onClose={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#1e1e1e',
    padding: 20,
    borderRadius: 10,
  },
});

export default Announcements;
