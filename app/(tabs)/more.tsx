import {
  Button,
  Carousel,
  CreditCard,
  Divider,
  GlobalHeader,
  IconButton,
  ImageGallery,
  MenuItem,
  Sheet,
  Shortcut,
  StackedCards,
  Text,
  Toast,
} from '@herbalifedev/leaf-mobile';
import { semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PageSection } from '@/components/page-section';
import { showPressToast } from '@/utils/show-press-toast';

export default function MoreExampleScreen() {
  const router = useRouter();
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState('gallery-1');

  const galleryItems = [
    { id: 'gallery-1', source: 'https://picsum.photos/400/300?1', thumbnailSource: 'https://picsum.photos/120/90?1' },
    { id: 'gallery-2', source: 'https://picsum.photos/400/300?2', thumbnailSource: 'https://picsum.photos/120/90?2' },
  ] as const;

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
                  More components
                </Text>
              </View>
            </View>
          }
          actions={[]}
        />
      </SafeAreaView>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        removeClippedSubviews={false}>
        <Divider />
        <PageSection>
          <Carousel>
            <Shortcut title="A" iconName="home" onPress={() => showPressToast()} />
            <Shortcut title="B" iconName="menu" onPress={() => showPressToast()} />
          </Carousel>
        </PageSection>
        <StackedCards
          cards={[
            { id: 1, background: 'brand', label: 'Card 1', ctaLabel: 'Open' },
            { id: 2, background: 'primaryLighter', label: 'Card 2' },
          ]}
          onCardPress={() => showPressToast()}
          onCtaPress={() => showPressToast()}
        />
        <View style={styles.inlineRow}>
          <CreditCard type="empty" />
          <CreditCard type="flag" badgeType="logotype" badgeFlag="visa" />
        </View>
        <ImageGallery
          items={[...galleryItems]}
          selectedItem={selectedGalleryItem}
          onSelectItem={(item) => setSelectedGalleryItem(item.id)}
          showActions
          actionTagLabel="Open"
          onActionPress={() => showPressToast()}
        />
        <MenuItem
          label="Menu item"
          description="Demo"
          iconName="menu"
          hasChildren
          onPress={() => showPressToast()}
        />
        <Button label="Open sheet" onClick={() => setIsSheetVisible(true)} />
      </ScrollView>

      <Sheet visible={isSheetVisible} onClose={() => setIsSheetVisible(false)} showHandle overlay snapPoints={[0.5, 0.85]}>
        <View style={styles.panel}>
          <Text type="heading" size="small">
            Sheet
          </Text>
          <Button label="Close" onClick={() => setIsSheetVisible(false)} />
        </View>
      </Sheet>

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
  panel: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    gap: spacing[2],
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
