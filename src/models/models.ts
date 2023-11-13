import { z } from "zod";

export const Type = z.object({
  id: z.number().optional(),
  type: z.string().min(1),
});
export const createTask = z.object({
  task: z.string().min(1),
  check: z.boolean(),
  types: z.array(z.number()),
});

export const Task = z.object({
  task: z.string().min(1),
  check: z.boolean(),
  types: z.array(Type).optional(),
});

export const Tasks = z.array(
  z.object({
    task: z.string().min(1),
    check: z.boolean(),
    types: z
      .array(
        z.object({
          type: z.string().min(1),
        }),
      )
      .optional(),
  }),
);

export const Types = z.array(Type);

export type TaskModel = z.infer<typeof Task>;
