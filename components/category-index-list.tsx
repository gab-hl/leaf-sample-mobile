import { ListNavigation, Text } from '@herbalifedev/leaf-mobile';
import { semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export type CategoryIndexItem = {
  title: string;
  description?: string;
  iconName?: 'home' | 'menu' | 'person';
  href: Href;
};

export type CategoryIndexListProps = {
  heading?: string;
  items: CategoryIndexItem[];
};

export function CategoryIndexList({ heading = 'Pages', items }: CategoryIndexListProps) {
  const router = useRouter();

  return (
    <View style={styles.block}>
      <Text type="heading" size="xSmall" style={styles.heading}>
        {heading}
      </Text>
      <View style={styles.list}>
        {items.map((item) => (
          <ListNavigation
            key={item.title}
            title={item.title}
            description={item.description}
            iconName={item.iconName ?? 'menu'}
            onClick={() => router.push(item.href)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: spacing[3],
  },
  heading: {
    color: semantic.textColor,
  },
  list: {
    gap: spacing[2],
  },
});

