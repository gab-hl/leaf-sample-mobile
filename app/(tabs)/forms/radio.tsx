import { Divider, RadioButton, Text, Toast } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function FormsRadioScreen() {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');

  return (
    <CategoryDemoScreen title="Inputs · Radio">
      <Text type="heading" size="xSmall">
        RadioButton
      </Text>
      <Divider />
      <RadioButton
        label="Basic plan"
        description="Lower cost tier"
        selected={selectedPlan === 'basic'}
        onChange={() => setSelectedPlan('basic')}
      />
      <RadioButton
        label="Premium plan"
        description="Full features"
        selected={selectedPlan === 'premium'}
        onChange={() => setSelectedPlan('premium')}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

