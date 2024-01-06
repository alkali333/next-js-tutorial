"use server";
import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({ data: { content } });
  revalidatePath("/tasks");
};

const Task = z.object({
  content: z.string().min(5),
});

export const createTaskCustom = async (prevState, formData) => {
  const content = formData.get("content");

  try {
    // validate (throws an error if failes)
    Task.parse({ content });
    await prisma.task.create({ data: { content } });
    return { message: "success" };
  } catch (error) {
    return {
      message: `error: ${error.errors[0]?.message || "Validation Error"}`,
      // message: "error",
    };
  } finally {
    revalidatePath("/tasks");
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({ where: { id } });
  revalidatePath("/tasks");
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  try {
    Task.parse({ content });
    await prisma.task.update({
      where: { id },
      data: {
        content,
        completed: completed === "on" ? true : false,
      },
    });
    return { message: "success" };
  } catch (error) {
    message: `error: ${error.errors[0]?.message || "Validation Error"}`;
  } finally {
    redirect("/tasks");
  }
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({ where: { id } });
};
