import { Button, Divider, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function ActionsButtonsScreen() {
  return (
    <CategoryDemoScreen title="Actions · Buttons">
      <Text type="heading" size="xSmall">
        Buttons
      </Text>
      <Divider />
      <Button label="Primary" onClick={() => showPressToast()} />
      <Button label="On brand" severity="onBrand" onClick={() => showPressToast()} />
      <Button label="On contrast" severity="onContrast" onClick={() => showPressToast()} />
      <Toast />
    </CategoryDemoScreen>
  );
}

