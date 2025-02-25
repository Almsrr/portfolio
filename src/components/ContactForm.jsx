import React from "react";

import { useForm } from "react-hook-form";
import classNames from "classnames";
import { navigate } from "gatsby";

export default function ContactForm({ isDarkTheme }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formClassName = classNames("contact-form", {
    "light": !isDarkTheme,
    "dark": isDarkTheme,
  });

  const submit = async (_, event) => {
    const form = event.target;
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString(),
      });
      if (res.ok) {
        navigate(form.getAttribute("action"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className={formClassName}
      name="contact"
      action="/thank-you/"
      onSubmit={handleSubmit(submit)}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="input-container">
        <div className="control name-control">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Marcelo Erizo"
            {...register("name", { required: "The name is required" })}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>
        <div className="control email-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="marceloerizo@example.com"
            {...register("email", {
              required: "The email is required",
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="control message-control">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          {...register("message", { required: "The message is required" })}
          // rows={18}
        />
        {errors.message && (
          <p className="error-message">{errors.message.message}</p>
        )}
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}
