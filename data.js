/* ============================================================
   DATA.JS — The content library for the 3D PSP Console
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
        img: 'lumen_square.jpg', // Replace with a profile pic or cool graphic if you want!
        vid: '', // No video needed for the about screen
        link: '#about', // Used for scrolling
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
    name: "02 TECH ART & PROJECTS",
    items: [
      {
        id: 'knuckle',
        title: 'Knuckle-House',
        sub: '3D Roguelike Brawler Prototype',
        meta: 'PROJECT · UNITY · C#',
        img: 'knuckle_square.jpg',
        vid: 'knuckle_trailer.mp4',
        link: 'project-knuckle.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' },
          { btn: 'O', text: 'PLAY ON ITCH.IO' }
        ],
        actionX: 'project-knuckle.html',
        actionO: 'https://cccdeadpool-xd.itch.io/knuckle'
      },
      {
        id: 'lumen',
        title: 'LUMEN',
        sub: 'Dynamic LLM Chat System',
        meta: 'PROJECT · GEMINI API · C#',
        img: 'lumen_square.jpg',
        vid: 'lumen_showcase.mp4',
        link: 'project-lumen.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' },
          { btn: 'O', text: 'PLAY ON ITCH.IO' }
        ],
        actionX: 'project-lumen.html',
        actionO: 'https://cccdeadpool-xd.itch.io/lumen' // Update if you have a specific link
      },
      {
        id: 'rotor',
        title: 'Rotor Warfare',
        sub: 'Asymmetric Multiplayer',
        meta: 'PROJECT · NETCODE · PC/MOBILE',
        img: 'heli_square.jpg',
        vid: 'trails_video.mp4',
        link: 'project-heli.html',
        instructions: [
          { btn: 'X', text: 'VIEW DETAILS' }
        ],
        actionX: 'project-heli.html',
        actionO: null
      },
      {
        id: 'sobel',
        title: 'Sobel Outline',
        sub: 'Custom Edge-Detection Shader',
        meta: 'SHADERS · HLSL · TECH ART',
        img: 'showcase_shader.jpg',
        vid: 'sobel_outline_video.mp4',
        link: 'showcase-shaders.html',
        instructions: [
          { btn: 'X', text: 'VIEW SHADER GRAPH' }
        ],
        actionX: 'showcase-shaders.html',
        actionO: null
      }
    ]
  },
  {
    name: "03 VIDEOS",
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
