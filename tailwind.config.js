export default {
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
}
