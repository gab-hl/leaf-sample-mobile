import { Divider, ProgressBar, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function VisualProgressScreen() {
  return (
    <CategoryDemoScreen title="Feedback · Progress">
      <Text type="heading" size="xSmall">
        ProgressBar
      </Text>
      <Divider />
      <ProgressBar progress={72} label="Progress" description="Demo" caption="72%" />
      <Toast />
    </CategoryDemoScreen>
  );
}

