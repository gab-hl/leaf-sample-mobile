import {
  Button,
  ChipSelectGroup,
  HeaderFlow,
  OutlinedButton,
  Text,
  Toast,
} from '@herbalifedev/leaf-mobile';
import { IconMobile } from '@herbalifedev/leaf-mobile/assets';
import { opacity, radius, semantic, size, spacing } from '@herbalifedev/leaf-mobile/tokens';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { showPressToast } from '@/utils/show-press-toast';

const STEPS = [
  {
    title: 'Assessment',
    question: 'Do you consume alcohol?',
    subtitle: 'Includes beer, wine, and spirits',
    options: [
      { id: 'a0', label: 'Never or rarely', value: 'never' },
      { id: 'a1', label: 'Occasionally', value: 'occasionally' },
      { id: 'a2', label: 'Weekly', value: 'weekly' },
      { id: 'a3', label: 'Daily', value: 'daily' },
    ],
    layout: 'list' as const,
  },
  {
    title: 'Assessment',
    question: 'Do you engage in regular physical exercise?',
    subtitle: 'Includes activities like walking, running, weightlifting, etc.',
    options: [
      { id: 'b0', label: 'Not at all', value: 'none' },
      { id: 'b1', label: 'Once a week', value: 'weekly' },
      { id: 'b2', label: '2–3 times a week', value: 'often' },
      { id: 'b3', label: 'Most days', value: 'daily' },
    ],
    layout: 'grid' as const,
  },
  {
    title: 'Assessment',
    question: 'How often do you work out?',
    subtitle: 'This includes cardio, strength training, and sports.',
    options: [
      { id: 'c0', label: 'Never', value: 'never' },
      { id: 'c1', label: 'Rarely', value: 'rarely' },
      { id: 'c2', label: 'Sometimes', value: 'sometimes' },
      { id: 'c3', label: 'Very often', value: 'very_often' },
    ],
    layout: 'wrap' as const,
  },
];

type Option = (typeof STEPS)[number]['options'][number];

function RadioChip({ label, selected, onPress }: { label: string; selected: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.chipBase,
        selected ? styles.chipSelected : styles.chipIdle,
        pressed && { opacity: opacity['75'] },
      ]}>
      <View style={styles.chipInner}>
        {selected ? <IconMobile name="check" size="small" color={semantic.primaryColor} /> : null}
        <Text type="body" size="medium" style={{ color: selected ? semantic.primaryDarker : semantic.labelColor }}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

export default function AssessmentExampleScreen() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [value, setValue] = useState<string | undefined>(undefined);

  const config = STEPS[step];
  const progress = Math.round(((step + 1) / STEPS.length) * 100);

  const goBack = () => {
    if (step > 0) {
      setStep((s) => s - 1);
      setValue(undefined);
      return;
    }
    router.back();
  };

  const handlePrimary = () => {
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
      setValue(undefined);
      return;
    }
    showPressToast();
  };

  const setOption = (v: string) => setValue(v);

  const renderChoices = () => {
    if (config.layout === 'wrap') {
      return (
        <View style={styles.chipGroupWrap}>
          <ChipSelectGroup
            type="radio"
            options={config.options.map((o: Option) => ({ id: o.id, label: o.label, value: o.value }))}
            value={value}
            onValueChange={setOption}
          />
        </View>
      );
    }

    if (config.layout === 'list') {
      return (
        <View style={styles.listColumn}>
          {config.options.map((o: Option) => (
            <RadioChip key={o.id} label={o.label} selected={value === o.value} onPress={() => setOption(o.value)} />
          ))}
        </View>
      );
    }

    return (
      <View style={styles.grid}>
        {config.options.map((o: Option) => (
          <RadioChip key={o.id} label={o.label} selected={value === o.value} onPress={() => setOption(o.value)} />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <SafeAreaView edges={['top']} style={styles.headerSafe}>
        <HeaderFlow
          text={config.title}
          progress={progress}
          showProgressBar
          onClosePress={() => router.back()}
          Left={
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Back"
              onPress={goBack}
              style={({ pressed }) => [styles.backBtn, pressed && { opacity: opacity['75'] }]}>
              <IconMobile name="keyboard_arrow_left" size="medium" color={semantic.textColor} />
            </Pressable>
          }
        />
      </SafeAreaView>

      <View style={styles.body}>
        <Text type="heading" size="small">
          {config.question}
        </Text>
        <Text type="body" size="medium" style={{ color: semantic.paragraphColor }}>
          {config.subtitle}
        </Text>
        {renderChoices()}
      </View>

      <SafeAreaView edges={['bottom']} style={styles.footerSafe}>
        {step < STEPS.length - 1 ? (
          <OutlinedButton label="Proceed" size="large" disabled={!value} onClick={handlePrimary} />
        ) : (
          <Button label="Start Shop" size="large" disabled={!value} onClick={handlePrimary} />
        )}
      </SafeAreaView>

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
  backBtn: {
    padding: spacing[2],
    marginLeft: spacing[1],
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[6],
    gap: spacing[4],
  },
  footerSafe: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
    backgroundColor: semantic.surfaceBody,
  },
  chipBase: {
    borderRadius: radius.full,
    minHeight: size[10] + size[1],
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
    borderWidth: 1,
    alignSelf: 'flex-start',
    maxWidth: '100%',
  },
  chipSelected: {
    backgroundColor: semantic.primaryLighter,
    borderColor: semantic.primaryColor,
  },
  chipIdle: {
    backgroundColor: semantic.bg2,
    borderColor: semantic.borderBase,
  },
  chipInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    flexShrink: 1,
  },
  chipGroupWrap: {
    width: '100%',
  },
  listColumn: {
    gap: spacing[2],
    alignItems: 'flex-start',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
    alignItems: 'flex-start',
  },
});
