import {
  Avatar,
  Brand,
  BrandLoader,
  Clickable,
  Currency,
  Divider,
  Flag,
  GlobalHeader,
  IconButton,
  Image,
  LoaderDots,
  MediaTile,
  PageLoader,
  ProductTile,
  ProgressBar,
  Shortcut,
  Skeleton,
  StartFlowButton,
  StatusIndicator,
  Text,
  Toast,
  Topic,
} from '@herbalifedev/leaf-mobile';
import { semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { showPressToast } from '@/utils/show-press-toast';

export default function VisualExampleScreen() {
  const router = useRouter();
  const [productQty, setProductQty] = useState(1);

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
                  Visual & content
                </Text>
              </View>
            </View>
          }
          actions={[]}
        />
      </SafeAreaView>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Divider />
        <View style={styles.inlineRow}>
          <Avatar name="Jane Doe" type="shortname" size="medium" />
          <Brand brand="herbalife" type="extended" size="small" />
          <Skeleton width={80} height={16} />
          <LoaderDots />
          <BrandLoader />
        </View>
        <ProgressBar progress={72} label="Progress" description="Demo" caption="72%" />
        <Flag
          severity="info"
          title="Heads up"
          message="Flag component demo."
          showAction
          actionLabel="Toast"
          onActionPress={() => showPressToast()}
        />
        <Currency prefix="$" value={129.99} saleValue={149.99} tag="Promo" showTag />
        <Clickable onPress={() => showPressToast()}>
          <Text type="body" size="small">
            Clickable
          </Text>
        </Clickable>
        <Image src="https://picsum.photos/320/180" aspectRatio="landscape" rounded />
        <MediaTile
          imageSource="https://picsum.photos/300/200"
          title="Media"
          description="Tile"
          onPress={() => showPressToast()}
        />
        <ProductTile
          title="Product"
          subtitle="Subtitle"
          imageSource="https://picsum.photos/200/200"
          currencyPrefix="$"
          currencyValue={39.99}
          quantity={productQty}
          showActionButtons
          onQuantityChange={setProductQty}
        />
        <Shortcut title="Shortcut" iconName="menu" onPress={() => showPressToast()} />
        <Topic title="Topic" description="With icon" featuredIcon iconName="person" />
        <StartFlowButton label="Start flow" onClick={() => showPressToast()} />
        <StatusIndicator severity="Positive" label="Status" />
        <PageLoader />
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
