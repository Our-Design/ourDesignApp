import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const menuLinks = [
  { title: 'About Us', url: 'https://ourdesign.in' },
  { title: 'Privacy Policy', url: 'https://ourdesign.in/privacy-policy' },
  { title: 'Terms conditions', url: 'https://ourdesign.in/terms-conditions' },
  { title: 'Contact', url: 'https://ourdesign.in/contact-us' },
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
            <Text style={styles.linkText}>{item.title}</Text>
          </Pressable>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Menu;
