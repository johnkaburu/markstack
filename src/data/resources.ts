/**
 * Every bookmark on the site lives here.
 *
 * To add one: pick the category, add an entry with a unique key, and drop a
 * screenshot in /public/assets/images/screenshots (webp, ~1200px wide, cropped
 * to the top of the page). `description` is optional but makes the card far
 * more useful. If the image is missing the card falls back to a lettered tile.
 */

export interface Resource {
  label: string;
  link: string;
  image: string;
  description?: string;
}

export type CategoryId =
  | "tools"
  | "uilibrary"
  | "ai"
  | "youtube"
  | "inspiration"
  | "fonts"
  | "technologies";

const Resources = {
    tools: {
      divider: {
        image: "/assets/images/screenshots/screenshot1.webp",
        label: "Shape Divider",
        description:"create custom shapes to divide sections ",
        link: "https://www.shapedivider.app/",
      },
      blobmaker: {
        image: "/assets/images/screenshots/screenshot 75.webp",
        label:"Blob Maker",
        description:"",
        link:"https://www.blobmaker.app/"
      },
      pattern: {
        image: "/assets/images/screenshots/screenshot 76.webp",
        label:"Pattern CSS",
        description:"CSS only library to fill your empty background with beautiful patterns. ",
        link:"https://bansal.io/pattern-css"
      },
      animejs: {
        image: "/assets/images/screenshots/screenshot2.webp",
        label: "AnimeJs",
        description:"Create animations for js frameworks",
        link: "https://animejs.com/",
      },
      useanimations: {
        image: "/assets/images/screenshots/Screenshot79.webp",
        label: "useanimations",
        description:"Animated icons in Lottie Framework",
        link: "https://useanimations.com/?ref=dailydev#explore",
      },
      Omatsuri: {
        image: "/assets/images/screenshots/screenshot3.webp",
        label: "Omatsuri",
        description:"Open source browser tools for everyday use",
        link: "https://omatsuri.app/",
      },
      formbuilder: {
        image: "/assets/images/screenshots/screenshot86.webp",
        label: "Shadcn Form Builder",
        description:"Tool to build forms with shadcn ui components",
        link: "https://www.shadcn-form.com/",
      },
      shadows: {
        image: "/assets/images/screenshots/screenshot4.webp",
        label: "Box Shadows",
        description:"Collection of css shadows",
        link: "https://getcssscan.com/css-box-shadow-examples",
      }
      ,
      loaders: {
        image: "/assets/images/screenshots/screenshot5.webp",
        label: "Loading Animations",
        description:"loading animations and preloaders",
        link: "https://loading.io/",
      }
      ,
      glassmophism: {
        image: "/assets/images/screenshots/screenshot6.webp",
        label: "Glassmorphism",
        description:"glass background effect",
        link: "https://css.glass/",
      }
      ,      
      undraw: {
        image: "/assets/images/screenshots/screenshot8.webp",
        label: "Un Draw",
        description:"Multiple web illustrations",
        link: "https://undraw.co/",
      },
      fontawsome: {
        image: "/assets/images/screenshots/screenshot 66.webp",
        label:"Font Awesome",
        description:"",
        link:"https://fontawesome.com/icons"
      },
      feather: {
        image: "/assets/images/screenshots/screenshot84.webp",
        label:"Feather",
        description:"Simply beautiful open source icons",
        link:"https://feathericons.com/"
      },
      iconmoon: {
        image: "/assets/images/screenshots/screenshot 67.webp",
        label:"Icon Moon",
        description:"",
        link:"https://icomoon.io/"
      },
      materialicons: {
        image: "/assets/images/screenshots/screenshot 68.webp",
        label:"Material Icons",
        description:"",
        link:"https://fonts.google.com/icons"
      }
      ,
      icons8: {
        image: "/assets/images/screenshots/screenshot9.webp",
        label: "Icons8",
        description:"Curated graphics, design apps, and AI tools",
        link: "https://icons8.com/",
      },
      
      lottifiles: {
        image: "/assets/images/screenshots/screenshot11.webp",
        label: "LottieFiles",
        description:"Lightweight, scalable animations",
        link: "https://lottiefiles.com/",
      }
      ,
      iconify: {
        image: "/assets/images/screenshots/screenshot28.webp",
        label: "Iconify",
        description:"Over 200,000 open source vector icons",
        link: "https://iconify.design/",
      },
      colormind: {
        image: "/assets/images/screenshots/screenshot 71.webp",
        label:"Color Mind",
        description:"",
        link:"http://colormind.io/"
      },
      colorspace: {
        image: "/assets/images/screenshots/screenshot 72.webp",
        label:"Color Space",
        description:"",
        link:"https://mycolor.space/"
      },
      coolbackgrounds: {
        image: "/assets/images/screenshots/screenshot 74.webp",
        label:"Cool Backgrounds",
        description:"",
        link:"https://coolbackgrounds.io/"
      },
      realtimecolors: {
        image: "/assets/images/screenshots/screenshot14.webp",
        label: "Realtime Colors",
        description:"visualize colors and fonts on a real site",
        link: "https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Poppins-Poppins",
      }
      ,
      colors: {
        image: "/assets/images/screenshots/screenshot7.webp",
        label: "Color Palettes",
        description:"Color palettes from different sites",
        link: "https://materialui.co/",
      }
      ,
      coolors: {
        image: "/assets/images/screenshots/screenshot13.webp",
        label: "Coolors",
        description:"color palettes generator",
        link: "https://coolors.co/",
      }
      ,
      gradient: {
        image: "/assets/images/screenshots/screenshot29.webp",
        label: "Gradient",
        description:"Make background gradients",
        link: "https://cssgradient.io/",
      },
      haikei: {
        image: "/assets/images/screenshots/screenshot16.webp",
        label: "Haikei",
        description:"Generate shapes and backgrounds",
        link: "https://app.haikei.app/",
      }
      ,
      freefrontend: {
        image: "/assets/images/screenshots/screenshot17.webp",
        label: "Free Frontend",
        description:"Multiple css components",
        link: "https://freefrontend.com/",
      }
      ,
      neumorphism: {
        image: "/assets/images/screenshots/screenshot18.webp",
        label: "Neumorphism",
        description:"Generate Soft-UI CSS code",
        link: "https://neumorphism.io/#e0e0e0",
      }
      ,
      reactmail: {
        image: "/assets/images/screenshots/screenshot19.webp",
        label: "React Mail",
        description:"Collection of components for creating emails",
        link: "https://react.email/",
      }
      ,
      shadcn: {
        image: "/assets/images/screenshots/screenshot20.webp",
        label: "Shadcn",
        description:"Beautifully designed components",
        link: "https://ui.shadcn.com/",
      }
      ,
      fffuel: {
        image: "/assets/images/screenshots/screenshot21.webp",
        label: "fffuel",
        description:"collection of color tools and SVG generators",
        link: "https://fffuel.co/",
      }
      ,
      Spline: {
        image: "/assets/images/screenshots/screenshot22.webp",
        label: "Spline",
        description:"Design and collaborate in 3D",
        link: "https://spline.design",
      }
      ,
      driverjs: {
        image: "/assets/images/screenshots/screenshot23.webp",
        label: "DriverJs",
        description:"Product tours, highlights and contextual help",
        link: "https://driverjs.com/",
      }
      ,
      tailwind: {
        image: "/assets/images/screenshots/screenshot85.webp",
        label: "Tailwind Generator",
        description:"Tailwind Generator",
        link: "https://tailwind-generator.com/generators?ref=dailydev",
      }
      ,
      cssbuttons: {
        image: "/assets/images/screenshots/screenshot24.webp",
        label: "css Buttons",
        description:"Multiple buttons designed in css",
        link: "https://cssbuttons.app/",
      }
      ,
      splide: {
        image: "/assets/images/screenshots/screenshot25.webp",
        label: "Splide",
        description:"A lightweight, flexible, accessible carousel",
        link: "https://splidejs.com/",
      }
      ,
      removebackground: {
        image: "/assets/images/screenshots/screenshot26.webp",
        label: "Remove Background",
        description:"Remove Background From Image",
        link: "https://removal.ai/",
      }
      ,
         
      scrollbars: {
        image: "/assets/images/screenshots/screenshot40.webp",
        label:"Scrollbar.app",
        description:"Customize Page scrollbars",
        link:"https://scrollbar.app/"
      },
      dropzone: {
        image: "/assets/images/screenshots/screenshot41.webp",
        label:"DropZone",
        description:"The most popular drag and drop JavaScript library",
        link:"https://www.dropzone.dev/"
      },   
      htmlcheatsheet: {
        image: "/assets/images/screenshots/screenshot 59.webp",
        label:"HTML Cheat Sheet",
        description:"Contains resources to learn HTML, CSS and Javascript",
        link:"https://htmlcheatsheet.com/"
      }, 
      mdn: {
        image: "/assets/images/screenshots/screenshot 60.webp",
        label:"mdn",
        description:"Documenting web technologies, including CSS, HTML, and JavaScript",
        link:"https://developer.mozilla.org/en-US/"
      }, 
      superherojs: {
        image: "/assets/images/screenshots/screenshot 61.webp",
        label:"Superhero Js",
        description:"Collection of articles, videos and presentations",
        link:"http://superherojs.com/"
      }, 
      gridcheatsheet: {
        image: "/assets/images/screenshots/screenshot 62.webp",
        label:"Grid Cheatsheet",
        description:"",
        link:"https://grid.malven.co/"
      }, 
      flexcheatsheet: {
        image: "/assets/images/screenshots/screenshot 63.webp",
        label:"Flex Cheatsheet",
        description:"",
        link:"https://flexbox.malven.co/"
      }, 
      stackoverflow: {
        image: "/assets/images/screenshots/screenshot 64.webp",
        label:"Stack Overflow",
        description:"",
        link:"https://stackoverflow.com/"
      },
      tinypng: {
        image: "/assets/images/screenshots/screenshot27.webp",
        label: "TinyPNG",
        description:"Smart WebP, PNG and JPEG Compression",
        link: "https://tinypng.com/",
      },
      towebp: {
        image: "/assets/images/screenshots/screenshot42.webp",
        label:"To WebP",
        description:"Batch convert from JPG, PNG, GIF, SVG, ICO, BMP, and AVIF to WebP",
        link:"https://towebp.io/"
      },  
      pixabay: {
        image: "/assets/images/screenshots/screenshot 65.webp",
        label:"Pixabay",
        description:"",
        link:"https://pixabay.com/"
      },
      screely: {
        image: "/assets/images/screenshots/screenshot 78.webp",
        label:"Screely",
        description:"Upgrade your screenshots. Instantly",
        link:"https://screely.com/"
      },  
      
      pexels: {
        image: "/assets/images/screenshots/screenshot 69.webp",
        label:"Pexels",
        description:"",
        link:"https://pexels.com/"
      },
      unsplash: {
        image: "/assets/images/screenshots/screenshot 70.webp",
        label:"Unsplash",
        description:"",
        link:"https://unsplash.com/"
      },
      easings: {
        image: "/assets/images/screenshots/screenshot 73.webp",
        label:"Easings",
        description:"Easing functions specify the rate of change of a parameter over time.",
        link:"https://easings.net/"
      },
      mockaroo: {
        image: "/assets/images/screenshots/screenshot12.webp",
        label: "Mockaroo",
        description:"Create Mock data for you app",
        link: "https://mockaroo.com/",
      }
      ,
      reactreveal: {
        image: "/assets/images/screenshots/screenshot10.webp",
        label: "React Reveal",
        description:"Animated components for React apps",
        link: "https://react-awesome-reveal.morello.dev/",
      }
      ,
      
      
    },
    uilibrary: {
      nextui: {
        image: "/assets/images/screenshots/screenshot43.webp",
        label:"Next UI",
        description:"",
        link:"https://nextui.org/"
      },
      radix: {
        image: "/assets/images/screenshots/screenshot44.webp",
        label:"Radix UI",
        description:"",
        link:" https://www.radix-ui.com"
      },
      daisy: {
        image: "/assets/images/screenshots/screenshot45.webp",
        label:"Daisy UI",
        description:"",
        link:"https://daisyui.com"
      },
      shadcn: {
        image: "/assets/images/screenshots/screenshot46.webp",
        label:"Shadcn UI",
        description:"",
        link:""
      },
      mantine: {
        image: "/assets/images/screenshots/screenshot47.webp",
        label:"Mantine UI",
        description:"",
        link:"https://mantine.dev/"
      },
      antdesign: {
        image: "/assets/images/screenshots/screenshot48.webp",
        label:"Ant Design",
        description:"",
        link:"https://ant.design/"
      },
      material: {
        image: "/assets/images/screenshots/screenshot49.webp",
        label:"Material UI",
        description:"",
        link:"https://mui.com/material-ui/"
      },
      bootstrap: {
        image: "/assets/images/screenshots/screenshot50.webp",
        label:"Bootstrap",
        description:"",
        link:"https://getbootstrap.com/"
      },
      chakra: {
        image: "/assets/images/screenshots/screenshot51.webp",
        label:"Chakra UI",
        description:"",
        link:"https://v2.chakra-ui.com/"
      },
      prime: {
        image: "/assets/images/screenshots/screenshot52.webp",
        label:"Prime React",
        description:"",
        link:"https://primereact.org/"
      },
      semantic: {
        image: "/assets/images/screenshots/screenshot53.webp",
        label:"Semantic UI",
        description:"",
        link:"https://semantic-ui.com/"
      },
      onsen: {
        image: "/assets/images/screenshots/screenshot54.webp",
        label:"Onsen UI",
        description:"",
        link:"https://onsen.io/"
      },
      core: {
        image: "/assets/images/screenshots/screenshot55.webp",
        label:"Core UI",
        description:"",
        link:"https://coreui.io/"
      },
      reactsuite: {
        image: "/assets/images/screenshots/screenshot56.webp",
        label:"React Suite",
        description:"",
        link:"https://rsuitejs.com/"
      },
      blueprint: {
        image: "/assets/images/screenshots/screenshot57.webp",
        label:"Blueprint Js",
        description:"",
        link:"https://blueprintjs.com/"
      },
      storybook: {
        image: "/assets/images/screenshots/screenshot58.webp",
        label:"Storybook Js",
        description:"",
        link:"https://storybook.js.org/"
      },
    },
    youtube: {
        traversymedia: {
            image: "/assets/youtube/TraversyMedia.jpg",
            label: "TraversyMedia",
            link: "https://www.youtube.com/@TraversyMedia",
          },
          ByteGrad: {
            image: "/assets/youtube/ByteGrad.jpg",
            label: "ByteGrad",
            link: "https://www.youtube.com/@ByteGrad",
          },
          developedbyed: {
            image: "/assets/youtube/developedbyed.jpg",
            label: "developedbyed",
            link: "https://www.youtube.com/@developedbyed",
          },
          Fireship: {
            image: "/assets/youtube/Fireship.jpg",
            label: "Fireship",
            link: "https://www.youtube.com/@Fireship",
          },
          freeCodeCamp: {
            image: "/assets/youtube/freeCodeCamp.jpg",
            label: "freeCodeCamp",
            link: "https://www.youtube.com/@freeCodeCamp",
          },
          Hyperplexed: {
            image: "/assets/youtube/Hyperplexed.jpg",
            label: "Hyperplexed",
            link: "https://www.youtube.com/@Hyperplexed",
          },
          Joshtriedcoding: {
            image: "/assets/youtube/Joshtriedcoding.jpg",
            label: "Joshtriedcoding",
            link: "https://www.youtube.com/@Joshtriedcoding",
          },
          Juxtopposed: {
            image: "/assets/youtube/Juxtopposed.jpg",
            label: "Juxtopposed",
            link: "https://www.youtube.com/@Juxtopposed",
          },
          kevinpowell: {
            image: "/assets/youtube/kevinpowell.jpg",
            label: "kevinpowell",
            link: "https://www.youtube.com/@kevinpowell",
          },
          netninja: {
            image: "/assets/youtube/netninja.jpg",
            label: "netninja",
            link: "https://www.youtube.com/@NetNinja",
          },
          primetime: {
            image: "/assets/youtube/primetime.jpg",
            label: "The primetime",
            link: "https://www.youtube.com/@ThePrimeTimeagen",
          },
          ProgrammingwithMosh: {
            image: "/assets/youtube/ProgrammingwithMosh.jpg",
            label: "Programming with Mosh",
            link: "https://www.youtube.com/@programmingwithmosh",
          },
          theo: {
            image: "/assets/youtube/theo.jpg",
            label: "theo",
            link: "https://www.youtube.com/@t3dotgg",
          },
          webdevcody: {
            image: "/assets/youtube/webdevcody.jpg",
            label: "webdevcody",
            link: "https://www.youtube.com/@WebDevCody",
          },
          WebDevSimplified: {
            image: "/assets/youtube/WebDevSimplified.jpg",
            label: "WebDevSimplified",
            link: "https://www.youtube.com/@WebDevSimplified",
          },
          forrestknight: {
            image: "/assets/youtube/forrestknight.jpg",
            label: "forrestknight",
            link: "https://www.youtube.com/@fknight",
          },
    },
    technologies: {
        react: {
            image: "/assets/icons/technologies/react.webp",
            label: "React",
            link: "https://react.dev/",
          } ,
          nextjs: {
            image: "/assets/icons/technologies/next.webp",
            label: "NextJs",
            link: "https://nextjs.org/",
          } ,
          framermotion: {
            image: "/assets/icons/technologies/framermotion.webp",
            label: "Framer Motion",
            link: "https://www.framer.com/motion/",
          } ,
          redux: {
            image: "/assets/icons/technologies/redux.webp",
            label: "redux",
            link: "https://react-redux.js.org/",
          } ,
          svelte: {
            image: "/assets/icons/technologies/svelte.webp",
            label: "Svelte",
            link: "https://svelte.dev/",
          } ,
          gsap: {
            image: "/assets/icons/technologies/gsap.webp",
            label: "Gsap",
            link: "https://gsap.com/",
          },
          animate: {
            image: "/assets/icons/technologies/animate.webp",
            label: "AnimateCSS",
            link: "https://animate.style/",
          } , 
          tanstack: {
            image: "/assets/icons/technologies/tanstack.webp",
            label: "Tanstack",
            link: "https://tanstack.com/query/v3",
          } ,
          graphql: {
            image: "/assets/icons/technologies/graphql.webp",
            label: "GraphQL",
            link: "https://graphql.org/",
          } ,
    },
    inspiration: {
      wesitevice: {
        image: "/assets/images/screenshots/screenshot79.webp",
        label: "WebsiteVice",
        link: "https://websitevice.com/",
      },
        awwwards: {
            image: "/assets/images/screenshots/screenshot34.webp",
            label: "Awwwards",
            link: "https://www.awwwards.com/",
          },
          darkmode: {
            image: "/assets/images/screenshots/screenshot35.webp",
            label: "Dark Mode Design",
            link: "https://www.darkmodedesign.com/",
          },
          godly: {
            image: "/assets/images/screenshots/screenshot36.webp",
            label: "godly",
            link: "https://godly.website/",
          }, 
          refero: {
            image: "/assets/images/screenshots/screenshot37.webp",
            label: "Refero",
            link: "https://refero.design/",
          }, 
          stacksorted: {
            image: "/assets/images/screenshots/screenshot38.webp",
            label: "Stack Sorted",
            link: "https://stacksorted.com/buttons",
          }, 
          startupwebsites: {
            image: "/assets/images/screenshots/screenshot39.webp",
            label: "Startup Websites",
            link: "https://www.startupwebsites.co/",
          }, 
          dribble: {
            image: "/assets/images/screenshots/screenshot 77.webp",
            label: "Dribbble",
            link: "https://dribbble.com/",
          }, 
          
    },
    fonts: {
      fontjoy: {
        image: "/assets/images/screenshots/screenshot15.webp",
        label: "Font Joy",
        description:"",
        link: "https://fontjoy.com/",
      },
      googlefonts: {
        image: "/assets/images/screenshots/screenshot30.webp",
        label: "Google Fonts",
        description:"",
        link: "https://fonts.google.com/",
      } ,
      dafont: {
        image: "/assets/images/screenshots/screenshot31.webp",
        label: "Dafont",
        description:"",
        link: "https://www.dafont.com/",
      },
      fontshare: {
        image: "/assets/images/screenshots/screenshot32.webp",
        label: "Fontshare",
        description:"",
        link: "https://www.fontshare.com/",
      },
      uncut: {
        image: "/assets/images/screenshots/screenshot33.webp",
        label: "Uncut",
        description:"",
        link: "https://uncut.wtf/",
      }    
    },
    ai: {
      chatgpt: {
        image: "/assets/images/screenshots/screenshot81.webp",
        label: "ChatGPT",
        link: "https://chat.openai.com/",
      },
      claude: {
        image: "/assets/images/screenshots/screenshot80.webp",
        label: "Claude",
        link: "https://claude.ai/",
      },
      gemini: {
        image: "/assets/images/screenshots/screenshot82.webp",
        label: "Gemini",
        link: "https://gemini.google.com/app",
      },
      perplexity: {
        image: "/assets/images/screenshots/screenshot83.webp",
        label: "Perplexity",
        link: "https://www.perplexity.ai/",
      },
      stitch: {
        image: "/assets/images/screenshots/Screenshot80.webp",
        label: "Stitch",
        link: "https://stitch.withgoogle.com/",
      },
      lovable: {
        image: "/assets/images/screenshots/Screenshot81.webp",
        label: "Lovable",
        link: "https://lovable.dev/",
      },
    }
} satisfies Record<CategoryId, Record<string, Resource>>;

export interface Category {
  id: CategoryId;
  /** Short label for the category bar. */
  title: string;
  /** One line shown under the section heading. */
  blurb: string;
  /** Square images (channel avatars) get a compact row layout. */
  layout: "card" | "channel";
  items: Resource[];
}

const list = (id: CategoryId): Resource[] => Object.values(Resources[id]);

/** Display order of the categories on the page. */
export const categories: Category[] = [
  {
    id: "tools",
    title: "Tools",
    blurb: "Generators, icon sets, colour pickers and the small utilities that save an afternoon.",
    layout: "card",
    items: list("tools"),
  },
  {
    id: "uilibrary",
    title: "UI Libraries",
    blurb: "Component kits worth reaching for before building another dropdown from scratch.",
    layout: "card",
    items: list("uilibrary"),
  },
  {
    id: "inspiration",
    title: "Inspiration",
    blurb: "Galleries to scroll when a layout just isn't coming together.",
    layout: "card",
    items: list("inspiration"),
  },
  {
    id: "fonts",
    title: "Fonts",
    blurb: "Where to find and pair typefaces, free and otherwise.",
    layout: "card",
    items: list("fonts"),
  },
  {
    id: "technologies",
    title: "Stack",
    blurb: "Frameworks and libraries that keep showing up in my projects.",
    layout: "card",
    items: list("technologies"),
  },
  {
    id: "ai",
    title: "AI",
    blurb: "Assistants and builders that earn their place in the workflow.",
    layout: "card",
    items: list("ai"),
  },
  {
    id: "youtube",
    title: "YouTube",
    blurb: "Channels that taught me more than most courses did.",
    layout: "channel",
    items: list("youtube"),
  },
];

export const totalResources = categories.reduce((n, c) => n + c.items.length, 0);
