import { Divider, Drawer, Text, Toast, Button } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';
import { Alert, View, StyleSheet } from 'react-native';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function ActionsDrawerScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <CategoryDemoScreen title="Actions · Drawer">
      <Text type="heading" size="xSmall">
        Drawer
      </Text>
      <Divider />
      <Button label="Open Drawer" onClick={() => setVisible(true)} />

      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
        title="Drawer"
        actions={[
          {
            label: 'Confirm',
            onClick: () => {
              setVisible(false);
              Alert.alert('Drawer', 'Confirmed');
            },
          },
          { label: 'Cancel', onClick: () => setVisible(false) },
        ]}>
        <View style={styles.panel}>
          <Text type="body" size="medium">
            Drawer content
          </Text>
        </View>
      </Drawer>

      <Toast />
    </CategoryDemoScreen>
  );
}

const styles = StyleSheet.create({
  panel: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

