tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                // Brand — Emerald
                "primary": "#1F5C2E",
                "primary-dark": "#1B5E20",
                "primary-light": "#EDF5ED",
                "primary-muted": "#B8D8B8",
                "primary-container": "#1F5C2E",
                "on-primary": "#ffffff",
                "on-primary-container": "#ffffff",

                // Secondary — Sage
                "secondary": "#4A8C4A",
                "secondary-dark": "#2C5F2E",
                "secondary-light": "#F2F7F2",
                "secondary-muted": "#D8E8D8",
                "on-secondary": "#ffffff",

                // Tertiary — Forest Dark
                "tertiary": "#1A2A1A",
                "tertiary-mid": "#2D4A2D",
                "tertiary-light": "#EDF5ED",
                "on-tertiary": "#ffffff",

                // Neutral — Forest Gray
                "ink": "#1A2A1A",
                "body": "#2D4A2D",
                "muted": "#3A5A3A",
                "subtle": "#8AAA8A",
                "border": "#E8EDE8",
                "surface": "#F5F9F5",
                "white": "#FFFFFF",
                "background": "#FFFFFF",
                "on-background": "#1A2A1A",
                "on-surface": "#1A2A1A",
                "on-surface-variant": "#2D4A2D",
                "surface-bright": "#FFFFFF",
                "surface-dim": "#E8EDE8",
                "surface-container-lowest": "#FFFFFF",
                "surface-container-low": "#F9FAFB",
                "surface-container": "#F5F9F5",
                "surface-container-high": "#E8EDE8",
                "surface-container-highest": "#D1D5DB",
                "outline": "#8AAA8A",
                "outline-variant": "#E8EDE8",

                // Functional
                "success": "#1F5C2E",
                "warning": "#F57F17",
                "error": "#DC2626",
                "on-error": "#ffffff",
                "info": "#1B5E20"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "10px",
                "xl": "14px",
                "full": "9999px"
            },
            "spacing": {
                "unit": "8px",
                "space-sm": "16px",
                "container-max": "1280px",
                "section-padding": "80px",
                "space-lg": "48px",
                "space-xs": "8px",
                "space-md": "24px",
                "space-xl": "80px",
                "gutter-desktop": "80px"
            },
            "fontFamily": {
                "label-md": ["DM Sans", "sans-serif"],
                "caption": ["DM Sans", "sans-serif"],
                "headline-section": ["Bricolage Grotesque", "sans-serif"],
                "body-lg": ["DM Sans", "sans-serif"],
                "body-md": ["DM Sans", "sans-serif"],
                "headline-section-mobile": ["Bricolage Grotesque", "sans-serif"],
                "display-hero": ["Bricolage Grotesque", "sans-serif"],
                "display-hero-mobile": ["Bricolage Grotesque", "sans-serif"]
            },
            "fontSize": {
                "label-md": ["14px", {"lineHeight": "1.4", "fontWeight": "500"}],
                "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "400"}],
                "headline-section": ["36px", {"lineHeight": "1.3", "fontWeight": "600"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "headline-section-mobile": ["28px", {"lineHeight": "1.3", "fontWeight": "600"}],
                "display-hero": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                "display-hero-mobile": ["40px", {"lineHeight": "1.2", "fontWeight": "800"}]
            }
        }
    }
}
