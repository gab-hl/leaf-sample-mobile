import { Brand, BrandLoader, Divider, LoaderDots, Skeleton, Text, Toast } from '@herbalifedev/leaf-mobile';
import { spacing } from '@herbalifedev/leaf-mobile/tokens';
import { StyleSheet, View } from 'react-native';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function VisualLoadersScreen() {
  return (
    <CategoryDemoScreen title="Feedback · Loaders">
      <Text type="heading" size="xSmall">
        Loaders
      </Text>
      <Divider />
      <View style={styles.row}>
        <Brand brand="herbalife" type="extended" size="small" />
        <Skeleton width={80} height={16} />
        <LoaderDots />
        <BrandLoader />
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

