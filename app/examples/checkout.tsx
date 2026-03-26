import {
  Brand,
  Clickable,
  Drawer,
  GlobalHeader,
  ListContent,
  ListNavigation,
  ListSelect,
  Text,
  Toast,
} from '@herbalifedev/leaf-mobile';
import { IconMobile } from '@herbalifedev/leaf-mobile/assets';
import { radius, semantic, shadow, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { showPressToast } from '@/utils/show-press-toast';
import { ShoppingBagDrawer, type ShoppingBagDrawerView } from '@/components/examples/shopping-bag-drawer';

const AVATAR_URI = 'https://i.pravatar.cc/128?img=5';
const US_FLAG_URI = 'https://flagcdn.com/w80/us.png';

type PaymentMethod = {
  id: string;
  label: string;
  badgeFlag:
    | 'visa'
    | 'apple-pay'
    | 'google-pay'
    | 'paypal'
    | 'amazon-pay'
    | 'klarna'
    | 'union-pay'
    | 'sepa'
    | 'discover';
};

const PAYMENT_PRIMARY: PaymentMethod[] = [
  { id: 'visa', label: 'Visa', badgeFlag: 'visa' },
  { id: 'apple-pay', label: 'Apple Pay', badgeFlag: 'apple-pay' },
  { id: 'google-pay', label: 'Google Pay', badgeFlag: 'google-pay' },
  { id: 'paypal', label: 'Paypal', badgeFlag: 'paypal' },
  { id: 'amazon-pay', label: 'Amazon Pay', badgeFlag: 'amazon-pay' },
];

const PAYMENT_OTHER: PaymentMethod[] = [
  { id: 'klarna', label: 'Klarna', badgeFlag: 'klarna' },
  { id: 'union-pay', label: 'Union Pay', badgeFlag: 'union-pay' },
  { id: 'sepa', label: 'SEPA Direct Debit', badgeFlag: 'sepa' },
  { id: 'discover', label: 'Discover', badgeFlag: 'discover' },
];

function cardShadowStyle() {
  return Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: shadow.sm.offsetX, height: shadow.sm.offsetY },
      shadowOpacity: 0.1,
      shadowRadius: shadow.sm.blurRadius,
    },
    android: { elevation: 2 },
    default: {},
  });
}

type EditDrawerState = {
  title: string;
  body: string;
} | null;

export default function CheckoutExampleScreen() {
  const router = useRouter();
  const [paymentId, setPaymentId] = useState<string>('visa');
  const [bagOpen, setBagOpen] = useState(false);
  const [bagView, setBagView] = useState<ShoppingBagDrawerView>('empty');
  const [editDrawer, setEditDrawer] = useState<EditDrawerState>(null);

  const openShoppingBag = () => {
    setEditDrawer(null);
    setBagView('empty');
    setBagOpen(true);
  };

  const closeShoppingBag = () => {
    setBagOpen(false);
    setBagView('empty');
  };

  const openEditDrawer = (title: string, body: string) => {
    setBagOpen(false);
    setEditDrawer({ title, body });
  };

  const closeEditDrawer = () => setEditDrawer(null);

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.headerSafe}>
        <GlobalHeader
          contentLeft="slot"
          leftSlot={
            <Clickable
              accessibilityRole="button"
              accessibilityLabel="Go to Home"
              onPress={() => router.push('/(tabs)/home')}>
              <Brand brand="herbalife" type="extended" size="xsmall" />
            </Clickable>
          }
          actions={[
            { iconName: 'search', onPress: () => showPressToast() },
            { iconName: 'local_mall', onPress: openShoppingBag },
            { iconName: 'menu', onPress: () => showPressToast() },
          ]}
        />
      </SafeAreaView>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text type="heading" size="medium">
          Checkout
        </Text>

        <View style={styles.card}>
          <Text type="heading" size="small">
            Summary
          </Text>
          <ListNavigation
            title="Your Bag"
            description="3 items"
            iconName="local_mall"
            onClick={openShoppingBag}
          />
          <View style={styles.summaryList}>
            <ListContent>
              <ListContent.Content title="Item subtotal (3)" />
              <ListContent.Right currencyValue={143.7} currencyPrefix="$" currencySize="small" />
            </ListContent>
            <ListContent>
              <ListContent.Content title="Order subtotal" />
              <ListContent.Right currencyValue={143.7} currencyPrefix="$" currencySize="small" />
            </ListContent>
          </View>
          <View style={styles.footnoteBlock}>
            <Text type="body" size="small" style={styles.footnote}>
              Shipping calculated at checkout.
            </Text>
            <Text type="body" size="small" style={styles.footnote}>
              Price inclusive of sales tax.
            </Text>
          </View>
        </View>

        <View style={styles.sectionLabeled}>
          <Text type="heading" size="small">
            Welcome
          </Text>
          <View style={[styles.card, styles.welcomeCard]}>
            <ListContent>
              <ListContent.Left avatarUrl={AVATAR_URI} avatarName="Ashley Ramsden" />
              <ListContent.Content title="Ashley Ramsden" />
              <ListContent.Right
                actionLabel="Edit"
                onActionPress={() =>
                  openEditDrawer(
                    'Edit profile',
                    'Update your contact details, preferred language, and account information. Changes apply to orders and communications going forward.',
                  )
                }
              />
            </ListContent>
            <View style={styles.contactList}>
              <View style={styles.contactRow}>
                <IconMobile name="favorite" size="small" color={semantic.paragraphColor} />
                <Text type="body" size="small" style={styles.contactLabel}>
                  johndoe@example.com
                </Text>
              </View>
              <View style={styles.contactRow}>
                <IconMobile name="favorite" size="small" color={semantic.paragraphColor} />
                <Text type="body" size="small" style={styles.contactLabel}>
                  79111 23456
                </Text>
              </View>
              <View style={styles.contactRow}>
                <Image source={{ uri: US_FLAG_URI }} style={styles.flag} accessibilityLabel="United States" />
                <Text type="body" size="small" style={styles.contactLabel}>
                  English
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionLabeled}>
          <Text type="heading" size="small">
            Shipping address
          </Text>
          <View style={styles.card}>
            <ListContent>
              <ListContent.Content title="Preferred Address" />
              <ListContent.Right
                actionLabel="Edit"
                onActionPress={() =>
                  openEditDrawer(
                    'Edit shipping address',
                    'Change your preferred shipping address or add a new delivery location. Saved addresses can be reused at checkout.',
                  )
                }
              />
            </ListContent>
            <View style={styles.addressBlock}>
              <Text type="heading" size="small" style={styles.addressName}>
                Ashley R
              </Text>
              <Text type="body" size="medium" style={styles.addressLine}>
                158 E 126th S
              </Text>
              <Text type="body" size="medium" style={styles.addressLine}>
                New York, NY 10035
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionLabeled}>
          <View style={styles.paymentHeader}>
            <Text type="heading" size="small">
              Payment
            </Text>
            <Text type="body" size="small" style={styles.paymentSubtitle}>
              Choose your payment method from the options below.
            </Text>
          </View>
          <View style={styles.paymentList}>
            {PAYMENT_PRIMARY.map((m) => (
              <ListSelect
                key={m.id}
                label={m.label}
                inputType="radio"
                selected={paymentId === m.id}
                onChange={() => setPaymentId(m.id)}
                content="creditCard"
                showDescription={false}
                creditCardProps={{ badgeFlag: m.badgeFlag }}
              />
            ))}
            <Text type="body" size="medium" style={styles.otherPaymentsLabel}>
              Other payment methods
            </Text>
            {PAYMENT_OTHER.map((m) => (
              <ListSelect
                key={m.id}
                label={m.label}
                inputType="radio"
                selected={paymentId === m.id}
                onChange={() => setPaymentId(m.id)}
                content="creditCard"
                showDescription={false}
                creditCardProps={{ badgeFlag: m.badgeFlag }}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <ShoppingBagDrawer
        visible={bagOpen}
        view={bagView}
        onClose={closeShoppingBag}
        onViewChange={setBagView}
      />

      <Drawer visible={editDrawer !== null} onClose={closeEditDrawer} title={editDrawer?.title ?? 'Edit'}>
        {editDrawer ? (
          <View style={styles.editDrawerBody}>
            <Text type="body" size="medium" style={styles.editDrawerText}>
              {editDrawer.body}
            </Text>
          </View>
        ) : null}
      </Drawer>

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
    gap: spacing[6],
  },
  card: {
    backgroundColor: semantic.bg1,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: semantic.borderMuted,
    padding: spacing[5],
    gap: spacing[6],
    ...cardShadowStyle(),
  },
  welcomeCard: {
    paddingTop: spacing[3],
    paddingBottom: spacing[5],
    paddingHorizontal: spacing[5],
  },
  summaryList: {
    gap: spacing[2],
  },
  footnoteBlock: {
    gap: spacing[2],
  },
  footnote: {
    color: semantic.paragraphColor,
  },
  sectionLabeled: {
    gap: spacing[5],
  },
  contactList: {
    gap: spacing[2],
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  flag: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  contactLabel: {
    color: semantic.paragraphColor,
  },
  addressBlock: {
    gap: spacing[2],
  },
  addressName: {
    opacity: 0.75,
  },
  addressLine: {
    color: semantic.paragraphColor,
  },
  paymentHeader: {
    gap: spacing[3],
  },
  paymentSubtitle: {
    color: semantic.paragraphColor,
  },
  paymentList: {
    gap: spacing[3],
  },
  otherPaymentsLabel: {
    color: semantic.paragraphColor,
    paddingTop: spacing[4],
    paddingBottom: spacing[1],
  },
  editDrawerBody: {
    paddingBottom: spacing[4],
  },
  editDrawerText: {
    color: semantic.paragraphColor,
  },
});
