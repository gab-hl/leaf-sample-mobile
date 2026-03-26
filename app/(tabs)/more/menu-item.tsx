import { Divider, MenuItem, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function MoreMenuItemScreen() {
  return (
    <CategoryDemoScreen title="Overlays · MenuItem">
      <Text type="heading" size="xSmall">
        MenuItem
      </Text>
      <Divider />
      <MenuItem
        label="Menu item"
        description="Demo"
        iconName="menu"
        hasChildren
        onPress={() => showPressToast()}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

