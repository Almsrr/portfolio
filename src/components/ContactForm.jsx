import React from "react";

import { useForm } from "react-hook-form";
import classNames from "classnames";

export default function ContactForm({ isDarkTheme }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formClassName = classNames("contact-form", {
    "light": !isDarkTheme,
    "dark": isDarkTheme,
  });

  const submit = (data, event) => {
    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => reset())
      .catch((error) => console.log(error.message));
  };

  return (
    <form
      className={formClassName}
      name="contact"
      onSubmit={handleSubmit(submit)}
      netlify
    >
      <div className="input-container">
        <div className="control name-control">
          <label htmlFor="name">Name</label>
          <input
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
