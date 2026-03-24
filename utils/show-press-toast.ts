import { toast } from '@herbalifedev/leaf-mobile';

export function showPressToast() {
  toast.show({
    title: 'Action',
    close: true,
  });
}
