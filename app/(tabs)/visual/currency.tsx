import { Currency, Divider, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function VisualCurrencyScreen() {
  return (
    <CategoryDemoScreen title="Feedback · Currency">
      <Text type="heading" size="xSmall">
        Currency
      </Text>
      <Divider />
      <Currency prefix="$" value={129.99} saleValue={149.99} tag="Promo" showTag />
      <Toast />
    </CategoryDemoScreen>
  );
}

