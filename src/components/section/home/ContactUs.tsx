"use client";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { toast } from "sonner";
const ContactUsSection = () => {
  const [subject, setSubject] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("subject", subject);

    fetch("https://formspree.io/f/xkgjwajj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Form submitted successfully!");
      })
      .catch(() => {
        alert("Error submitting form.");
      });
  };

  return (
    <section className="bg-[#2563EB] p-5 md:p-20">
      <div>
        <div>
          <h2 className="text-2xl md:text-4xl text-white font-bold text-center mb-3">
            Ready to Partner with Us?
          </h2>
          <p className="text-sm md:text-base text-white text-center mb-8">
            Get premium coconut and palm cooking oil for your business. Let&apos;s
            discuss your needs!
          </p>
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="bg-white text-[#2563EB] hover:bg-accent cursor-pointer"
                  size={"lg"}
                >
                  Contact Us Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm lg:w-2xl">
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    Get in touch for premium coconut and palm cooking oil!
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4">
                    <div className="w-full grid gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="w-full grid gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="w-full grid gap-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="w-full grid gap-1.5">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div className="w-full grid gap-1.5">
                      <Label htmlFor="company">Subject</Label>
                      <Select onValueChange={(value) => setSubject(value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Inquiry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bulk Order">Bulk Order</SelectItem>
                          <SelectItem value="Partnership">
                            Partneship
                          </SelectItem>
                          <SelectItem value="Export Inquiry">
                            Export Inquiry
                          </SelectItem>
                          <SelectItem value="Product Information">
                            Product Information
                          </SelectItem>
                          <SelectItem value="Pricing Request">
                            Pricing Request
                          </SelectItem>
                          <SelectItem value="General Inquiry">
                            General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-full grid gap-1.5">
                      <Label htmlFor="company">Message</Label>
                      <Textarea
                        name="message"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="cursor-pointer hover:bg-primary/90"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
