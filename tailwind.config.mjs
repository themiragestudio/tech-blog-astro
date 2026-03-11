/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        mirage: {
          purple: '#7C3AED',
          blue: '#3B82F6',
          dark: '#0F172A',
          gray: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: theme('colors.gray.700'),
            'h1, h2, h3, h4': {
              color: theme('colors.gray.900'),
              fontWeight: '700',
            },
            a: {
              color: theme('colors.brand.600'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.brand.700'),
                textDecoration: 'underline',
              },
            },
            code: {
              color: theme('colors.gray.800'),
              backgroundColor: theme('colors.gray.100'),
              borderRadius: theme('borderRadius.sm'),
              padding: '0.125rem 0.25rem',
              fontWeight: '400',
              '&::before, &::after': {
                content: 'none',
              },
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              borderRadius: theme('borderRadius.lg'),
              padding: '1.5rem',
              overflowX: 'auto',
            },
            blockquote: {
              borderLeftColor: theme('colors.brand.500'),
              color: theme('colors.gray.600'),
              fontStyle: 'normal',
              fontWeight: '400',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1, h2, h3, h4': {
              color: theme('colors.white'),
            },
            a: {
              color: theme('colors.brand.400'),
              '&:hover': {
                color: theme('colors.brand.300'),
              },
            },
            code: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
            },
            pre: {
              backgroundColor: theme('colors.gray.950'),
              color: theme('colors.gray.200'),
            },
            blockquote: {
              borderLeftColor: theme('colors.brand.400'),
              color: theme('colors.gray.400'),
            },
            strong: {
              color: theme('colors.white'),
            },
            'thead th': {
              color: theme('colors.white'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.700'),
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

