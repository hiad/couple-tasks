import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { Tasks, createTask } from "@/models/models";

export const taskRouter = createTRPCRouter({
  createTask: protectedProcedure
    .input(createTask)
    .mutation(async ({ ctx, input }) => {
      const foundTypes = await ctx.db.type.findMany({
        where: {
          id: {
            in: input.types,
          },
        },
      });
      return ctx.db.task.create({
        data: {
          task: input.task,
          check: input.check,
          types: {
            connect: foundTypes,
          },
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getAllTasks: protectedProcedure.output(Tasks).query(({ ctx }) => {
    return ctx.db.task.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
      select: {
        task: true,
        check: true,
        types: {
          select: {
            type: true,
          },
        },
      },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
});
