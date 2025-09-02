import type { Message } from "../types/chat";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex max-w-[80%]",
          isUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow",
            isUser ? "ml-2 bg-primary text-primary-foreground" : "mr-2 bg-muted"
          )}
        >
          {isUser ? "👤" : "🤖"}
        </div>
        <Card
          className={cn(
            "px-4 py-3",
            isUser ? "bg-primary text-primary-foreground" : "bg-muted/50"
          )}
        >
          <div className="text-sm whitespace-pre-wrap">{message.content}</div>
          <div className="text-xs opacity-50 mt-2">
            {message.timestamp.toLocaleTimeString()}
          </div>
        </Card>
      </div>
    </div>
  );
}
