import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // light: {
        //   primary: "#7e04ff",
        //   "primary-content": "#e1d9ff",
        //   secondary: "#00b900",
        //   "secondary-content": "#000d00",
        //   accent: "#2ac300",
        //   "accent-content": "#010e00",
        //   neutral: "#1e0708",
        //   "neutral-content": "#cec6c6",
        //   "base-100": "#e6ffff",
        //   "base-200": "#c8dede",
        //   "base-300": "#abbebe",
        //   "base-content": "#043840",
        //   info: "#008dff",
        //   "info-content": "#000716",
        //   success: "#00b18b",
        //   "success-content": "#000c07",
        //   warning: "#dab200",
        //   "warning-content": "#110c00",
        //   error: "#cc001c",
        //   "error-content": "#fcd6d1",
        // },
        light: {
          primary: "#e70905", // Updated primary color (reddish-brown)
          "primary-content": "#ffedec", // White content for readability on primary color
          secondary: "#72e705", // A complementary secondary color (Greenish)
          "secondary-content": "#000000", // White content for readability
          accent: "#F4A300", // A warm accent color (Golden yellow)
          "accent-content": "#ffffff", // White content for accent color readability
          neutral: "#2D2D2D", // A darker neutral color for background and contrasts
          "neutral-content": "#D1D1D1", // Light content for neutral color
          "base-100": "#F9F9F9", // Light background color (Very light gray)
          "base-200": "#F5F5F5", // Slightly darker background color (light gray)
          "base-300": "#D1D1D1", // Even darker background shade
          "base-content": "#2A2A2A", // Dark text color on base background
          info: "#2196F3", // Blue for info (standard blue)
          "info-content": "#ffffff", // White content for info
          success: "#05e705", // Green for success
          "success-content": "#000000", // White content for success
          warning: "#e7e705", // Orange for warning
          "warning-content": "#000000", // White content for warning
          error: "#e70505", // Red for error (slightly darker red for distinction)
          "error-content": "#ffecec", // White content for error
        },
        
      },
      // "dark", // Default dark theme
      {
        dark: {
          primary: "#e70905",
          "primary-content": "#ffedec",
          secondary: "#72e705",
          "secondary-content": "#000000",
          accent: "#67b400",
          "accent-content": "#040c00",
          neutral: "#0f0101",
          "neutral-content": "#cac3c2",
          "base-100": "#1b3331",
          "base-200": "#162b29",
          "base-300": "#112322",
          "base-content": "#cdd2d2",
          info: "#00b7ff",
          "info-content": "#000c16",
          success: "#05e705",
          "success-content": "#051200",
          warning: "#e7e705",
          "warning-content": "#160b02",
          error: "#e70505",
          "error-content": "#160406",
        },
      },
      {
        mytheme: {
          // Your custom theme
          primary: "#e000ff",
          secondary: "#00bf00",
          accent: "#0087e1",
          neutral: "#29242e",
          "base-100": "#332024",
          info: "#00a5ff",
          success: "#00ff65",
          warning: "#ff8c00",
          error: "#f9003c",
        },
      },
    ],
  },
} satisfies Config;
