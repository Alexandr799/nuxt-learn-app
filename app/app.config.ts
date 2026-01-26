import { defineAppConfig } from "#imports";

export default defineAppConfig({
  API_URL: "http://localhost:3000/",
  imports: {
    autoImport: false, // Disables auto-import for composables and utilities
  },
});
