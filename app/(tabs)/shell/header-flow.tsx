import { Divider, HeaderFlow, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function ShellHeaderFlowScreen() {
  return (
    <CategoryDemoScreen title="Navigation · HeaderFlow">
      <Text type="heading" size="xSmall">
        HeaderFlow
      </Text>
      <Divider />
      <HeaderFlow text="Checkout" showProgressBar progress={40} onClosePress={() => showPressToast()} />
      <Toast />
    </CategoryDemoScreen>
  );
}

