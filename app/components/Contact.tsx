"use client"; // This line makes the component a Client Component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast"; // Import toast hook

interface ContactProps {
  title: string;
  description: string;
}

export default function Contact({ title, description }: ContactProps) {
  const { toast } = useToast(); // Initialize toast
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // Start loading

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyrGN94IY6bVVboVXpFwcDpF3OXqexLvPivi4xKBsZsM_rApxer8q3MHQGazUEQQ6B8/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data as Record<string, string>).toString(),
        }
      );

      const result = await response.json();
      if (result.result === "Success") {
        toast({ title: "Success!", description: "Message sent successfully.", variant: "default" });
        event.currentTarget.reset(); // Reset form
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast({ title: "Error!", description: "Something went wrong. Try again later.", variant: "destructive" });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-900">{title}</h2>
        <p className="text-lg md:text-xl mb-8 text-center text-purple-800">{description}</p>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input name="name" type="text" placeholder="Your Name" required className="w-full bg-white bg-opacity-80 backdrop-blur-sm" />
          </div>
          <div>
            <Input name="email" type="email" placeholder="Your Email" required className="w-full bg-white bg-opacity-80 backdrop-blur-sm" />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full min-h-[150px] bg-white bg-opacity-80 backdrop-blur-sm"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-purple-900 text-white hover:bg-purple-800">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
