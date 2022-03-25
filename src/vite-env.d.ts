/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_KEY: string | undefined;
  readonly VITE_APP_AUTH_DOMAIN: string | undefined;
  readonly VITE_APP_DATABASE_URL: string | undefined;
  readonly VITE_APP_PROJECT_ID: string | undefined;
  readonly VITE_APP_STORAGE_BUCKET: string | undefined;
  readonly VITE_APP_MESSAGING_SENDER_ID: string | undefined;
  readonly VITE_APP_APP_ID: string | undefined;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
