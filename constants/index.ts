// NAVBAR SECTION
export const MENU_LINKS = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About', href: '/about' },
  { id: 3, title: 'Services', href: '/services' },
  { id: 4, title: 'Pricing', href: '/pricing' },
  { id: 5, title: 'Contact us', href: '/contact-us' },
]

// CAMP SECTION
export const PERSONS_IMG = [
  { id: 1, img: '/person-1.png', z: 'z-0', left: 'left-0' },
  { id: 2, img: '/person-2.png', z: 'z-5', left: 'left-6' },
  { id: 3, img: '/person-3.png', z: 'z-10', left: 'left-12' },
  { id: 4, img: '/person-4.png', z: 'z-20', left: 'left-[4.5rem]' },
]

import {
  faMapLocationDot,
  faCalendarDays,
  faLightbulb,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: faMapLocationDot,
    iconColor: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: faCalendarDays,
    iconColor: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: faLightbulb,
    iconColor: 'orange',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: faLocationDot,
    iconColor: 'green',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
]

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About RoamReady',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
]

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
}

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
}
