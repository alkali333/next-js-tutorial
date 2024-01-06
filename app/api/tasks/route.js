import prisma from "@/utils/db";
import { z } from "zod";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const tasks = await prisma.task.findMany();
  return NextResponse.json({ data: tasks });
};

const postSchema = z.object({
  content: z.string().min(3),
});

export const POST = async (request) => {
  try {
    const data = await request.json();
    postSchema.parse(data);
    const task = await prisma.task.create({ data: { content: data.content } });
    return Response.json({ msg: `Task: ${data.content} added` });
  } catch (error) {
    const errorMessage = error.errors[0].message;
    return Response.json({ error: errorMessage });
  }
};

export const DELETE = async (request) => {
  try {
    const { id } = request.params;
    const task = await prisma.task.delete({ where: { id: parseInt(id) } });
    return Response.json({ msg: `Task with ID ${id} deleted` });
  } catch (error) {
    const errorMessage = error.errors[0].message;
    return Response.json({ error: errorMessage });
  }
};

export const PUT = async (request) => {
  try {
    const { id } = request.params;
    const data = await request.json();
    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { content: data.content },
    });
    return Response.json({ msg: `Task with ID ${id} updated` });
  } catch (error) {
    const errorMessage = error.errors[0].message;
    return Response.json({ error: errorMessage });
  }
};
