"use client";

import { useState } from "react";
import { App, Button, Form, Input } from "antd";
import { submitContactMessage } from "@/lib/contact";
import type { ContactFormValues } from "@/types/portfolio";

export default function ContactForm() {
  const [form] = Form.useForm<ContactFormValues>();
  const { message } = App.useApp();
  const [submitting, setSubmitting] = useState(false);
  const hasEndpoint = Boolean(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT);

  const onFinish = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      const result = await submitContactMessage(values);
      if (result.status === "sent") {
        message.success("Thank you — your message has been sent.");
        form.resetFields();
      } else {
        message.info(
          "Your email app should now open with a draft. The message is only sent once you send it from there.",
          6,
        );
      }
    } catch {
      message.error(
        "Sorry, the message could not be sent. Please email directly using the address shown.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form<ContactFormValues>
      form={form}
      layout="vertical"
      requiredMark={false}
      onFinish={onFinish}
      autoComplete="on"
      size="large"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          { required: true, message: "Please enter your name." },
          { max: 100, message: "Name is too long." },
        ]}
      >
        <Input placeholder="Your name" autoComplete="name" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please enter your email address." },
          { type: "email", message: "Please enter a valid email address." },
        ]}
      >
        <Input placeholder="you@example.com" autoComplete="email" inputMode="email" />
      </Form.Item>

      <Form.Item
        name="message"
        label="Message"
        rules={[
          { required: true, message: "Please write a message." },
          { min: 10, message: "Please write at least 10 characters." },
          { max: 2000, message: "Message is too long (2000 characters maximum)." },
        ]}
      >
        <Input.TextArea rows={5} placeholder="How can I help?" showCount maxLength={2000} />
      </Form.Item>

      <Button type="primary" htmlType="submit" shape="round" loading={submitting} block>
        {hasEndpoint ? "Send Message" : "Compose Email"}
      </Button>

      <p className="mt-3 text-xs leading-relaxed text-slate">
        {hasEndpoint
          ? "Your message is sent to Vaishnav through the contact service."
          : "This form doesn’t send messages itself — it opens your email app with a draft addressed to Vaishnav."}
      </p>
    </Form>
  );
}
