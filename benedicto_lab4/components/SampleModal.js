import React from 'react';
import { Modal, View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.image}
        />

        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at
            tellus at urna condimentum mattis pellentesque. Ut diam quam nulla
            porttitor massa id neque. Natoque penatibus et magnis dis parturient
            montes nascetur ridiculus mus. Condimentum mattis pellentesque id nibh
            tortor id aliquet lectus. Sed adipiscing diam donec adipiscing tristique
            risus nec feugiat in. Tortor aliquam nulla facilisi cras fermentum. Nibh
            nisl condimentum id venenatis. Id aliquet risus feugiat in. Suspendisse
            in est ante in nibh mauris. Auctor elit sed vulputate mi sit amet mauris
            commodo quis. Pulvinar mattis nunc sed blandit libero volutpat sed cras
            ornare. Quam elementum pulvinar etiam non quam. Sed augue lacus viverra
            vitae congue eu. Enim neque volutpat ac tincidunt vitae semper quis.
            Pretium fusce id velit ut tortor pretium. Rhoncus dolor purus non enim
            praesent elementum facilisis leo. Scelerisque mauris pellentesque
            pulvinar pellentesque habitant.
            {'\n\n'}
            Pellentesque elit eget gravida cum sociis natoque penatibus. Tincidunt
            lobortis feugiat vivamus at.
          </Text>
        </ScrollView>

        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>CLOSE</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 60,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 20,
  },
  closeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});