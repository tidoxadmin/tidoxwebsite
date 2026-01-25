/**
 * Tidox Product Data
 * Centralized product information for consistent use across all pages
 *
 * Categories:
 * - Media & Entertainment: Player, VR Player 360, Audio Hub, Local Listen, Offline Audio
 * - Productivity: Scanner, Tasks, Transcript
 * - Music: Guitar Tuner
 * - Smart Home: Universal Remote
 *
 * COLOR SCHEME REFERENCE (for design consistency):
 * ─────────────────────────────────────────────────
 * Product          | Hero Gradient               | Border Color    | Accent
 * ─────────────────────────────────────────────────
 * Player           | purple-50 → blue-50         | purple-200      | purple-600
 * VR Player        | red-50 → orange-50          | red-200         | red-600
 * Audio Hub        | indigo-50 → blue-50         | indigo-200      | indigo-600
 * Local Listen     | violet-50 → purple-50       | violet-200      | violet-600
 * Offline Audio    | blue-50 → sky-50            | sky-200         | sky-600
 * Transcript       | green-50 → teal-50          | green-200       | secondary-600
 * Scanner          | blue-50 → cyan-50           | blue-200        | blue-600
 * Task Manager     | rose-50 → pink-50           | rose-200        | rose-600
 * Guitar Tuner     | amber-50 → orange-50        | amber-200       | amber-600
 * Remote Control   | indigo-50 → purple-50       | indigo-200      | indigo-600
 * ─────────────────────────────────────────────────
 *
 * USAGE PATTERN:
 * - Hero section: bg-gradient-to-br from-{color1}-50 to-{color2}-50
 * - Feature cards: border-2 border-{color}-200 dark:border-{color}-900
 * - Icons/accents: bg-{color}-100, text-{color}-600
 * - CTA section: bg-gradient-to-r from-{color1}-600 to-{color2}-600
 * - Primary actions: bg-{color}-600 hover:bg-{color}-700
 * - Secondary actions: gray (neutral)
 */

const TIDOX_PRODUCTS = {
  // ============================================
  // MEDIA & ENTERTAINMENT
  // ============================================

  player: {
    id: 'player',
    name: 'Tidox Player',
    tagline: 'Advanced IPTV & Media Player',
    description: 'Stream with IPTV support, Chromecast, Android TV, and VR playback. The ultimate media player for Android.',
    category: 'Media & Entertainment',
    features: [
      'M3U8 & HLS streaming',
      'IPTV with EPG support',
      'Chromecast ready',
      'Android TV optimized',
      '360° VR playback',
      'Multi-device sync'
    ],
    playStoreId: 'online.tidox.player.cast',
    playStorePremiumId: 'online.tidox.player.cast.pro',
    price: 0,
    premiumPrice: 4.99,
    colorScheme: {
      gradient: 'from-purple-50 to-blue-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-purple-200',
      darkBorder: 'border-purple-900',
      primary: 'primary-600',
      accent: 'purple-600'
    },
    icon: 'play',
    page: '/src/pages/player.html',
    applicationCategory: 'MultimediaApplication'
  },

  vrPlayer: {
    id: 'vr-player',
    name: 'VR Tidox Player 360',
    tagline: 'Immersive VR Video Experience',
    description: 'Experience 360-degree video content with full VR headset support, spatial audio, and gesture controls.',
    category: 'Media & Entertainment',
    features: [
      '360° video support',
      'VR headset compatible',
      'Spatial audio',
      'Gesture controls',
      'Side-by-side 3D',
      'Cardboard support'
    ],
    playStoreId: 'online.tidox.player.vr',
    playStorePremiumId: null,
    price: 0,
    premiumPrice: null,
    colorScheme: {
      gradient: 'from-red-50 to-orange-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-red-200',
      darkBorder: 'border-red-900',
      primary: 'red-600',
      accent: 'orange-500'
    },
    icon: 'vr-headset',
    page: '/src/pages/vr-player.html',
    applicationCategory: 'MultimediaApplication'
  },

  audioHub: {
    id: 'audio-hub',
    name: 'Tidox Pro: Audio Hub',
    tagline: 'Your Audio Intelligently Organized',
    description: 'Premium audio organization and management with intelligent categorization. The central hub for all your audio content.',
    category: 'Media & Entertainment',
    features: [
      'Intelligent audio organization',
      'Smart categorization',
      'Premium audio quality',
      'Cloud backup',
      'Cross-device sync',
      'Advanced metadata editing'
    ],
    playStoreId: 'online.tidox.audio.hub',
    playStorePremiumId: null,
    price: 2.49,
    premiumPrice: null,
    colorScheme: {
      gradient: 'from-indigo-50 to-blue-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-indigo-200',
      darkBorder: 'border-indigo-900',
      primary: 'indigo-600',
      accent: 'blue-500'
    },
    icon: 'audio-hub',
    page: '/src/pages/audio-hub.html',
    applicationCategory: 'MusicApplication'
  },

  localListen: {
    id: 'local-listen',
    name: 'Local Listen',
    tagline: 'AI-Powered Audio Intelligence Platform',
    description: 'Transform your audio chaos into an organized, searchable library with AI-powered categorization. On-device ML, video extraction, interactive waveforms.',
    category: 'Media & Entertainment',
    features: [
      'On-device ML categorization',
      'Video-to-audio extraction',
      'Interactive waveform view',
      'Smart playlists',
      '5-band equalizer',
      '100% private'
    ],
    playStoreId: 'online.tidox.local.listen',
    playStorePremiumId: null,
    price: 0,
    premiumPrice: null,
    colorScheme: {
      gradient: 'from-violet-50 to-purple-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-violet-200',
      darkBorder: 'border-violet-900',
      primary: 'violet-600',
      accent: 'purple-500'
    },
    icon: 'music-note',
    page: '/src/pages/local-listen.html',
    applicationCategory: 'MusicApplication'
  },

  offlineAudio: {
    id: 'offline-audio',
    name: 'Tidox: Offline Audio Player',
    tagline: 'Simple Offline Music Playback',
    description: 'A lightweight, privacy-first audio player for your local music collection. No internet, no accounts, just your music.',
    category: 'Media & Entertainment',
    features: [
      'Offline-only playback',
      'Simple, clean interface',
      'Battery efficient',
      'All audio formats',
      'Folder browsing',
      'No internet required'
    ],
    playStoreId: 'online.tidox.offline.audio',
    playStorePremiumId: null,
    price: 0,
    premiumPrice: null,
    colorScheme: {
      gradient: 'from-blue-50 to-sky-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-sky-200',
      darkBorder: 'border-sky-900',
      primary: 'sky-600',
      accent: 'blue-500'
    },
    icon: 'offline',
    page: '/src/pages/offline-audio.html',
    applicationCategory: 'MusicApplication'
  },

  // ============================================
  // PRODUCTIVITY
  // ============================================

  scanner: {
    id: 'scanner',
    name: 'Tidox Scanner',
    tagline: 'Offline Document Scanner & OCR',
    description: 'Scan documents with offline OCR processing. Export to PDF, batch scanning, and secure local storage.',
    category: 'Productivity',
    features: [
      'Offline OCR processing',
      'PDF export',
      'Batch scanning',
      'Auto edge detection',
      'Secure local storage',
      'Multiple formats'
    ],
    playStoreId: 'online.tidox.scanner',
    playStorePremiumId: 'online.tidox.scanner.pro',
    price: 0,
    premiumPrice: 3.99,
    colorScheme: {
      gradient: 'from-blue-50 to-cyan-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-blue-200',
      darkBorder: 'border-blue-900',
      primary: 'blue-600',
      accent: 'cyan-500'
    },
    icon: 'document-scanner',
    page: '/src/pages/scanner.html',
    applicationCategory: 'BusinessApplication'
  },

  taskManager: {
    id: 'task-manager',
    name: 'Tidox Task Manager',
    tagline: 'Simple, Powerful Task Management',
    description: 'Simple, powerful task management for modern teams. Project-based organization, priority tracking, and privacy-first design.',
    category: 'Productivity',
    features: [
      'Project organization',
      'Priority tracking',
      'Due dates & reminders',
      'Color coding',
      'Local storage',
      'No account needed'
    ],
    playStoreId: 'online.tidox.task',
    playStorePremiumId: null,
    price: 0,
    premiumPrice: null,
    colorScheme: {
      gradient: 'from-rose-50 to-pink-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-rose-200',
      darkBorder: 'border-rose-900',
      primary: 'rose-600',
      accent: 'pink-500'
    },
    icon: 'checklist',
    page: '/src/pages/task-manager.html',
    applicationCategory: 'BusinessApplication'
  },

  transcript: {
    id: 'transcript',
    name: 'Offline Transcript',
    tagline: 'Privacy-First Audio Transcription',
    description: '100% on-device audio transcription powered by OpenAI Whisper. Your audio never leaves your device.',
    category: 'Productivity',
    features: [
      'On-device processing',
      'OpenAI Whisper powered',
      'Multiple languages',
      'High accuracy',
      'Export options',
      'No cloud upload'
    ],
    playStoreId: 'online.tidox.transcriber.free',
    playStorePremiumId: 'online.tidox.transcriber.premium',
    price: 0,
    premiumPrice: 4.99,
    colorScheme: {
      gradient: 'from-green-50 to-teal-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-green-200',
      darkBorder: 'border-green-900',
      primary: 'secondary-600',
      accent: 'teal-500'
    },
    icon: 'microphone',
    page: '/src/pages/transcript.html',
    applicationCategory: 'BusinessApplication',
    playStoreName: 'VoxaNotes' // Play Store listing name differs from website
  },

  // ============================================
  // MUSIC
  // ============================================

  guitarTuner: {
    id: 'guitar-tuner',
    name: 'Tidox Guitar Tuner',
    tagline: 'Precise Chromatic Tuner',
    description: 'Professional-grade chromatic tuner with YIN pitch detection algorithm, visual needle dial, and 6-string tracking.',
    category: 'Music',
    features: [
      'YIN pitch detection',
      '±1 cent precision',
      'Visual needle dial',
      '6-string tracking',
      'Auto-detect string',
      'Light/Dark themes'
    ],
    playStoreId: 'com.tidox.guitartuner.free',
    playStorePremiumId: 'com.tidox.guitartuner.premium',
    price: 0,
    premiumPrice: 2.99,
    colorScheme: {
      gradient: 'from-amber-50 to-orange-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-amber-200',
      darkBorder: 'border-amber-900',
      primary: 'amber-600',
      accent: 'orange-500'
    },
    icon: 'guitar',
    page: '/src/pages/guitar-tuner.html',
    applicationCategory: 'MusicApplication'
  },

  // ============================================
  // SMART HOME
  // ============================================

  remote: {
    id: 'remote',
    name: 'Tidox Universal Remote',
    tagline: 'Control Any TV from Your Phone',
    description: 'Universal remote control app with IR blaster support, WiFi TV discovery, and smart camera pairing.',
    category: 'Smart Home',
    features: [
      'IR Blaster control',
      'WiFi TV discovery',
      'Smart camera pairing',
      'Samsung/LG/Sony support',
      'Android TV & Fire TV',
      'Haptic feedback'
    ],
    playStoreId: 'online.tidox.remote',
    playStorePremiumId: 'online.tidox.remote.premium',
    price: 0,
    premiumPrice: 4.99,
    colorScheme: {
      gradient: 'from-indigo-50 to-purple-50',
      darkGradient: 'from-gray-900 to-gray-800',
      border: 'border-indigo-200',
      darkBorder: 'border-indigo-900',
      primary: 'indigo-600',
      accent: 'purple-500'
    },
    icon: 'remote',
    page: '/src/pages/remote-control.html',
    applicationCategory: 'UtilitiesApplication'
  }
};

// ============================================
// CATEGORY GROUPINGS
// ============================================

const PRODUCT_CATEGORIES = {
  'Media & Entertainment': ['player', 'vrPlayer', 'audioHub', 'localListen', 'offlineAudio'],
  'Productivity': ['scanner', 'taskManager', 'transcript'],
  'Music': ['guitarTuner'],
  'Smart Home': ['remote']
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all products as an array
 */
function getAllProducts() {
  return Object.values(TIDOX_PRODUCTS);
}

/**
 * Get products by category
 */
function getProductsByCategory(category) {
  const productIds = PRODUCT_CATEGORIES[category] || [];
  return productIds.map(id => TIDOX_PRODUCTS[id]);
}

/**
 * Get a single product by ID
 */
function getProduct(id) {
  return TIDOX_PRODUCTS[id] || null;
}

/**
 * Get Play Store URL for a product
 */
function getPlayStoreUrl(productId, premium = false) {
  const product = TIDOX_PRODUCTS[productId];
  if (!product) return null;

  const packageId = premium && product.playStorePremiumId
    ? product.playStorePremiumId
    : product.playStoreId;

  return `https://play.google.com/store/apps/details?id=${packageId}&hl=en`;
}

/**
 * Get products that have free versions
 */
function getFreeProducts() {
  return getAllProducts().filter(p => p.price === 0);
}

/**
 * Get products that have premium versions
 */
function getPremiumProducts() {
  return getAllProducts().filter(p => p.premiumPrice !== null);
}

/**
 * Get total product count
 */
function getProductCount() {
  return Object.keys(TIDOX_PRODUCTS).length;
}

// Export for use in other scripts (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TIDOX_PRODUCTS,
    PRODUCT_CATEGORIES,
    getAllProducts,
    getProductsByCategory,
    getProduct,
    getPlayStoreUrl,
    getFreeProducts,
    getPremiumProducts,
    getProductCount
  };
}
