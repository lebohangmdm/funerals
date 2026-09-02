"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormValues,
} from "../../lib/validations/contact-form";
import { CardHeader, CardTitle, Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),

    defaultValues: {
      name: "",
      location: "",
      email: "",
      contact: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSuccess("");
    setError("");

    try {
      const formData = {
        access_key: "27d7a723-8ab3-4798-bcef-eec67def47e2",
        ...values,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Web3Forms raw response:", response);

      const data = await response.json();

      console.log("Web3Forms response:", data);

      if (data.success) {
        setSuccess("Message sent successfully!");
        reset();
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send message.");
    }
  };

  return (
    <Card className="rounded-sm bg-white border-none w-full mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8 lg:py-10">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-left font-bold mb-4 text-blue-500">
          Leave us a message and we’ll get back to you.
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex flex-col gap-5 md:gap-6"
        >
          {/* Name */}
          <div>
            <Input
              id="name"
              type="text"
              placeholder="Full Name"
              {...register("name")}
              required
              className="rounded-xs md:rounded-sm border-none md:h-11 px-2 md:px-4 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
              required
              className="rounded-xs md:rounded-sm border-none md:h-11 px-2 md:px-4 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Contact */}
          <div>
            <Input
              id="contact"
              type="tel"
              placeholder="Phone Number"
              {...register("contact")}
              required
              className="rounded-xs md:rounded-sm border-none md:h-11 px-2 md:px-4 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
            />
            {errors.contact && (
              <p className="text-sm text-destructive mt-1">
                {errors.contact.message}
              </p>
            )}
          </div>

          {/* Contact */}
          <div>
            <Input
              id="location"
              type="text"
              placeholder="Location"
              {...register("location")}
              required
              className="rounded-xs md:rounded-sm border-none md:h-11 px-2 md:px-4 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
            />
            {errors.location && (
              <p className="text-sm text-destructive mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Message (full width always) */}
          <div>
            <Textarea
              id="message"
              placeholder="Type your message..."
              rows={5}
              {...register("message")}
              required
              className="border-none rounded-xs md:rounded-sm md:h-11 min-h-30 resize-none py-2 px-2 md:py-3 md:px-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Button (full width always) */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-48 min-h-11 bg-blue-500 px-4 py-2 font-semibold text-white rounded-md transition-colors duration-150 hover:bg-blue-600 sm:w-52 sm:px-6 sm:py-3 lg:text-lg"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
            {success && (
              <p className="text-sm text-green-600 mt-4">{success}</p>
            )}

            {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
