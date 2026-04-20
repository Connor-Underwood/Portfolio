// Social media posts data
import post1 from '../../assets/social_media_posts/post-1.png';
import post2 from '../../assets/social_media_posts/post-2.png';
import post3 from '../../assets/social_media_posts/post-3.png';
import post4 from '../../assets/social_media_posts/post-4.png';
import post5 from '../../assets/social_media_posts/post-5.png';
import firstHikeSecondHike from '../../assets/videos/firstHikeSecondHike.mp4';
import interview from '../../assets/videos/interview.mp4';
import ack from '../../assets/videos/ack.mp4';

// To add video hover previews, add a `video` field with the imported video file:
//   import video1 from '../../assets/video-1.mp4';
//   { id: 1, ..., video: video1 }

export const socialMediaPosts = [
  {
    id: 1,
    platform: 'tiktok',
    image: post1,
    video: null, // Replace with imported video file
    icon: 'fab fa-tiktok',
    platformColor: '#ffffff',
    title: '',
  },
  {
    id: 2,
    platform: 'instagram',
    image: post2,
    video: interview,
    icon: 'fab fa-instagram',
    platformColor: '#ec4899',
    title: '',
  },
  {
    id: 3,
    platform: 'instagram',
    image: post3,
    video: firstHikeSecondHike,
    icon: 'fab fa-instagram',
    platformColor: '#ec4899',
    title: '',
  },
  {
    id: 4,
    platform: 'instagram',
    image: post4,
    video: ack,
    icon: 'fab fa-instagram',
    platformColor: '#ec4899',
    title: '',
  },
  {
    id: 5,
    platform: 'instagram',
    image: post5,
    video: null,
    icon: 'fab fa-instagram',
    platformColor: '#ec4899',
    title: '',
  }
];

export const socialStats = {
  totalFollowers: '81k+',
  platforms: [
    { name: 'TikTok', followers: '40.7k', icon: 'fab fa-tiktok', color: '#ffffff' },
    { name: 'Instagram', followers: '40.3k', icon: 'fab fa-instagram', color: '#ec4899' }
  ]
};
