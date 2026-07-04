export type ProductCategory =
  | 'Media & Entertainment'
  | 'Productivity'
  | 'Music'
  | 'Smart Home'
  | 'Communication'
  | 'Security';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  icon: string;
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Media & Entertainment',
  'Productivity',
  'Music',
  'Smart Home',
  'Communication',
  'Security',
];

export const products: Product[] = [
  {
    slug: 'player',
    name: 'Tidox Player',
    tagline: 'Advanced IPTV & Media Player',
    category: 'Media & Entertainment',
    icon: '/images/products/player.png',
  },
  {
    slug: 'vr-player',
    name: 'VR Tidox Player 360',
    tagline: 'Immersive VR Video Experience',
    category: 'Media & Entertainment',
    icon: '/images/products/vr-player.png',
  },
  {
    slug: 'audio-hub',
    name: 'Tidox Pro: Audio Hub',
    tagline: 'Your Audio Intelligently Organized',
    category: 'Media & Entertainment',
    icon: '/images/products/audio-hub.png',
  },
  {
    slug: 'offline-audio',
    name: 'Tidox: Offline Audio Player',
    tagline: 'Simple Offline Music Playback',
    category: 'Media & Entertainment',
    icon: '/images/products/offline-audio.png',
  },
  {
    slug: 'scanner',
    name: 'Tidox Scanner',
    tagline: 'Private Document Scanner. 100% Offline.',
    category: 'Productivity',
    icon: '/images/products/scanner.png',
  },
  {
    slug: 'task-manager',
    name: 'Tidox Task Manager',
    tagline: 'Simple, Powerful Task Management',
    category: 'Productivity',
    icon: '/images/products/task-manager.png',
  },
  {
    slug: 'transcript',
    name: 'Offline Transcript',
    tagline: 'Privacy-First Voice Transcription with On-Device AI',
    category: 'Productivity',
    icon: '/images/products/transcript.png',
  },
  {
    slug: 'qr-scanner',
    name: 'Tidox QR Scanner',
    tagline: 'Scan & Create QR Codes Privately',
    category: 'Productivity',
    icon: '/images/products/qr-scanner.png',
  },
  {
    slug: 'voice-memo',
    name: 'Tidox Voice Memo',
    tagline: 'Record & Transcribe Voice Memos Privately',
    category: 'Productivity',
    icon: '/images/products/voice-memo.png',
  },
  {
    slug: 'clipboard',
    name: 'Tidox Clipboard',
    tagline: 'Smart Clipboard History & Manager',
    category: 'Productivity',
    icon: '/images/products/clipboard.png',
  },
  {
    slug: 'app-locker',
    name: 'Private App Locker',
    tagline: 'Lock Apps with PIN, Pattern or Fingerprint',
    category: 'Productivity',
    icon: '/images/products/app-locker.png',
  },
  {
    slug: 'flashcards',
    name: 'Private Flashcards',
    tagline: 'Study Smarter with Offline Flashcards',
    category: 'Productivity',
    icon: '/images/products/flashcards.png',
  },
  {
    slug: 'recording',
    name: 'Tidox Recording',
    tagline: 'Screen Recorder with Internal Audio',
    category: 'Productivity',
    icon: '/images/products/recording.png',
  },
  {
    slug: 'guitar-tuner',
    name: 'Tidox Guitar Tuner',
    tagline: 'Professional Chromatic Tuner with Real-Time Pitch Detection',
    category: 'Music',
    icon: '/images/products/guitar-tuner.svg',
  },
  {
    slug: 'remote-control',
    name: 'Tidox Universal Remote',
    tagline: 'Control Any TV from Your Phone',
    category: 'Smart Home',
    icon: '/images/products/remote-control.png',
  },
  {
    slug: 'kora',
    name: 'Tidox Kora',
    tagline: 'Mesh Messaging Without Internet',
    category: 'Communication',
    icon: '/images/products/kora.png',
  },
  {
    slug: 'lucid',
    name: 'Tidox Lucid',
    tagline: 'AI & Scam Detector',
    category: 'Security',
    icon: '/images/products/lucid.png',
  },
  {
    slug: 'alarm',
    name: 'Tidox Alarm',
    tagline: 'Timer, Stopwatch & Themes',
    category: 'Productivity',
    icon: '/images/products/alarm.png',
  },
  {
    slug: 'daily-companion',
    name: 'Daily Companion',
    tagline: 'Parenting Tools On-Device',
    category: 'Productivity',
    icon: '/images/products/daily-companion.png',
  },
  {
    slug: 'piano',
    name: 'Tidox Piano',
    tagline: 'Learn Piano On Your Phone',
    category: 'Music',
    icon: '/images/products/piano.png',
  },
  {
    slug: 'sentinel',
    name: 'Tidox Sentinel',
    tagline: 'Private Baby & Home Monitor over Wi-Fi',
    category: 'Security',
    icon: '/images/products/sentinel.png',
  },
  {
    slug: 'cleaner',
    name: 'Tidox Cleaner',
    tagline: 'Free Up Storage & Boost Android',
    category: 'Productivity',
    icon: '/images/products/cleaner.png',
  },
  {
    slug: 'pdf-reader',
    name: 'Tidox PDF Reader',
    tagline: 'Private PDF Reading On-Device',
    category: 'Productivity',
    icon: '/images/products/pdf-reader.png',
  },
  {
    slug: 'reader',
    name: 'Tidox Reader',
    tagline: 'Private E-Book Reader',
    category: 'Productivity',
    icon: '/images/products/reader.png',
  },
  {
    slug: 'secure-browser',
    name: 'Private Secure Browser',
    tagline: 'Browse Without Tracking',
    category: 'Security',
    icon: '/images/products/secure-browser.png',
  },
  {
    slug: 'sound-meter',
    name: 'Tidox Sound Meter',
    tagline: 'Decibel Meter On-Device',
    category: 'Productivity',
    icon: '/images/products/sound-meter.png',
  },
  {
    slug: 'beam',
    name: 'Tidox Beam: File Transfer',
    tagline: 'Share Files Over Wi-Fi',
    category: 'Productivity',
    icon: '/images/products/beam.svg',
  },
  {
    slug: 'guardian',
    name: 'Tidox Guardian: App Watchdog',
    tagline: 'Monitor App Usage Privately',
    category: 'Security',
    icon: '/images/products/guardian.svg',
  },
  {
    slug: 'local',
    name: 'Tidox Local: Offline AI Chat',
    tagline: 'AI Chat Without the Cloud',
    category: 'Productivity',
    icon: '/images/products/local.svg',
  },
  {
    slug: 'prompt',
    name: 'Tidox Prompt: AI Prompt Vault',
    tagline: 'Store Prompts On-Device',
    category: 'Productivity',
    icon: '/images/products/prompt.svg',
  },
];

export function productsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
