import React from 'react';
import {getToken} from '@store/auth/utils';
import {Button} from '@components/ui/core/button';
import {signOut} from '@store/auth';
import {Screen} from '@components/ui/core/screen';

export default function Home() {
  const token = getToken();

  return (
    <Screen>
      <Button label="Logout" variant="outline" onPress={() => signOut()} />
    </Screen>
  );
}
