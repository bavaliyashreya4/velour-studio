"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const validatedData = contactSchema.parse(rawData);

    await prisma.contact.create({
      data: validatedData,
    });

    return { success: true, message: "Thank you for reaching out. We will be in touch shortly." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function subscribeNewsletter(formData: FormData) {
  try {
    const rawData = {
      email: formData.get("email") as string,
    };

    const validatedData = newsletterSchema.parse(rawData);

    // Check if exists
    const existing = await prisma.newsletter.findUnique({
      where: { email: validatedData.email }
    });

    if (existing) {
       return { success: true, message: "You are already subscribed to our journal." };
    }

    await prisma.newsletter.create({
      data: validatedData,
    });

    return { success: true, message: "Welcome to the Velour Studio journal." };
  } catch (error) {
     if (error instanceof z.ZodError) {
      return { success: false, message: "Please provide a valid email address." };
    }
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
