import { Divider, Text } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { CategoryIndexList } from '@/components/category-index-list';

const PAGES = [
  { title: 'Carousel', description: 'Horizontal scrolling content', href: '/(tabs)/more/carousel' },
  { title: 'Stacked cards', description: 'Stacked surface pattern', href: '/(tabs)/more/stacked-cards' },
  { title: 'Credit cards', description: 'Card badges and types', href: '/(tabs)/more/credit-card' },
  { title: 'Image gallery', description: 'Selectable gallery', href: '/(tabs)/more/image-gallery' },
  { title: 'Menu item', description: 'Standalone menu row', href: '/(tabs)/more/menu-item' },
  { title: 'Sheet', description: 'Bottom sheet', href: '/(tabs)/more/sheet' },
] as const;

export default function MoreIndexScreen() {
  return (
    <CategoryDemoScreen title="Overlays">
      <Text type="body" size="medium">
        Sheets, stacked surfaces, and gallery overlays.
      </Text>
      <Divider />
      <CategoryIndexList heading="Overlays pages" items={PAGES} />
    </CategoryDemoScreen>
  );
}

