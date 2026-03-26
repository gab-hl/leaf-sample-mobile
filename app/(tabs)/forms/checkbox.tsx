import { Divider, InputCheckbox, Text, Toast } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function FormsCheckboxScreen() {
  const [selected, setSelected] = useState(false);

  return (
    <CategoryDemoScreen title="Inputs · Checkbox">
      <Text type="heading" size="xSmall">
        InputCheckbox
      </Text>
      <Divider />
      <InputCheckbox
        label="Accept terms"
        description="Required to proceed"
        selected={selected}
        onChange={setSelected}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

