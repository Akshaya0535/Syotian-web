import React from "react";

const LAST_UPDATED = "August 22, 2026";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <a
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors"
        >
          ← Back to Syotian
        </a>

        <h1 className="mt-8 text-3xl sm:text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-10 text-[15px] leading-7 text-zinc-700">
          <Section title="1. Overview">
            <p>
              This Privacy Policy explains how Syotian (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and protects
              information when you use syotian.app or any application we build
              and operate, including on behalf of our clients (collectively, the
              &ldquo;Services&rdquo;).
            </p>
          </Section>

          <Section title="2. Information we collect">
            <p>We collect information you provide directly, such as:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Name, email address, and phone number, when you create an account or contact us</li>
              <li>Order or transaction details, for applications that involve placing orders</li>
              <li>Messages you send to us, such as support or business inquiries</li>
            </ul>
            <p className="mt-3">
              We may also collect limited technical information automatically,
              such as device type, browser, and general usage data, to help us
              maintain and improve the Services.
            </p>
          </Section>

          <Section title="3. How we use information">
            <p>We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Provide, operate, and maintain the Services</li>
              <li>Send transactional emails, such as account verification, order confirmations, and status updates</li>
              <li>Respond to inquiries and provide support</li>
              <li>Monitor and improve reliability, security, and performance</li>
            </ul>
            <p className="mt-3">
              We do not send marketing or promotional email, and we do not sell
              or rent your personal information to third parties.
            </p>
          </Section>

          <Section title="4. Email communications">
            <p>
              We use third-party email delivery providers to send transactional
              messages on our behalf (for example, order notifications or account
              verification). These providers process message content solely to
              deliver it and are not permitted to use it for their own purposes.
            </p>
          </Section>

          <Section title="5. Data sharing">
            <p>
              We do not share your personal information with third parties except:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>With service providers who help us operate the Services (e.g., hosting, email delivery), under confidentiality obligations</li>
              <li>Where a client engagement requires sharing order or account data directly with that client to fulfill your request</li>
              <li>When required by law or to protect the rights, safety, or property of Syotian, our clients, or users</li>
            </ul>
          </Section>

          <Section title="6. Data retention">
            <p>
              We retain personal information only as long as necessary to provide
              the Services or as required by law, after which it is deleted or
              anonymized.
            </p>
          </Section>

          <Section title="7. Your choices">
            <p>
              You may request access to, correction of, or deletion of your
              personal information by contacting us at the email below.
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be reflected by updating the &ldquo;Last
              updated&rdquo; date above.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              Questions about this Privacy Policy can be sent to{" "}
              <a
                href="mailto:info@syotian.app"
                className="text-zinc-900 underline underline-offset-2 hover:text-zinc-600"
              >
                info@syotian.app
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}