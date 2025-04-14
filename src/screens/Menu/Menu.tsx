import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Text from '../../components/Text';

const menuLinks = [
  { title: 'About Us', url: 'https://ourdesign.in', icon: 'information-circle-outline' },
  { title: 'Privacy Policy', url: 'https://ourdesign.in/privacy-policy', icon: 'shield-checkmark-outline' },
  { title: 'Terms conditions', url: 'https://ourdesign.in/terms-conditions', icon: 'document-text-outline' },
  { title: 'Cancellation & Refund', url: 'https://ourdesign.in/cancellation-refund', icon: 'wallet-outline' },
  { title: 'Shopping & Delivery', url: 'https://ourdesign.in/shopping-delivery', icon: 'cube-outline' },
  { title: 'Blogs', url: 'https://ourdesign.in/blogs', icon: 'newspaper-outline' },
  { title: 'Contact', url: 'https://ourdesign.in/contact-us', icon: 'call-outline' },
];


const Menu = () => {
  const navigation = useNavigation<any>();

  const openLink = (item: { title: string; url: string }) => {
    navigation.navigate('WebViewScreen', item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuLinks}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Pressable style={styles.link} onPress={() => openLink(item)}>
            <Ionicons name={item.icon} size={20} color="#007AFF" style={styles.icon} />
            <Text style={styles.linkText}>{item.title}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Menu;
