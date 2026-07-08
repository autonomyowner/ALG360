---
name: Algeria 360
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c0c8c2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b938d'
  outline-variant: '#414944'
  surface-tint: '#a2d1b9'
  primary: '#a2d1b9'
  on-primary: '#083827'
  primary-container: '#0d3b2a'
  on-primary-container: '#79a68f'
  inverse-primary: '#3c6753'
  secondary: '#4bddb7'
  on-secondary: '#00382b'
  secondary-container: '#02b894'
  on-secondary-container: '#004233'
  tertiary: '#eac349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#beedd4'
  primary-fixed-dim: '#a2d1b9'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#234f3c'
  secondary-fixed: '#6dfad2'
  secondary-fixed-dim: '#4bddb7'
  on-secondary-fixed: '#002018'
  on-secondary-fixed-variant: '#005140'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies a premium, "Cinematic Modernism" aesthetic, specifically tailored for a high-fidelity digital ecosystem that bridges Algerian heritage with future-facing SaaS innovation. The brand personality is authoritative yet visionary, positioning itself as the definitive gateway for culture, investment, and national progress.

The visual direction utilizes a **Glassmorphic** layer architecture, where frosted surfaces represent transparency and modern governance, while deep, rich backgrounds evoke a sense of prestige and permanence. The UI should feel immersive, utilizing background blurs and subtle motion to create a "living" interface that resonates with both local citizens and international stakeholders.

## Colors
The palette is rooted in a "Deep Emerald Nocturne." The primary **Dark Green (#0D3B2A)** serves as the foundational anchor, representing the nation's identity and stability. **Emerald Green (#00B894)** is used for high-action touchpoints and success states, providing a vibrant, modern energy.

**Gold (#D4AF37)** is applied sparingly as a prestige accent—reserved for premium membership indicators, specialized data highlights, and decorative borders. The background remains a near-true **Black (#0A0A0A)** to ensure the glass effects and emerald glows achieve maximum depth and cinematic contrast.

## Typography
The system employs a dual-language typographic strategy. For **Arabic (RTL)** headings, a structured, professional font provides a balance of tradition and clarity. For **French/English** and secondary technical text, a soft-geometric sans-serif is used to maintain a friendly, modern SaaS feel.

All titles should feature tight tracking and bold weights to command attention. Body text prioritizes legibility with generous line heights. Technical labels use a monospaced-adjacent font to evoke precision and a "data-driven" atmosphere.

## Layout & Spacing
The layout follows a **Fluid Cinematic Grid**. Unlike standard SaaS platforms, this design system encourages "breathing room"—large margins and substantial vertical gaps between sections to allow high-resolution imagery and maps to take center stage.

- **Desktop:** 12-column grid with a 1440px max-width. Large content "hero" areas should bleed to the edges or use 64px margins.
- **Mobile:** 4-column grid with 16px margins.
- **Rhythm:** Use an 8px base unit. Component internal padding should be generous (typically 24px or 32px) to support the premium feel.

## Elevation & Depth
Depth is created through **Backdrop Blurs (Glassmorphism)** rather than traditional drop shadows. 

1.  **Level 0 (Base):** Deep Dark Green or Black backgrounds.
2.  **Level 1 (Cards):** Semi-transparent white or green fill (5-10% opacity) with a 20px - 40px backdrop blur and a thin 1px white border at 10% opacity.
3.  **Level 2 (Modals/Popovers):** Higher opacity glass with a subtle "Emerald Glow" (a soft #00B894 outer shadow with 40px spread at low 0.1 opacity).
4.  **Premium Level:** Elements featuring a Gold (#D4AF37) linear-gradient border to signify exclusive content.

## Shapes
The system uses **Rounded (0.5rem)** corners as a default to maintain a professional, sophisticated edge. 

- **Standard Elements:** 8px (0.5rem) radius for buttons and small inputs.
- **Large Cards/Modals:** 16px (1rem) radius to soften the high-contrast visuals.
- **Interactive Map Elements:** 24px (1.5rem) or fully pill-shaped for floating controls to distinguish them from structural content.

## Components
- **Netflix-style Carousels:** Horizontal scrolling containers with no visible scrollbars. Items feature a subtle scale-up effect (1.05x) on hover with a glowing emerald border.
- **Glassmorphic Cards:** Used for news and statistics. Content is layered over blurred backgrounds with high-contrast white text. 
- **Interactive Maps:** Dark-themed base tiles with Emerald Green (#00B894) data points. Hovering over a region triggers a glassmorphic tooltip.
- **Premium Membership Cards:** These feature a subtle animated gradient "shimmer" effect using Gold (#D4AF37) and a more pronounced 1.5rem corner radius.
- **Buttons:**
    - *Primary:* Solid Emerald Green with white text.
    - *Secondary:* Glassmorphic (blurred background) with a 1px white border.
    - *Premium:* Dark Green background with a Gold border and Gold text.
- **Inputs:** Dark, recessed backgrounds with an Emerald focus ring. Labels are always positioned above the field for RTL/LTR clarity.