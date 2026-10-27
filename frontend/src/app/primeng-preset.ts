import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/**
 * Aura preset re-keyed to the Interact Suite brand (see src/styles/_tokens.scss).
 * Primary = brand purple (#45329E); buttons and toasts follow the rounded system.
 */
export const ConsentIqPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#F3F0FB',
      100: '#E4E0F2',
      200: '#C9C0E6',
      300: '#A597D4',
      400: '#7D6BBF',
      500: '#45329E',
      600: '#3D2C8C',
      700: '#34257A',
      800: '#2E1475',
      900: '#241060',
      950: '#170A40',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
      },
    },
  },
  components: {
    button: {
      root: {
        paddingX: '1.25rem',
        paddingY: '0.625rem',
        gap: '0.5rem',
        label: { fontWeight: '700' },
      },
    },
    toast: {
      root: {
        width: '24rem',
        borderRadius: '16px',
        borderWidth: '1px',
      },
      content: { padding: '0.875rem 1rem', gap: '0.75rem' },
      text: { gap: '0.25rem' },
      summary: { fontWeight: '700', fontSize: '0.9375rem' },
      detail: { fontWeight: '500', fontSize: '0.8125rem' },
      icon: { size: '1.25rem' },
      closeButton: { width: '2rem', height: '2rem', borderRadius: '999px' },
      closeIcon: { size: '1rem' },
      colorScheme: {
        light: {
          root: { blur: '0' },
        },
      },
    },
  },
});
