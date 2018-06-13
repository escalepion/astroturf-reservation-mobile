import React, { Component } from 'react';
import { View } from 'react-native';
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
 
class SignUp extends Component {
    componentWillMount() {
        this.props.clearFormError();
    }
    componentWillUnmount() {
        this.props.clearFormError();
    }
    handleFormSubmit(values) {
        console.log(values);
        this.props.signUpUser(values);
        this.props.setLoginLoading(true);
    }
    render() {
      const { handleSubmit } = this.props;
        return (
          <View>
            <Field 
            style={{ marginTop: 10 }}
            name='username'
            placeholder="Kullanıcı Adı"
            component={renderField}
            validate={validateEmptyInput}
            />
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
            <Field
            secureTextEntry 
            name='passwordConfirm'
            placeholder="Şifre Tekrarı"
            component={renderField}
            />
            <Button
                onPress={handleSubmit(this.handleFormSubmit.bind(this))}
                title='ÜYE OL' 
            />
          {this.props.errorMessage && <FormValidationMessage>{this.props.errorMessage}</FormValidationMessage>}
          </View>
        );
    }
}

function validate(values) {
    const errors = {};
    if (values.password !== values.passwordConfirm) {
         errors.passwordConfirm = 'Password must match!';
     }

    return errors;
}

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.error, 
        loading: state.auth.loading
    };
}

const SignupForm = reduxForm({
    form: 'signup',
    validate
})(SignUp);

export default connect(mapStateToProps, actions)(SignupForm);
