import {
  Button,
  Carousel,
  FloatTabBar,
  GlobalHeader,
  MediaTile,
  ProductTile,
  Tag,
  Text,
  Toast,
} from '@herbalifedev/leaf-mobile';
import { IconMobile } from '@herbalifedev/leaf-mobile/assets';
import {
  color,
  radius,
  semantic,
  shadow,
  spacing,
  typography,
} from '@herbalifedev/leaf-mobile/tokens';
import { useState } from 'react';
import {
  Image as RNImage,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  PAGE_GUTTER_WIDE,
  PageSection,
  PageSectionInset,
  carouselSectionContentStyle,
} from '@/components/page-section';
import { showPressToast } from '@/utils/show-press-toast';

const HERO_URI = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800';

const QUICK_ACTIONS = [
  { title: 'Shop', key: '1' },
  { title: 'Orders', key: '2' },
  { title: 'Rewards', key: '3' },
  { title: 'More', key: '4' },
];

const LEARNING = [
  {
    title: 'Distributor Training',
    description: '4 Modules',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
  },
  {
    title: 'Mastering Product Offers',
    description: '4 Modules',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400',
  },
  {
    title: 'Advanced Sales Training',
    description: '4 Modules',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
  },
];

export default function CommerceHomeExampleScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [floatTab, setFloatTab] = useState(1);
  const [productQty, setProductQty] = useState(0);

  const cardW = Math.min(320, width - spacing[6] * 2);

  const floatActions = [
    {
      icon: <IconMobile name="favorite" size="small" />,
      onPress: () => {
        setFloatTab(1);
        showPressToast();
      },
    },
    {
      icon: <IconMobile name="favorite" size="small" />,
      onPress: () => {
        setFloatTab(2);
        showPressToast();
      },
    },
    {
      icon: <IconMobile name="favorite" size="small" />,
      onPress: () => {
        setFloatTab(3);
        showPressToast();
      },
    },
    {
      icon: <IconMobile name="favorite" size="small" />,
      onPress: () => {
        setFloatTab(4);
        showPressToast();
      },
    },
    {
      icon: <IconMobile name="favorite" size="small" />,
      onPress: () => {
        setFloatTab(5);
        showPressToast();
      },
    },
  ] as const;

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.headerSafe}>
        <GlobalHeader
          contentLeft="brand"
          actions={[
            { iconName: 'search', onPress: () => showPressToast() },
            { iconName: 'local_mall', onPress: () => showPressToast() },
            { iconName: 'menu', onPress: () => showPressToast() },
          ]}
        />
      </SafeAreaView>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: spacing[28] + insets.bottom }]}
        removeClippedSubviews={false}>
        <PageSection>
          <PageSectionInset gutter="comfortable">
            <Text
              type="heading"
              size="large"
              style={[
                styles.greeting,
                {
                  fontSize: typography.text['4xl'].size,
                  lineHeight: typography.text['4xl'].size,
                  letterSpacing: -1.08,
                  color: semantic.headingColor,
                },
              ]}>
              Hello, distribuitor.name
            </Text>
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable">
            <Text type="heading" size="xSmall" style={styles.sectionTitle}>
              Quick Actions
            </Text>
          </PageSectionInset>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.quickActionsRow}>
            {QUICK_ACTIONS.map((item) => (
              <Pressable
                key={item.key}
                accessibilityRole="button"
                onPress={() => showPressToast()}
                style={({ pressed }) => [styles.quickCard, pressed && { opacity: 0.85 }]}>
                <IconMobile name="local_mall" size="small" color={semantic.primaryColor} />
                <Text type="body" size="medium" style={styles.quickCardLabel}>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </PageSection>

        <PageSection>
          <Carousel
            contentContainerStyle={[carouselSectionContentStyle('comfortable'), styles.featuredCarousel]}>
            <Pressable
              accessibilityRole="button"
              onPress={() => showPressToast()}
              style={[styles.heroCard, { width: cardW }]}>
              <RNImage source={{ uri: HERO_URI }} style={StyleSheet.absoluteFill} resizeMode="cover" />
              <View style={styles.heroScrim} />
              <View style={styles.heroInner}>
                <Tag label="Featured Products" severity="gold" />
                <View style={styles.heroTextBlock}>
                  <Text type="heading" size="medium" style={styles.heroTitle}>
                    New Merch Just Dropped!
                  </Text>
                  <Text type="body" size="large" style={styles.heroSubtitle}>
                    Use your points to get the latest goodies from our Rewards Catalog.
                  </Text>
                </View>
                <Button label="Go Shopping Now" size="large" severity="onContrast" onClick={() => showPressToast()} />
              </View>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={() => showPressToast()}
              style={[styles.promoCard, styles.promoLightMint, { width: cardW }]}>
              <View style={styles.promoBody}>
                <Tag label="Featured Products" severity="neutral" />
                <Text type="heading" size="large" style={styles.promoHeadlineMint}>
                  Redeem for{'\n'}your favorites
                </Text>
                <Button label="Go Shopping Now" size="large" severity="default" onClick={() => showPressToast()} />
              </View>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={() => showPressToast()}
              style={[styles.promoCard, { width: cardW, backgroundColor: semantic.brandAlt }]}>
              <View style={styles.promoBody}>
                <Tag label="Featured Products" severity="neutral" />
                <Text type="heading" size="large" style={styles.promoHeadlineDark}>
                  Redeem for{'\n'}your favorites
                </Text>
                <Button label="Go Shopping Now" size="large" severity="default" onClick={() => showPressToast()} />
              </View>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              onPress={() => showPressToast()}
              style={[styles.promoCard, { width: cardW, backgroundColor: semantic.brandColor }]}>
              <View style={styles.promoBody}>
                <Tag label="Featured Products" severity="neutral" />
                <Text type="heading" size="large" style={styles.promoOnBrand}>
                  80% supervisors are selling
                </Text>
                <Button label="Go Shopping Now" size="large" severity="onBrand" onClick={() => showPressToast()} />
              </View>
            </Pressable>
          </Carousel>
        </PageSection>

        <ProductRail title="Recent Products" productQty={productQty} onQuantityChange={setProductQty} />

        <PageSection>
          <PageSectionInset gutter="comfortable">
            <Text type="heading" size="xSmall" style={styles.sectionTitle}>
              Recent Learning
            </Text>
          </PageSectionInset>
          <Carousel
            contentContainerStyle={[carouselSectionContentStyle('comfortable'), styles.learningCarousel]}>
            {LEARNING.map((item) => (
              <MediaTile
                key={item.title}
                imageSource={item.image}
                title={item.title}
                description={item.description}
                onPress={() => showPressToast()}
              />
            ))}
          </Carousel>
        </PageSection>

        <ProductRail title="Recent Products" productQty={productQty} onQuantityChange={setProductQty} />
      </ScrollView>

      <View style={[styles.bottomDock, { paddingBottom: spacing[4] + insets.bottom }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Create"
          onPress={() => showPressToast()}
          style={({ pressed }) => [styles.fab, pressed && { opacity: 0.9 }]}>
          <IconMobile name="add" size="large" color={color.white} />
        </Pressable>
        <FloatTabBar
          selected={floatTab as 1 | 2 | 3 | 4 | 5}
          actions={[...floatActions]}
        />
      </View>

      <Toast />
    </View>
  );
}

function ProductRail({
  title,
  productQty,
  onQuantityChange,
}: {
  title: string;
  productQty: number;
  onQuantityChange: (n: number) => void;
}) {
  return (
    <PageSection>
      <PageSectionInset gutter="comfortable">
        <Text type="heading" size="xSmall" style={styles.sectionTitle}>
          {title}
        </Text>
      </PageSectionInset>
      <Carousel contentContainerStyle={[carouselSectionContentStyle('comfortable'), styles.productCarousel]}>
        <ProductTile
          title="Formula 1 Healthy Meal Nutritional Shake Mix"
          subtitle="Subtitle"
          imageSource="https://picsum.photos/seed/f1a/200/200"
          tagLabel="Category"
          currencyPrefix="$"
          currencyValue={39.99}
          quantity={productQty}
          onQuantityChange={onQuantityChange}
        />
        <ProductTile
          title="Herbal Tea Concentrate"
          subtitle="Subtitle"
          imageSource="https://picsum.photos/seed/f1b/200/200"
          tagLabel="Category"
          currencyPrefix="$"
          currencyValue={24.5}
        />
        <ProductTile
          title="Protein Drink Mix"
          subtitle="Subtitle"
          imageSource="https://picsum.photos/seed/f1c/200/200"
          tagLabel="Category"
          currencyPrefix="$"
          currencyValue={32}
        />
      </Carousel>
    </PageSection>
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
  scrollContent: {
    paddingTop: spacing[6],
    gap: spacing[10],
  },
  greeting: {
    fontFamily: semantic.fontDisplay,
    fontWeight: typography.fontWeight.medium,
  },
  sectionTitle: {
    color: semantic.textColor,
  },
  quickActionsRow: {
    gap: spacing[4],
    paddingVertical: spacing[4],
    paddingLeft: PAGE_GUTTER_WIDE,
    paddingRight: spacing[6],
  },
  quickCard: {
    width: 128,
    minHeight: 128,
    padding: spacing[4],
    borderRadius: radius.xl,
    backgroundColor: semantic.bg2,
    justifyContent: 'space-between',
  },
  quickCardLabel: {
    color: semantic.headingColor,
  },
  featuredCarousel: {
    gap: spacing[4],
    paddingRight: spacing[6],
  },
  heroCard: {
    height: 448,
    borderRadius: radius.xl,
    overflow: 'hidden',
  },
  heroScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  heroInner: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[6],
  },
  heroTextBlock: {
    gap: spacing[6],
  },
  heroTitle: {
    color: color.white,
  },
  heroSubtitle: {
    color: color.white,
    lineHeight: typography.text.lg.size * 1.4,
  },
  promoCard: {
    height: 448,
    borderRadius: radius.xl,
    overflow: 'hidden',
  },
  promoLightMint: {
    backgroundColor: semantic.primaryLighter,
  },
  promoBody: {
    flex: 1,
    padding: spacing[6],
    gap: spacing[6],
    justifyContent: 'flex-start',
  },
  promoHeadlineMint: {
    color: semantic.primaryDarker,
  },
  promoHeadlineDark: {
    color: semantic.primaryDarker,
  },
  promoOnBrand: {
    color: semantic.brandContent,
  },
  learningCarousel: {
    gap: spacing[4],
    paddingRight: spacing[6],
  },
  productCarousel: {
    gap: spacing[4],
    paddingRight: spacing[6],
  },
  bottomDock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    gap: spacing[2],
    pointerEvents: 'box-none',
  },
  fab: {
    alignSelf: 'flex-end',
    marginRight: spacing[6],
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: semantic.contrastBg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: color.black,
    shadowOffset: { width: 0, height: shadow.md.offsetY },
    shadowOpacity: 0.15,
    shadowRadius: shadow.md.blurRadius,
    elevation: 6,
  },
});
