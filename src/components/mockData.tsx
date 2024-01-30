// Define types/interfaces for items
interface Item {
  id: number;
  category: string;
  description: string;
  price: number;
  url: string;
}

// Define types/interfaces for teams
interface Team {
  name: string;
  description: string;
  url: string;
  logo: string;
}

// Define types/interfaces for events
interface Event {
  date: string;
  description: string;
  location: string;
}

// Mock data for items
export const itemsData: Item[] = [
  { id: 1, category: 'running', description: 'Running Shoes', price: 50, url: '/running-shoes' },
  { id: 2, category: 'running', description: 'Running Shorts', price: 25, url: '/running-shorts' },
  { id: 3, category: 'running', description: 'Running Jacket', price: 40, url: '/running-jacket' },
  { id: 4, category: 'running', description: 'Running Watch', price: 80, url: '/running-watch' },
  { id: 5, category: 'running', description: 'Running Backpack', price: 30, url: '/running-backpack' },
  { id: 6, category: 'cycling', description: 'Cycling Helmet', price: 45, url: '/cycling-helmet' },
  { id: 7, category: 'cycling', description: 'Cycling Gloves', price: 20, url: '/cycling-gloves' },
  { id: 8, category: 'cycling', description: 'Cycling Shorts', price: 35, url: '/cycling-shorts' },
  { id: 9, category: 'cycling', description: 'Cycling Water Bottle', price: 10, url: '/cycling-water-bottle' },
  { id: 10, category: 'cycling', description: 'Cycling Jersey', price: 55, url: '/cycling-jersey' },
  { id: 11, category: 'swimming', description: 'Swim Goggles', price: 15, url: '/swim-goggles' },
  { id: 12, category: 'swimming', description: 'Swim Cap', price: 8, url: '/swim-cap' },
  { id: 13, category: 'swimming', description: 'Swim Fins', price: 30, url: '/swim-fins' },
  { id: 14, category: 'swimming', description: 'Swimming Suit', price: 40, url: '/swimming-suit' },
  { id: 15, category: 'swimming', description: 'Swim Earplugs', price: 5, url: '/swim-earplugs' },
];

// Mock data for teams
export const teamsData: Team[] = [
  {
    name: 'Team A',
    description: 'A fantastic team dedicated to sports',
    url: 'https://www.teamA.com',
    logo: 'teamA_logo.png',
  },
  {
    name: 'Team B',
    description: 'A passionate group of individuals striving for excellence',
    url: 'https://www.teamB.com',
    logo: 'teamB_logo.png',
  },
  {
    name: 'Team C',
    description: 'Champions in every field, aiming for victory',
    url: 'https://www.teamC.com',
    logo: 'teamC_logo.png',
  },
];

// Mock data for events
export const eventsData: Event[] = [
  {
    date: '2023-12-01',
    description: 'Running Marathon',
    location: 'City Park',
  },
  {
    date: '2023-12-10',
    description: 'Cycling Challenge',
    location: 'Mountain Trails',
  },
  {
    date: '2023-12-20',
    description: 'Swimming Competition',
    location: 'Community Pool',
  },
];
