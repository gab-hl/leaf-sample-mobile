import { Carousel, GlobalHeader, Shortcut, Text, Toast } from '@herbalifedev/leaf-mobile';
import { semantic, size, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { Href, useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { LeafResourcesSidebar } from '@/components/leaf-resources-sidebar';
import { PageSection, carouselSectionContentStyle } from '@/components/page-section';
import { LEAF_COMPONENT_CATEGORIES } from '@/constants/leaf-component-categories';

/** Opaque surface for fixed header — `bg1` matches body and can read as “missing”; `bg2` reads as app chrome. */
const HEADER_SURFACE = semantic.bg1;

type HomeShortcut = {
  title: string;
  iconName: 'home' | 'menu' | 'person';
  href: Href;
};

const COMPONENT_SHORTCUTS: HomeShortcut[] = LEAF_COMPONENT_CATEGORIES.map((c) => ({
  title: c.title,
  iconName: c.iconName,
  href: c.href,
}));

const PAGE_EXAMPLE_SHORTCUTS: HomeShortcut[] = [
  { title: 'Assessment', iconName: 'person', href: '/examples/assessment' },
  { title: 'Checkout', iconName: 'home', href: '/examples/checkout' },
  { title: 'Search results', iconName: 'menu', href: '/examples/search-results' },
  { title: 'Commerce home', iconName: 'home', href: '/examples/commerce-home' },
];

function ShortcutCarousel({ items }: { items: HomeShortcut[] }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const trailPad = spacing[10] + insets.right;

  return (
    <PageSection style={styles.carouselBleed}>
      <Carousel
        style={styles.carouselScroll}
        nestedScrollEnabled
        contentContainerStyle={[
          carouselSectionContentStyle('compact'),
          styles.shortcutCarousel,
          { paddingRight: trailPad },
        ]}>
        {items.map((item) => (
          <View key={item.title} style={styles.shortcutTile}>
            <Shortcut
              title={item.title}
              iconName={item.iconName}
              onPress={() => router.push(item.href)}
            />
          </View>
        ))}
      </Carousel>
    </PageSection>
  );
}

export default function HomeScreen() {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <View style={styles.root}>
      <View style={styles.headerChrome}>
        <SafeAreaView style={styles.headerSafe} edges={['top']}>
          <GlobalHeader
            contentLeft="brand"
            style={styles.headerBar}
            actions={[
              {
                iconName: 'menu',
                onPress: () => setResourcesOpen(true),
              },
            ]}
          />
        </SafeAreaView>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        removeClippedSubviews={false}>
        <View style={styles.hero}>
          <Text type="heading" size="large">
            Leaf sample
          </Text>
          <Text type="body" size="medium">
            Browse component demos, full page compositions, and upcoming layout blueprints.
          </Text>
        </View>

        <View style={styles.section}>
          <Text type="heading" size="small">
            Components
          </Text>
          <Text type="body" size="medium">
            Browse by Leaf component category—Actions through Illustrations—with shortcuts to the closest demo
            screen.
          </Text>
          <ShortcutCarousel items={COMPONENT_SHORTCUTS} />
        </View>

        <View style={styles.section}>
          <Text type="heading" size="small">
            Page Examples
          </Text>
          <Text type="body" size="medium">
            End-to-end screens that combine tokens and components the way a real app would.
          </Text>
          <ShortcutCarousel items={PAGE_EXAMPLE_SHORTCUTS} />
        </View>

        <View style={styles.section}>
          <Text type="heading" size="small">
            Blueprints
          </Text>
          <Text type="body" size="medium">
            Reusable layout patterns—such as section headers with horizontal carousels, multi-step flows,
            and dense settings stacks—will live here as focused demos. Check back soon.
          </Text>
        </View>
      </ScrollView>
      <LeafResourcesSidebar visible={resourcesOpen} onClose={() => setResourcesOpen(false)} />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: semantic.surfaceBody,
  },
  headerChrome: {
    width: '100%',
    backgroundColor: HEADER_SURFACE,
    zIndex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: semantic.borderMuted,
  },
  headerSafe: {
    backgroundColor: HEADER_SURFACE,
    width: '100%',
  },
  headerBar: {
    backgroundColor: HEADER_SURFACE,
  },
  scroll: {
    flex: 1,
    overflow: 'visible',
  },
  content: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[6],
    paddingBottom: spacing[28],
    gap: spacing[8],
    overflow: 'visible',
  },
  hero: {
    gap: spacing[2],
  },
  section: {
    gap: spacing[4],
    overflow: 'visible',
  },
  carouselBleed: {
    marginHorizontal: -spacing[4],
    overflow: 'visible',
  },
  carouselScroll: {
    overflow: 'visible',
    flexGrow: 0,
  },
  shortcutCarousel: {
    // Must stay spacing[4]: Leaf Carousel snap interval is itemWidth + spacing[4]
    gap: spacing[4],
  },
  shortcutTile: {
    width: size[32],
    alignSelf: 'flex-start',
  },
});
