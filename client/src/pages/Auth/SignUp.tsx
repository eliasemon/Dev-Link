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
import { SignUpSchema } from '@/valibot/SchemaTypes';
import { PasswordInput } from '@/components/ui/custom/passwordInput';
import PasswordComplexity from '@/components/PasswordComplexity';
import useSWRMutation from 'swr/mutation';
import { getApiUrl } from '@/utils';
import { useStore } from '@/store/store';

// API request function for sign-up
async function signUpRequest(
  url: string,
  { arg }: { arg: v.InferOutput<typeof SignUpSchema> },
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Failed to sign up');
  }

  return response.json(); // Expected response with user and token
}

const SignUp = () => {
  const form = useForm<v.InferOutput<typeof SignUpSchema>>({
    resolver: valibotResolver(SignUpSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      userEmail: '',
      password: '',
      confirmPassword: '',
      gender: '', // Add gender as a default value
    },
  });

  const { setValue } = form;

  // Zustand store actions and states
  const setUser = useStore((state) => state.setUser);

  const { trigger, isMutating } = useSWRMutation(
    getApiUrl('auth/signup'),
    signUpRequest,
  );

  // Section 1: Form submit handler
  async function onSubmit(values: v.InferOutput<typeof SignUpSchema>) {
    try {
      const response = await trigger(values); // API call with form data

      // Update Zustand store with user info
      setUser({
        ...response,
      });

      toast({
        variant: 'default',
        description: 'Signed up successfully',
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
    // Section 2: Render form UI
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="userEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
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
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Gender Select Field */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value: string) => {
                      setValue('gender', value);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="****"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch('password') && form.formState.dirtyFields.password && (
            <PasswordComplexity password={form.getValues('password')} />
          )}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="****"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="w-full mt-6 bg-primary-900 hover:bg-primary-700 text-white"
          variant="secondary"
          type="submit"
          disabled={isMutating}
        >
          {isMutating ? <Spinner /> : 'Submit'}
        </Button>
      </form>
    </Form>
  );
};

export default SignUp;
