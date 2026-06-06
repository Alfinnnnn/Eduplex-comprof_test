tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                // Brand (Amber)
                "primary": "#C0853A",
                "primary-dark": "#A06828",
                "primary-light": "#F5ECD6",
                "primary-muted": "#E8C89A",
                "primary-container": "#C0853A",
                "on-primary": "#ffffff",
                "on-primary-container": "#ffffff",

                // Secondary (Rose)
                "secondary": "#8C2645",
                "secondary-dark": "#6E1A34",
                "secondary-light": "#FCEEF2",
                "secondary-muted": "#ECCBD0",
                "on-secondary": "#ffffff",

                // Tertiary (Cobalt)
                "tertiary": "#1A3A7C",
                "tertiary-light": "#E6EEFF",
                "on-tertiary": "#ffffff",

                // Neutrals & Surface
                "ink": "#111827",
                "body": "#374151",
                "muted": "#6B7280",
                "subtle": "#9CA3AF",
                "border": "#E8E8E8",
                "surface": "#F5F5F5",
                "white": "#FFFFFF",
                "background": "#FFFFFF",
                "on-background": "#111827",
                "on-surface": "#111827",
                "on-surface-variant": "#374151",
                "surface-bright": "#FFFFFF",
                "surface-dim": "#E8E8E8",
                "surface-container-lowest": "#FFFFFF",
                "surface-container-low": "#F9FAFB",
                "surface-container": "#F5F5F5",
                "surface-container-high": "#E8E8E8",
                "surface-container-highest": "#D1D5DB",
                "outline": "#9CA3AF",
                "outline-variant": "#E8E8E8",

                // Functional
                "success": "#3A5A25",
                "warning": "#C0853A",
                "error": "#DC2626",
                "on-error": "#ffffff",
                "info": "#1A3A7C"
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
