import { Divider, FloatTabBar, Text, Toast } from '@herbalifedev/leaf-mobile';
import { IconMobile } from '@herbalifedev/leaf-mobile/assets';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function ListsFloatTabBarScreen() {
  const [selected, setSelected] = useState<1 | 2 | 3>(1);

  return (
    <CategoryDemoScreen title="Content · FloatTabBar">
      <Text type="heading" size="xSmall">
        FloatTabBar
      </Text>
      <Divider />
      <FloatTabBar
        selected={selected}
        actions={[
          { icon: <IconMobile name="home" size="small" />, onPress: () => setSelected(1) },
          { icon: <IconMobile name="menu" size="small" />, onPress: () => setSelected(2) },
          { icon: <IconMobile name="person" size="small" />, onPress: () => setSelected(3) },
        ]}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

