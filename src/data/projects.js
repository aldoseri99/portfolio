// Set image to an asset URL (e.g. '/projects/smart-road.webp') and add imageAlt.
export const projects = [
  {
    id: 'social-network',
    title: 'Social Network',
    category: 'Full-stack · Real-time communication',
    description:
      'A full-stack social platform with profiles, followers, posts, groups, notifications, and real-time chat. Built with session-based authentication, SQLite storage, WebSocket messaging, and Dockerized frontend and backend services.',
    technologies: [
      'Go',
      'JavaScript',
      'HTML',
      'CSS',
      'SQLite',
      'WebSockets',
      'Docker'
    ],
    image: null,
    imageAlt: '',
    featured: true,
    visual: 'network',
    caption: 'Connecting people. Coordinating systems.'
  },
  {
    id: 'smart-road',
    title: 'Smart Road',
    category: 'Systems · Simulation',
    description:
      'An autonomous intersection simulation built in Rust and SDL2. Coordinates vehicles without traffic lights using turning logic, collision avoidance, safe distances, multiple speed levels, keyboard controls, and a traffic-management algorithm.',
    technologies: [
      'Rust',
      'SDL2',
      'Algorithms',
      'Collision Detection',
      'Simulation'
    ],
    image: null,
    imageAlt: '',
    featured: true,
    visual: 'road',
    caption: 'Independent paths. A coordinated system.'
  },
  {
    id: 'mini-framework',
    title: 'Mini Framework',
    category: 'Developer tools · Built from scratch',
    description:
      'A lightweight JavaScript framework built from scratch with DOM abstraction, state management, routing, and custom event handling. Validated with a TodoMVC app and documented with architecture, APIs, and usage guides.',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'DOM',
      'State Management',
      'Routing'
    ],
    image: null,
    imageAlt: '',
    featured: true,
    visual: 'framework',
    caption: 'Understanding the layers. Building the foundation.'
  },
  {
    id: 'real-time-forum',
    title: 'Real-Time Forum',
    category: 'Full-stack · WebSockets',
    description:
      'A single-page forum with authentication, posts and comments, online/offline presence, and private WebSocket messaging. Message history loads dynamically with infinite scrolling.',
    technologies: ['Go', 'JavaScript', 'SQLite', 'WebSockets', 'HTML', 'CSS'],
    image: null,
    imageAlt: '',
    featured: false,
    visual: 'forum',
    caption: 'Conversations, in real time.'
  },
  {
    id: 'space-invaders',
    title: 'Make Your Game — Space Invaders',
    category: 'Game development · DOM rendering',
    description:
      'A Star Wars-themed game built with vanilla JavaScript and DOM elements, without frameworks or Canvas. Uses requestAnimationFrame for 60 FPS gameplay, with keyboard controls, scoring, lives, timers, enemy movement, collision detection, pause/restart, and responsive animations.',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
      'requestAnimationFrame',
      'DOM',
      'Game Development'
    ],
    image: null,
    imageAlt: '',
    featured: false,
    visual: 'game',
    caption: 'A little play. A lot of logic.'
  }
]
