import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@components/ui/core/button';
import {Title} from '@components/ui/core/title';
import {Screen} from '@components/ui/core/screen';
import {_useAuth} from '@store/auth';
import {ControlledInput} from '@components/ui/core/input/controlledInput';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {useTranslation} from 'react-i18next';
import i18n from '@i18n';
import auth from '@react-native-firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';
import {AppScreens} from '@constants/appScreens';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export default function Register() {
  const navigation = useNavigation();

  const {t} = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const {
    handleSubmit,
    control,
    getValues,
    formState: {isValid},
  } = useForm({
    defaultValues: {
      email: 'trkyilmazfurkan@gamil.com',
      password: 'Password123.',
    },
    resolver: zodResolver(schema),
  });

  const {signIn} = _useAuth();

  const onLogin = () => {
    if (isValid) {
      const {email, password} = getValues();

      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          console.log('User account created & signed in!', response);

          showMessage({
            type: 'success',
            message: 'User account created & signed in!',
          });

          signIn({
            access: 'access',
            refreshToken: 'sdfsdfds',
            name: 'Furkan',
            surname: 'Türkyılmaz',
            fullName: 'Furkan Türkyılmaz',
          });
        })
        .catch(error => {
          let message = '';

          if (error.code === 'auth/email-already-in-use') {
            message = 'That email address is already in use!';
          }

          if (error.code === 'auth/invalid-email') {
            message = 'That email address is invalid!';
          }

          showMessage({type: 'danger', message});

          console.error(error);
        });
    }
  };

  return (
    <Screen>
      <Title text={t('signUp.title')} />

      <ControlledInput control={control} name="email" label="Email" />
      <ControlledInput control={control} name="password" label="Password" />

      <Button label="Register" onPress={() => onLogin()} />
    </Screen>
  );
}
