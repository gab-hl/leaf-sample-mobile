import { Divider, Text, Toast, ToggleSwitch } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function FormsToggleScreen() {
  const [selected, setSelected] = useState(true);

  return (
    <CategoryDemoScreen title="Inputs · Toggle">
      <Text type="heading" size="xSmall">
        ToggleSwitch
      </Text>
      <Divider />
      <ToggleSwitch
        label="Marketing notifications"
        description="Email updates"
        selected={selected}
        onPress={setSelected}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

