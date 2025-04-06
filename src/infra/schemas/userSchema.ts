import z from 'zod'

export const userSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string(),
    photoUrl: z.string()
})

export type userTypes = z.infer<typeof userSchema>