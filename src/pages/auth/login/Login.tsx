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

export default function Login() {
  const {t} = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const {handleSubmit, control} = useForm({
    resolver: zodResolver(schema),
  });

  const {signIn} = _useAuth();

  const onLogin = () => {
    signIn({
      access: 'access',
      refreshToken: 'sdfsdfds',
      name: 'Furkan',
      surname: 'Türkyılmaz',
      fullName: 'Furkan Türkyılmaz',
    });
  };

  return (
    <Screen>
      <Title text={t('signIn.title')} />

      <ControlledInput control={control} name="email" label="Email" />
      <ControlledInput control={control} name="password" label="Password" />

      <Button label="Login" onPress={() => onLogin()} />
      <Button
        label="Dil Değiştir"
        variant="outline"
        onPress={() => changeLanguage(i18n.language === 'en' ? 'tr' : 'en')}
      />
    </Screen>
  );
}
