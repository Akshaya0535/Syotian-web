import React from "react";

const LAST_UPDATED = "August 22, 2026";

export default function Terms() {
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
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: {LAST_UPDATED}</p>

        <div className="mt-10 space-y-10 text-[15px] leading-7 text-zinc-700">
          <Section title="1. About Syotian">
            <p>
              Syotian (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a
              software development studio that designs and builds web and mobile
              applications, infrastructure, and related digital products for
              clients. These Terms of Service (&ldquo;Terms&rdquo;) govern your use
              of syotian.app and any applications, tools, or services we build and
              operate on behalf of ourselves or our clients (collectively, the
              &ldquo;Services&rdquo;).
            </p>
          </Section>

          <Section title="2. Acceptance of terms">
            <p>
              By accessing or using our Services, you agree to be bound by these
              Terms. If you do not agree, please do not use the Services. We may
              update these Terms from time to time; continued use after changes
              take effect constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="3. Use of the Services">
            <p>You agree to use the Services only for lawful purposes. You agree not to:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Use the Services to send unsolicited or unlawful communications</li>
              <li>Attempt to gain unauthorized access to any system or data</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Use the Services to violate any applicable law or regulation</li>
            </ul>
          </Section>

          <Section title="4. Client engagements">
            <p>
              Where Syotian builds or operates applications on behalf of a client
              (for example, an ordering or admin platform for a client&rsquo;s
              business), the specific scope, deliverables, and commercial terms of
              that engagement are governed by a separate written agreement between
              Syotian and the client. These Terms apply generally to any
              end-user-facing product built by Syotian, in addition to any
              client-specific terms presented within that product.
            </p>
          </Section>

          <Section title="5. Accounts">
            <p>
              Some Services may require you to create an account. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activity under your account. Notify us
              promptly if you suspect unauthorized use of your account.
            </p>
          </Section>

          <Section title="6. Intellectual property">
            <p>
              Unless otherwise agreed in writing, all software, designs, and
              content created by Syotian remain the property of Syotian or the
              relevant client, as applicable under the governing service
              agreement. You may not copy, modify, or redistribute any part of the
              Services without prior written permission.
            </p>
          </Section>

          <Section title="7. Disclaimer of warranties">
            <p>
              The Services are provided &ldquo;as is&rdquo; without warranties of
              any kind, whether express or implied. We do not guarantee that the
              Services will be uninterrupted, error-free, or completely secure.
            </p>
          </Section>

          <Section title="8. Limitation of liability">
            <p>
              To the fullest extent permitted by law, Syotian shall not be liable
              for any indirect, incidental, or consequential damages arising from
              your use of the Services.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              Questions about these Terms can be sent to{" "}
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