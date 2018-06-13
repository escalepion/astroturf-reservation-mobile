import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import * as actions from '../../actions/auth';

import { validateEmptyInput, validateMail } from '../../functions/validations';

const renderField = ({ input, placeholder, keyboardType, secureTextEntry, meta: { touched, error } }) => (
  <View>
    <FormLabel>{placeholder}</FormLabel>
    <FormInput
    {...input} 
    keyboardType={keyboardType} 
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    />
  {touched && error && <FormValidationMessage>{error}</FormValidationMessage>}
  </View>
);
 
class LogIn extends Component {
    componentWillUnmount() {
        this.props.clearFormError();
    }
    handleFormSubmit(values) {
        this.props.signInUser(values);
        this.props.setLoginLoading(true);
    }
    handleSignUpPress() {
        this.props.navigation.navigate('SignUp');
    }
    render() {
      const { handleSubmit } = this.props;
        return (
          <View>
            <Field 
            style={{ marginTop: 10 }}
            name='email'
            placeholder="E-mail"
            keyboardType='email-address'
            component={renderField}
            validate={[validateMail, validateEmptyInput]}
            />
            <Field
            secureTextEntry 
            name='password'
            placeholder="Şifre"
            component={renderField}
            validate={validateEmptyInput}
            />
            <Button
                onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                title='GİRİŞ YAP'
                buttonStyle={[styles.buttonStyle, styles.loginStyle]} 
            />
            <Button
                onPress={this.handleSignUpPress.bind(this)}
                title='ÜYE OL'
                buttonStyle={[styles.buttonStyle, styles.signupStyle]} 
            />
            {this.props.errorMessage && <FormValidationMessage>{this.props.errorMessage}</FormValidationMessage>}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 45,
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 5,
        marginTop: 15
    },
    loginStyle: {
        backgroundColor: '#337AB7'
    },
    signupStyle: {
        backgroundColor: '#5CB85C'
    }
});

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.error, 
        loading: state.auth.loading
    };
}

const LoginForm = reduxForm({
    form: 'login'
})(LogIn);

export default connect(mapStateToProps, actions)(LoginForm);
