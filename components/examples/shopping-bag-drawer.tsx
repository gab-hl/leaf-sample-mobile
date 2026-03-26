import {
  Carousel,
  Drawer,
  ListNavigation,
  MediaTile,
  ProductTile,
  Text,
} from '@herbalifedev/leaf-mobile';
import { IconMobile } from '@herbalifedev/leaf-mobile/assets';
import { radius, semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { PageSection, carouselSectionContentStyle } from '@/components/page-section';
import { showPressToast } from '@/utils/show-press-toast';

export type ShoppingBagDrawerView = 'empty' | 'search';

type ShoppingBagDrawerProps = {
  visible: boolean;
  view: ShoppingBagDrawerView;
  onClose: () => void;
  onViewChange: (next: ShoppingBagDrawerView) => void;
};

export function ShoppingBagDrawer({ visible, view, onClose, onViewChange }: ShoppingBagDrawerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const title = view === 'empty' ? 'Shopping bag' : 'Search';

  return (
    <Drawer
      visible={visible}
      onClose={onClose}
      title={title}
      snapPoints={view === 'search' ? [0.92] : [0.72]}
      initialSnapPoint={0}>
      {view === 'empty' ? (
        <View style={styles.emptyWrap}>
          <View style={styles.emptyInner}>
            <View style={styles.iconBadge}>
              <IconMobile name="local_mall" size="large" color={semantic.textColor} />
            </View>
            <View style={styles.emptyTextBlock}>
              <Text type="heading" size="medium" style={styles.emptyTitle}>
                Your bag is empty
              </Text>
              <Text type="body" size="large" style={styles.emptySubtitle}>
                But full of possibilities!
              </Text>
            </View>
          </View>
          <ListNavigation
            title="Find What You Need"
            iconName="search"
            onClick={() => onViewChange('search')}
            style={styles.findNav}
          />
        </View>
      ) : (
        <View style={styles.searchWrap}>
          <View style={styles.searchField}>
            <IconMobile name="search" size="small" color={semantic.paragraphColor} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search by Products, Events, Learning"
              placeholderTextColor={semantic.descriptionColor}
              style={styles.searchInput}
            />
          </View>

          <PageSection>
            <View>
              <Text type="heading" size="small">
                Recent Products
              </Text>
            </View>
            <Carousel contentContainerStyle={carouselSectionContentStyle('compact', { paddingLeft: 0 })}>
              <ProductTile
                title="Formula 1 Healthy Meal Nutritional Shake Mix"
                subtitle="5 flavors 3 sizes"
                imageSource="https://picsum.photos/seed/bag-p1/400/400"
                currencyPrefix="$"
                currencyValue={19.88}
                onQuantityChange={() => showPressToast()}
              />
              <ProductTile
                title="High Protein Iced Coffee"
                subtitle="5 flavors 3 sizes"
                imageSource="https://picsum.photos/seed/bag-p2/400/400"
                currencyPrefix="$"
                currencyValue={24.5}
                onQuantityChange={() => showPressToast()}
              />
              <ProductTile
                title="Formula 1 Express Healthy Meal Bar"
                subtitle="2 flavors"
                imageSource="https://picsum.photos/seed/bag-p3/400/400"
                currencyPrefix="$"
                currencyValue={32.0}
                onQuantityChange={() => showPressToast()}
              />
            </Carousel>
          </PageSection>

          <PageSection>
            <View>
              <Text type="heading" size="small">
                Recent Learning
              </Text>
            </View>
            <Carousel contentContainerStyle={carouselSectionContentStyle('compact', { paddingLeft: 0 })}>
              <MediaTile
                imageSource="https://picsum.photos/seed/bag-l1/400/400"
                title="Distributor Training"
                description="4 Modules"
                onPress={() => showPressToast()}
              />
              <MediaTile
                imageSource="https://picsum.photos/seed/bag-l2/400/400"
                title="Mastering Product Offers"
                description="4 Modules"
                onPress={() => showPressToast()}
              />
              <MediaTile
                imageSource="https://picsum.photos/seed/bag-l3/400/400"
                title="Advanced Sales Training Product Offers"
                description="4 Modules"
                onPress={() => showPressToast()}
              />
            </Carousel>
          </PageSection>
        </View>
      )}
    </Drawer>
  );
}

const styles = StyleSheet.create({
  emptyWrap: {
    gap: spacing[10],
    alignItems: 'center',
    paddingTop: spacing[3],
  },
  emptyInner: {
    alignItems: 'center',
    gap: spacing[6],
    paddingHorizontal: spacing[10],
    width: '100%',
  },
  iconBadge: {
    padding: spacing[3],
    borderRadius: radius.xl,
    backgroundColor: semantic.bg2,
  },
  emptyTextBlock: {
    gap: spacing[2],
    width: '100%',
    alignItems: 'center',
  },
  emptyTitle: {
    textAlign: 'center',
  },
  emptySubtitle: {
    textAlign: 'center',
  },
  findNav: {
    borderRadius: radius.full,
    minHeight: spacing[16],
    width: '100%',
  },
  searchWrap: {
    gap: spacing[4],
    width: '100%',
    paddingBottom: spacing[8],
  },
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    minHeight: 48,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: semantic.borderMuted,
    backgroundColor: semantic.bg2,
  },
  searchInput: {
    flex: 1,
    fontFamily: semantic.fontSans,
    fontSize: 16,
    color: semantic.textColor,
    padding: 0,
  },
});

