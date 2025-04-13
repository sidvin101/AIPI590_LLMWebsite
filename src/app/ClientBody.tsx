"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div>
      {/* Main content */}
      {children}

      {/* Dialogflow Messenger (pop-up in the corner) */}
      <df-messenger
        project-id="capstone-449418"
        agent-id="7ac5bb1e-d05d-4298-a0be-f3c37a5033f2"
        language-code="en"
        max-query-length="-1"
      >
        <df-messenger-chat chat-title="Duke Chatbot"></df-messenger-chat>
      </df-messenger>
    </div>
  );
}
