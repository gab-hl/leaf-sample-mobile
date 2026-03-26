import { Clickable, Divider, Image, MediaTile, ProductTile, Shortcut, Text, Toast, Topic } from '@herbalifedev/leaf-mobile';
import { useState } from 'react';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function VisualTilesScreen() {
  const [productQty, setProductQty] = useState(1);

  return (
    <CategoryDemoScreen title="Feedback · Tiles">
      <Text type="heading" size="xSmall">
        Tiles and media
      </Text>
      <Divider />
      <Clickable onPress={() => showPressToast()}>
        <Text type="body" size="small">
          Clickable
        </Text>
      </Clickable>
      <Image src="https://picsum.photos/320/180" aspectRatio="landscape" rounded />
      <MediaTile imageSource="https://picsum.photos/300/200" title="Media" description="Tile" onPress={() => showPressToast()} />
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
      <Toast />
    </CategoryDemoScreen>
  );
}

