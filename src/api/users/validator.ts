import { z } from 'zod';

// Existing ID validation schemas
export const idSchema = z.object({
    id: z.string().uuid({ message: 'Invalid UUID format for ID' })
});


// Define types inferred from the schemas
export type IdType = z.infer<typeof idSchema>;

// Schema for creating a new user
export const userCreateSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    address: z.string().optional(),
    phone: z.string().optional(),
    active: z.boolean().optional().default(true)
});

// Schema for updating an existing user
export const userUpdateSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    address: z.string().optional(),
    phone: z.string().optional(),
    active: z.boolean().optional().default(true)
});

export type UserCreateType = z.infer<typeof userCreateSchema>;
export type UserUpdateType = z.infer<typeof userUpdateSchema>;
