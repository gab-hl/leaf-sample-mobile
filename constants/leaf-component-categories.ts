import type { Href } from 'expo-router';

export type LeafComponentCategory = {
  id: string;
  title: string;
  description: string;
  href: Href;
  iconName: 'home' | 'menu' | 'person';
};

const PLAYGROUND_HREF = '/(tabs)/index' as Href;

/**
 * Leaf design system official component categories (order matches design system documentation).
 */
export const LEAF_COMPONENT_CATEGORIES: LeafComponentCategory[] = [
  {
    id: 'actions',
    title: 'Actions',
    description: 'Buttons, FABs, tags, and primary triggers',
    href: '/(tabs)/actions',
    iconName: 'home',
  },
  {
    id: 'overlays',
    title: 'Overlays',
    description: 'Sheets, stacked surfaces, and gallery overlays',
    href: '/(tabs)/more',
    iconName: 'menu',
  },
  {
    id: 'content',
    title: 'Content',
    description: 'Accordions, menus, and list content patterns',
    href: '/(tabs)/lists',
    iconName: 'person',
  },
  {
    id: 'inputs',
    title: 'Inputs',
    description: 'Fields, toggles, and selection controls',
    href: '/(tabs)/forms',
    iconName: 'home',
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: 'Headers, tabs, and wayfinding blocks',
    href: '/(tabs)/shell',
    iconName: 'menu',
  },
  {
    id: 'typography',
    title: 'Typography',
    description: 'Type samples in the full playground catalog',
    href: PLAYGROUND_HREF,
    iconName: 'person',
  },
  {
    id: 'feedback',
    title: 'Feedback',
    description: 'Loaders, progress, flags, and status',
    href: '/(tabs)/visual',
    iconName: 'home',
  },
  {
    id: 'media',
    title: 'Media',
    description: 'Image gallery and carousel demos in the playground',
    href: PLAYGROUND_HREF,
    iconName: 'menu',
  },
  {
    id: 'illustrations',
    title: 'Illustrations',
    description: 'Brand marks and illustration-related components in demos',
    href: '/(tabs)/visual',
    iconName: 'person',
  },
];
