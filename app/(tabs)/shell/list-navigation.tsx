import { Divider, ListNavigation, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function ShellListNavigationScreen() {
  return (
    <CategoryDemoScreen title="Navigation · ListNavigation">
      <Text type="heading" size="xSmall">
        ListNavigation
      </Text>
      <Divider />
      <ListNavigation title="List item" description="Tap" iconName="menu" onClick={() => showPressToast()} />
      <Toast />
    </CategoryDemoScreen>
  );
}

