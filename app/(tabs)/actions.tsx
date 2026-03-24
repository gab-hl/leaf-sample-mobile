import {
  Button,
  Divider,
  Drawer,
  FloatButton,
  GlobalHeader,
  IconButton,
  MiniButton,
  OutlinedButton,
  Tag,
  Text,
  Toast,
} from '@herbalifedev/leaf-mobile';
import { semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LeafResourcesSidebar } from '@/components/leaf-resources-sidebar';
import { showPressToast } from '@/utils/show-press-toast';

export default function ActionsExampleScreen() {
  const router = useRouter();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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
                  Interactive & actions
                </Text>
              </View>
            </View>
          }
          actions={[]}
        />
      </SafeAreaView>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Divider />
        <Button label="Open Drawer" onClick={() => setIsDrawerVisible(true)} />
        <Button label="Open Leaf resources" severity="onBrand" onClick={() => setIsSidebarVisible(true)} />
        <Button label="Toast test" severity="onContrast" onClick={() => showPressToast()} />
        <Divider />
        <View style={styles.inlineRow}>
          <OutlinedButton label="Outlined" onClick={() => showPressToast()} />
          <IconButton iconName="menu" onClick={() => showPressToast()} />
        </View>
        <View style={styles.inlineRow}>
          <MiniButton label="Mini" iconName="home" onClick={() => showPressToast()} />
          <Tag label="Tag" severity="info" />
        </View>
        <FloatButton
          actions={[{ iconName: 'menu', onClick: () => showPressToast() }]}
        />
      </ScrollView>

      <Drawer
        visible={isDrawerVisible}
        onClose={() => setIsDrawerVisible(false)}
        title="Drawer"
        actions={[
          {
            label: 'Confirm',
            onClick: () => {
              setIsDrawerVisible(false);
              Alert.alert('Drawer', 'Confirmed');
            },
          },
          { label: 'Cancel', onClick: () => setIsDrawerVisible(false) },
        ]}>
        <View style={styles.panel}>
          <Text type="body" size="medium">
            Drawer content
          </Text>
        </View>
      </Drawer>

      <LeafResourcesSidebar visible={isSidebarVisible} onClose={() => setIsSidebarVisible(false)} />

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
