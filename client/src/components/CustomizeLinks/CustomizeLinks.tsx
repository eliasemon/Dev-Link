import { useForm, useFieldArray } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '../ui/input';
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
import { GiHamburgerMenu } from 'react-icons/gi';
import { MyPointerSensor } from '@/lib/CustomSensor';
import {
  CustomizeLinksFormData,
  CustomizeLinksSchema,
} from '@/valibot/SchemaTypes';
import { SortableItem } from './SortableItem';
import useSWRMutation from 'swr/mutation';
import { getApiUrl } from '@/utils';
import { useToast } from '../ui/use-toast';
import Spinner from '../Spinner';
import { useEffect } from 'react';
import { useStore } from '@/store/store';
import { platformData } from '@/constant';
import EmptySvg from './EmptySvg';

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

  return response.json(); // Expected response with user and token
}

const CustomizeLinks = () => {
  const { setLinks, setlinkDraft } = useStore((action) => action);
  const { links, islinkDraft } = useStore((state) => state);
  const {
    control,
    watch,
    register,
    handleSubmit,
    getValues,
    formState,
    setValue,
  } = useForm<CustomizeLinksFormData>({
    resolver: valibotResolver(CustomizeLinksSchema),
    mode: 'all',
    defaultValues: { links },
  });
  const { toast } = useToast();

  const { fields, append, update, remove } = useFieldArray({
    control,
    name: 'links',
  });

  const { trigger, isMutating } = useSWRMutation(
    getApiUrl('protected/devlinks'),
    customizeLinksPost,
  );

  const addNewLinkSection = () => {
    append({ platform: platformData[fields.length].platform, link: 'http://' });
  };

  const onSubmit = async (values: CustomizeLinksFormData) => {
    try {
      await trigger(values); // API call with form data
      setlinkDraft(false);
      toast({
        variant: 'default',
        description: 'Links updated successfully',
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast({
          variant: 'destructive',
          description:
            err.message || 'An error occurred, please try again later.',
        });
      }
    }
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
    setlinkDraft(true);
    const originalPos = getLinkPos(active.id.toString());
    const newPos = getLinkPos(over?.id.toString() || '');
    setValue('links', arrayMove(getValues('links'), originalPos, newPos));
  };
  useEffect(() => {
    const dirtyFieldsStr = JSON.stringify(formState.dirtyFields);
    if (Object.keys(JSON.parse(dirtyFieldsStr)).length > 0) {
      setlinkDraft(true);
    }

    setLinks([...getValues('links')]);
  }, [watch('links')]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 overflow-hidden">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-2">Customize your Links</h1>
      {/* Description */}
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

      {/* Button to add a new link section */}
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

      {/* DndContext: Handle drag-and-drop */}
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
            {/* Render the sortable links */}
            {fields.map((field, index) => (
              <SortableItem key={field.id} id={field.id}>
                <div className="mt-6 p-4 border rounded-md text-neutral-600 bg-neutral-100">
                  {/* Section heading */}
                  <div className="flex justify-between  mb-4">
                    <div className="flex items-center gap-1 text-neutral-600">
                      <GiHamburgerMenu />
                      <h1 className="text-xl font-semibold">
                        Link #{index + 1}
                      </h1>
                    </div>

                    <button
                      className="text-neutral-500 hover:text-destructive items-center"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>

                  {/* Platform dropdown */}
                  <div className="mb-4">
                    <Label htmlFor={`links.${index}.platform`}>Platform</Label>
                    <Select
                      value={field.platform}
                      onValueChange={(value: string) => {
                        const finalValues = getValues(`links.${index}`);
                        update(index, { ...finalValues, platform: value });
                        setlinkDraft(true);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {platformData.map((v, i) => {
                          const Icon = v.icon;
                          return (
                            <SelectItem key={v.platform + i} value={v.platform}>
                              <div className="flex text-neutral-600 justify-start items-center gap-2">
                                <Icon />
                                <span>{v.platform}</span>
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    {formState.errors.links?.[index]?.platform && (
                      <p className="text-red-500 text-sm">
                        {formState.errors.links[index].platform.message}
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

                    {formState.errors.links?.[index]?.link && (
                      <p className="text-red-500 text-sm">
                        {formState.errors.links[index].link.message}
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
      <div className="flex justify-end mt-4">
        <Button
          className=" bg-primary-900 hover:bg-primary-700 text-white  w-full md:w-1/6"
          type="submit"
        >
          {isMutating ? <Spinner /> : 'Submit'}
        </Button>
      </div>
    </form>
  );
};

export default CustomizeLinks;
