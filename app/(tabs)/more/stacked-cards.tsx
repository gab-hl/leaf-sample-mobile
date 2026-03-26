import { Divider, StackedCards, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function MoreStackedCardsScreen() {
  return (
    <CategoryDemoScreen title="Overlays · StackedCards">
      <Text type="heading" size="xSmall">
        StackedCards
      </Text>
      <Divider />
      <StackedCards
        cards={[
          { id: 1, background: 'brand', label: 'Card 1', ctaLabel: 'Open' },
          { id: 2, background: 'primaryLighter', label: 'Card 2' },
        ]}
        onCardPress={() => showPressToast()}
        onCtaPress={() => showPressToast()}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

