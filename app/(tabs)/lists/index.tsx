import { Divider, Text } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { CategoryIndexList } from '@/components/category-index-list';

const PAGES = [
  { title: 'Accordion', description: 'Expandable content', href: '/(tabs)/lists/accordion' },
  { title: 'Select list', description: 'Searchable selection list', href: '/(tabs)/lists/select-list' },
  { title: 'Dropdown picker', description: 'Picker with search', href: '/(tabs)/lists/dropdown-picker' },
  { title: 'Menu', description: 'Menu patterns', href: '/(tabs)/lists/menu' },
  { title: 'FloatTabBar', description: 'Floating tab bar', href: '/(tabs)/lists/float-tab-bar' },
] as const;

export default function ListsIndexScreen() {
  return (
    <CategoryDemoScreen title="Content · Lists">
      <Text type="body" size="medium">
        Accordions, menus, and list content patterns.
      </Text>
      <Divider />
      <CategoryIndexList heading="Content pages" items={PAGES} />
    </CategoryDemoScreen>
  );
}

