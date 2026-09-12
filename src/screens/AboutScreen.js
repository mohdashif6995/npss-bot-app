import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AboutScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error:', err));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1b5e20" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appName}>🌾 NPSS Dr.Ashif</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>

        {/* About App */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📱 ऐप के बारे में</Text>
          <Text style={styles.cardText}>
            NPSS Dr.Ashif एक स्मार्ट कृषि सहायक मोबाइल ऐप्लिकेशन है जो भारतीय किसानों को उनकी खेती से संबंधित समस्याओं का समाधान प्रदान करता है।
          </Text>
        </View>

        {/* Mission */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎯 हमारा मिशन</Text>
          <Text style={styles.cardText}>
            किसानों को आधुनिक कृषि तकनीकें, कीट नियंत्रण, फसल प्रबंधन और बागवानी संबंधी जानकारी प्रदान करना ताकि वे अपनी उपज बढ़ा सकें और आय में वृद्धि कर सकें।
          </Text>
        </View>

        {/* Features */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>✨ मुख्य विशेषताएं</Text>
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#2e7d32" />
              <Text style={styles.featureText}>24/7 चैट बॉट सहायता</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#2e7d32" />
              <Text style={styles.featureText}>100+ फसलों की जानकारी</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#2e7d32" />
              <Text style={styles.featureText}>कीट नियंत्रण के उपाय</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#2e7d32" />
              <Text style={styles.featureText}>हिंदी और अंग्रेजी समर्थन</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color="#2e7d32" />
              <Text style={styles.featureText}>ऑफलाइन मोड</Text>
            </View>
          </View>
        </View>

        {/* Developer */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>👨‍💻 डेवलपर</Text>
          <View style={styles.developerCard}>
            <MaterialCommunityIcons name="account-circle" size={50} color="#2e7d32" />
            <View style={styles.developerInfo}>
              <Text style={styles.developerName}>Mohd Ashif</Text>
              <Text style={styles.developerRole}>Scout Horticulture, Palwal</Text>
              <Text style={styles.developerDescription}>
                कृषि और बागवानी विशेषज्ञ
              </Text>
            </View>
          </View>
        </View>

        {/* Contact */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📞 संपर्क करें</Text>
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => Linking.openURL('mailto:scout001386@gmail.com')}
          >
            <Ionicons name="mail" size={20} color="#2e7d32" />
            <Text style={styles.contactText}>scout001386@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() =>
              openLink('https://github.com/mohdashif6995/npss-bot-app')
            }
          >
            <MaterialCommunityIcons name="github" size={20} color="#2e7d32" />
            <Text style={styles.contactText}>GitHub Repository</Text>
          </TouchableOpacity>
        </View>

        {/* Technology */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🛠️ तकनीकें</Text>
          <View style={styles.techGrid}>
            <View style={styles.techItem}>
              <Text style={styles.techName}>React Native</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techName}>JavaScript</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techName}>Expo</Text>
            </View>
            <View style={styles.techItem}>
              <Text style={styles.techName}>Firebase</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 NPSS Dr.Ashif</Text>
          <Text style={styles.footerSubtext}>किसानों के लिए, किसानों द्वारा</Text>
          <Text style={styles.footerSubtext}>Made with ❤️ for Agriculture</Text>
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
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  version: {
    fontSize: 12,
    color: '#a5d6a7',
  },
  card: {
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
  },
  featureList: {
    marginTop: 5,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 13,
    color: '#333',
    marginLeft: 10,
  },
  developerCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  developerInfo: {
    marginLeft: 15,
    flex: 1,
  },
  developerName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  developerRole: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  developerDescription: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
  },
  contactText: {
    fontSize: 13,
    color: '#2e7d32',
    marginLeft: 12,
    fontWeight: '500',
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techItem: {
    width: '48%',
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: '4%',
    marginBottom: 10,
    alignItems: 'center',
  },
  techName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1b5e20',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
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

export default AboutScreen;