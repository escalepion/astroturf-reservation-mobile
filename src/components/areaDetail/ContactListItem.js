import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

const ContactListItem = ({ item, ...props }) => {
  return (
    <ListItem 
      title={item.name && item.name}
      subtitle={item.phoneNumbers && item.phoneNumbers[0].number}
      onPress={props.onPress}
    />
  );
};

export default ContactListItem;