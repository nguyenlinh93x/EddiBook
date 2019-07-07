import { Localize } from 'core/localize'
import { Formik } from 'formik'
import React from 'react'
import { Alert, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { compose } from 'redux'
import { CustomInput } from 'shared/components/CustomInput'

import * as Styled from './sign-in.constant'

interface FormProps {
  email: string
  password: string
}
const SignInComponent = () => {
  const { navigate } = useNavigation()
  function navigateSignUp() {
    navigate('SignUp')
  }

  function submit(values: FormProps) {
    Alert.alert(JSON.stringify(values, null, 2))
    Keyboard.dismiss()
  }

  return (
    <Styled.PageContainer>
      <Styled.PageWrapper>
        <Styled.Title>{Localize.t('SignIn.Title')}</Styled.Title>
        <Formik initialValues={{ email: '', password: '' }} onSubmit={submit}>
          {({ handleChange, handleSubmit, values }) => (
            <View>
              <Styled.Wrapper>
                <Styled.FieldLabel>
                  {Localize.t('SignIn.EmailTitle')}
                </Styled.FieldLabel>
                <CustomInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder={Localize.t('SignIn.EmailPlaceholder')}
                />
              </Styled.Wrapper>
              <Styled.Wrapper>
                <Styled.FieldLabel>
                  {Localize.t('SignIn.PasswordTitle')}
                </Styled.FieldLabel>
                <CustomInput
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholder={Localize.t('SignIn.PasswordPlaceholder')}
                  secureTextEntry={true}
                />
              </Styled.Wrapper>
              <Styled.Wrapper>
                <TouchableWithoutFeedback>
                  <Styled.ForgotPasswordText>
                    {Localize.t('SignIn.ForgotPassword')}
                  </Styled.ForgotPasswordText>
                </TouchableWithoutFeedback>
              </Styled.Wrapper>
              <Styled.SignInWrapper>
                <Styled.SignInButton onPress={handleSubmit}>
                  <Styled.SignInButtonText>
                    {Localize.t('SignIn.Button')}
                  </Styled.SignInButtonText>
                </Styled.SignInButton>
              </Styled.SignInWrapper>
            </View>
          )}
        </Formik>
      </Styled.PageWrapper>
      <Styled.SignUpContainer>
        <Styled.SignUpWrapper>
          <Styled.NoAccountText>
            {Localize.t('SignIn.NoAccount')}
          </Styled.NoAccountText>
          <TouchableWithoutFeedback onPress={navigateSignUp}>
            <Styled.SignUpText>
              {Localize.t('SignIn.NavSignUp')}
            </Styled.SignUpText>
          </TouchableWithoutFeedback>
        </Styled.SignUpWrapper>
      </Styled.SignUpContainer>
    </Styled.PageContainer>
  )
}
SignInComponent.navigationOptions = {
  header: null
}
const enhancer = compose()

export default enhancer(SignInComponent)
