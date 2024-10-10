import { useForm, useFieldArray } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import * as v from 'valibot'; // Importing valibot for schema definition
import { Button } from './ui/button';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from './ui/input';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragEndEvent,
  PointerSensorOptions,
} from '@dnd-kit/core';
import {
  arrayMove,
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

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

export const SortableItem = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0)`,
        transition,
        cursor: 'move',
      }}
    >
      {children}
    </div>
  );
};

class MyPointerSensor extends PointerSensor {
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

// Valibot schema with pipelines for validation
const LinkSchema = v.object({
  platform: v.pipe(v.string(), v.nonEmpty('Platform is required')),
  link: v.pipe(
    v.string(),
    v.nonEmpty('Link is required'),
    v.url('Please enter a valid URL'),
  ),
});

const CustomizeLinksSchema = v.object({
  links: v.array(LinkSchema),
});

type CustomizeLinksFormData = v.InferOutput<typeof CustomizeLinksSchema>;

// Inside your component
const CustomizeLinks = () => {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
  } = useForm<CustomizeLinksFormData>({
    resolver: valibotResolver(CustomizeLinksSchema),
    mode: 'all',
    defaultValues: { links: [] }, // Empty array, but now typed correctly
  });

  const { fields, append, update } = useFieldArray({
    control,
    name: 'links',
  });

  const addNewLinkSection = () => {
    append({ platform: '', link: '' });
  };

  const onSubmit = (data: CustomizeLinksFormData) => {
    console.log('Form Data:', data);
  };

  // Set up sensors for Pointer and Keyboard interactions
  const sensors = useSensors(useSensor(MyPointerSensor));

  // Get the position of a task by its ID
  const getLinkPos = (id: string) =>
    fields.findIndex((field) => field.id === id);

  // Handle the drag-and-drop logic for sorting
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // If the dragged item is dropped on the same item, return early
    if (active.id === over?.id) return;
    const originalPos = getLinkPos(active.id.toString());
    const newPos = getLinkPos(over?.id.toString() || '');
    setValue('links', arrayMove(getValues('links'), originalPos, newPos));
  };

  console.log(fields);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">Customize your Links</h1>
      {/* Description */}
      <p className="text-gray-600 mb-6">
        Add/edit/remove links below and then share all your profile with the
        world!
      </p>

      {/* Button to add a new link section */}
      <Button variant="default" onClick={addNewLinkSection} type="button">
        Add New Link
      </Button>

      {/* DndContext: Handle drag-and-drop */}
      <div className="mt-4">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={fields}
            strategy={verticalListSortingStrategy}
          >
            {/* Render the sortable links */}
            {fields.map((field, index) => (
              <SortableItem key={field.id} id={field.id}>
                <div className="mt-6 p-4 border rounded-md">
                  {/* Section heading */}
                  <h2 className="text-xl font-semibold mb-4">
                    Link {field.id}
                  </h2>

                  {/* Platform dropdown */}
                  <div className="mb-4">
                    <Label htmlFor={`links.${index}.platform`}>Platform</Label>
                    <Select
                      value={field.platform}
                      onValueChange={(value: string) => {
                        const finalValues = getValues(`links.${index}`);
                        update(index, { ...finalValues, platform: value });
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.links?.[index]?.platform && (
                      <p className="text-red-500 text-sm">
                        {errors.links[index].platform.message}
                      </p>
                    )}
                  </div>

                  {/* Link input */}
                  <div>
                    <Label htmlFor={`links.${index}.link`}>Link</Label>
                    <Input
                      id={`links.${index}.link`}
                      key={field.id + index}
                      placeholder="Enter the link"
                      {...register(`links.${index}.link`)}
                    />

                    {errors.links?.[index]?.link && (
                      <p className="text-red-500 text-sm">
                        {errors.links[index].link.message}
                      </p>
                    )}
                  </div>
                </div>
              </SortableItem>
            ))}
          </SortableContext>
        </DndContext>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="mt-6">
        Save Links
      </Button>
    </form>
  );
};

export default CustomizeLinks;
