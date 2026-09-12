import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SectionList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HorticultureScreen = ({ navigation }) => {
  const crops = [
    {
      title: '🍎 फल की फसलें',
      data: [
        { name: 'आम', icon: '🥭', hindi: 'Mango' },
        { name: 'अमरूद', icon: '🍐', hindi: 'Guava' },
        { name: 'अनार', icon: '🥀', hindi: 'Pomegranate' },
        { name: 'केला', icon: '🍌', hindi: 'Banana' },
        { name: 'पपीता', icon: '🍍', hindi: 'Papaya' },
        { name: 'अंगूर', icon: '🍇', hindi: 'Grapes' },
      ],
    },
    {
      title: '🥬 सब्जी की फसलें',
      data: [
        { name: 'टमाटर', icon: '🍅', hindi: 'Tomato' },
        { name: 'आलू', icon: '🥔', hindi: 'Potato' },
        { name: 'प्याज', icon: '🧅', hindi: 'Onion' },
        { name: 'बैंगन', icon: '🫐', hindi: 'Brinjal' },
        { name: 'मिर्च', icon: '🌶️', hindi: 'Chilli' },
        { name: 'पत्तागोभी', icon: '🥬', hindi: 'Cabbage' },
      ],
    },
    {
      title: '🌹 फूलों की फसलें',
      data: [
        { name: 'गुलाब', icon: '🌹', hindi: 'Rose' },
        { name: 'गेंदा', icon: '🌼', hindi: 'Marigold' },
        { name: 'चमेली', icon: '🌸', hindi: 'Jasmine' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1b5e20" />

      <SectionList
        sections={crops}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cropItem}
            onPress={() =>
              navigation.navigate('CropDetail', { cropName: item.name })
            }
            activeOpacity={0.7}
          >
            <Text style={styles.cropIcon}>{item.icon}</Text>
            <View style={styles.cropInfo}>
              <Text style={styles.cropName}>{item.name}</Text>
              <Text style={styles.cropHindi}>{item.hindi}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        scrollEnabled={true}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f2',
  },
  listContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2e7d32',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  cropItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cropIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1b5e20',
  },
  cropHindi: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});

export default HorticultureScreen;