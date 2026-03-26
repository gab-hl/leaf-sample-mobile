import { Divider, ImageGallery, Text, Toast } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

const galleryItems = [
  { id: 'gallery-1', source: 'https://picsum.photos/400/300?1', thumbnailSource: 'https://picsum.photos/120/90?1' },
  { id: 'gallery-2', source: 'https://picsum.photos/400/300?2', thumbnailSource: 'https://picsum.photos/120/90?2' },
] as const;

export default function MoreImageGalleryScreen() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState('gallery-1');

  return (
    <CategoryDemoScreen title="Overlays · ImageGallery">
      <Text type="heading" size="xSmall">
        ImageGallery
      </Text>
      <Divider />
      <ImageGallery
        items={[...galleryItems]}
        selectedItem={selectedGalleryItem}
        onSelectItem={(item) => setSelectedGalleryItem(item.id)}
        showActions
        actionTagLabel="Open"
        onActionPress={() => showPressToast()}
      />
      <Toast />
    </CategoryDemoScreen>
  );
}

