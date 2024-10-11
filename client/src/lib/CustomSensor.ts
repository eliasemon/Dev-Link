import { PointerSensor, PointerSensorOptions } from '@dnd-kit/core';

function isInteractiveElement(element: HTMLElement): boolean {
  const interactiveElements = [
    'button',
    'input',
    'textarea',
    'select',
    'option',
  ];
  return interactiveElements.includes(element.tagName.toLowerCase());
}
export class MyPointerSensor extends PointerSensor {
  static activators: {
    eventName: 'onPointerDown';
    handler: (
      { nativeEvent }: { nativeEvent: PointerEvent },
      { onActivation }: PointerSensorOptions,
    ) => boolean;
  }[] = [
    {
      eventName: 'onPointerDown',

      handler: ({ nativeEvent: event }: { nativeEvent: PointerEvent }) => {
        if (
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target as HTMLElement)
        ) {
          return false;
        }

        return true;
      },
    },
  ];
}
