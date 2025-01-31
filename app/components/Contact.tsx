"use client"; // This line makes the component a Client Component

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactProps {
  title: string
  description: string
}

export default function Contact({ title, description }: ContactProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const response = await fetch('https://script.google.com/macros/s/AKfycbzupU4Hpuuj6Nulg0hh4xMIfTF6lGiKZlRnIDZ_HYvGYbtENP2TA2xAtFM6vNpbPD0c/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.result === "Success") {
      alert("Message sent successfully!");
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-900">{title}</h2>
        <p className="text-lg md:text-xl mb-8 text-center text-purple-800">{description}</p>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input name="name" type="text" placeholder="Your Name" className="w-full bg-white bg-opacity-80 backdrop-blur-sm" />
          </div>
          <div>
            <Input name="email" type="email" placeholder="Your Email" className="w-full bg-white bg-opacity-80 backdrop-blur-sm" />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              className="w-full min-h-[150px] bg-white bg-opacity-80 backdrop-blur-sm"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-900 text-white hover:bg-purple-800">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

