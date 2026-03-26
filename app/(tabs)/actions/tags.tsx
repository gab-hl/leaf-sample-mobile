import { Divider, Tag, Text, Toast } from '@herbalifedev/leaf-mobile';
import { View, StyleSheet } from 'react-native';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function ActionsTagsScreen() {
  return (
    <CategoryDemoScreen title="Actions · Tags">
      <Text type="heading" size="xSmall">
        Tags
      </Text>
      <Divider />
      <View style={styles.row}>
        <Tag label="Info" severity="info" />
        <Tag label="Positive" severity="positive" />
        <Tag label="Warning" severity="warning" />
        <Tag label="Negative" severity="negative" />
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

