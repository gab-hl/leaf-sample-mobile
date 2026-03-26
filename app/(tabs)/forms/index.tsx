import { Divider, Text } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { CategoryIndexList } from '@/components/category-index-list';

const PAGES = [
  { title: 'Text input', description: 'InputText basics', href: '/(tabs)/forms/text-input' },
  { title: 'Password input', description: 'InputPassword', href: '/(tabs)/forms/password-input' },
  { title: 'Checkbox', description: 'InputCheckbox', href: '/(tabs)/forms/checkbox' },
  { title: 'Toggle', description: 'ToggleSwitch', href: '/(tabs)/forms/toggle' },
  { title: 'Radio', description: 'RadioButton', href: '/(tabs)/forms/radio' },
  { title: 'Quantity', description: 'QuantitySelector', href: '/(tabs)/forms/quantity' },
] as const;

export default function FormsIndexScreen() {
  return (
    <CategoryDemoScreen title="Inputs">
      <Text type="body" size="medium">
        Fields, toggles, and selection controls.
      </Text>
      <Divider />
      <CategoryIndexList heading="Inputs pages" items={PAGES} />
    </CategoryDemoScreen>
  );
}

