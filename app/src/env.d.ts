/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  /** Destination mailbox for form submissions. Defaults to kita@kids-bonn.de. */
  readonly MAIL_TO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
