import { CreditCard, Divider, Text, Toast } from '@herbalifedev/leaf-mobile';
import { View, StyleSheet } from 'react-native';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function MoreCreditCardScreen() {
  return (
    <CategoryDemoScreen title="Overlays · CreditCard">
      <Text type="heading" size="xSmall">
        CreditCard
      </Text>
      <Divider />
      <View style={styles.row}>
        <CreditCard type="empty" />
        <CreditCard type="flag" badgeType="logotype" badgeFlag="visa" />
      </View>
      <Toast />
    </CategoryDemoScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});

