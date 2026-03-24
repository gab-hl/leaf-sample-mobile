# Leaf Components Playbook

This project uses a **single route showcase** in `app/(tabs)/index.tsx` as the source of truth for component rendering.

## Goal

Render all Leaf exports in one screen while keeping the app stable:

- Live demo only for components with known-safe minimal props.
- Catalog entry for all other exports until props/contracts are mapped.

## How To Plot A New Component

1. Add the component name to `LEAF_COMPONENT_NAMES`.
2. If you know a stable minimal setup, add the name to `LIVE_DEMO_COMPONENTS`.
3. Add UI and state in the "Interactive Components" section.
4. Keep fallback status as `Pending props mapping` until verified.

## Debug Workflow

1. Run Expo and load web + native.
2. Check for runtime redboxes and console errors.
3. Run lint on edited files.
4. Keep the component in pending mode if:
   - provider is missing,
   - required data contracts are unknown,
   - behavior is unstable across platforms.

## Stability Rules

- Avoid mounting components that require unknown payloads.
- Keep demo actions deterministic (no random async side effects).
- For overlays (`Drawer`, `SideBar`, `Toast`, sheets), always include close handlers.

## Current Live Demos

The following exports are currently mounted with stable props in `app/(tabs)/index.tsx`:

- `Button`, `OutlinedButton`, `IconButton`, `MiniButton`, `FloatButton`
- `Text`, `Divider`, `Tag`, `StatusIndicator`
- `InputText`, `InputPassword`, `InputCheckbox`, `ToggleSwitch`, `RadioButton`, `QuantitySelector`
- `Drawer`, `SideBar`, `FloatTabBar`, `Toast`
- `Accordion`, `ListSelect`, `SelectList`, `DropdownPicker`, `Menu`
- `Avatar`, `Brand`, `ProgressBar`, `Skeleton`, `Clickable`, `Currency`, `Flag`, `Image`
- `LoaderDots`, `BrandLoader`, `PageLoader`, `Shortcut`, `Topic`, `ChipSelectGroup`
- `ListContent`, `ListNavigation`, `MediaTile`, `ProductTile`, `StartFlowButton`, `GlobalHeader`, `HeaderFlow`, `TabBar`
- `Carousel`, `StackedCards`, `CreditCard`, `Sheet`, `ImageGallery`, `MenuItem`
- Providers wired at root: `LeafProvider`, `BottomSheetProvider`
