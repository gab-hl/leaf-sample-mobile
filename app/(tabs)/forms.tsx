import {
  Button,
  Divider,
  GlobalHeader,
  IconButton,
  InputCheckbox,
  InputPassword,
  InputText,
  QuantitySelector,
  RadioButton,
  Text,
  Toast,
  ToggleSwitch,
} from '@herbalifedev/leaf-mobile';
import { semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { showPressToast } from '@/utils/show-press-toast';

export default function FormsExampleScreen() {
  const router = useRouter();
  const [name, setName] = useState('Jane Doe');
  const [password, setPassword] = useState('sample123');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.headerSafe} edges={['top']}>
        <GlobalHeader
          contentLeft="slot"
          leftSlot={
            <View style={styles.headerLeft}>
              <IconButton
                iconName="keyboard_arrow_left"
                severity="primary"
                onClick={() => router.push('/(tabs)/home')}
              />
              <View style={styles.headerTitle}>
                <Text type="heading" size="small" numberOfLines={1}>
                  Forms & selection
                </Text>
              </View>
            </View>
          }
          actions={[]}
        />
      </SafeAreaView>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Divider />
        <InputText
          label="Full name"
          content={name}
          onChange={(value) => setName(typeof value === 'string' ? value : name)}
          placeholder="Enter your name"
        />
        <InputPassword
          label="Password"
          content={password}
          onChange={(value) => setPassword(typeof value === 'string' ? value : password)}
          placeholder="Enter your password"
        />
        <InputCheckbox
          label="Accept terms"
          description="Required to proceed"
          selected={acceptTerms}
          onChange={setAcceptTerms}
        />
        <ToggleSwitch
          label="Marketing notifications"
          description="Email updates"
          selected={marketingOptIn}
          onPress={setMarketingOptIn}
        />
        <RadioButton
          label="Basic plan"
          description="Lower cost tier"
          selected={selectedPlan === 'basic'}
          onChange={() => setSelectedPlan('basic')}
        />
        <RadioButton
          label="Premium plan"
          description="Full features"
          selected={selectedPlan === 'premium'}
          onChange={() => setSelectedPlan('premium')}
        />
        <View style={styles.inlineRow}>
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
        <Button label="Toast test" onClick={() => showPressToast()} />
      </ScrollView>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: semantic.surfaceBody,
  },
  headerSafe: {
    backgroundColor: semantic.bg1,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[24],
    gap: spacing[3],
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    flexWrap: 'wrap',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    maxWidth: '78%',
  },
  headerTitle: {
    flex: 1,
    minWidth: 0,
  },
});
