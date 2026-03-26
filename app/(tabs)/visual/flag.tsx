import { Divider, Flag, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function VisualFlagScreen() {
  return (
    <CategoryDemoScreen title="Feedback · Flag">
      <Text type="heading" size="xSmall">
        Flag
      </Text>
      <Divider />
      <Flag
        severity="info"
        title="Heads up"
        message="Flag component demo."
        showAction
        actionLabel="Toast"
        onActionPress={() => showPressToast()}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

