import { Divider, GlobalHeader, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function ShellGlobalHeaderScreen() {
  return (
    <CategoryDemoScreen title="Navigation · GlobalHeader">
      <Text type="heading" size="xSmall">
        GlobalHeader
      </Text>
      <Divider />
      <GlobalHeader contentLeft="brand" actions={[{ iconName: 'menu', onPress: () => showPressToast() }]} />
      <Toast />
    </CategoryDemoScreen>
  );
}

