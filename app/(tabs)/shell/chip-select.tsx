import { ChipSelectGroup, Divider, Text, Toast } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function ShellChipSelectScreen() {
  const [chipValue, setChipValue] = useState('all');

  return (
    <CategoryDemoScreen title="Navigation · ChipSelectGroup">
      <Text type="heading" size="xSmall">
        ChipSelectGroup
      </Text>
      <Divider />
      <ChipSelectGroup
        type="radio"
        options={[
          { id: 'all', label: 'All', value: 'all' },
          { id: 'fav', label: 'Favorites', value: 'fav' },
        ]}
        value={chipValue}
        onValueChange={setChipValue}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

