import { Carousel, Divider, Shortcut, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function MoreCarouselScreen() {
  return (
    <CategoryDemoScreen title="Overlays · Carousel">
      <Text type="heading" size="xSmall">
        Carousel
      </Text>
      <Divider />
      <Carousel nestedScrollEnabled>
        <Shortcut title="A" iconName="home" onPress={() => showPressToast()} />
        <Shortcut title="B" iconName="menu" onPress={() => showPressToast()} />
      </Carousel>
      <Toast />
    </CategoryDemoScreen>
  );
}

