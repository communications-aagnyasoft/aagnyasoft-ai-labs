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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); // Start loading
    setSubmitted(false);
    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycby4wWXZDjDnmoLpDG-gEOBtsYcZFQKc_u_akAS_pEI0NigaCN5y4QCrW9b5n7TKv8lK/exec',
        {
          method: 'POST',
          mode: 'no-cors', // This prevents CORS errors
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(data as Record<string, string>).toString(),
        }
      );

      // Since we're using no-cors mode, we won't get a readable response
      // We'll assume success if we get here
      form.reset();
      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        variant: "default",
      });

      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 2000); // Reset the button text after 2 seconds
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
            {loading ? "Sending..." : submitted ? "Sent!" : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
