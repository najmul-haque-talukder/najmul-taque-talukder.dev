"use server"

import { Resend } from "resend"
import { contactSchema } from "../validators/contact"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: unknown) {
  // Validate data
  const result = contactSchema.safeParse(formData)

  if (!result.success) {
    return { error: "Invalid form data" }
  }

  const { name, email, message } = result.data

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Replace with your verified domain in production
      to: ["najmulhaquetalukder41@gmail.com"],
      subject: `Portfolio Contact: Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      console.error("Resend Error:", error)
      return { error: error.message || "Failed to send message" }
    }

    return { success: true, data }
  } catch (err) {
    console.error("Server Action Error:", err)
    return { error: "An unexpected error occurred" }
  }
}
