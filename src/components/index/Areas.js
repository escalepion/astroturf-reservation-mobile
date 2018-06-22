import React, { Component } from 'react';
import { Text, FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { getFullContacts } from '../../actions/contacts';
import { fetchAreas } from '../../actions/areas';
import ConfirmModal from '../common/ConfirmModal';
import CenteredContainer from '../common/CenteredContainer';

import MainContainer from '../common/MainContainer';
import AreaItem from './AreaItem';

class Areas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteAreaId: undefined
        };
    }
    componentWillMount() {
        this.props.fetchAreas();
        this.props.getFullContacts();
    }
    onDeleteConfirm() {
        firebase.database().ref(`${firebase.auth().currentUser.uid}/areas/${this.state.deleteAreaId}`)
        .remove()
        .then(() => {
            firebase.database().ref(`${firebase.auth().currentUser.uid}/reservations/${this.state.deleteAreaId}`)
            .remove();
        })
        .then(() => this.setState({ deleteAreaId: undefined }));
    }
    onRefresh() {
        this.props.fetchAreas();
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
                refreshing={this.props.areaListLoadingSpinner}
                onRefresh={this.onRefresh.bind(this)}
            />
        );
    }
    renderContent() {
        if (this.props.areaListLoadingSpinner) {
            return <CenteredContainer><ActivityIndicator size="large" color="#0000ff" /></CenteredContainer>;
        } else if (this.props.areaList.length === 0) {
            return (
                    <CenteredContainer>
                        <Text>Henüz saha girilmemiş.</Text>
                        <Text>Bir tane girerek başlayabilirsiniz.</Text>
                    </CenteredContainer>
                    );
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
    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) => {
    return {
        areaList: state.areas.areaList,
        areaListLoadingSpinner: state.areas.areaListLoadingSpinner,
        areasRefreshing: state.areas.areasRefreshing
    };
};

export default connect(mapStateToProps, { getFullContacts, fetchAreas })(Areas);
