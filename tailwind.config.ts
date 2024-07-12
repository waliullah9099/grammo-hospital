/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // text color  declaration
      textColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        secondary: {
          base: `var(--color-secondary-base)`,
        },
        info: {
          base: `var(--color-info-base)`,
          muted: `var(--color-info-muted)`,
        },
        warning: {
          base: `var(--color-warning-base)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
        black: {
          base: `var(--color-black-base)`,
          muted: `var(--color-black-muted)`,
        },
      },
      // background color  declaration
      backgroundColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        secondary: {
          base: `var(--color-secondary-base)`,
          muted: `var(--color-info-muted)`,
        },
        info: {
          base: `var(--color-info-base)`,
        },
        warning: {
          base: `var(--color-warning-base)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
        black: {
          base: `var(--color-black-base)`,
        },
      },
      // border color  declaration
      borderColor: {
        primary: {
          base: `var(--color-primary-base)`,
        },
        secondary: {
          base: `var(--color-secondary-base)`,
        },
        info: {
          base: `var(--color-info-base)`,
          muted: `var(--color-info-muted)`,
        },
        warning: {
          base: `var(--color-warning-base)`,
        },
        danger: {
          base: `var(--color-danger-base)`,
        },
        success: {
          base: `var(--color-success-base)`,
        },
        neutral: {
          base: `var(--color-neutral-base)`,
          muted: `var(--color-neutral-muted)`,
        },
      },

      boxShadow: {
        custom: "0px 20.8px 39px rgba(0, 0, 0, 0.1)",
        "custom-multiple":
          "0 -17px 20px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        small: "0 1px 2px 0 rgba(0, 0, 0, 0.075)",
        "small-negative": "0 -3px 2px 0 rgba(0, 0, 0, 0.075)",
      },
    },
  },
  plugins: [],
};
