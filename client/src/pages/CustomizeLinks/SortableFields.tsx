import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { SortableItem } from './SortableItem';
import { GiHamburgerMenu } from 'react-icons/gi';
import { platformData } from '@/constant';
import {
  FieldArrayWithId,
  UseFieldArrayUpdate,
  UseFieldArrayRemove,
  UseFormReturn,
} from 'react-hook-form';
import { CustomizeLinksFormData } from '@/valibot/SchemaTypes';

// Props interface for SortableFields
interface SortableFieldsProps {
  fields: FieldArrayWithId<CustomizeLinksFormData, 'links'>[];
  update: UseFieldArrayUpdate<CustomizeLinksFormData, 'links'>;
  remove: UseFieldArrayRemove;
  form: UseFormReturn<CustomizeLinksFormData>;
}

// This component renders the list of fields for the links
const SortableFields = ({
  fields,
  update,
  remove,
  form,
}: SortableFieldsProps) => {
  return (
    <>
      {fields.map((field, index) => (
        <SortableItem key={field.id} id={field.id}>
          <div className="mt-6 p-4 border rounded-md text-neutral-600 bg-neutral-100">
            {/* Section heading */}
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-1 text-neutral-600">
                <GiHamburgerMenu />
                <h1 className="text-xl font-semibold">Link #{index + 1}</h1>
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
                  const finalValues = form.getValues(`links.${index}`);
                  update(index, { ...finalValues, platform: value });
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
                          {/* Icon for the platform */}
                          <Icon />
                          <span>{v.platform}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>

              {/* Validation error for platform */}
              {form.formState.errors?.links?.[index]?.platform && (
                <p className="text-red-600 mt-1">
                  {form.formState.errors.links[index].platform?.message}
                </p>
              )}
            </div>

            {/* Link input field */}
            <div>
              <Label htmlFor={`links.${index}.link`}>Link</Label>
              <Input
                id={`links.${index}.link`}
                key={field.id + index}
                placeholder="Enter the link"
                {...form.register(`links.${index}.link`)}
              />

              {/* Validation error for link */}
              {form.formState.errors?.links?.[index]?.link && (
                <p className="text-red-600 mt-1">
                  {form.formState.errors.links[index].link?.message}
                </p>
              )}
            </div>
          </div>
        </SortableItem>
      ))}
    </>
  );
};

export default SortableFields;
