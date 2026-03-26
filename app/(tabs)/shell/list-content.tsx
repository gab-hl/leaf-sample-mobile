import { Divider, ListContent, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';
import { showPressToast } from '@/utils/show-press-toast';

export default function ShellListContentScreen() {
  return (
    <CategoryDemoScreen title="Navigation · ListContent">
      <Text type="heading" size="xSmall">
        ListContent
      </Text>
      <Divider />
      <ListContent>
        <ListContent.Left iconName="person" />
        <ListContent.Content title="Title" description="Description" />
        <ListContent.Right actionLabel="Action" onActionPress={() => showPressToast()} />
      </ListContent>
      <Toast />
    </CategoryDemoScreen>
  );
}

