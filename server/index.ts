import { z } from "zod";
import { prisma } from "./db";
import { PublicProcedure, router } from "./trpc";

const idSchema = z.object({ id: z.string() });

const userSchema = z.object({
  name: z.string(),
  email: z.string()
});

const userUpdateSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string()
});

export const appRouter = router({
  getAll: PublicProcedure
    .query(() => {
      return prisma.user.findMany();
    }),

  getOne: PublicProcedure
    .input(idSchema)
    .query(({ input }) => {
      return prisma.user.findUnique({
        where: input
      })
    }),

  createUser: PublicProcedure
    .input(userSchema)
    .mutation(({ input }) => {
      return prisma.user.create({
        data: input
      })
    }),

  updateUser: PublicProcedure
    .input(userUpdateSchema)
    .mutation(({ input }) => {
      return prisma.user.update({
        where: { id: input.id },
        data: input
      })
    }),

  deleteUser: PublicProcedure
    .input(idSchema)
    .mutation(({ input }) => {
      return prisma.user.delete({
        where: input
      })
    })
})

export type AppRouter = typeof appRouter;