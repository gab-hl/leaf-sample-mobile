import { Divider, Text } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { CategoryIndexList } from '@/components/category-index-list';

const PAGES = [
  { title: 'GlobalHeader', description: 'Header chrome', href: '/(tabs)/shell/global-header' },
  { title: 'HeaderFlow', description: 'Flow header with progress', href: '/(tabs)/shell/header-flow' },
  { title: 'ChipSelectGroup', description: 'Inline selection', href: '/(tabs)/shell/chip-select' },
  { title: 'ListContent', description: 'Content rows', href: '/(tabs)/shell/list-content' },
  { title: 'ListNavigation', description: 'Navigation rows', href: '/(tabs)/shell/list-navigation' },
  { title: 'TabBar', description: 'Bottom tab bar', href: '/(tabs)/shell/tab-bar' },
] as const;

export default function ShellIndexScreen() {
  return (
    <CategoryDemoScreen title="Navigation">
      <Text type="body" size="medium">
        Headers, tabs, and wayfinding blocks.
      </Text>
      <Divider />
      <CategoryIndexList heading="Navigation pages" items={PAGES} />
    </CategoryDemoScreen>
  );
}

