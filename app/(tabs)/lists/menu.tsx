import { Divider, Menu, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

const menuItems = [
  {
    id: 'orders',
    label: 'Orders',
    description: 'Track orders',
    iconName: 'menu' as const,
    onPress: () => showPressToast(),
  },
  {
    id: 'profile',
    label: 'Profile',
    description: 'Settings',
    iconName: 'person' as const,
    onPress: () => showPressToast(),
  },
] as const;

export default function ListsMenuScreen() {
  return (
    <CategoryDemoScreen title="Content · Menu">
      <Text type="heading" size="xSmall">
        Menu
      </Text>
      <Divider />
      <Menu list={menuItems} titleNavigation="Menu" />
      <Toast />
    </CategoryDemoScreen>
  );
}

