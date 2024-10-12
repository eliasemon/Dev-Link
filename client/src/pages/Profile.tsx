import * as v from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import Spinner from '@/components/Spinner';
import { ProfileUpdateSchema } from '@/valibot/SchemaTypes';
import useSWRMutation from 'swr/mutation';
import { getApiUrl } from '@/utils';
import { useStore } from '@/store/store';
import FileUpload, { IImperativeFileUpload } from '@/components/FileUpload';
import { useCallback, useEffect, useRef } from 'react';

// API request function for updating profile information
async function profileInfoUpdateRequest(
  url: string,
  {
    arg,
  }: {
    arg: v.InferOutput<typeof ProfileUpdateSchema> & { profilePic: string };
  },
) {
  const token = useStore.getState().user?.token;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(arg),
  });

  // Handle response error
  if (!response.ok) {
    throw new Error('Failed to update profile');
  }

  return response.json(); // Expected response with updated user data
}

const Profile = () => {
  const { user, isProfileDraft } = useStore((state) => state);
  const { setUser, setProfileDraft } = useStore((action) => action);
  const form = useForm<v.InferOutput<typeof ProfileUpdateSchema>>({
    resolver: valibotResolver(ProfileUpdateSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      userEmail: user?.userEmail || '',
      gender: user?.gender || '',
    },
  });

  const { watch, getValues, setValue } = form;
  const fileUploadRef = useRef<IImperativeFileUpload>(null);

  // Set profile picture preview and update profile draft state
  const signal = useCallback(() => {
    setProfileDraft(true);
    setUser({ profilePic: fileUploadRef.current?.preview || '' });
  }, []);

  useEffect(() => {
    // Set initial preview of the profile picture
    fileUploadRef.current?.setPreview(user?.profilePic as string);
  }, [user?.profilePic]);

  useEffect(() => {
    const formUser = getValues();
    const dirtyFieldsStr = JSON.stringify(form.formState.dirtyFields);
    if (Object.keys(JSON.parse(dirtyFieldsStr)).length > 0) {
      setProfileDraft(true);
    }
    setUser({ ...formUser });
  }, [form.formState.isValidating, watch('gender')]);

  const { trigger, isMutating } = useSWRMutation(
    getApiUrl(`protected/user/${user?._id}`),
    profileInfoUpdateRequest,
  );

  // Section 1: Form submit handler
  async function onSubmit(values: v.InferOutput<typeof ProfileUpdateSchema>) {
    try {
      // Handle file upload and update user profile
      const upload = (await fileUploadRef.current?.onUpload()) as {
        file: { publicUrl: string };
      };
      if (!upload) {
        toast({
          variant: 'destructive',
          description: 'Upload failed. Please try again.',
        });
        return;
      }

      const response = await trigger({
        ...values,
        profilePic: upload.file.publicUrl,
      }); // API call with form data

      setProfileDraft(false);
      setUser({ ...response });

      toast({ variant: 'default', description: 'Updated successfully' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast({
          variant: 'destructive',
          description: 'An error occurred, please try again later.',
        });
      }
    }
  }

  return (
    <div className="p-4 overflow-hidden">
      <header>
        <h1 className="text-2xl font-bold mb-2">Profile Details</h1>
        <p className="text-neutral-500 mb-6">
          Add your details to create a personal touch to your profile.
        </p>
      </header>

      {/* Show draft message if the profile is in draft mode */}
      {isProfileDraft && (
        <div className="mb-4 p-3 bg-yellow-200 text-yellow-800 rounded-lg">
          Your profile is in draft mode. Please save changes to make the links
          visible on live.
        </div>
      )}

      <div className="text-neutral-500">
        <div className="flex flex-col md:flex-row gap-2 justify-center items-start md:items-center p-4 bg-neutral-100">
          <h1 className="md:w-1/5">Profile Picture</h1>
          <div className="2xl:w-3/5 md:w-3/5 lg:w-3/6 flex-grow">
            <FileUpload signal={signal} ref={fileUploadRef} />
          </div>
          <h1 className="md:w-1/5">
            Image must be below 1024x1024px. Use PNG or JPG format
          </h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="bg-neutral-100 p-4 mt-6">
              {/** Render form fields for first name, last name, email, and gender */}
              {['firstName', 'lastName', 'userEmail'].map((fieldName) => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName as 'firstName' | 'lastName' | 'userEmail'}
                  render={({ field }) => (
                    <FormItem className="flex flex-col md:flex-row md:items-center flex-auto mb-4">
                      <FormLabel className="md:w-1/5">
                        {fieldName
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())}
                      </FormLabel>
                      <div className="md:w-4/5">
                        <FormControl>
                          <Input
                            placeholder={`Ex: ${fieldName === 'userEmail' ? 'example@example.com' : ''}`}
                            type={fieldName === 'userEmail' ? 'email' : 'text'}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              ))}

              {/* Gender Select Field */}
              <FormField
                key={'gender'}
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:flex-row md:items-center flex-auto mb-4">
                    <FormLabel className="md:w-1/5">Gender</FormLabel>
                    <div className="md:w-4/5">
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={(value: string) => {
                            setProfileDraft(true);
                            setValue('gender', value);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            {['male', 'female', 'other'].map((gender) => (
                              <SelectItem key={gender} value={gender}>
                                {gender.charAt(0).toUpperCase() +
                                  gender.slice(1)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end mt-4">
              <Button
                className="bg-primary-900 hover:bg-primary-700 text-white w-full md:w-1/6"
                variant="secondary"
                type="submit"
                disabled={isMutating}
              >
                {isMutating ? <Spinner /> : 'Submit'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
