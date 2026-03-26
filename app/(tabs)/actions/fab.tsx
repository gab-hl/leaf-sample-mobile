import { Divider, FloatButton, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function ActionsFabScreen() {
  return (
    <CategoryDemoScreen title="Actions · FAB">
      <Text type="heading" size="xSmall">
        FloatButton
      </Text>
      <Divider />

      <Text type="body" size="medium">
        FloatButton renders over the screen; try scrolling.
      </Text>

      <FloatButton actions={[{ iconName: 'menu', onClick: () => showPressToast() }]} />
      <Toast />
    </CategoryDemoScreen>
  );
}

