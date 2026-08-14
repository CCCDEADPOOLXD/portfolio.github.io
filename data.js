/* ============================================================
   DATA.JS — 4-Category Persona OS Structure
   ============================================================ */

window.SK_CATEGORIES = [
  {
    name: "01 ABOUT ME",
    items: [
      {
        id: 'profile',
        title: 'Nitant Namdeo',
        sub: 'Technical Artist & Systems Programmer',
        meta: 'INDORE, INDIA · GDAI AMBASSADOR',
        img: 'lumen_square.jpg', 
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
        vid: 'sobel_outline_video.mp4',
        link: 'showcase-shaders.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' }
        ],
        actionX: 'showcase-shaders.html',
        actionO: null
      },
      {
        id: 'explosion',
        title: 'VFX & Particles',
        sub: 'Mobile-Ready Particle Systems',
        meta: 'VFX · SHURIKEN · MOBILE',
        img: 'showcase_vfx.jpg',
        vid: 'explosion_vfx_video.mp4',
        link: 'showcase-vfx.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' }
        ],
        actionX: 'showcase-vfx.html',
        actionO: null
      },
      {
        id: 'tools',
        title: 'Editor Tools',
        sub: 'Node-Based Combat Graph',
        meta: 'TOOLS · C# · UNITY',
        img: 'showcase_tools.jpg',
        vid: 'combo_graph_video.mp4',
        link: 'showcase-tools.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' }
        ],
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
        vid: 'knuckle_trailer.mp4',
        link: 'project-knuckle.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' },
          { btn: 'O', text: 'PLAY ON ITCH.IO' }
        ],
        actionX: 'project-knuckle.html',
        actionO: 'https://cccdeadpool-xd.itch.io/'
      },
      {
        id: 'lumin',
        title: 'Lumin',
        sub: 'IGDC 2025 Best Groups Selection',
        meta: 'PROJECT · GEMINI API · AI NPC',
        img: 'lumen_square.jpg',
        vid: 'lumen_showcase.mp4',
        link: 'project-lumen.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' },
          { btn: 'O', text: 'PLAY ON ITCH.IO' }
        ],
        actionX: 'project-lumen.html',
        actionO: 'https://cccdeadpool-xd.itch.io/' 
      },
      {
        id: 'rotor',
        title: 'Rotor Warfare',
        sub: 'Asymmetric Multiplayer Netcode',
        meta: 'PROJECT · NETCODE · PC/MOBILE',
        img: 'heli_square.jpg',
        vid: 'trails_video.mp4',
        link: 'project-heli.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' }
        ],
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
        vid: 'explosion_vfx_video.mp4',
        link: '#',
        instructions: [
          { btn: 'X', text: 'FULLSCREEN VIDEO' }
        ],
        actionX: 'explosion_vfx_video.mp4',
        actionO: null
      }
    ]
  }
];
