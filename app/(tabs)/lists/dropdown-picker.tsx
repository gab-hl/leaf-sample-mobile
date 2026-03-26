import { Divider, DropdownPicker, Text, Toast } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function ListsDropdownPickerScreen() {
  const [selectedOption, setSelectedOption] = useState('us');
  const [selectSearch, setSelectSearch] = useState('');

  const options = [
    {
      label: 'Countries',
      value: [
        { label: 'United States', value: 'us', iconName: 'person' as const },
        { label: 'Brazil', value: 'br', iconName: 'person' as const },
        { label: 'Mexico', value: 'mx', iconName: 'person' as const },
      ],
    },
  ];

  return (
    <CategoryDemoScreen title="Content · DropdownPicker">
      <Text type="heading" size="xSmall">
        DropdownPicker
      </Text>
      <Divider />
      <DropdownPicker
        title="Country"
        placeholder="Choose"
        options={options}
        value={selectedOption}
        onValueChange={(value) => setSelectedOption(value)}
        searchValue={selectSearch}
        onSearchChange={setSelectSearch}
        closeOnSelect
        triggerIconName="menu"
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

