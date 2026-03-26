import { Divider, SelectList, Text, Toast } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function ListsSelectListScreen() {
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
    <CategoryDemoScreen title="Content · SelectList">
      <Text type="heading" size="xSmall">
        SelectList
      </Text>
      <Divider />
      <SelectList
        options={options}
        selectedValue={selectedOption}
        onSelect={setSelectedOption}
        searchValue={selectSearch}
        onSearchChange={setSelectSearch}
        placeholder="Search"
        closeOnSelect
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

