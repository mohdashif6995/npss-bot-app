import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'नमस्ते! 👋 मैं NPSS Dr.Ashif हूँ। आप मुझसे कीटों, फसलों, बागवानी या कृषि के बारे में कोई भी प्रश्न पूछ सकते हैं। 🌾',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef();

  const botResponses = {
    'मिर्च': 'मिर्च की फसल के लिए:\n✓ बीज दर: 500-750 ग्राम/हेक्टेयर\n✓ दूरी: 45×45 सेमी\n✓ सिंचाई: 7-10 दिन का अंतराल\n✓ कीट: थ्रिप्स, पत्ती धब्बा\n✓ नियंत्रण: ट्राइकोडर्मा का छिड़काव',
    'टमाटर': 'टमाटर की खेती:\n✓ तापमान: 25-30°C\n✓ मिट्टी: दोमट या बलुई दोमट\n✓ फसल अवधि: 90-100 दिन\n✓ उपज: 30-40 टन/हेक्टेयर\n✓ रोग: पत्ती धब्बा, फल विगलन',
    'आम': 'आम की बागवानी:\n✓ जलवायु: उष्ण और आर्द्र\n✓ रोपण: जुलाई-अगस्त\n✓ दूरी: 12×12 मीटर\n✓ कीट: फल मक्खी, तने की बोरर\n✓ देखभाल: नियमित कटाई-छटाई',
    'कीट': 'कीट नियंत्रण के तरीके:\n1️⃣ जैविक: लाभकारी कीटों का उपयोग\n2️⃣ रासायनिक: कीटनाशक का छिड़काव\n3️⃣ यांत्रिक: हाथ से हटाना\n4️⃣ सांस्कृतिक: खेत की सफाई\n5️⃣ रोकथाम: स्वस्थ बीज बोएं',
    'सिंचाई': 'सिंचाई की जानकारी:\n✓ ग्रीष्मकाल: 7-10 दिन का अंतराल\n✓ सर्दी: 20-25 दिन का अंतराल\n✓ जलभराव से बचें\n✓ सुबह या शाम को सिंचाई करें\n💡 मिट्टी की नमी जांचें',
    'खाद': 'खाद और पोषण:\n🌾 गोबर की खाद: 20-25 टन/हेक्टेयर\n🌾 नीम केक: 1 टन/हेक्टेयर\n🌾 जैव खाद: एजोस्पाइरम\n🌾 रासायनिक: मिट्टी परीक्षण के अनुसार\n⚠️ अधिक खाद से नुकसान हो सकता है',
    'आलू': 'आलू की खेती:\n✓ बीज दर: 25-30 किवंटल/हेक्टेयर\n✓ दूरी: 20×10 सेमी\n✓ तापमान: 15-25°C\n✓ फसल अवधि: 90-120 दिन\n✓ उपज: 20-25 टन/हेक्टेयर',
    'फूल': 'फूलों की बागवानी:\n🌹 गुलाब: गर्मी के लिए उपयुक्त\n🌼 गेंदा: तेजी से बढ़ता है\n🌺 चमेली: सुगंधित फूल\n✓ प्रकाश: 6-8 घंटे आवश्यक\n✓ मिट्टी: अच्छी जल निकासी वाली',
    'नमस्ते': 'नमस्ते! 👋 मैं आपकी सहायता के लिए यहाँ हूँ। कोई भी प्रश्न पूछें। 🌾',
    'hello': 'Hello! 👋 I am NPSS Dr.Ashif. Ask me anything about farming! 🌾',
    'धन्यवाद': 'आपका स्वागत है! 😊 अगर कोई और सवाल हो तो बेझिझक पूछें। 🌾',
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    for (let key in botResponses) {
      if (input.includes(key.toLowerCase())) {
        return botResponses[key];
      }
    }

    return '🤔 मुझे आपके प्रश्न का सीधा उत्तर नहीं मिला। कृपया निम्नलिखित विषयों के बारे में पूछें:\n\n📌 मिर्च, टमाटर, आम, आलू, कीट, सिंचाई, खाद, फूल\n\n💡 या अपनी फसल का नाम दें।';
  };

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <StatusBar barStyle="light-content" backgroundColor="#1b5e20" />

      {/* Chat Messages */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageWrapper,
              message.sender === 'user' ? styles.userMessageWrapper : styles.botMessageWrapper,
            ]}
          >
            <View
              style={[
                styles.messageBubble,
                message.sender === 'user' ? styles.userMessage : styles.botMessage,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  message.sender === 'user' ? styles.userMessageText : styles.botMessageText,
                ]}
              >
                {message.text}
              </Text>
              <Text
                style={[
                  styles.timestamp,
                  message.sender === 'user' ? styles.userTimestamp : styles.botTimestamp,
                ]}
              >
                {message.timestamp.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="अपना सवाल पूछें..."
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxLength={500}
          editable={true}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          activeOpacity={0.7}
        >
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f2',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  messageWrapper: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  userMessageWrapper: {
    justifyContent: 'flex-end',
  },
  botMessageWrapper: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },
  userMessage: {
    backgroundColor: '#c8e6c9',
    borderBottomRightRadius: 3,
  },
  botMessage: {
    backgroundColor: '#e8f5e9',
    borderBottomLeftRadius: 3,
    borderLeftWidth: 3,
    borderLeftColor: '#2e7d32',
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#1b5e20',
  },
  botMessageText: {
    color: '#1b5e20',
  },
  timestamp: {
    fontSize: 11,
    marginTop: 5,
  },
  userTimestamp: {
    color: '#1b5e20',
    textAlign: 'right',
  },
  botTimestamp: {
    color: '#999',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#2e7d32',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 100,
    backgroundColor: '#f9f9f9',
    color: '#333',
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#2e7d32',
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatScreen;
