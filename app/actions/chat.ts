"use server";

interface Message {
  role: string;
  content: string;
}

export async function sendChatMessage(messages: Message[]) {
  if (!messages || !Array.isArray(messages)) {
    return { success: false, error: "Invalid message history format." };
  }

  const apiUrl = process.env.CHATBOT_API_URL || "http://127.0.0.1:8000/chat";

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Chatbot API responded with status ${res.status}: ${res.statusText}`);
      return {
        success: false,
        error: "The Concierge service is temporarily unavailable. Please try again shortly.",
      };
    }

    const data = await res.json();
    
    if (!data || typeof data.reply !== "string") {
      console.error("Chatbot API returned invalid format:", data);
      return {
        success: false,
        error: "Received an unexpected response format from the Concierge.",
      };
    }

    return { success: true, reply: data.reply };
  } catch (error) {
    console.error("Failed to connect to Chatbot API:", error);
    return {
      success: false,
      error: "Unable to reach the Concierge. Please check your network connection and try again.",
    };
  }
}
