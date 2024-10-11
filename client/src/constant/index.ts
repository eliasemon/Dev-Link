// Importing icons from react-icons
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaSnapchat,
  FaTiktok,
  FaReddit,
  FaWhatsapp,
  FaTelegram,
  FaTwitch,
  FaDribbble,
  FaSpotify,
  FaSlack,
  FaAmazon,
  FaDropbox,
} from 'react-icons/fa'; // Import only the icons you need

export const platformData = [
  // Development-related platforms
  { platform: 'GitHub', icon: FaGithub, color: '#333' },
  { platform: 'LinkedIn', icon: FaLinkedin, color: '#0077B5' },
  { platform: 'Slack', icon: FaSlack, color: '#4A154B' },
  { platform: 'Dropbox', icon: FaDropbox, color: '#0061FF' },
  { platform: 'Amazon', icon: FaAmazon, color: '#FF9900' },

  // Social media platforms
  { platform: 'Facebook', icon: FaFacebook, color: '#3b5998' },
  { platform: 'Twitter', icon: FaTwitter, color: '#1DA1F2' },
  { platform: 'Instagram', icon: FaInstagram, color: '#E1306C' },
  { platform: 'YouTube', icon: FaYoutube, color: '#FF0000' },
  { platform: 'Pinterest', icon: FaPinterest, color: '#BD081C' },
  { platform: 'Snapchat', icon: FaSnapchat, color: '#FFFC00' },
  { platform: 'TikTok', icon: FaTiktok, color: '#010101' },
  { platform: 'Reddit', icon: FaReddit, color: '#FF4500' },
  { platform: 'WhatsApp', icon: FaWhatsapp, color: '#25D366' },
  { platform: 'Telegram', icon: FaTelegram, color: '#0088CC' },
  { platform: 'Twitch', icon: FaTwitch, color: '#9146FF' },
  { platform: 'Dribbble', icon: FaDribbble, color: '#EA4C89' },
  { platform: 'Spotify', icon: FaSpotify, color: '#1DB954' },
];

// Converting array to Map using platform name as the key
const platformMap = new Map(
  platformData.map((platform) => [platform.platform, platform]),
);

// Now you can access the platform data by its name as the key
export default platformMap;
