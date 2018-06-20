import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

import { renderField } from '../common/form/renderElements';
import { validateEmptyInput } from '../common/form/validations';
import MainContainer from '../common/MainContainer';

class AddArea extends Component {
    handleFormSubmit(values) {
        firebase.database().ref(`${firebase.auth().currentUser.uid}/areas`)
        .push({ areaName: values.areaName })
        .then(() => { this.props.navigation.replace('Index'); });
    }
    render() {
        return (
            <MainContainer>
                <View>
                    <Field
                        name='areaName'
                        placeholder="Saha İsmi"
                        component={renderField}
                        validate={validateEmptyInput}
                    />
                    <Button
                        title='Saha Ekle'
                        onPress={this.props.handleSubmit(this.handleFormSubmit.bind(this))}
                    />
                </View>
            </MainContainer>
        );
    }
}


const AddAreaForm = reduxForm({
    form: 'AddAreaForm',
    enableReinitialize: true
})(AddArea);

export default withNavigation(AddAreaForm);
