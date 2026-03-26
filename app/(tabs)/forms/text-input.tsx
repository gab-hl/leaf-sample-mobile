import { Divider, InputText, Text, Toast } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function FormsTextInputScreen() {
  const [name, setName] = useState('Jane Doe');

  return (
    <CategoryDemoScreen title="Inputs · Text input">
      <Text type="heading" size="xSmall">
        InputText
      </Text>
      <Divider />
      <InputText
        label="Full name"
        content={name}
        onChange={(value) => setName(typeof value === 'string' ? value : name)}
        placeholder="Enter your name"
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

