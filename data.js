/* ============================================================
   DATA.JS — The Persona OS Portfolio Database
   ============================================================ */

window.SK_CATEGORIES = [
  {
    name: "01 ABOUT ME",
    items: [
      {
        id: 'about_1', title: 'The Hook', sub: 'Technical Artist', meta: 'INTRO',
        isText: true,
        textLines: [
            "HI, I AM NITANT.",
            "I MAKE COOL STUFF",
            "THAT MAKES PEOPLE SAY:",
            "'HOW DID YOU DO THAT?'"
        ],
        instructions: [{ btn: 'X', text: 'OPEN RESUME' }, { btn: 'O', text: 'SCROLL TO ABOUT' }, { btn: '►', text: 'NEXT SLIDE' }],
        actionX: 'resume.pdf', actionO: 'scroll:#about', actionTriangle: null
      },
      {
        id: 'about_2', title: 'Education', sub: 'B.Design', meta: 'ACAD',
        isText: true,
        textLines: [
            "EDUCATION:",
            "B.DESIGN GAME DESIGN",
            "ACAD, INDORE",
            "AUG 2023 - PRESENT"
        ],
        instructions: [{ btn: 'X', text: 'OPEN RESUME' }, { btn: '◄', text: 'PREV SLIDE' }, { btn: '►', text: 'NEXT SLIDE' }],
        actionX: 'resume.pdf', actionO: null, actionTriangle: null
      },
      {
        id: 'about_3', title: 'Leadership', sub: 'GDAI', meta: 'COMMUNITY',
        isText: true,
        textLines: [
            "GDAI AMBASSADOR:",
            "ASSISTING IN LOCAL EVENTS",
            "& PROMOTING GAME DEV",
            "RESOURCES TO STUDENTS."
        ],
        instructions: [{ btn: 'X', text: 'OPEN RESUME' }, { btn: '◄', text: 'PREV SLIDE' }, { btn: '►', text: 'NEXT SLIDE' }],
        actionX: 'resume.pdf', actionO: null, actionTriangle: null
      },
      {
        id: 'about_4', title: 'Hobbies', sub: 'Beyond Code', meta: 'MUSIC & LANG',
        isText: true,
        textLines: [
            "BEYOND THE SCREEN:",
            "I LOVE MUSIC, AM LEARNING",
            "GUITAR, AND STUDYING",
            "LANGUAGES (EN/HI/DE)."
        ],
        instructions: [{ btn: 'X', text: 'OPEN RESUME' }, { btn: '◄', text: 'PREV SLIDE' }, { btn: '△', text: 'VIEW SKILLS' }],
        actionX: 'resume.pdf', actionO: null, actionTriangle: 'scroll:#skills'
      }
    ]
  },
  {
    name: "02 TECH ART",
    items: [
      {
        id: 'sobel', title: 'Shader Development', sub: 'Custom Edge-Detection', meta: 'SHADERS · HLSL',
        img: 'showcase_shader.jpg', vid: '', link: 'showcase-shaders.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'showcase-shaders.html', actionO: null
      },
      {
        id: 'explosion', title: 'VFX & Particles', sub: 'Mobile-Ready Systems', meta: 'VFX · SHURIKEN',
        img: 'showcase_vfx.jpg', vid: '', link: 'showcase-vfx.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'showcase-vfx.html', actionO: null
      },
      {
        id: 'tools', title: 'Editor Tools', sub: 'Node-Based Combat Graph', meta: 'TOOLS · C#',
        img: 'showcase_tools.jpg', vid: '', link: 'showcase-tools.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'showcase-tools.html', actionO: null
      }
    ]
  },
  {
    name: "03 PROJECTS",
    items: [
      {
        id: 'knuckle', title: 'Knuckle', sub: 'Frame-perfect fighting engine & FSM', meta: 'PROJECT · UNITY · C#',
        img: 'knuckle_square.jpg', vid: '', link: 'project-knuckle.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }, { btn: 'O', text: 'PLAY ON ITCH.IO' }], actionX: 'project-knuckle.html', actionO: 'https://cccdeadpool-xd.itch.io/'
      },
      {
        id: 'lumen', title: 'Lumin', sub: 'IGDC 2025 Best Groups Selection', meta: 'PROJECT · GEMINI API',
        img: 'lumen_square.jpg', vid: '', link: 'project-lumen.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }, { btn: 'O', text: 'PLAY ON ITCH.IO' }], actionX: 'project-lumen.html', actionO: 'https://cccdeadpool-xd.itch.io/' 
      },
      {
        id: 'unreal', title: 'Unreal Environment', sub: 'Procedural Content Generation', meta: 'PROJECT · UNREAL',
        img: 'unreal_square.jpg', vid: '', link: 'project-unreal.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'project-unreal.html', actionO: null
      },
      {
        id: 'film', title: 'Cinematic Film', sub: 'Lighting Supervision', meta: 'PROJECT · LIGHTING',
        img: 'film_square.jpg', vid: '', link: 'project-film.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'project-film.html', actionO: null
      },
      {
        id: 'rotor', title: 'Rotor Warfare', sub: 'Asymmetric Multiplayer Netcode', meta: 'PROJECT · NETCODE',
        img: 'heli_square.jpg', vid: '', link: 'project-heli.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'project-heli.html', actionO: null
      }
    ]
  },
  {
    name: "04 VIDEOS",
    items: [
      {
        id: 'vfx_reel', title: 'VFX & Combat Juice', sub: 'Raw Gameplay Capture', meta: 'VIDEO · VFX GRAPH',
        img: 'showcase_vfx.jpg', vid: 'explosion_vfx_video.mp4', link: '#',
        instructions: [{ btn: 'X', text: 'FULLSCREEN VIDEO' }], actionX: 'explosion_vfx_video.mp4', actionO: null
      },
      {
        id: 'shader_reel', title: 'Myth-Tech Shaders', sub: 'Raw Gameplay Capture', meta: 'VIDEO · HLSL',
        img: 'showcase_shader.jpg', vid: 'sobel_outline_video.mp4', link: '#',
        instructions: [{ btn: 'X', text: 'FULLSCREEN VIDEO' }], actionX: 'sobel_outline_video.mp4', actionO: null
      }
    ]
  }
];
