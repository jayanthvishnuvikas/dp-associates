import { createServerFn } from "@tanstack/react-start";

import { sendContactInquiryEmail } from "./contact.server";

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error("Expected form data.");
    }

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !phone || !email || !service) {
      throw new Error("Please fill in all required fields.");
    }

    return { name, phone, email, service, message };
  })
  .handler(async ({ data }) => {
    await sendContactInquiryEmail(data);
    return { success: true };
  });