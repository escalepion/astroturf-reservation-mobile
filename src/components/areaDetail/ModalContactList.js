import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase';

import ContactListItem from './ContactListItem';

class ModalContactList extends Component {
    componentDidMount() {
        firebase.database().ref('contactList')
            .on('value', snapshot => {
                this.setState({ contactList: snapshot.val() });
            });
    }
    mapContactList() {
        if (this.props.contactList && this.props.contactList.data.length === 0) {
            return <Text>Kişi bulunamadı...</Text>;
        } else if (this.props.contactList && this.props.contactList.data.length > 0) {
            return (
                <FlatList
                    data={this.sortNames()}
                    renderItem={({ item, index }) => <ContactListItem onPress={() => this.props.selectPerson(item)} item={item} />}
                    keyExtractor={(item, index) => index}
                />
            );
        } else {
            return <Text>Liste yükleniyor...</Text>
        }
    }
    sortNames() {
        return this.props.contactList.data.sort((a, b) => {
            const nameA = a.name && a.name.toUpperCase();
            const nameB = b.name && b.name.toUpperCase();
            if (nameA > nameB) {
                return 1;
            }
            if (nameA < nameB) {
                return -1;
            }
            return 0;
        });
    }
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                {this.mapContactList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#dddddd',
        height: 350,
        marginTop: 15,
        marginBottom: 15
    }
});


export default ModalContactList;
