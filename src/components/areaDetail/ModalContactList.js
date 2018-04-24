import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/contacts';

import ContactListItem from './ContactListItem';

class ModalContactList extends Component {
    mapContactList() {
        if(this.props.contactList && this.props.contactList.data.length === 0) {
            return <Text>Henüz kişi eklenmemiş</Text>;
        }else if(this.props.contactList && this.props.contactList.data.length > 0) {
            return (
                <FlatList
                    data={this.props.contactList.data}
                    renderItem={({ item, index }) => <ContactListItem onPress={() => this.props.selectPerson(item)} item={item} />}
                    keyExtractor={(item, index) => index}
                />
            );
        }else {
            return <Text>Liste yükleniyor...</Text>
        }
    }
    render() {
        const {container} = styles;
        return (
            <View style={styles.container}>
                {this.mapContactList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#dddddd',
        alignItems: 'center',
        minHeight: 250,
        maxHeight: 350
    }
});

const mapStateToProps = (state) => {
    return {contactList : state.contacts.contactList};
}

export default connect(mapStateToProps, actions)(ModalContactList);
