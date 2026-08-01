const KIT_FORM_ID = process.env.KIT_FORM_ID || "9737611";
const KIT_API_URL = `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;

  try {
    ({ email } = (await request.json()) as { email?: unknown });
  } catch {
    return Response.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json({ message: "Enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    console.error("Newsletter signup is unavailable: KIT_API_KEY is not configured.");
    return Response.json({ message: "Signup is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const response = await fetch(KIT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({ email_address: email.trim().toLowerCase() }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Kit subscription failed with status ${response.status}.`);
      return Response.json({ message: "We couldn’t complete your signup. Please try again." }, { status: 502 });
    }

    return Response.json({ message: "You’re subscribed. Check your inbox to confirm." });
  } catch (error) {
    console.error("Kit subscription request failed.", error);
    return Response.json({ message: "We couldn’t complete your signup. Please try again." }, { status: 502 });
  }
}
