import { Divider, InputPassword, Text, Toast } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function FormsPasswordInputScreen() {
  const [password, setPassword] = useState('sample123');

  return (
    <CategoryDemoScreen title="Inputs · Password input">
      <Text type="heading" size="xSmall">
        InputPassword
      </Text>
      <Divider />
      <InputPassword
        label="Password"
        content={password}
        onChange={(value) => setPassword(typeof value === 'string' ? value : password)}
        placeholder="Enter your password"
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

