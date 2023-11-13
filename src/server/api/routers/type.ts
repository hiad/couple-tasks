import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { Types, Type } from "@/models/models";

export const typeRouter = createTRPCRouter({
  createType: protectedProcedure
    .input(Type)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.type.create({
        data: {
          type: input.type,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getAllTypes: protectedProcedure.output(Types).query(({ ctx }) => {
    return ctx.db.type.findMany({
      take: 100,
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
});
