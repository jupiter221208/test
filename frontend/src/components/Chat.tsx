import { useState, useEffect, useRef } from "react";
import type { Message } from "../types/chat";
import { ChatApi } from "../services/chatApi";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Trash2, MessageSquare } from "lucide-react";

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await ChatApi.sendMessage(content, messages);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      console.error("Error sending message:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6" />
            <span>ChatPad</span>
          </CardTitle>
          {messages.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearChat}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Chat
            </Button>
          )}
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea ref={scrollAreaRef} className="flex-1 px-6">
            <div className="space-y-4 py-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                  <MessageSquare className="h-12 w-12 mb-4" />
                  <p className="text-lg font-medium">Welcome to ChatPad</p>
                  <p className="text-sm">
                    Start a conversation by typing a message below
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))
              )}

              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="flex max-w-[80%]">
                    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow bg-muted mr-2">
                      🤖
                    </div>
                    <Card className="px-4 py-3 bg-muted/50">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Thinking...
                        </span>
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {error && (
            <div className="px-6 py-2">
              <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
                <p className="text-sm text-destructive">
                  <strong>Error:</strong> {error}
                </p>
              </div>
            </div>
          )}

          <div className="p-6 pt-4">
            <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
