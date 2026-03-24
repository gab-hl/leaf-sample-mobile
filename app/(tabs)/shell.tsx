import {
  ChipSelectGroup,
  Divider,
  GlobalHeader,
  HeaderFlow,
  IconButton,
  ListContent,
  ListNavigation,
  TabBar,
  Text,
  Toast,
} from '@herbalifedev/leaf-mobile';
import { IconMobile } from '@herbalifedev/leaf-mobile/assets';
import { semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { showPressToast } from '@/utils/show-press-toast';

export default function ShellExampleScreen() {
  const router = useRouter();
  const [chipValue, setChipValue] = useState('all');
  const [tabSelected, setTabSelected] = useState<1 | 2 | 3>(1);

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
                  Navigation
                </Text>
              </View>
            </View>
          }
          actions={[]}
        />
      </SafeAreaView>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Divider />
        <GlobalHeader
          contentLeft="brand"
          actions={[{ iconName: 'menu', onPress: () => showPressToast() }]}
        />
        <HeaderFlow
          text="Checkout"
          showProgressBar
          progress={40}
          onClosePress={() => showPressToast()}
        />
        <ChipSelectGroup
          type="radio"
          options={[
            { id: 'all', label: 'All', value: 'all' },
            { id: 'fav', label: 'Favorites', value: 'fav' },
          ]}
          value={chipValue}
          onValueChange={setChipValue}
        />
        <ListContent>
          <ListContent.Left iconName="person" />
          <ListContent.Content title="Title" description="Description" />
          <ListContent.Right actionLabel="Action" onActionPress={() => showPressToast()} />
        </ListContent>
        <ListNavigation
          title="List item"
          description="Tap"
          iconName="menu"
          onClick={() => showPressToast()}
        />
        <TabBar
          selected={tabSelected}
          actions={[
            { icon: <IconMobile name="home" size="small" />, onPress: () => setTabSelected(1) },
            { icon: <IconMobile name="menu" size="small" />, onPress: () => setTabSelected(2) },
            { icon: <IconMobile name="person" size="small" />, onPress: () => setTabSelected(3) },
          ]}
        />
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
