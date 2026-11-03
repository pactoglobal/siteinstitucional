/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Pátria v6.0 — High-End Editorial Palette */
        paper: '#050505',
        'paper-2': '#0D0E0E',
        'paper-3': '#141617',
        ink: '#F3F4F6',
        'ink-2': '#D1D5DB',
        'ink-3': '#9CA3AF',
        'ink-4': '#6B7280',
        'ink-5': '#4B5563',
        leaf: '#00E676',        /* Verde Amazônia Tech */
        atlantic: '#2979FF',     /* Azul Atlântico Deep */
        sun: '#FFD600',          /* Amarelo Ouro Solar */
        clay: '#FF1744',         /* Error/alert */
        orange: '#FF9100',       /* Warning/in-progress */
        border: 'rgba(255,255,255,0.04)',
        'border-strong': 'rgba(255,255,255,0.10)',
        'border-focus': 'rgba(255,255,255,0.20)',

        /* Legacy aliases — mantidos para compatibilidade */
        'un-blue': '#2979FF',
        'un-blue-1': '#1A5FD6',
        'un-blue-2': '#0D3FA3',
        'un-blue-3': '#07265A',
        'un-green': '#00E676',
        'un-green-1': '#00B85E',
        'un-green-2': '#008F47',
        'un-green-3': '#006631',
        'un-gold': '#FFD600',
        'un-gold-1': '#E6BF00',
        'un-gold-2': '#CC9D00',
        'un-gold-3': '#997600',
        'un-purple': '#6E417A',
        'un-surface': '#F8F9FA',
        'un-footer': '#0F2942',
        'un-footer-accent': '#CCB146',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Antonio', 'Impact', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'monospace'],
        /* Legacy */
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-lg': ['3.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-md': ['2.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-sm': ['1.75rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-xs': ['1.25rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '900' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-md': ['1.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-sm': ['1rem', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '300' }],
        'body-md': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
        'micro': ['0.625rem', { lineHeight: '1.5', fontWeight: '700' }],
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        'pill': '9999px',
      },
      boxShadow: {
        'glass': '0 24px 60px -30px rgba(0,0,0,0.65)',
        'card': '0 8px 30px -10px rgba(10,25,47,0.15)',
        'card-hover': '0 20px 40px -15px rgba(10,25,47,0.25)',
        'modal': '0 40px 80px -20px rgba(0,0,0,0.8)',
        'glow-verde': '0 0 40px -10px rgba(0,230,118,0.4)',
        'glow-azul': '0 0 40px -10px rgba(41,121,255,0.4)',
        'glow-amarelo': '0 0 40px -10px rgba(255,214,0,0.4)',
      },
      transitionDuration: {
        'press': '80ms',
        'release': '240ms',
        'hover': '200ms',
        'reveal': '800ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-out': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      gridTemplateColumns: {
        '17': 'repeat(17, minmax(0, 1fr))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'ring-in': 'ringIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'glow-pulse': 'glowPulse 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 90s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(28px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        ringIn: {
          '0%': { opacity: '0', transform: 'scale(0.82)' },
          '100%': { opacity: '0.9', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        spinSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-verde-aurora': 'linear-gradient(135deg, #00E676 0%, #00B85E 100%)',
        'gradient-azul-aurora': 'linear-gradient(135deg, #2979FF 0%, #1A5FD6 100%)',
        'gradient-amarelo-aurora': 'linear-gradient(135deg, #FFD600 0%, #E6BF00 100%)',
        'gradient-empresa': 'linear-gradient(135deg, rgba(0,230,118,0.15) 0%, rgba(0,184,94,0.05) 100%)',
        'gradient-prefeitura': 'linear-gradient(135deg, rgba(41,121,255,0.15) 0%, rgba(26,95,214,0.05) 100%)',
        'gradient-ods': 'linear-gradient(135deg, rgba(255,214,0,0.15) 0%, rgba(230,191,0,0.05) 100%)',
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}