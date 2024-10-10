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
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import Spinner from '@/components/Sppinner';
import { SignInSchema } from '@/valibot/SchemaTypes';
import { PasswordInput } from '@/components/ui/custom/passwordInput';
import PasswordComplexity from '@/components/PasswordComplexity';
import { useStore } from '@/store/store';
import useSWRMutation from 'swr/mutation';
import { getApiUrl } from '@/utils';

async function signInRequest(
  url: string,
  { arg }: { arg: v.InferOutput<typeof SignInSchema> },
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    throw new Error('Failed to sign in');
  }

  return response.json(); // Expected JSON with user and token
}

const SignIn = () => {
  const form = useForm<v.InferOutput<typeof SignInSchema>>({
    resolver: valibotResolver(SignInSchema),
    mode: 'onChange',
    defaultValues: {
      userEmail: '',
      password: '',
    },
  });

  // Zustand store actions and states
  const setUser = useStore((state) => state.setUser);

  const { trigger, isMutating } = useSWRMutation(
    getApiUrl('auth/signin'),
    signInRequest,
  );

  // Section 1
  async function onSubmit(values: v.InferOutput<typeof SignInSchema>) {
    try {
      const response = await trigger(values); // API call with form data

      // After successful response, update Zustand store with user info
      setUser({
        _id: response._id,
        token: response.token,
        firstName: response.firstName,
        lastName: response.lastName,
        gender: response.gender,
        userEmail: response.userEmail,
        profilePic: response.profilePic,
      });

      toast({
        variant: 'default',
        description: 'Signed in successfully',
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
    // Section 2
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="****" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch('password') && form.formState.dirtyFields.password && (
          <PasswordComplexity password={form.getValues('password')} />
        )}
        <Button variant="outline" type="submit" disabled={isMutating}>
          {isMutating ? <Spinner /> : 'Submit'}
        </Button>
      </form>
      {/* Section 3 */}
    </Form>
  );
};

export default SignIn;
