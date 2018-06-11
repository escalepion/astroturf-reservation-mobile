import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { getFullContacts } from '../../actions/contacts';
import { fetchAreas } from '../../actions/areas';

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
        this.props.fetchAreas();
        this.props.getFullContacts();
    }
    onDeleteAreaClick(id) {
        firebase.database().ref(`areas/${id}`)
        .remove();
    }
    renderAreaList() {
        return (
            <FlatList
                data={this.props.areaList}
                renderItem={({ item }) => <AreaItem onDeleteAreaClick={() => this.onDeleteAreaClick(item.id)} item={item} />}
                keyExtractor={item => item.id}
            />
        );
    }
    render() {
        if (this.props.areaList.length === 0) {
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

const mapStateToProps = (state) => {
    return { areaList: state.areas.areaList };
};

export default connect(mapStateToProps, { getFullContacts, fetchAreas })(Areas);
