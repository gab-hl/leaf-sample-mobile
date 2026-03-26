import { Divider, Text } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { CategoryIndexList } from '@/components/category-index-list';

const PAGES = [
  { title: 'Buttons', description: 'Button variants and triggers', href: '/(tabs)/actions/buttons' },
  { title: 'Drawer', description: 'Drawer interactions', href: '/(tabs)/actions/drawer' },
  { title: 'FAB', description: 'FloatButton actions', href: '/(tabs)/actions/fab' },
  { title: 'Tags', description: 'Tag component variants', href: '/(tabs)/actions/tags' },
] as const;

export default function ActionsIndexScreen() {
  return (
    <CategoryDemoScreen title="Actions">
      <Text type="body" size="medium">
        Buttons, FABs, tags, and primary triggers.
      </Text>
      <Divider />
      <CategoryIndexList heading="Actions pages" items={PAGES} />
    </CategoryDemoScreen>
  );
}

