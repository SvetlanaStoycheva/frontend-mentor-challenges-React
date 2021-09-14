import iconBrand from './images/icon-brand-recognition.svg';
import iconDetailed from './images/icon-detailed-records.svg';
import iconCustomizable from './images/icon-fully-customizable.svg';

export const navLinks = [
  { id: 1, url: '/features', name: 'Features' },
  { id: 2, url: '/pricing', name: 'Pricing' },
  { id: 3, url: '/resources', name: 'Resources' },
];

export const navLinksLogin = [
  { id: 1, url: '/login', name: 'Login' },
  { id: 2, url: '/signup', name: 'Sign Up' },
];

export const advancedStatistics = [
  {
    icon: iconBrand,
    title: 'Brand Recognition',
    text:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    icon: iconDetailed,
    title: 'Detailed Records',
    text:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    icon: iconCustomizable,
    title: 'Fully Customizable',
    text:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];
