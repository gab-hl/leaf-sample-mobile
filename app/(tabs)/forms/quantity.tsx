import { Divider, QuantitySelector, Text, Toast } from '@herbalifedev/leaf-mobile';
import { spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function FormsQuantityScreen() {
  const [quantity, setQuantity] = useState(1);

  return (
    <CategoryDemoScreen title="Inputs · Quantity">
      <Text type="heading" size="xSmall">
        QuantitySelector
      </Text>
      <Divider />
      <View style={styles.row}>
        <Text type="body" size="small">
          Quantity
        </Text>
        <QuantitySelector
          value={quantity}
          onIncrement={() => setQuantity((prev) => prev + 1)}
          onDecrement={() => setQuantity((prev) => Math.max(0, prev - 1))}
          remove={quantity <= 1}
        />
      </View>
      <Toast />
    </CategoryDemoScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    flexWrap: 'wrap',
  },
});

