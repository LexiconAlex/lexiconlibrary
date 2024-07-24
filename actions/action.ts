"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient();

export async function AddBook(FormData: FormData) {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const book = await prisma.book.create({
        data: {
            title: FormData.get("title") as string,
            author: FormData.get("author") as string,
            published: parseInt(FormData.get("published") as string),
            isbn: FormData.get("isbn") as string
        }
    });
    revalidatePath("/");
    return book;
}

export async function DeleteBook(id: string) {
    await prisma.book.delete({
        where: {
            id
        }
    });
    revalidatePath("/");
}
