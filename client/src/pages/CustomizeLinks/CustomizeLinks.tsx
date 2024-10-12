import { useForm, useFieldArray } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Button } from '@/components/ui/button';
import {
  DndContext,
  useSensor,
  useSensors,
  closestCorners,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { MyPointerSensor } from '@/lib/CustomSensor';
import {
  CustomizeLinksFormData,
  CustomizeLinksSchema,
} from '@/valibot/SchemaTypes';
import useSWRMutation from 'swr/mutation';
import { getApiUrl } from '@/utils';
import { useToast } from '@/components/ui/use-toast';
import Spinner from '@/components/Spinner';
import { useEffect } from 'react';
import { useStore } from '@/store/store';
import EmptySvg from './EmptySvg';
import SortableFields from './SortableFields'; // The new component for rendering fields
import { platformData } from '@/constant';

// API call function for submitting the form data
async function customizeLinksPost(
  url: string,
  { arg }: { arg: CustomizeLinksFormData },
) {
  const token = useStore.getState().user?.token;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    throw new Error('Failed to sign up');
  }

  return response.json();
}

// Main form component for customizing links
const CustomizeLinks = () => {
  // Zustand store actions and state
  const { setLinks, setlinkDraft } = useStore((action) => action);
  const { links, islinkDraft } = useStore((state) => state);

  // Initialize react-hook-form with validation schema and default values
  const form = useForm<CustomizeLinksFormData>({
    resolver: valibotResolver(CustomizeLinksSchema),
    mode: 'all',
    defaultValues: { links },
  });

  const { control, watch, handleSubmit, getValues, formState, setValue } = form;

  // Handle toast notifications
  const { toast } = useToast();

  // Hook for managing array of link fields
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'links',
  });

  // SWR hook for handling form submission
  const { trigger, isMutating } = useSWRMutation(
    getApiUrl('protected/devlinks'),
    customizeLinksPost,
  );

  // Function to add a new link section
  const addNewLinkSection = () => {
    append({ platform: platformData[fields.length].platform, link: 'http://' });
  };

  // Submit form handler
  const onSubmit = async (values: CustomizeLinksFormData) => {
    try {
      await trigger(values); // Call the API with form values
      setlinkDraft(false);
      toast({
        variant: 'default',
        description: 'Links updated successfully',
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast({
          variant: 'destructive',
          description: 'An error occurred, please try again later.',
        });
      }
    }
  };

  // Set up sensors for drag-and-drop functionality
  const sensors = useSensors(useSensor(MyPointerSensor));

  // Get the position of a task by its ID
  const getLinkPos = (id: string) =>
    fields.findIndex((field) => field.id === id);

  // Handle drag end event to rearrange items
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Prevent reordering if dragged over the same item
    if (active.id === over?.id) return;
    setlinkDraft(true);
    const originalPos = getLinkPos(active.id.toString());
    const newPos = getLinkPos(over?.id.toString() || '');
    setValue('links', arrayMove(getValues('links'), originalPos, newPos));
  };

  // Watch for changes in the form and update the Zustand store
  useEffect(() => {
    if (Object.keys(formState.dirtyFields).length > 0) {
      setlinkDraft(true);
    }
    setLinks([...getValues('links')]);
  }, [watch('links')]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 overflow-hidden">
      <h1 className="text-2xl font-bold mb-2">Customize your Links</h1>
      <p className="text-neutral-500 mb-6">
        Add/edit/remove links below and then share all your profile with the
        world!
      </p>

      {islinkDraft && (
        <div className="mb-4 p-3 bg-yellow-200 text-yellow-800 rounded-lg">
          Your Links are in draft mode. Please save changes to make the links
          visible on live.
        </div>
      )}

      {/* Add new link button */}
      <Button
        className="w-full border border-primary-900 hover:bg-primary-100 text-primary-900"
        variant="outline"
        onClick={addNewLinkSection}
        type="button"
      >
        + Add New Link
      </Button>

      {fields.length <= 0 && (
        <div className="w-full flex justify-center mt-10">
          <EmptySvg />
        </div>
      )}

      {/* Render sortable fields component */}
      <div className="mt-4 overflow-x-scroll overflow-y-hidden">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={fields}
            strategy={verticalListSortingStrategy}
          >
            {/* Use the new component for rendering the list of sortable fields */}
            <SortableFields
              fields={fields}
              update={update}
              remove={remove}
              form={form}
            />
          </SortableContext>
        </DndContext>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          className=" bg-primary-900 hover:bg-primary-700 text-white w-full md:w-1/6"
          type="submit"
        >
          {isMutating ? <Spinner /> : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default CustomizeLinks;
