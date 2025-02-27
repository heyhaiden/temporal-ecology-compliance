
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("calendar");
  
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Refresh Calendly when switching back to the calendar tab
    if (activeTab === "calendar") {
      const calendlyWidget = document.querySelector('.calendly-inline-widget');
      if (calendlyWidget) {
        const url = calendlyWidget.getAttribute('data-url');
        if (url) {
          calendlyWidget.setAttribute('data-url', url);
        }
      }
    }

    return () => {
      // Only remove if the app is unmounting, not on tab switch
      if (!document.body.contains(script)) return;
      document.body.removeChild(script);
    };
  }, [activeTab]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible."
    });
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl"> {/* Increased max width from 2xl to 3xl */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Schedule a call or send us a message. We're here to help with any questions about our solutions.
          </p>

          <Tabs defaultValue="calendar" className="mt-16" onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calendar">Schedule a Call</TabsTrigger>
              <TabsTrigger value="message">Send a Message</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calendar" className="mt-6">
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget rounded-lg overflow-hidden" 
                data-url="https://calendly.com/temporal-ai/new-meeting" 
                style={{ minWidth: "320px", height: "600px" }} // Reduced height from 700px to 600px
              />
              {/* Calendly inline widget end */}
            </TabsContent>
            
            <TabsContent value="message">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <Input type="text" id="name" name="name" required placeholder="Your name" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <Input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={6} required placeholder="How can we help you?" className="w-full" />
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Send Message
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Contact;
