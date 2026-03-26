import { Divider, Text } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { CategoryIndexList } from '@/components/category-index-list';

const PAGES = [
  { title: 'Loaders', description: 'Skeleton + loaders', href: '/(tabs)/visual/loaders' },
  { title: 'Progress', description: 'ProgressBar', href: '/(tabs)/visual/progress' },
  { title: 'Flag', description: 'Flag status messaging', href: '/(tabs)/visual/flag' },
  { title: 'Currency', description: 'Currency formatting', href: '/(tabs)/visual/currency' },
  { title: 'Tiles', description: 'Image, tiles, topics', href: '/(tabs)/visual/tiles' },
  { title: 'Status', description: 'StatusIndicator', href: '/(tabs)/visual/status' },
] as const;

export default function VisualIndexScreen() {
  return (
    <CategoryDemoScreen title="Feedback">
      <Text type="body" size="medium">
        Loaders, progress, flags, and status.
      </Text>
      <Divider />
      <CategoryIndexList heading="Feedback pages" items={PAGES} />
    </CategoryDemoScreen>
  );
}

