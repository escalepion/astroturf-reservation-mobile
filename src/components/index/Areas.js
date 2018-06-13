import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { getFullContacts } from '../../actions/contacts';
import { fetchAreas } from '../../actions/areas';
import ConfirmModal from '../common/ConfirmModal';

import MainContainer from '../common/MainContainer';
import AreaItem from './AreaItem';

class Areas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areaList: [],
            deleteAreaId: undefined
        };
    }
    componentWillMount() {
        this.props.fetchAreas();
        this.props.getFullContacts();
    }
    onDeleteConfirm() {
        firebase.database().ref(`areas/${this.state.deleteAreaId}`)
            .remove();
        firebase.database().ref(`reservations/${this.state.deleteAreaId}`)
            .remove();
    }
    closeModal() {
        this.setState({ deleteAreaId: undefined });
    }
    renderAreaList() {
        return (
            <FlatList
                data={this.props.areaList}
                renderItem={({ item }) => <AreaItem onDeleteAreaClick={() => this.setState({ deleteAreaId: item.id })} item={item} />}
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
                {this.state.deleteAreaId ? <ConfirmModal
                    closeModal={this.closeModal.bind(this)}
                    visible={this.state.deleteAreaId && true}
                    onDeleteConfirm={this.onDeleteConfirm.bind(this)}
                /> : undefined}
            </MainContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return { areaList: state.areas.areaList };
};

export default connect(mapStateToProps, { getFullContacts, fetchAreas })(Areas);
