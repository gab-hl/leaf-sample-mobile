import { spacing } from '@herbalifedev/leaf-mobile/tokens';
import { StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';

/** Horizontal inset for page copy and section titles (matches common screen padding). */
export const PAGE_GUTTER = spacing[4];

/** Wider inset (e.g. commerce-style screens). */
export const PAGE_GUTTER_WIDE = spacing[6];

/** Space between a section title/header row and the carousel (or horizontal list) below it. */
export const SECTION_HEADER_TO_CAROUSEL_GAP = spacing[4];

const baseSection: ViewStyle = {
  width: '100%',
  overflow: 'visible',
  gap: SECTION_HEADER_TO_CAROUSEL_GAP,
};

const styles = StyleSheet.create({
  section: baseSection,
});

export type PageSectionGutter = 'compact' | 'comfortable';

function horizontalInset(gutter: PageSectionGutter) {
  return gutter === 'comfortable' ? PAGE_GUTTER_WIDE : PAGE_GUTTER;
}

/** Full-width section wrapper — use so nested horizontal carousels are not clipped by the parent. */
export function PageSection({ style, ...rest }: ViewProps) {
  return <View style={[styles.section, style]} {...rest} />;
}

/** Padded block inside a section (headings, paragraphs, toolbars). */
export function PageSectionInset({
  style,
  gutter = 'compact',
  ...rest
}: ViewProps & { gutter?: PageSectionGutter }) {
  return <View style={[{ paddingHorizontal: horizontalInset(gutter) }, style]} {...rest} />;
}

/**
 * Merge with Leaf `Carousel`’s `contentContainerStyle` so the first tile lines up with `PageSectionInset`
 * and the last tile has trailing scroll room (Leaf defaults omit left padding).
 */
export function carouselSectionContentStyle(
  gutter: PageSectionGutter = 'compact',
  extra?: ViewStyle,
): ViewStyle {
  return {
    paddingLeft: horizontalInset(gutter),
    paddingRight: spacing[6],
    paddingBottom: spacing[2],
    ...extra,
  };
}
