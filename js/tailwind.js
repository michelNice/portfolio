 tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#00d4ff",
                        "secondary": "#7c3aed",
                        "background-light": "#f5f8f8",
                        "background-dark": "#0f172a",
                        "surface-dark": "#1e293b",


                         skills: {
                        js:"#f7df1e",
                        sass:"#cc6699",
                        react:"#61dafb",
                        node:"#3c873a"
                     },
                    },

                   
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"],
                        "body": ["Inter", "sans-serif"],
                    },
                    backgroundImage: {
                        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
    }