import * as v from 'valibot';

export const PasswordSchema = v.pipe(
  v.string(),
  v.minLength(12, 'Password must be at least 12 characters long'),
  v.regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  v.regex(/[a-z]/, 'Password must contain at least one lowercase letter'),
  v.regex(/[0-9]/, 'Password must contain at least one number'),
  v.regex(
    /[@$!%*?&]/,
    'Password must contain at least one special character ex: (@$!%*?&)',
  ),
);

export const EmailSchema = v.pipe(
  v.string(),
  v.nonEmpty('Please enter your email.'),
  v.email('Invalid Email address'),
  v.maxLength(40, 'email Max Length is 40'),
);

export const SignUpSchema = v.pipe(
  v.object({
    userEmail: EmailSchema,
    firstName: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your FirstName.'),
      v.minLength(2, 'First Name Must Have Two characters or more'),
      v.maxLength(10, 'First Name Max Length is 10'),
    ),
    lastName: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your LastName.'),
      v.minLength(2, 'Last Name Must Have Two characters or more'),
      v.maxLength(10, 'Last Name Max Length is 10'),
    ),
    gender: v.string(),
    password: PasswordSchema,
    confirmPassword: v.string(),
  }),
  v.forward(
    v.partialCheck(
      [['password'], ['confirmPassword']],
      (input) => input.password === input.confirmPassword,
      'The two passwords do not match.',
    ),
    ['confirmPassword'],
  ),
);

export const ProfileUpdateSchema = v.object({
  userEmail: EmailSchema,
  firstName: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your FirstName.'),
    v.minLength(2, 'First Name Must Have Two characters or more'),
    v.maxLength(10, 'First Name Max Length is 10'),
  ),
  lastName: v.pipe(
    v.string(),
    v.nonEmpty('Please enter your LastName.'),
    v.minLength(2, 'Last Name Must Have Two characters or more'),
    v.maxLength(10, 'Last Name Max Length is 10'),
  ),
  gender: v.string(),
});

export const SignInSchema = v.object({
  userEmail: EmailSchema,
  password: PasswordSchema,
});

export const LinkSchema = v.object({
  platform: v.pipe(v.string(), v.nonEmpty('Platform is required')),
  link: v.pipe(
    v.string(),
    v.nonEmpty('Link is required'),
    v.url('Please enter a valid URL'),
  ),
});

export const CustomizeLinksSchema = v.object({
  links: v.array(LinkSchema),
});

export type CustomizeLinksFormData = v.InferOutput<typeof CustomizeLinksSchema>;
