import { Accordion, Divider, Text, Toast } from '@herbalifedev/leaf-mobile';

import { CategoryDemoScreen } from '@/components/category-demo-screen';

export default function ListsAccordionScreen() {
  return (
    <CategoryDemoScreen title="Content · Accordion">
      <Text type="heading" size="xSmall">
        Accordion
      </Text>
      <Divider />
      <Accordion title="Accordion">
        <Text type="body" size="small">
          Accordion body
        </Text>
      </Accordion>
      <Toast />
    </CategoryDemoScreen>
  );
}

