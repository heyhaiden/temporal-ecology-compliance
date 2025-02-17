import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Contact = () => {
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible."
    });
  };
  return <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-align: center">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Schedule a call or send us a message. We're here to help with any questions about our solutions.
          </p>

          <Tabs defaultValue="calendar" className="mt-16">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="calendar">Schedule a Call</TabsTrigger>
              <TabsTrigger value="message">Send a Message</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calendar" className="mt-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="calendly-inline-widget" data-url="https://calendly.com/d/yg5-nrp-dgk/30min" style={{
                minWidth: '320px',
                height: '700px'
              }} />
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </div>
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
    </div>;
};
export default Contact;