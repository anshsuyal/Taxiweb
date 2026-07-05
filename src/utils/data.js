import {
  FaTaxi, FaPlane, FaRoad, FaBuilding, FaUsers, FaHeart,
  FaMountain, FaTree, FaCar, FaUserTie,
  FaHeadset, FaDollarSign, FaShieldAlt, FaPumpSoap, FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';

export const company = {
  name: 'AVENTO Global Travel Solutions',
  tagline: 'Beyond Every Journey',
  phone: '+91 7456918807',
  email: 'booking@aventoglobal.com',
  address: 'Dehradun, Uttarakhand, India',
  whatsapp: 'https://wa.me/917456918807?text=Hi%20AVENTO!%20I%20want%20to%20book%20a%20taxi',
  mapEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=77.97%2C30.28%2C78.12%2C30.38&layer=mapnik',
  workingHours: 'Mon - Sun: 5:00 AM - 11:00 PM',
  description: 'Dehradun-based premium travel company providing reliable taxi services, airport transfers, outstation travel, Char Dham Yatra packages, and customized travel solutions across Uttarakhand.',
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services', path: '/services',
    dropdown: [
      { name: 'Local Taxi', path: '/services#local' },
      { name: 'Airport Transfer', path: '/services#airport' },
      { name: 'Outstation Taxi', path: '/services#outstation' },
      { name: 'Char Dham Yatra', path: '/services#chardham' },
      { name: 'Tour Packages', path: '/tour-packages' },
      { name: 'Corporate Travel', path: '/services#corporate' },
    ]
  },
  { name: 'Tour Packages', path: '/tour-packages' },
  { name: 'Destinations', path: '/destinations' },
];

export const services = [
  { id: 1, icon: FaTaxi, title: 'Local Taxi', slug: 'local', description: 'Reliable local taxi service in Dehradun and nearby areas for daily commutes, shopping, and city travel.', benefits: ['Professional drivers', 'GPS tracked', 'Affordable fares', '24/7 availability'] },
  { id: 2, icon: FaPlane, title: 'Airport Transfer', slug: 'airport', description: 'Hassle-free Jolly Grant Airport transfers with flight tracking, meet-and-greet, and luggage assistance.', benefits: ['Flight tracking', 'Meet & greet', 'Luggage help', 'On-time pickup'] },
  { id: 3, icon: FaRoad, title: 'Outstation Taxi', slug: 'outstation', description: 'Comfortable long-distance journeys to Mussoorie, Rishikesh, Nainital, and all Uttarakhand destinations.', benefits: ['Experienced drivers', 'Well-maintained cars', 'Flexible stops', 'Round trips'] },
  { id: 4, icon: FaMountain, title: 'Char Dham Yatra', slug: 'chardham', description: 'Complete Char Dham Yatra packages including Yamunotri, Gangotri, Kedarnath, and Badrinath.', benefits: ['Customized itinerary', 'Spiritual guidance', 'Comfortable stay', 'All permits'] },
  { id: 5, icon: FaTree, title: 'Tour Packages', slug: 'tours', description: 'Curated tour packages to Uttarakhand\'s top destinations with personalized itineraries and guides.', benefits: ['Tailored plans', 'Local guides', 'Best hotels', 'Sightseeing'] },
  { id: 6, icon: FaBuilding, title: 'Corporate Travel', slug: 'corporate', description: 'Professional corporate transportation solutions for business meetings, events, and executive travel.', benefits: ['Premium fleet', 'Punctual service', 'Billing options', 'Dedicated support'] },
  { id: 7, icon: FaUsers, title: 'Family Tours', slug: 'family', description: 'Safe and comfortable family tour packages with child-friendly vehicles and experienced drivers.', benefits: ['Safe driving', 'Spacious cars', 'Flexible timing', 'Family discounts'] },
  { id: 8, icon: FaHeart, title: 'Wedding Travel', slug: 'wedding', description: 'Elegant wedding transportation solutions for guests, ceremonies, and special events.', benefits: ['Luxury cars', 'Decor options', 'Guest management', 'Punctual service'] },
  { id: 9, icon: FaCar, title: 'Luxury Taxi', slug: 'luxury', description: 'Premium luxury vehicle rentals for VIP travel, special occasions, and executive transport.', benefits: ['Luxury sedans/SUVs', 'Chauffeur service', 'White glove', 'Privacy'] },
];

export const whyChooseUs = [
  { id: 1, icon: FaUserTie, title: 'Professional Drivers', description: 'Experienced, verified, and courteous drivers ensuring your safety and comfort on every journey.' },
  { id: 2, icon: FaShieldAlt, title: 'Verified Drivers', description: 'All drivers undergo thorough background verification and regular training programs.' },
  { id: 3, icon: FaHeadset, title: '24/7 Support', description: 'Round-the-clock customer support for bookings, queries, and emergency assistance.' },
  { id: 4, icon: FaDollarSign, title: 'Transparent Pricing', description: 'No hidden charges, clear fare breakdown, and competitive rates for all services.' },
  { id: 5, icon: FaCar, title: 'Safe Journey', description: 'GPS-tracked vehicles, regular maintenance, and comprehensive insurance for peace of mind.' },
  { id: 6, icon: FaPumpSoap, title: 'Sanitized Vehicles', description: 'Impeccably cleaned and sanitized vehicles after every trip for your health safety.' },
  { id: 7, icon: FaClock, title: 'Easy Booking', description: 'Book via WhatsApp, phone, or website form. Instant confirmation and driver details.' },
  { id: 8, icon: FaMapMarkerAlt, title: 'On-time Pickup', description: 'Punctual service with real-time tracking and timely pickups guaranteed.' },
];

export const destinations = [
  { id: 1, name: 'Mussoorie', image: 'https://i.pinimg.com/736x/59/50/d9/5950d9d3aced8301e6f982f08c25a8b5.jpg', description: 'The Queen of Hills, famous for Mall Road, Kempty Falls, and scenic views.', distance: '35 km from Dehradun', duration: '1 hour' },
  { id: 2, name: 'Rishikesh', image: 'https://images.unsplash.com/photo-1580476262798-b3a5b2a6f8c8?w=600&q=80', description: 'Yoga capital of the world with Ganga aarti, rafting, and Beatles ashram.', distance: '45 km from Dehradun', duration: '1.5 hours' },
  { id: 3, name: 'Haridwar', image: 'https://images.unsplash.com/photo-1598078382413-90d1a2d5b04a?w=600&q=80', description: 'Holy city on the Ganges with Har Ki Pauri and grand Ganga aarti.', distance: '55 km from Dehradun', duration: '1.5 hours' },
  { id: 4, name: 'Nainital', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', description: 'Lake district of India with Naini Lake, Snow View Point, and zoo.', distance: '300 km from Dehradun', duration: '7 hours' },
  { id: 5, name: 'Auli', image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80', description: 'Skiing paradise with panoramic Himalayan views and ropeway.', distance: '280 km from Dehradun', duration: '8 hours' },
  { id: 6, name: 'Chopta', image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600&q=80', description: 'Mini Switzerland of India, base for Tungnath and Chandrashila treks.', distance: '230 km from Dehradun', duration: '7 hours' },
  { id: 7, name: 'Tehri Lake', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80', description: 'Asia\'s largest man-made lake with water sports and scenic beauty.', distance: '80 km from Dehradun', duration: '2.5 hours' },
  { id: 8, name: 'Jim Corbett', image: 'https://images.unsplash.com/photo-1549366021-9f7610144504?w=600&q=80', description: 'India\'s oldest national park famous for Bengal tigers and wildlife safaris.', distance: '140 km from Dehradun', duration: '3.5 hours' },
  { id: 9, name: 'Kedarnath', image: 'https://images.unsplash.com/photo-1621961458348-013f03d89d2d?w=600&q=80', description: 'One of the 12 Jyotirlingas, located in the majestic Himalayas.', distance: '250 km from Dehradun', duration: '9 hours' },
  { id: 10, name: 'Badrinath', image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=600&q=80', description: 'Sacred temple town in the Garhwal Himalayas, part of Char Dham.', distance: '320 km from Dehradun', duration: '10 hours' },
  { id: 11, name: 'Gangotri', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80', description: 'Origin of River Ganga, a sacred pilgrimage site in Uttarkashi.', distance: '250 km from Dehradun', duration: '8 hours' },
  { id: 12, name: 'Yamunotri', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80', description: 'Source of River Yamuna, starting point of Char Dham Yatra.', distance: '220 km from Dehradun', duration: '7 hours' },
];

export const tourPackages = [
  { id: 1, name: 'Char Dham Yatra', image: 'https://images.unsplash.com/photo-1621961458348-013f03d89d2d?w=600&q=80', duration: '10-12 Days', highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'], bestSeason: 'May - October', price: '₹25,000 onwards' },
  { id: 2, name: 'Mussoorie Getaway', image: 'https://images.unsplash.com/photo-1588411939760-d5b02aa2e1c5?w=600&q=80', duration: '2-3 Days', highlights: ['Mall Road', 'Kempty Falls', 'Gun Hill', 'Clouds End'], bestSeason: 'Round the year', price: '₹4,000 onwards' },
  { id: 3, name: 'Rishikesh Retreat', image: 'https://images.unsplash.com/photo-1580476262798-b3a5b2a6f8c8?w=600&q=80', duration: '2-3 Days', highlights: ['Ganga Aarti', 'River Rafting', 'Laxman Jhula', 'Ashrams'], bestSeason: 'September - June', price: '₹3,500 onwards' },
  { id: 4, name: 'Haridwar Pilgrimage', image: 'https://images.unsplash.com/photo-1598078382413-90d1a2d5b04a?w=600&q=80', duration: '1-2 Days', highlights: ['Har Ki Pauri', 'Mansa Devi', 'Chandi Devi', 'Ganga Aarti'], bestSeason: 'Round the year', price: '₹2,500 onwards' },
  { id: 5, name: 'Auli Adventure', image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600&q=80', duration: '4-5 Days', highlights: ['Skiing', 'Ropeway', 'Himalayan Views', 'Joshimath'], bestSeason: 'December - March', price: '₹8,000 onwards' },
  { id: 6, name: 'Nainital Escape', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', duration: '3-4 Days', highlights: ['Naini Lake', 'Snow View Point', 'Naina Devi', 'Zoo'], bestSeason: 'Round the year', price: '₹6,000 onwards' },
  { id: 7, name: 'Chopta Trek', image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600&q=80', duration: '4-5 Days', highlights: ['Tungnath', 'Chandrashila', 'Deoria Tal', 'Camping'], bestSeason: 'April - October', price: '₹7,000 onwards' },
  { id: 8, name: 'Tehri Lake Resort', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80', duration: '2-3 Days', highlights: ['Water Sports', 'Boating', 'Resort Stay', 'Sunset Views'], bestSeason: 'Round the year', price: '₹5,000 onwards' },
  { id: 9, name: 'Jim Corbett Safari', image: 'https://images.unsplash.com/photo-1549366021-9f7610144504?w=600&q=80', duration: '2-3 Days', highlights: ['Tiger Safari', 'Bird Watching', 'Nature Walk', 'River Crossing'], bestSeason: 'November - June', price: '₹6,500 onwards' },
];

export const teamMembers = [
  { name: 'Rajesh Kumar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Sunita Rawat', role: 'Operations Head', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { name: 'Manoj Joshi', role: 'Fleet Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Kavita Bhatt', role: 'Customer Relations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
];

export const achievements = [
  { year: '2013', title: 'Company Founded', description: 'AVENTO Global Travel Solutions was established in Dehradun with a vision to transform travel in Uttarakhand.' },
  { year: '2015', title: 'Fleet Expansion', description: 'Expanded fleet to 20+ vehicles including luxury sedans and SUVs.' },
  { year: '2017', title: 'Corporate Partnerships', description: 'Partnered with 50+ corporate clients for employee travel management.' },
  { year: '2019', title: 'Char Dham Specialization', description: 'Became a leading provider of Char Dham Yatra packages in Uttarakhand.' },
  { year: '2021', title: 'Digital Transformation', description: 'Launched online booking platform with real-time tracking and WhatsApp integration.' },
  { year: '2024', title: '50+ Fleet Strong', description: 'Growing to 50+ vehicles serving 5000+ happy customers annually.' },
];


