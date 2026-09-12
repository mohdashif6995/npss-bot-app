import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  const services = [
    {
      id: 1,
      title: 'कीट नियंत्रण',
      icon: 'bug',
      color: '#ff6b6b',
      description: 'कीटों की पहचान और नियंत्रण',
    },
    {
      id: 2,
      title: 'फसल सलाह',
      icon: 'leaf',
      color: '#2e7d32',
      description: 'फसलों की खेती की जानकारी',
    },
    {
      id: 3,
      title: 'बागवानी',
      icon: 'flower',
      color: '#ff69b4',
      description: 'फल, सब्जी, फूलों की खेती',
    },
    {
      id: 4,
      title: 'मौसम',
      icon: 'cloud',
      color: '#1e90ff',
      description: 'मौसम और जलवायु की जानकारी',
    },
  ];

  const crops = [
    { id: 1, name: 'मिर्च', icon: '🌶️' },
    { id: 2, name: 'टमाटर', icon: '🍅' },
    { id: 3, name: 'आलू', icon: '🥔' },
    { id: 4, name: 'आम', icon: '🥭' },
    { id: 5, name: 'गेहूँ', icon: '🌾' },
    { id: 6, name: 'प्याज', icon: '🧅' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1b5e20" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🌾 NPSS Dr.Ashif</Text>
        <Text style={styles.headerSubtitle}>National Pest Surveillance System</Text>
        <Text style={styles.headerDescription}>
          किसानों के लिए स्मार्ट कृषि सहायक
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>👋 नमस्ते किसान भाई!</Text>
          <Text style={styles.welcomeText}>
            हम आपके लिए खेती से जुड़ी सभी जानकारी लेकर आए हैं। कीट नियंत्रण, फसल सलाह, बागवानी और बहुत कुछ।
          </Text>
        </View>

        {/* Services Grid */}
        <Text style={styles.sectionTitle}>मुख्य सेवाएं</Text>
        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceCard, { borderLeftColor: service.color }]}
              activeOpacity={0.7}
            >
              <View style={[styles.serviceIcon, { backgroundColor: service.color }]}>
                <MaterialCommunityIcons
                  name={service.icon}
                  size={28}
                  color="#fff"
                />
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular Crops */}
        <Text style={styles.sectionTitle}>लोकप्रिय फसलें</Text>
        <View style={styles.cropsContainer}>
          {crops.map((crop) => (
            <TouchableOpacity
              key={crop.id}
              style={styles.cropButton}
              onPress={() =>
                navigation.navigate('CropDetail', { cropName: crop.name })
              }
              activeOpacity={0.7}
            >
              <Text style={styles.cropEmoji}>{crop.icon}</Text>
              <Text style={styles.cropName}>{crop.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Features */}
        <Text style={styles.sectionTitle}>विशेषताएं</Text>
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={24} color="#2e7d32" />
            <Text style={styles.featureText}>24/7 चैट सहायता</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={24} color="#2e7d32" />
            <Text style={styles.featureText}>हिंदी भाषा समर्थन</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={24} color="#2e7d32" />
            <Text style={styles.featureText}>तुरंत समाधान</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={24} color="#2e7d32" />
            <Text style={styles.featureText}>विशेषज्ञ सलाह</Text>
          </View>
        </View>

        {/* CTA Button */}
        <TouchableOpacity
          style={styles.ctaButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Chat')}
        >
          <Ionicons name="chatbox" size={24} color="#fff" />
          <Text style={styles.ctaButtonText}>अभी बात करें</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 NPSS Dr.Ashif</Text>
          <Text style={styles.footerSubtext}>किसानों के लिए, किसानों द्वारा</Text>
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
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#c8e6c9',
    marginBottom: 5,
  },
  headerDescription: {
    fontSize: 12,
    color: '#a5d6a7',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  welcomeCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#2e7d32',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 12,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 11,
    color: '#999',
  },
  cropsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  cropButton: {
    width: '32%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 4,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cropEmoji: {
    fontSize: 32,
    marginBottom: 5,
  },
  cropName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1b5e20',
    textAlign: 'center',
  },
  featuresContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
    fontWeight: '500',
  },
  ctaButton: {
    backgroundColor: '#2e7d32',
    marginHorizontal: 15,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },
  footerSubtext: {
    fontSize: 11,
    color: '#bbb',
    marginTop: 4,
  },
});

export default HomeScreen;
