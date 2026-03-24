// Social media posts data
import tiktokPost1 from '../../assets/tiktok-post-1.png';
import tiktokPost2 from '../../assets/tiktok-post-2.png';
import tiktokPost3 from '../../assets/tiktok-post-3.png';
import instagramPost1 from '../../assets/instagram-post-1.png';
import instagramPost2 from '../../assets/instagram-post-2.png';
import instagramPost3 from '../../assets/instagram-post-3.png';
import instagramPost4 from '../../assets/instagram-post-4.png';

export const socialMediaPosts = [
  {
    id: 1,
    platform: 'tiktok',
    image: tiktokPost1,
    icon: 'fab fa-tiktok',
    platformColor: '#000000'
  },
  {
    id: 2,
    platform: 'instagram',
    image: instagramPost1,
    icon: 'fab fa-instagram',
    platformColor: '#E4405F'
  },
  {
    id: 3,
    platform: 'tiktok',
    image: tiktokPost2,
    icon: 'fab fa-tiktok',
    platformColor: '#000000'
  },
  {
    id: 4,
    platform: 'instagram',
    image: instagramPost2,
    icon: 'fab fa-instagram',
    platformColor: '#E4405F'
  },
  {
    id: 5,
    platform: 'tiktok',
    image: tiktokPost3,
    icon: 'fab fa-tiktok',
    platformColor: '#000000'
  },
  {
    id: 6,
    platform: 'instagram',
    image: instagramPost3,
    icon: 'fab fa-instagram',
    platformColor: '#E4405F'
  },
  {
    id: 7,
    platform: 'instagram',
    image: instagramPost4,
    icon: 'fab fa-instagram',
    platformColor: '#E4405F'
  }
];

export const socialStats = {
  totalFollowers: '50k+',
  platforms: [
    { name: 'TikTok', followers: '24.2k', icon: 'fab fa-tiktok', color: '#ffffff' },
    { name: 'Instagram', followers: '27.3k', icon: 'fab fa-instagram', color: '#ec4899' }
  ]
};
