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
import Spinner from '@/components/Spinner';
import { SignInSchema } from '@/valibot/SchemaTypes';
import { PasswordInput } from '@/components/ui/custom/passwordInput';
import { useStore } from '@/store/store';
import useSWRMutation from 'swr/mutation';
import { getApiUrl } from '@/utils';

// API request function for sign-in
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
  const { setUser, setLinks } = useStore((action) => action);

  const { trigger, isMutating } = useSWRMutation(
    getApiUrl('auth/signin'),
    signInRequest,
  );

  // Section 1: Form submit handler

  // Fetch links after successful sign-in
  const handleFetchLinks = async (userId: string) => {
    const fetchLinks = await fetch(getApiUrl(`previewlinks/${userId}`));
    if (fetchLinks.ok) {
      const parsedLinks = await fetchLinks.json();
      setLinks([...parsedLinks.links.links]);
    } else {
      setLinks([]);
    }
  };

  async function onSubmit(values: v.InferOutput<typeof SignInSchema>) {
    try {
      const response = await trigger(values); // API call with form data

      // After successful response, update Zustand store with user info
      await handleFetchLinks(response._id);
      setUser({ ...response });

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

  // Render a form field with validation and controls
  const renderFormField = (
    name: keyof v.InferOutput<typeof SignInSchema>,
    label: string,
  ) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {name === 'password' ? (
              <PasswordInput placeholder="****" type="password" {...field} />
            ) : (
              <Input
                type={name === 'userEmail' ? 'email' : 'text'}
                placeholder={
                  name === 'userEmail' ? 'example@example.com' : label
                }
                {...field}
              />
            )}
          </FormControl>
          <div className="max-w-60 md:max-w-full">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          {renderFormField('userEmail', 'Email')}
          {renderFormField('password', 'Password')}
          <Button
            className="w-full bg-primary-900 hover:bg-primary-700 text-white"
            variant="secondary"
            type="submit"
            disabled={isMutating}
          >
            {isMutating ? <Spinner /> : 'Submit'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignIn;

// import * as v from 'valibot';
// import { valibotResolver } from '@hookform/resolvers/valibot';
// import { useForm } from 'react-hook-form';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { toast } from '@/components/ui/use-toast';
// import Spinner from '@/components/Spinner';
// import { SignInSchema } from '@/valibot/SchemaTypes';
// import { PasswordInput } from '@/components/ui/custom/passwordInput';
// import PasswordComplexity from '@/components/PasswordComplexity';
// import { useStore } from '@/store/store';
// import useSWRMutation from 'swr/mutation';
// import { getApiUrl } from '@/utils';

// async function signInRequest(
//   url: string,
//   { arg }: { arg: v.InferOutput<typeof SignInSchema> },
// ) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(arg),
//   });

//   if (!response.ok) {
//     throw new Error('Failed to sign in');
//   }

//   return response.json(); // Expected JSON with user and token
// }

// const SignIn = () => {
//   const form = useForm<v.InferOutput<typeof SignInSchema>>({
//     resolver: valibotResolver(SignInSchema),
//     mode: 'onChange',
//     defaultValues: {
//       userEmail: '',
//       password: '',
//     },
//   });

//   // Zustand store actions and states
//   const { setUser, setLinks } = useStore((action) => action);

//   const { trigger, isMutating } = useSWRMutation(
//     getApiUrl('auth/signin'),
//     signInRequest,
//   );

//   // Section 1
//   async function onSubmit(values: v.InferOutput<typeof SignInSchema>) {
//     try {
//       const response = await trigger(values); // API call with form data

//       // After successful response, update Zustand store with user info

//       const fetchLinks = await fetch(getApiUrl(`previewlinks/${response._id}`));
//       // console.log(fetchLinks);
//       if (fetchLinks.ok) {
//         const parsedLinks = await fetchLinks.json();
//         setLinks([...parsedLinks.links.links]);
//       } else {
//         setLinks([]);
//       }
//       setUser({ ...response });

//       toast({
//         variant: 'default',
//         description: 'Signed in successfully',
//       });
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         toast({
//           variant: 'destructive',
//           description:
//             err.message || 'An error occurred, please try again later.',
//         });
//       }
//     }
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <div className="flex flex-col gap-6">
//           <FormField
//             control={form.control}
//             name="userEmail"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="example@example.com"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <PasswordInput
//                     placeholder="****"
//                     type="password"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           {form.watch('password') && form.formState.dirtyFields.password && (
//             <PasswordComplexity password={form.getValues('password')} />
//           )}
//           <Button
//             className="w-full bg-primary-900 hover:bg-primary-700 text-white"
//             variant="secondary"
//             type="submit"
//             disabled={isMutating}
//           >
//             {isMutating ? <Spinner /> : 'Submit'}
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default SignIn;
