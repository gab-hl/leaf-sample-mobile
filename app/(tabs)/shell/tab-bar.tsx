import { Divider, TabBar, Text, Toast } from '@herbalifedev/leaf-mobile';
import { IconMobile } from '@herbalifedev/leaf-mobile/assets';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function ShellTabBarScreen() {
  const [selected, setSelected] = useState<1 | 2 | 3>(1);

  return (
    <CategoryDemoScreen title="Navigation · TabBar">
      <Text type="heading" size="xSmall">
        TabBar
      </Text>
      <Divider />
      <TabBar
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

