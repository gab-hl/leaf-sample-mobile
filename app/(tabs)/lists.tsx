import {
  Accordion,
  Divider,
  DropdownPicker,
  FloatTabBar,
  GlobalHeader,
  IconButton,
  ListSelect,
  Menu,
  SelectList,
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

export default function ListsExampleScreen() {
  const router = useRouter();
  const [selectedListItem, setSelectedListItem] = useState(false);
  const [selectedOption, setSelectedOption] = useState('us');
  const [selectSearch, setSelectSearch] = useState('');
  const [tabSelectedBottom, setTabSelectedBottom] = useState<1 | 2 | 3>(1);

  const listOptions = [
    {
      label: 'Countries',
      value: [
        { label: 'United States', value: 'us', iconName: 'person' as const },
        { label: 'Brazil', value: 'br', iconName: 'person' as const },
        { label: 'Mexico', value: 'mx', iconName: 'person' as const },
      ],
    },
  ];

  const menuItems = [
    {
      id: 'orders',
      label: 'Orders',
      description: 'Track orders',
      iconName: 'menu' as const,
      onPress: () => showPressToast(),
    },
    {
      id: 'profile',
      label: 'Profile',
      description: 'Settings',
      iconName: 'person' as const,
      onPress: () => showPressToast(),
    },
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
                  Lists & menus
                </Text>
              </View>
            </View>
          }
          actions={[]}
        />
      </SafeAreaView>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Divider />
        <Accordion title="Accordion">
          <Text type="body" size="small">
            Accordion body
          </Text>
        </Accordion>
        <ListSelect
          label="Select account"
          description="Option"
          inputType="checkbox"
          selected={selectedListItem}
          onChange={setSelectedListItem}
          content="icon"
          iconName="person"
        />
        <SelectList
          options={listOptions}
          selectedValue={selectedOption}
          onSelect={setSelectedOption}
          searchValue={selectSearch}
          onSearchChange={setSelectSearch}
          placeholder="Search"
          closeOnSelect
        />
        <DropdownPicker
          title="Country"
          placeholder="Choose"
          options={listOptions}
          value={selectedOption}
          onValueChange={(value) => setSelectedOption(value)}
          searchValue={selectSearch}
          onSearchChange={setSelectSearch}
          closeOnSelect
          triggerIconName="menu"
        />
        <Menu list={menuItems} titleNavigation="Menu" />
        <FloatTabBar
          selected={tabSelectedBottom}
          actions={[
            { icon: <IconMobile name="home" size="small" />, onPress: () => setTabSelectedBottom(1) },
            { icon: <IconMobile name="menu" size="small" />, onPress: () => setTabSelectedBottom(2) },
            { icon: <IconMobile name="person" size="small" />, onPress: () => setTabSelectedBottom(3) },
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
