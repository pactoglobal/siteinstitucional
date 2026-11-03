/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'un-blue': '#1E3250',
        'un-blue-1': '#4C6B8B',
        'un-blue-2': '#699CC6',
        'un-blue-3': '#AECFE6',
        'un-purple': '#6E417A',
        'un-green': '#297D6D',
        'un-gold': '#CCB146',
        'un-red': '#EC3740',
        'un-gray': '#F8F9FA',
        'un-surface': '#F6F8FB',
        'un-footer': '#0f2942',
        'un-footer-accent': '#1a5276'
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        display: ['Flama', 'Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '17': 'repeat(17, minmax(0, 1fr))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
