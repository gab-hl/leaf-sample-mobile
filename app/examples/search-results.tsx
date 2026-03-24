import { Carousel, Clickable, GlobalHeader, IconButton, MediaTile, ProductTile, Text, Toast } from '@herbalifedev/leaf-mobile';
import { semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PageSection, PageSectionInset, carouselSectionContentStyle } from '@/components/page-section';
import { showPressToast } from '@/utils/show-press-toast';

function SectionHeader({
  title,
  count,
  onViewAll,
}: {
  title: string;
  count: number;
  onViewAll: () => void;
}) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionTitles}>
        <Text type="heading" size="small">
          {title}
        </Text>
        <Text type="body" size="small" style={{ color: semantic.paragraphColor }}>
          {count} results
        </Text>
      </View>
      <Clickable onPress={onViewAll}>
        <Text type="body" size="medium" style={{ color: semantic.primaryColor }}>
          View all
        </Text>
      </Clickable>
    </View>
  );
}

export default function SearchResultsExampleScreen() {
  const [productQty, setProductQty] = useState(0);

  const headerActions = [
    { iconName: 'search' as const, onPress: () => showPressToast() },
    { iconName: 'favorite' as const, onPress: () => showPressToast() },
    { iconName: 'menu' as const, onPress: () => showPressToast() },
  ];

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.headerSafe}>
        <GlobalHeader contentLeft="brand" actions={headerActions} />
      </SafeAreaView>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        removeClippedSubviews={false}>
        <PageSection>
          <PageSectionInset>
            <View style={styles.titleRow}>
              <View style={styles.titleBlock}>
                <Text type="body" size="small" style={{ color: semantic.paragraphColor }}>
                  Search results for
                </Text>
                <Text type="heading" size="large">
                  Weight Loss
                </Text>
              </View>
              <IconButton iconName="menu" size="medium" severity="secondary" onClick={() => showPressToast()} />
            </View>
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset style={styles.firstSectionHeader}>
            <SectionHeader title="Products" count={5} onViewAll={() => showPressToast()} />
          </PageSectionInset>
          <Carousel contentContainerStyle={carouselSectionContentStyle()}>
            <ProductTile
            title="Formula 1 Healthy Meal Nutritional Shake"
            subtitle="Subtitle"
            imageSource="https://picsum.photos/seed/p1/200/200"
            tagLabel="Category"
            currencyPrefix="$"
            currencyValue={19.88}
            quantity={productQty}
            onQuantityChange={setProductQty}
            />
            <ProductTile
              title="Herbal Tea Concentrate"
              subtitle="Subtitle"
              imageSource="https://picsum.photos/seed/p2/200/200"
              tagLabel="Category"
              currencyPrefix="$"
              currencyValue={24.5}
            />
            <ProductTile
              title="Protein Drink Mix"
              subtitle="Subtitle"
              imageSource="https://picsum.photos/seed/p3/200/200"
              tagLabel="Category"
              currencyPrefix="$"
              currencyValue={32.0}
            />
          </Carousel>
        </PageSection>

        <PageSection>
          <PageSectionInset style={styles.sectionFollow}>
            <SectionHeader title="Events" count={3} onViewAll={() => showPressToast()} />
          </PageSectionInset>
          <Carousel contentContainerStyle={carouselSectionContentStyle()}>
            <MediaTile
              imageSource="https://picsum.photos/seed/e1/300/200"
              title="User Experience Design Workshop"
              description="8 modules"
              onPress={() => showPressToast()}
            />
            <MediaTile
              imageSource="https://picsum.photos/seed/e2/300/200"
              title="Nutrition Essentials"
              description="5 modules"
              onPress={() => showPressToast()}
            />
          </Carousel>
        </PageSection>

        <PageSection>
          <PageSectionInset style={styles.sectionFollow}>
            <SectionHeader title="Learning" count={4} onViewAll={() => showPressToast()} />
          </PageSectionInset>
          <Carousel contentContainerStyle={carouselSectionContentStyle()}>
            <MediaTile
              imageSource="https://picsum.photos/seed/l1/300/200"
              title="Prototyping Techniques"
              description="8 modules"
              onPress={() => showPressToast()}
            />
            <MediaTile
              imageSource="https://picsum.photos/seed/l2/300/200"
              title="Healthy Living Basics"
              description="6 modules"
              onPress={() => showPressToast()}
            />
          </Carousel>
        </PageSection>
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
    paddingTop: spacing[4],
    paddingBottom: spacing[24],
    gap: spacing[4],
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacing[2],
  },
  titleBlock: {
    flex: 1,
    gap: spacing[1],
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  firstSectionHeader: {
    paddingTop: spacing[2],
  },
  sectionFollow: {
    paddingTop: spacing[2],
  },
  sectionTitles: {
    gap: spacing[1],
  },
});
