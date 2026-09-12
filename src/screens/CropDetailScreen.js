import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CropDetailScreen = ({ route }) => {
  const { cropName } = route.params;

  const cropDetails = {
    'मिर्च': {
      icon: '🌶️',
      description: 'मिर्च एक महत्वपूर्ण मसाला फसल है।',
      details: [
        { label: 'बीज दर', value: '500-750 ग्राम/हेक्टेयर' },
        { label: 'दूरी', value: '45×45 सेमी' },
        { label: 'तापमान', value: '20-30°C' },
        { label: 'सिंचाई', value: '7-10 दिन का अंतराल' },
        { label: 'फसल अवधि', value: '150-180 दिन' },
        { label: 'उपज', value: '5-8 टन/हेक्टेयर' },
      ],
      pests: ['थ्रिप्स', 'पत्ती धब्बा रोग', 'फल विगलन'],
      control: 'ट्राइकोडर्मा और बोर्डो मिश्रण का छिड़काव करें',
    },
    'टमाटर': {
      icon: '🍅',
      description: 'टमाटर सबसे आम और महत्वपूर्ण सब्जी है।',
      details: [
        { label: 'बीज दर', value: '400-500 ग्राम/हेक्टेयर' },
        { label: 'दूरी', value: '60×45 सेमी' },
        { label: 'तापमान', value: '25-30°C' },
        { label: 'सिंचाई', value: '7-10 दिन का अंतराल' },
        { label: 'फसल अवधि', value: '90-100 दिन' },
        { label: 'उपज', value: '30-40 टन/हेक्टेयर' },
      ],
      pests: ['पत्ती धब्बा', 'फल विगलन', 'सफेद मक्खी'],
      control: 'नीम तेल और ट्राइकोडर्मा का उपयोग करें',
    },
    'आलू': {
      icon: '🥔',
      description: 'आलू एक मुख्य कार्बोहाइड्रेट स्रोत है।',
      details: [
        { label: 'बीज दर', value: '25-30 किवंटल/हेक्टेयर' },
        { label: 'दूरी', value: '20×10 सेमी' },
        { label: 'तापमान', value: '15-25°C' },
        { label: 'सिंचाई', value: '10-15 दिन का अंतराल' },
        { label: 'फसल अवधि', value: '90-120 दिन' },
        { label: 'उपज', value: '20-25 टन/हेक्टेयर' },
      ],
      pests: ['सफेद मक्खी', 'थ्रिप्स', 'आलू की बीमारी'],
      control: 'स्वस्थ बीज का उपयोग करें और सिंचाई पर ध्यान दें',
    },
    'आम': {
      icon: '🥭',
      description: 'आम का राजा - फलों का मुकुट।',
      details: [
        { label: 'रोपण दूरी', value: '12×12 मीटर' },
        { label: 'तापमान', value: '25-32°C' },
        { label: 'जलवायु', value: 'उष्ण और आर्द्र' },
        { label: 'फूल आने का समय', value: 'दिसंबर-मई' },
        { label: 'परिपक्वता', value: '4-5 वर्ष' },
        { label: 'जीवनकाल', value: '40-60 वर्ष' },
      ],
      pests: ['फल मक्खी', 'तने की बोरर', 'ल्यूसिनोड्स'],
      control: 'नियमित निरीक्षण और कटाई-छटाई करें',
    },
  };

  const details = cropDetails[cropName] || {
    icon: '🌾',
    description: 'फसल की जानकारी उपलब्ध नहीं है।',
    details: [],
    pests: [],
    control: '',
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1b5e20" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.icon}>{details.icon}</Text>
          <Text style={styles.title}>{cropName}</Text>
          <Text style={styles.description}>{details.description}</Text>
        </View>

        {/* Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 खेती की जानकारी</Text>
          {details.details.map((item, index) => (
            <View key={index} style={styles.detailItem}>
              <Text style={styles.detailLabel}>{item.label}</Text>
              <Text style={styles.detailValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Pests Section */}
        {details.pests.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🐛 मुख्य कीट और रोग</Text>
            {details.pests.map((pest, index) => (
              <View key={index} style={styles.pestItem}>
                <Ionicons name="alert-circle" size={16} color="#ff6b6b" />
                <Text style={styles.pestText}>{pest}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Control Section */}
        {details.control && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🛡️ नियंत्रण के तरीके</Text>
            <View style={styles.controlBox}>
              <Text style={styles.controlText}>{details.control}</Text>
            </View>
          </View>
        )}

        {/* Tips Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 उपयोगी सुझाव</Text>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>स्वस्थ और प्रमाणित बीज का प्रयोग करें</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>मिट्टी की जांच करवाएं</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>समय पर सिंचाई करें</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>कीटों की निगरानी करते रहें</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>✓</Text>
            <Text style={styles.tipText}>स्थानीय कृषि अधिकारी से सलाह लें</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f2',
  },
  header: {
    backgroundColor: '#1b5e20',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  icon: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#c8e6c9',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
    flex: 1,
  },
  detailValue: {
    fontSize: 13,
    color: '#2e7d32',
    fontWeight: '600',
    flex: 1,
    textAlign: 'right',
  },
  pestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  pestText: {
    fontSize: 13,
    color: '#333',
    marginLeft: 10,
  },
  controlBox: {
    backgroundColor: '#fff3cd',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  controlText: {
    fontSize: 13,
    color: '#856404',
    lineHeight: 20,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  tipBullet: {
    fontSize: 16,
    color: '#2e7d32',
    marginRight: 10,
    fontWeight: 'bold',
  },
  tipText: {
    fontSize: 13,
    color: '#333',
    flex: 1,
    lineHeight: 18,
  },
});

export default CropDetailScreen;