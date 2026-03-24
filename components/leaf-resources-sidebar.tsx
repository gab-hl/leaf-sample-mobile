import { Divider, Menu, SideBar, Text } from '@herbalifedev/leaf-mobile';
import { semantic, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { Href, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LEAF_COMPONENT_CATEGORIES } from '@/constants/leaf-component-categories';

type NavItem = {
  id: string;
  label: string;
  description: string;
  iconName: 'home' | 'menu' | 'person';
  href: Href;
};

const COMPONENT_LINKS: NavItem[] = LEAF_COMPONENT_CATEGORIES.map((c) => ({
  id: c.id,
  label: c.title,
  description: c.description,
  href: c.href,
  iconName: c.iconName,
}));

const PAGE_LINKS: NavItem[] = [
  {
    id: 'assessment',
    label: 'Assessment',
    description: 'Multi-step assessment flow',
    href: '/examples/assessment' as Href,
    iconName: 'person',
  },
  {
    id: 'checkout',
    label: 'Checkout',
    description: 'Commerce checkout composition',
    href: '/examples/checkout' as Href,
    iconName: 'home',
  },
  {
    id: 'search-results',
    label: 'Search results',
    description: 'Results with carousels',
    href: '/examples/search-results' as Href,
    iconName: 'menu',
  },
  {
    id: 'commerce-home',
    label: 'Commerce home',
    description: 'Hero rails and tabs',
    href: '/examples/commerce-home' as Href,
    iconName: 'home',
  },
];

const OTHER_LINKS: NavItem[] = [
  { id: 'modal', label: 'Modal', description: 'Router modal presentation', href: '/modal' as Href, iconName: 'menu' },
  { id: 'home', label: 'Home', description: 'Leaf sample landing', href: '/(tabs)/home' as Href, iconName: 'home' },
];

function toMenuList(items: NavItem[], navigate: (href: Href) => void) {
  return items.map((item) => ({
    id: item.id,
    label: item.label,
    description: item.description,
    iconName: item.iconName,
    hasChildren: false as const,
    onPress: () => navigate(item.href),
  }));
}

export type LeafResourcesSidebarProps = {
  visible: boolean;
  onClose: () => void;
};

/** Side navigation: Leaf design-system demos and sample screens (Menu inside SideBar). */
export function LeafResourcesSidebar({ visible, onClose }: LeafResourcesSidebarProps) {
  const router = useRouter();

  const navigate = (href: Href) => {
    onClose();
    router.push(href);
  };

  const componentMenu = toMenuList(COMPONENT_LINKS, navigate);
  const pageMenu = toMenuList(PAGE_LINKS, navigate);
  const otherMenu = toMenuList(OTHER_LINKS, navigate);

  return (
    <SideBar visible={visible} onClose={onClose}>
      <SideBar.Header
        content="text"
        title="Leaf resources"
        onClosePress={onClose}
      />
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeContent}>
        <View style={styles.stack}>
          <View style={styles.section}>
            <Text type="heading" size="xSmall" style={styles.sectionLabel}>
              Components
            </Text>
            <Menu list={componentMenu} style={styles.menu} />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.section}>
            <Text type="heading" size="xSmall" style={styles.sectionLabel}>
              Page examples
            </Text>
            <Menu list={pageMenu} style={styles.menu} />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.section}>
            <Text type="heading" size="xSmall" style={styles.sectionLabel}>
              Other
            </Text>
            <Menu list={otherMenu} style={styles.menu} />
          </View>
        </View>
      </SafeAreaView>
    </SideBar>
  );
}

const styles = StyleSheet.create({
  safeContent: {
    flexGrow: 1,
    paddingTop: spacing[5],
  },
  stack: {
    gap: spacing[8],
  },
  section: {
    gap: spacing[5],
  },
  sectionLabel: {
    color: semantic.textColor,
    paddingHorizontal: spacing[1],
  },
  menu: {
    gap: spacing[3],
  },
  divider: {
    marginVertical: spacing[2],
  },
});
