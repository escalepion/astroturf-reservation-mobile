import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import * as actions from '../../actions/contacts';

import MainContainer from '../common/MainContainer';
import AreaItem from './AreaItem';

class Areas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areaList: []
        };
    }
    componentWillMount() {
        firebase.database().ref('areas').on('value', (snapshot) => {
            if (snapshot.val()) {
                let areaList = [];
                Object.keys(snapshot.val()).forEach((i) => { areaList.push({ ...snapshot.val()[i], id: i }); });
                this.setState({ areaList });
            } else {
                this.setState({ areaList: [] });
            }
        });
    }
    componentDidMount() {
        this.showContactsAsync();
    }
    onDeleteAreaClick(id) {
        firebase.database().ref(`areas/${id}`)
        .remove();
    }
    showContactsAsync() {
        this.props.getFullContacts();
    }
    renderAreaList() {
        return (
            <FlatList
                data={this.state.areaList}
                renderItem={({ item }) => <AreaItem onDeleteAreaClick={() => this.onDeleteAreaClick(item.id)} item={item} />}
                keyExtractor={item => item.id}
            />
        );
    }
    render() {
        if (this.state.areaList.length === 0) {
            return <Text>Henüz saha girilmemiş. Bir tane ekleyerek başlayabilirsiniz.</Text>;
        }
        return (
            <MainContainer>
                <View>
                    {this.renderAreaList()}
                </View>
            </MainContainer>
        );
    }
}

export default connect(null, actions)(Areas);
