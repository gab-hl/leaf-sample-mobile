import {
  Accordion,
  Avatar,
  Brand,
  BrandLoader,
  Button,
  Carousel,
  ChipSelectGroup,
  Clickable,
  CreditCard,
  Currency,
  Drawer,
  DropdownPicker,
  Flag,
  FloatButton,
  FloatTabBar,
  GlobalHeader,
  HeaderFlow,
  IconButton,
  Image,
  ImageGallery,
  InputCheckbox,
  InputPassword,
  InputText,
  ListContent,
  ListNavigation,
  ListSelect,
  LoaderDots,
  MediaTile,
  Menu,
  MenuItem,
  MiniButton,
  OutlinedButton,
  PageLoader,
  ProductTile,
  ProgressBar,
  QuantitySelector,
  RadioButton,
  SelectList,
  Sheet,
  Shortcut,
  Skeleton,
  StackedCards,
  StartFlowButton,
  StatusIndicator,
  TabBar,
  Tag,
  Text,
  Toast,
  ToggleSwitch,
  Topic,
} from '@herbalifedev/leaf-mobile';
import { IconMobile } from '@herbalifedev/leaf-mobile/assets';
import { radius, semantic, size, spacing, typography } from '@herbalifedev/leaf-mobile/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { LeafResourcesSidebar } from '@/components/leaf-resources-sidebar';
import {
  PageSection,
  PageSectionInset,
  carouselSectionContentStyle,
} from '@/components/page-section';
import { showPressToast } from '@/utils/show-press-toast';

const LEAF_COMPONENT_NAMES = [
  'Accordion',
  'Avatar',
  'Brand',
  'Button',
  'ProgressBar',
  'Flag',
  'Skeleton',
  'Clickable',
  'Currency',
  'Carousel',
  'Drawer',
  'Divider',
  'ListContent',
  'ListNavigation',
  'MenuItem',
  'MediaTile',
  'ProductTile',
  'LoaderDots',
  'BrandLoader',
  'PageLoader',
  'StackedCards',
  'MiniButton',
  'StartFlowButton',
  'OutlinedButton',
  'FloatButton',
  'FloatTabBar',
  'IconButton',
  'Tag',
  'Image',
  'Text',
  'RadioButton',
  'StatusIndicator',
  'InputCheckbox',
  'InputText',
  'InputPassword',
  'CreditCard',
  'ListSelect',
  'Shortcut',
  'QuantitySelector',
  'ToggleSwitch',
  'Topic',
  'ChipSelectGroup',
  'SelectList',
  'DropdownPicker',
  'HeaderFlow',
  'Sheet',
  'TabBar',
  'ImageGallery',
  'GlobalHeader',
  'SideBar',
  'Toast',
  'Menu',
  'LeafProvider',
  'BottomSheetProvider',
] as const;

const LIVE_DEMO_COMPONENTS: ReadonlySet<string> = new Set([
  'Button',
  'Divider',
  'Drawer',
  'FloatTabBar',
  'SideBar',
  'InputText',
  'InputPassword',
  'InputCheckbox',
  'ToggleSwitch',
  'RadioButton',
  'QuantitySelector',
  'Tag',
  'StatusIndicator',
  'Accordion',
  'Avatar',
  'Brand',
  'Clickable',
  'Currency',
  'Flag',
  'GlobalHeader',
  'HeaderFlow',
  'Image',
  'ListContent',
  'ListNavigation',
  'ProductTile',
  'ProgressBar',
  'PageLoader',
  'Shortcut',
  'Skeleton',
  'StartFlowButton',
  'TabBar',
  'Topic',
  'LoaderDots',
  'BrandLoader',
  'MediaTile',
  'ChipSelectGroup',
  'ListSelect',
  'SelectList',
  'DropdownPicker',
  'Menu',
  'Carousel',
  'StackedCards',
  'CreditCard',
  'Sheet',
  'ImageGallery',
  'MenuItem',
  'LeafProvider',
  'BottomSheetProvider',
  'OutlinedButton',
  'IconButton',
  'MiniButton',
  'FloatButton',
  'Text',
  'Toast',
] as const);

export default function PlaygroundScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [name, setName] = useState('Jane Doe');
  const [password, setPassword] = useState('sample123');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic');
  const [quantity, setQuantity] = useState(1);
  const [selectedListItem, setSelectedListItem] = useState(false);
  const [selectedOption, setSelectedOption] = useState('us');
  const [selectSearch, setSelectSearch] = useState('');
  const [chipValue, setChipValue] = useState('all');
  const [tabSelected, setTabSelected] = useState<1 | 2 | 3>(1);
  const [tabSelectedBottom, setTabSelectedBottom] = useState<1 | 2 | 3>(1);
  const [productQty, setProductQty] = useState(1);
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState('gallery-1');

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
      description: 'Track and manage your orders',
      iconName: 'menu' as const,
      onPress: () => showPressToast(),
    },
    {
      id: 'profile',
      label: 'Profile',
      description: 'Update account settings',
      iconName: 'person' as const,
      onPress: () => showPressToast(),
    },
  ] as const;

  const galleryItems = [
    { id: 'gallery-1', source: 'https://picsum.photos/400/300?1', thumbnailSource: 'https://picsum.photos/120/90?1' },
    { id: 'gallery-2', source: 'https://picsum.photos/400/300?2', thumbnailSource: 'https://picsum.photos/120/90?2' },
    { id: 'gallery-3', source: 'https://picsum.photos/400/300?3', thumbnailSource: 'https://picsum.photos/120/90?3' },
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
                  Component playground
                </Text>
              </View>
            </View>
          }
          actions={[]}
        />
      </SafeAreaView>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: spacing[28] + insets.bottom },
        ]}
        removeClippedSubviews={false}>
        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
            <Text
              type="heading"
              size="large"
              style={[
                styles.pageLead,
                {
                  fontSize: typography.text['2xl'].size,
                  lineHeight:
                    typography.text['2xl'].size * typography.text['2xl'].lineHeight,
                  color: semantic.headingColor,
                },
              ]}>
              Playground
            </Text>
            <Text type="body" size="medium" style={styles.lead}>
              Full catalog and live demos for every Leaf export. Use Home to browse by category.
            </Text>
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <Text type="heading" size="xSmall" style={styles.sectionTitle}>
            Interactive Components
          </Text>
          <Button label="Open Drawer" onClick={() => setIsDrawerVisible(true)} />
          <Button label="Open Leaf resources" severity="onBrand" onClick={() => setIsSidebarVisible(true)} />
          <Button
            label="Show Toast"
            severity="onContrast"
            onClick={() => showPressToast()}
          />
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <Text type="heading" size="xSmall" style={styles.sectionTitle}>
            Forms and Selection Demos
          </Text>
          <InputText
            label="Full name"
            content={name}
            onChange={(value) => setName(typeof value === 'string' ? value : name)}
            placeholder="Enter your name"
          />
          <InputPassword
            label="Password"
            content={password}
            onChange={(value) => setPassword(typeof value === 'string' ? value : password)}
            placeholder="Enter your password"
          />
          <InputCheckbox
            label="Accept terms"
            description="Required to proceed"
            selected={acceptTerms}
            onChange={setAcceptTerms}
          />
          <ToggleSwitch
            label="Marketing notifications"
            description="Email updates"
            selected={marketingOptIn}
            onPress={setMarketingOptIn}
          />
          <RadioButton
            label="Basic plan"
            description="Lower cost tier"
            selected={selectedPlan === 'basic'}
            onChange={() => setSelectedPlan('basic')}
          />
          <RadioButton
            label="Premium plan"
            description="Full features"
            selected={selectedPlan === 'premium'}
            onChange={() => setSelectedPlan('premium')}
          />
          <View style={styles.inlineRow}>
            <Text type="body" size="small">
              Quantity
            </Text>
            <QuantitySelector
              value={quantity}
              onIncrement={() => setQuantity((prev) => prev + 1)}
              onDecrement={() => setQuantity((prev) => Math.max(0, prev - 1))}
              remove={quantity <= 1}
            />
          </View>
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <Text type="heading" size="xSmall" style={styles.sectionTitle}>
            Actions and Status Demos
          </Text>
          <View style={styles.inlineRow}>
            <OutlinedButton label="Outlined Action" onClick={() => showPressToast()} />
            <IconButton
              iconName="menu"
              onClick={() => showPressToast()}
            />
          </View>
          <View style={styles.inlineRow}>
            <MiniButton label="Mini action" iconName="home" onClick={() => showPressToast()} />
            <Tag label={selectedPlan === 'premium' ? 'Premium' : 'Basic'} severity="info" />
            <StatusIndicator severity={acceptTerms ? 'Positive' : 'Info'} label={acceptTerms ? 'Ready' : 'Waiting'} />
          </View>
          <FloatButton
            actions={[
              {
                iconName: 'menu',
                onClick: () => showPressToast(),
              },
            ]}
          />
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <Text type="heading" size="xSmall" style={styles.sectionTitle}>
            Visual and Content Demos
          </Text>
          <View style={styles.inlineRow}>
            <Avatar name="Jane Doe" type="shortname" size="medium" />
            <Brand brand="herbalife" type="extended" size="small" />
            <Skeleton width={80} height={16} />
            <LoaderDots />
            <BrandLoader />
          </View>

          <ProgressBar progress={72} label="Profile completion" description="Almost done" caption="72%" />
          <Flag
            severity="info"
            title="Heads up"
            message="This screen is a live component testing playground."
            showAction
            actionLabel="Toast"
            onActionPress={() => showPressToast()}
          />

          <Currency prefix="$" value={129.99} saleValue={149.99} tag="Promo" showTag />
          <Clickable onPress={() => showPressToast()}>
            <Text type="body" size="small">
              Clickable wrapper demo
            </Text>
          </Clickable>
          <Image src="https://picsum.photos/320/180" aspectRatio="landscape" rounded />
          <MediaTile
            imageSource="https://picsum.photos/300/200"
            title="Media Tile"
            description="Simple media card demo"
            onPress={() => showPressToast()}
          />
          <ProductTile
            title="Formula 1"
            subtitle="Nutritional shake mix"
            imageSource="https://picsum.photos/200/200"
            currencyPrefix="$"
            currencyValue={39.99}
            quantity={productQty}
            showActionButtons
            onQuantityChange={setProductQty}
          />
          <Shortcut title="Quick action" iconName="menu" onPress={() => showPressToast()} />
          <Topic
            title="Leaf topic"
            description="Topic component demo with icon"
            featuredIcon
            iconName="person"
          />
          <StartFlowButton label="Start flow" onClick={() => showPressToast()} />
          <PageLoader />
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <Text type="heading" size="xSmall" style={styles.sectionTitle}>
            Layout and Navigation Blocks
          </Text>
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
            <ListContent.Content title="List Content Title" description="List Content description" />
            <ListContent.Right actionLabel="Action" onActionPress={() => showPressToast()} />
          </ListContent>
          <ListNavigation
            title="List navigation item"
            description="Tap to execute action"
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
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <Text type="heading" size="xSmall" style={styles.sectionTitle}>
            Lists and Navigation Demos
          </Text>
          <Accordion title="Accordion Example">
            <Text type="body" size="small">
              This content is rendered inside a Leaf Accordion item.
            </Text>
          </Accordion>

          <ListSelect
            label="Select account"
            description="Enable this option"
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
            placeholder="Search country"
            closeOnSelect
          />

          <DropdownPicker
            title="Country"
            placeholder="Choose one option"
            options={listOptions}
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
            searchValue={selectSearch}
            onSearchChange={setSelectSearch}
            closeOnSelect
            triggerIconName="menu"
          />

          <Menu list={menuItems} titleNavigation="Menu Demo" />
          <FloatTabBar
            selected={tabSelectedBottom}
            actions={[
              { icon: <IconMobile name="home" size="small" />, onPress: () => setTabSelectedBottom(1) },
              {
                icon: <IconMobile name="menu" size="small" />,
                onPress: () => setTabSelectedBottom(2),
              },
              { icon: <IconMobile name="person" size="small" />, onPress: () => setTabSelectedBottom(3) },
            ]}
          />
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
            <Text type="heading" size="xSmall" style={styles.sectionTitle}>
              Remaining Package Demos
            </Text>
          </PageSectionInset>
          <Carousel
            contentContainerStyle={[
              carouselSectionContentStyle('comfortable'),
              styles.playgroundCarousel,
            ]}>
            <Shortcut
              title="Carousel shortcut A"
              iconName="home"
              onPress={() => showPressToast()}
            />
            <Shortcut
              title="Carousel shortcut B"
              iconName="menu"
              onPress={() => showPressToast()}
            />
            <Shortcut
              title="Carousel shortcut C"
              iconName="person"
              onPress={() => showPressToast()}
            />
          </Carousel>

          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <StackedCards
            cards={[
              { id: 1, background: 'brand', label: 'Card 1', description: 'Stacked cards demo', ctaLabel: 'Open' },
              { id: 2, background: 'primaryLighter', label: 'Card 2', description: 'Second layer' },
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
            label="Menu item demo"
            description="Standalone item"
            iconName="menu"
            hasChildren
            onPress={() => showPressToast()}
          />

          <Button label="Open Sheet" onClick={() => setIsSheetVisible(true)} />
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <Text type="heading" size="xSmall" style={styles.sectionTitle}>
            Full Exported Component Catalog ({LEAF_COMPONENT_NAMES.length})
          </Text>
          <View style={styles.catalog}>
            {LEAF_COMPONENT_NAMES.map((componentName) => (
              <View key={componentName} style={styles.catalogItem}>
                <Text type="body" size="small">{componentName}</Text>
                <Text type="body" size="small">
                  {LIVE_DEMO_COMPONENTS.has(componentName) ? 'Live demo' : 'Pending props mapping'}
                </Text>
              </View>
            ))}
          </View>
          </PageSectionInset>
        </PageSection>

        <PageSection>
          <PageSectionInset gutter="comfortable" style={styles.insetStack}>
          <Text type="heading" size="xSmall" style={styles.sectionTitle}>
            Debug Checklist
          </Text>
          <Text type="body" size="small" style={styles.leadMuted}>
            1) Add component to this catalog. 2) Create minimal stable props. 3) Validate on web + native. 4) If
            unstable, keep as Pending until props are mapped.
          </Text>
          </PageSectionInset>
        </PageSection>
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
          {
            label: 'Cancel',
            onClick: () => setIsDrawerVisible(false),
          },
        ]}>
        <View style={styles.panelBody}>
          <Text type="body" size="medium">
            This is Leaf Drawer content.
          </Text>
        </View>
      </Drawer>

      <LeafResourcesSidebar visible={isSidebarVisible} onClose={() => setIsSidebarVisible(false)} />

      <Sheet visible={isSheetVisible} onClose={() => setIsSheetVisible(false)} showHandle overlay snapPoints={[0.5, 0.85]}>
        <View style={styles.panelBody}>
          <Text type="heading" size="small">
            Sheet Demo
          </Text>
          <Text type="body" size="small">
            Bottom sheet from Leaf package.
          </Text>
          <Button label="Close Sheet" onClick={() => setIsSheetVisible(false)} />
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
  scrollContent: {
    paddingTop: spacing[6],
    gap: spacing[10],
  },
  pageLead: {
    fontFamily: semantic.fontDisplay,
    fontWeight: typography.fontWeight.medium,
  },
  sectionTitle: {
    color: semantic.textColor,
  },
  lead: {
    color: semantic.textColor,
  },
  leadMuted: {
    color: semantic.descriptionColor,
  },
  insetStack: {
    gap: spacing[4],
  },
  playgroundCarousel: {
    gap: spacing[4],
    paddingRight: spacing[6],
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    flexWrap: 'wrap',
  },
  panelBody: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
  },
  catalog: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  catalogItem: {
    minWidth: size[44],
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: semantic.borderMuted,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    gap: spacing[1],
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
