import { Divider, StatusIndicator, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function VisualStatusScreen() {
  return (
    <CategoryDemoScreen title="Feedback · Status">
      <Text type="heading" size="xSmall">
        StatusIndicator
      </Text>
      <Divider />
      <StatusIndicator severity="Positive" label="Status" />
      <Toast />
    </CategoryDemoScreen>
  );
}

