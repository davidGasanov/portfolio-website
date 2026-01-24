import { useState } from "react";
import Button from "../../components/button";
import { Input } from "../../components/Input";
import { contactSchema, type ContactFormValues } from "./contact.schema";
import { Form, Formik } from "formik";
import { zodToFormik } from "../../utils/zod-to-formik";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: MdEmail,
    href: "mailto:your.email@example.com",
    label: "Email",
  },
  {
    icon: FaPhone,
    href: "tel:+1234567890",
    label: "Phone",
  },
];

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mqeeqnyq", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className=" md:w-[520px]
    relative overflow-hidden rounded-3xl
    border border-white/10
    bg-linear-to-br from-dark-secondary/30 via-dark-secondary/10 to-transparent
    p-4 md:p-8
    backdrop-blur
  "
    >
      {/* Soft ambient glow */}
      <div
        className="
      pointer-events-none absolute inset-0
      bg-[radial-gradient(
        600px_circle_at_50%_0%,
        rgba(252,163,17,0.08),
        transparent_60%
      )]
    "
      />
      <div className="flex items-center gap-2 mb-4 text-light-primary/85">
        <MdEmail />
        <h3 className="uppercase leading-0">Contact form</h3>
      </div>

      <Formik<ContactFormValues>
        initialValues={initialValues}
        validate={zodToFormik(contactSchema)}
        onSubmit={async (values, { resetForm }) => {
          try {
            const res = await fetch("https://formspree.io/f/mqeeqnyq", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

            if (!res.ok) throw new Error();
            setStatus("success");
            resetForm();
          } catch {
            setStatus("error");
          }
        }}
      >
        {({
          isSubmitting,
          status,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form className="relative z-10 flex flex-col gap-4">
            <Input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              placeholder="Full name"
              error={touched.name ? errors.name : undefined}
            />
            <>{console.log(status)}</>
            <Input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              type="email"
              placeholder="Email"
              error={touched.email ? errors.email : undefined}
            />

            <Input
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              name="subject"
              placeholder="Subject"
              error={touched.subject ? errors.subject : undefined}
            />

            <Input
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              name="message"
              as="textarea"
              placeholder="Message"
              error={touched.message ? errors.message : undefined}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>

            {status === "success" && (
              <p className="text-sm text-green-500">
                Thanks! I’ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </Form>
        )}
      </Formik>

      {status === "success" && (
        <p className="mt-2 text-sm text-green-600">
          Thanks! I’ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-2 text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="mt-4 text-xs font-light text-white/40">
        * Usually replies within 24 hours
      </p>
    </section>
  );
};

export default ContactForm;
