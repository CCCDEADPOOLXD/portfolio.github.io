/* ============================================================
   DATA.JS — Complete Portfolio & Persona OS Structure
   ============================================================ */

window.SK_CATEGORIES = [
  {
    name: "01 ABOUT ME",
    items: [
      {
        id: 'profile',
        title: 'Nitant Namdeo',
        sub: 'Technical Artist & Systems Programmer',
        meta: 'INDORE, INDIA',
        isText: true, // Tells psp.js to draw text instead of an image
        textLines: [
            "HI, I AM NITANT.",
            "TECHNICAL ARTIST &",
            "SYSTEMS PROGRAMMER.",
            "I MAKE COOL STUFF."
        ],
        vid: '', 
        link: '#about', 
        instructions: [
          { btn: 'X', text: 'OPEN RESUME' },
          { btn: 'O', text: 'SCROLL TO ABOUT' },
          { btn: '△', text: 'VIEW SKILLS' }
        ],
        actionX: 'resume.pdf',
        actionO: 'scroll:#about',
        actionTriangle: 'scroll:#skills'
      }
    ]
  },
  {
    name: "02 TECH ART",
    items: [
      {
        id: 'sobel',
        title: 'Shader Development',
        sub: 'Custom Edge-Detection & Thermal',
        meta: 'SHADERS · HLSL · TECH ART',
        img: 'showcase_shader.jpg',
        vid: '', // Left blank so it stays a static thumbnail
        link: 'showcase-shaders.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }],
        actionX: 'showcase-shaders.html',
        actionO: null
      },
      {
        id: 'explosion',
        title: 'VFX & Particles',
        sub: 'Mobile-Ready Particle Systems',
        meta: 'VFX · SHURIKEN · MOBILE',
        img: 'showcase_vfx.jpg',
        vid: '',
        link: 'showcase-vfx.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }],
        actionX: 'showcase-vfx.html',
        actionO: null
      },
      {
        id: 'tools',
        title: 'Editor Tools',
        sub: 'Node-Based Combat Graph',
        meta: 'TOOLS · C# · UNITY',
        img: 'showcase_tools.jpg',
        vid: '',
        link: 'showcase-tools.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }],
        actionX: 'showcase-tools.html',
        actionO: null
      }
    ]
  },
  {
    name: "03 PROJECTS",
    items: [
      {
        id: 'knuckle',
        title: 'Knuckle',
        sub: 'Frame-perfect fighting engine & FSM',
        meta: 'PROJECT · UNITY · C#',
        img: 'knuckle_square.jpg',
        vid: '', 
        link: 'project-knuckle.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' },
          { btn: 'O', text: 'PLAY ON ITCH.IO' }
        ],
        actionX: 'project-knuckle.html',
        actionO: 'https://cccdeadpool-xd.itch.io/'
      },
      {
        id: 'lumen',
        title: 'Lumen',
        sub: 'Real-time LLM API Integration',
        meta: 'PROJECT · GEMINI API',
        img: 'lumen_square.jpg',
        vid: '',
        link: 'project-lumen.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' },
          { btn: 'O', text: 'PLAY ON ITCH.IO' }
        ],
        actionX: 'project-lumen.html',
        actionO: 'https://cccdeadpool-xd.itch.io/'
      },
      {
        id: 'unreal',
        title: 'Unreal Environment',
        sub: 'Procedural Content Generation (PCG)',
        meta: 'PROJECT · UNREAL · LIGHTING',
        img: 'unreal_square.jpg',
        vid: '',
        link: 'project-unreal.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }],
        actionX: 'project-unreal.html',
        actionO: null
      },
      {
        id: 'film',
        title: 'Cinematic Film',
        sub: 'Lighting Supervision & Art Direction',
        meta: 'PROJECT · LIGHTING',
        img: 'film_square.jpg',
        vid: '',
        link: 'project-film.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }],
        actionX: 'project-film.html',
        actionO: null
      },
      {
        id: 'rotor',
        title: 'Rotor Warfare',
        sub: 'Asymmetric Multiplayer Netcode',
        meta: 'PROJECT · NETCODE · PC/MOBILE',
        img: 'heli_square.jpg',
        vid: '',
        link: 'project-heli.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }],
        actionX: 'project-heli.html',
        actionO: null
      }
    ]
  },
  {
    name: "04 VIDEOS",
    items: [
      {
        id: 'vfx_reel',
        title: 'VFX & Combat Juice',
        sub: 'Raw Gameplay Capture',
        meta: 'VIDEO · UNITY VFX GRAPH',
        img: 'showcase_vfx.jpg',
        vid: 'explosion_vfx_video.mp4', // Videos play immediately
        link: '#',
        instructions: [{ btn: 'X', text: 'FULLSCREEN VIDEO' }],
        actionX: 'explosion_vfx_video.mp4',
        actionO: null
      },
      {
        id: 'shader_reel',
        title: 'Myth-Tech Shaders',
        sub: 'Raw Gameplay Capture',
        meta: 'VIDEO · HLSL',
        img: 'showcase_shader.jpg',
        vid: 'sobel_outline_video.mp4', // Videos play immediately
        link: '#',
        instructions: [{ btn: 'X', text: 'FULLSCREEN VIDEO' }],
        actionX: 'sobel_outline_video.mp4',
        actionO: null
      }
    ]
  }
];
