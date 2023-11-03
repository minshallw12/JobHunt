import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:8000/",
        supportFile: false,
    },
    viewportWidth:1024,
    viewportHeight:768,
    video:false,
})