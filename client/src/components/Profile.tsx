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
import FileUpload, { IImperativeFileUpload } from './FileUpload';
import { useCallback, useEffect, useRef } from 'react';

// API request function for sign-up
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

  if (!response.ok) {
    throw new Error('Failed to sign up');
  }

  return response.json(); // Expected response with user and token
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

  const signal = useCallback(() => {
    setProfileDraft(true);
    setUser({ profilePic: fileUploadRef.current?.preview || '' });
  }, []);

  useEffect(() => {
    fileUploadRef.current?.setPreview(user?.profilePic as string);
  }, []);

  useEffect(() => {
    const formUser = getValues();
    const dirtyFieldsStr = JSON.stringify(form.formState.dirtyFields);
    if (Object.keys(JSON.parse(dirtyFieldsStr)).length > 0) {
      setProfileDraft(true);
    }
    setUser({
      ...formUser,
    });
  }, [form.formState.isValidating, watch('gender')]);

  const { trigger, isMutating } = useSWRMutation(
    getApiUrl(`protected/user/${user?._id}`),
    profileInfoUpdateRequest,
  );

  // Section 1: Form submit handler
  async function onSubmit(values: v.InferOutput<typeof ProfileUpdateSchema>) {
    try {
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

      // Update Zustand store with user info

      setProfileDraft(false);
      setUser({ ...response });

      toast({
        variant: 'default',
        description: 'Updated successfully',
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
  }

  return (
    <div className="p-4 overflow-hidden">
      <div>
        <h1 className="text-2xl font-bold mb-2">Profile Details</h1>
        <p className="text-neutral-500 mb-6">
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      {/* Show draft message if the profile is in draft mode */}
      {isProfileDraft && (
        <div className="mb-4 p-3 bg-yellow-200 text-yellow-800 rounded-lg">
          Your profile is in draft mode. Please save changes to make the links
          visible on live.
        </div>
      )}

      <div className=" text-neutral-500">
        <div className="flex gap-3 justify-center items-center p-4 bg-neutral-100">
          <h1 className="w-1/5">Profile Picture</h1>
          <div className="w-3/5 flex-grow">
            <FileUpload signal={signal} ref={fileUploadRef} />
          </div>
          <h1 className="w-1/5">
            Image must be below 1024x1024px. Use PNG or JPG format
          </h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="bg-neutral-100 p-4 mt-6">
              <FormField
                key={'firstName'}
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex items-center flex-auto">
                    <FormLabel className="w-1/5">First Name</FormLabel>
                    <FormControl className="w-4/5">
                      <Input placeholder="Ex: John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                key={'lastName'}
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex items-center flex-auto">
                    <FormLabel className="w-1/5">Last Name</FormLabel>
                    <FormControl className="w-4/5">
                      <Input placeholder="Ex: Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                key={'userEmail'}
                control={form.control}
                name="userEmail"
                render={({ field }) => (
                  <FormItem className="flex items-center flex-auto">
                    <FormLabel className="w-1/5">Email</FormLabel>
                    <FormControl className="w-4/5">
                      <Input
                        type="email"
                        placeholder="example@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Gender Select Field */}
              <FormField
                key={'gender'}
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="flex items-center flex-auto">
                    <FormLabel className="w-1/5">Gender</FormLabel>
                    <FormControl className="w-4/5">
                      <Select
                        value={field.value}
                        onValueChange={(value: string) => {
                          setProfileDraft(true);
                          setValue('gender', value);
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem key="male" value="male">
                            Male
                          </SelectItem>
                          <SelectItem key="female" value="female">
                            Female
                          </SelectItem>
                          <SelectItem key="other" value="other">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end">
              <Button
                className=" bg-primary-900 hover:bg-primary-700 text-white"
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
