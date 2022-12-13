import { defineConfig } from "afterthoughts-cli";

const siteName = "afterthoughts.";

export default defineConfig({
    site: {
        title: siteName,
        navigation: {
            [siteName]: "/",
            "archive": "/archive",
        }
    }
});
