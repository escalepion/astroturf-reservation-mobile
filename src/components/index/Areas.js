import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import firebase from 'firebase';

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
                const areaList = Object.keys(snapshot.val()).map((i) => { return { ...snapshot.val()[i], id: i }; });
                this.setState({ areaList });
            }
        });
    }
    renderAreaList() {
        return (
            <FlatList
                data={this.state.areaList}
                renderItem={({ item }) => <AreaItem item={item} />}
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
                {this.renderAreaList()}
            </MainContainer>
        );
    }
}

export default Areas;
