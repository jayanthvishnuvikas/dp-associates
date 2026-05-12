export type ContactInquiry = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export async function sendContactInquiryEmail(inquiry: ContactInquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "DP Associates <onboarding@resend.dev>";
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "dpassociates7846@gmail.com";

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Project Inquiry - ${inquiry.name}`,
      text: [
        "New Project Inquiry",
        `Name: ${inquiry.name}`,
        `Phone: ${inquiry.phone}`,
        `Email: ${inquiry.email}`,
        `Service: ${inquiry.service}`,
        `Message: ${inquiry.message || "N/A"}`,
      ].join("\n"),
      reply_to: inquiry.email,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to send inquiry email (${response.status}): ${body}`);
  }
}