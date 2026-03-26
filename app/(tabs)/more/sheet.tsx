import { Button, Divider, Sheet, Text, Toast } from '@herbalifedev/leaf-mobile';
import { spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function MoreSheetScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <CategoryDemoScreen title="Overlays · Sheet">
      <Text type="heading" size="xSmall">
        Sheet
      </Text>
      <Divider />
      <Button label="Open sheet" onClick={() => setVisible(true)} />

      <Sheet visible={visible} onClose={() => setVisible(false)} showHandle overlay snapPoints={[0.5, 0.85]}>
        <View style={styles.panel}>
          <Text type="heading" size="small">
            Sheet
          </Text>
          <Button label="Close" onClick={() => setVisible(false)} />
        </View>
      </Sheet>

      <Toast />
    </CategoryDemoScreen>
  );
}

const styles = StyleSheet.create({
  panel: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    gap: spacing[2],
  },
});

