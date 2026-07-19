"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { getInvolvedPage } from "@/content/siteContent";

type FormCopy = typeof getInvolvedPage.form;
type Pathway = (typeof getInvolvedPage.pathways.entries)[number];
type FormStatus = "idle" | "submitting" | "success" | "error" | "validation";

interface InquiryFormProps {
  copy: FormCopy;
  pathways: readonly Pathway[];
  endpoint?: string;
  initialPath?: string;
  email: string;
}

interface FormValues {
  name: string;
  email: string;
  pathway: string;
  location: string;
  organization: string;
  message: string;
  website: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function InquiryForm({
  copy,
  pathways,
  endpoint,
  initialPath,
  email,
}: InquiryFormProps) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    pathway: initialPath ?? "",
    location: "",
    organization: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  if (!endpoint) {
    return (
      <div className="border-t border-line pt-7">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-walnut">
          {copy.states.missing.eyebrow}
        </p>
        <h3 className="mt-4 max-w-[18ch] font-display text-[clamp(1.65rem,2.7vw,2.25rem)] font-medium leading-[1.08] text-ink">
          {copy.states.missing.heading}
        </h3>
        <p className="mt-4 max-w-[58ch] font-sans text-sm leading-[1.75] text-ink-muted">
          {copy.states.missing.message}
        </p>
        <div className="mt-6 border-y border-line py-4">
          <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-walnut">
            {copy.states.missing.addressLabel}
          </span>
          <a
            href={`mailto:${email}`}
            className="mt-2 inline-block break-all font-display text-xl font-medium text-forest underline decoration-olive underline-offset-4 hover:text-walnut"
          >
            {email}
          </a>
        </div>
        <a
          href={`mailto:${email}`}
          className="mt-6 inline-flex h-12 items-center justify-center rounded-[14px] bg-forest px-6 font-sans text-[0.9375rem] font-medium text-cream hover:bg-forest-deep"
        >
          {copy.states.missing.cta}
        </a>
      </div>
    );
  }

  const formEndpoint = endpoint;

  function setField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === "validation") setStatus("idle");
  }

  function validate() {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = copy.fields.name.requiredError;
    if (!values.email.trim()) {
      nextErrors.email = copy.fields.email.requiredError;
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = copy.fields.email.formatError;
    }
    if (!pathways.some((pathway) => pathway.value === values.pathway)) {
      nextErrors.pathway = copy.fields.pathway.requiredError;
    }
    if (!values.message.trim()) {
      nextErrors.message = copy.fields.message.requiredError;
    }
    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("validation");
      requestAnimationFrame(() => {
        formRef.current
          ?.querySelector<HTMLElement>("[aria-invalid='true']")
          ?.focus();
      });
      return;
    }

    setStatus("submitting");
    const payload = new FormData(event.currentTarget);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) throw new Error("Form provider rejected the inquiry");

      setStatus("success");
      setErrors({});
      setValues({
        name: "",
        email: "",
        pathway: initialPath ?? "",
        location: "",
        organization: "",
        message: "",
        website: "",
      });
    } catch {
      setStatus("error");
    }
  }

  const describedBy = (field: keyof FormValues, help?: boolean) =>
    [help ? `${id}-${field}-help` : null, errors[field] ? `${id}-${field}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const inputClasses =
    "mt-2 min-h-12 w-full border border-line bg-ivory px-3.5 py-2.5 font-sans text-base text-ink outline-none focus:border-olive aria-[invalid=true]:border-walnut";

  return (
    <form
      ref={formRef}
      action={formEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="border-t border-line pt-7"
    >
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "validation" ? copy.states.validation : null}
        {status === "success" ? `${copy.states.success.heading} ${copy.states.success.message}` : null}
        {status === "error" ? `${copy.states.error.heading} ${copy.states.error.message}` : null}
      </div>

      {status === "success" || status === "error" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          className={`mb-7 border-l-2 px-5 py-4 outline-none ${status === "success" ? "border-olive bg-parchment" : "border-walnut bg-cream"}`}
        >
          <h3 className="font-display text-xl font-medium text-ink">
            {status === "success"
              ? copy.states.success.heading
              : copy.states.error.heading}
          </h3>
          <p className="mt-1 font-sans text-sm leading-[1.65] text-ink-muted">
            {status === "success"
              ? copy.states.success.message
              : copy.states.error.message}
          </p>
        </div>
      ) : null}

      {status === "validation" ? (
        <p className="mb-6 border-l-2 border-walnut pl-4 font-sans text-sm font-medium text-walnut">
          {copy.states.validation}
        </p>
      ) : null}

      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <Field label={copy.fields.name.label} error={errors.name} id={`${id}-name`}>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={inputClasses}
          />
        </Field>

        <Field
          label={copy.fields.email.label}
          help={copy.fields.email.help}
          error={errors.email}
          id={`${id}-email`}
        >
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email", true)}
            className={inputClasses}
          />
        </Field>

        <Field
          label={copy.fields.pathway.label}
          error={errors.pathway}
          id={`${id}-pathway`}
        >
          <select
            id={`${id}-pathway`}
            name="pathway"
            required
            value={values.pathway}
            onChange={(event) => setField("pathway", event.target.value)}
            aria-invalid={Boolean(errors.pathway)}
            aria-describedby={describedBy("pathway")}
            className={inputClasses}
          >
            <option value="">{copy.fields.pathway.placeholder}</option>
            {pathways.map((pathway) => (
              <option key={pathway.value} value={pathway.value}>
                {pathway.title}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label={copy.fields.location.label}
          help={copy.fields.location.help}
          id={`${id}-location`}
        >
          <input
            id={`${id}-location`}
            name="city_country"
            value={values.location}
            onChange={(event) => setField("location", event.target.value)}
            aria-describedby={describedBy("location", true)}
            className={inputClasses}
          />
        </Field>

        <Field
          label={copy.fields.organization.label}
          help={copy.fields.organization.help}
          id={`${id}-organization`}
          className="sm:col-span-2"
        >
          <input
            id={`${id}-organization`}
            name="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={(event) => setField("organization", event.target.value)}
            aria-describedby={describedBy("organization", true)}
            className={inputClasses}
          />
        </Field>

        <Field
          label={copy.fields.message.label}
          help={copy.fields.message.help}
          error={errors.message}
          id={`${id}-message`}
          className="sm:col-span-2"
        >
          <textarea
            id={`${id}-message`}
            name="message"
            rows={7}
            required
            value={values.message}
            onChange={(event) => setField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy("message", true)}
            className={inputClasses}
          />
        </Field>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-website`}>{copy.fields.honeypot.label}</label>
        <input
          id={`${id}-website`}
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => setField("website", event.target.value)}
        />
      </div>

      <p className="mt-6 border-t border-line pt-5 font-sans text-xs leading-[1.7] text-ink-muted">
        {copy.privacy}
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center rounded-[14px] bg-forest px-6 font-sans text-[0.9375rem] font-medium text-cream hover:bg-forest-deep disabled:cursor-wait disabled:opacity-60"
        >
          {status === "submitting" ? copy.submittingLabel : copy.submitLabel}
        </button>
        <p className="font-sans text-sm text-ink-muted">
          {copy.fallback.split(email)[0]}
          <a href={`mailto:${email}`} className="font-medium text-forest underline underline-offset-4">
            {email}
          </a>
          {copy.fallback.split(email)[1]}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  help,
  error,
  id,
  className,
  children,
}: {
  label: string;
  help?: string;
  error?: string;
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="font-sans text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {help ? (
        <p id={`${id.replace(/-(name|email|pathway|location|organization|message)$/, "")}-${id.split("-").at(-1)}-help`} className="mt-1.5 font-sans text-xs leading-[1.6] text-ink-muted">
          {help}
        </p>
      ) : null}
      {error ? (
        <p id={`${id.replace(/-(name|email|pathway|location|organization|message)$/, "")}-${id.split("-").at(-1)}-error`} className="mt-1.5 font-sans text-xs font-medium text-walnut">
          {error}
        </p>
      ) : null}
    </div>
  );
}
