/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  Facebook, 
  Instagram, 
  Twitter, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Tag,
  Truck,
  Users
} from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

// Constants
type Language = 'en' | 'mr';

const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      collection: 'Collection',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact',
      book: 'Book Appointment'
    },
    hero: {
      subtitle: 'Premium Interiors & Furniture',
      title1: 'Welcome To',
      title2: 'Om Sai',
      title3: 'Furniture.',
      desc: 'Premium quality sofas, beds, dining tables, and custom interior solutions crafted with natural materials and timeless design.',
      explore: 'Explore Collection',
      contact: 'Contact Us',
      material: '01 / Material',
      materialDesc: 'Ethically sourced Walnut & Solid Oak',
      design: '02 / Design',
      designDesc: 'Custom Architectural Planning',
      featured: 'Featured Piece',
      sofa: 'The Nordland Velvet Sofa'
    },
    categories: {
      title: 'Curated Collections',
      subtitle: 'Explore By Space',
      items: ['Sofa Sets', 'Beds', 'Dining Tables', 'Office Furniture', 'Modular Kitchen', 'Wooden Furniture'],
      label: 'Collection'
    },
    bestSellers: {
      title: 'Design Icons',
      subtitle: 'The Best Sellers',
      itemLabel: 'Item',
      series: 'Handcrafted Series',
      inquiry: 'Send Inquiry'
    },
    about: {
      title: 'The Art Of Minimalist Craft',
      subtitle: 'About Om Sai Furniture',
      manifesto: 'Our Manifesto',
      manifestoDesc: 'Sustainability by design, quality by craft.',
      desc1: 'At Om Sai Furniture, we believe that your home is a reflection of your personality. Our mission is to provide high-end, contemporary furniture that combines artisanal craftsmanship with modern utility.',
      desc2: '"Everything we make is designed to last a lifetime, ensuring your investment in comfort stands the test of time."',
      artisan: '03 / Artisan',
      artisanDesc: 'Handcrafted by master artisans with decades of inherited knowledge.',
      nature: '04 / Nature',
      natureDesc: 'We source only the finest, eco-friendly timbers and organic luxury fabrics.'
    },
    owner: {
      title: 'The Visionary Behind Om Sai',
      subtitle: 'Meet Our Founder',
      name: 'Abhishek Ghotekar',
      role: 'Founder & Principal Designer',
      message: 'Furniture is not just about utility; it’s about creating a legacy within your home. My journey with Om Sai Furniture started with a simple belief: every piece of wood has a story, and our job is to tell it with grace and strength.',
      experience: '15+ Years of Mastery'
    },
    services: {
      quality: 'Premium Quality',
      qualityDesc: 'Crafted with the finest materials for longevity.',
      pricing: 'Affordable Pricing',
      pricingDesc: 'Luxury furniture at competitive market prices.',
      delivery: 'Fast Delivery',
      deliveryDesc: 'Swift and secure shipping to your doorstep.',
      trusted: 'Trusted Service',
      trustedDesc: 'Thousands of satisfied homeowners and business owners.'
    },
    testimonials: {
      title: 'Conversations',
      subtitle: 'Client Stories',
      reviews: [
        { name: 'Emily Rivers', role: 'Home Owner', content: 'Om Sai Furniture transformed my house into a dream home. The attention to detail is unmatched.' },
        { name: 'Marcus Chen', role: 'Interior Designer', content: 'As a designer, I always recommend Om Sai Furniture for their consistency and premium finish.' },
        { name: 'Sarah Miller', role: 'Office Manager', content: 'Our new office setup is professional yet comfortable. The team was fantastic to work with.' }
      ]
    },
    gallery: {
      title: 'Architectural Views',
      subtitle: 'Visual Showcase'
    },
    contact: {
      title: 'Get In Touch',
      desc: 'Have a project in mind? Our interior consultants are ready to help you curate your space.',
      phone: 'Phone',
      email: 'Email',
      visit: 'Visit Showroom',
      connected: 'Stay Connected',
      formTitle: 'Inquiry Form',
      name: 'Your Name',
      emailLabel: 'Email Address',
      subject: 'Subject',
      detail: 'Requirement Detail',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@example.com',
      placeholderDetail: 'Tell us about your space...',
      submit: 'Send Inquiry Message',
      footerNote: "We'll get back to you within 24 hours.",
      locationTitle: 'Showroom Location',
      whatsapp: 'WhatsApp Now',
      subjects: ['Showroom Visit Inquiry', 'Custom Furniture Catalog', 'Interior Consultation', 'Bulk Order Inquiry']
    },
    footer: {
      desc: 'Curating high-end lifestyle furniture and bespoke interior solutions since 2010. Excellence in every corner.',
      social: ['Instagram', 'Pinterest', 'Behance'],
      company: 'Company',
      access: 'Showroom Access',
      open: 'Showroom Open',
      cities: 'New York / Milan / Tokyo',
      newsletter: 'SUBSCRIBE TO OM SAI UPDATES',
      submit: 'Submit',
      rights: 'ALL RIGHTS RESERVED.',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    process: {
      title: 'Our Craftsmanship Journey',
      subtitle: 'The Creation Process',
      steps: [
        { id: '01', title: 'Consultation', desc: 'We begin by understanding your vision and spatial dynamics.' },
        { id: '02', title: 'Design', desc: 'Our architects create detailed 3D blueprints of your piece.' },
        { id: '03', title: 'Craft', desc: 'Master artisans bring the design to life using traditional tools.' },
        { id: '04', title: 'Deliver', desc: 'White-glove delivery ensures your piece arrives in pristine condition.' }
      ]
    },
    sustainability: {
      title: 'Eco-Conscious Ethics',
      subtitle: 'Nature First',
      desc: 'We are committed to preserving the planet while crafting beauty. Every log is tracked from sustainably managed forests, ensuring the lungs of our earth remain healthy for generations.',
      stats: [
        { label: 'Sustainably Sourced', value: '100%' },
        { label: 'Zero Waste Production', value: '94%' },
        { label: 'Fair Trade Artisans', value: '100%' }
      ]
    },
    consultation: {
      title: 'Bespeak Your Space',
      subtitle: 'Private Interior Design',
      desc: 'Access our exclusive interior consultation service. Our senior designers will work with you to curate a cohesive aesthetic that speaks your language.',
      button: 'Book Private Viewing'
    }
  },
  mr: {
    nav: {
      home: 'होम',
      collection: 'संग्रह',
      about: 'आमच्याबद्दल',
      services: 'सेवा',
      gallery: 'गॅलरी',
      contact: 'संपर्क',
      book: 'अपॉइंटमेंट बुक करा'
    },
    hero: {
      subtitle: 'प्रीमियम इंटीरियर आणि फर्निचर',
      title1: 'स्वागत आहे',
      title2: 'ओम साई',
      title3: 'फर्निचरमध्ये.',
      desc: 'प्रीमियम दर्जाचे सोफे, बेड, डायनिंग टेबल आणि नैसर्गिक साहित्य आणि कालातीत डिझाइनसह तयार केलेले सानुकूल इंटीरियर सोल्यूशन्स.',
      explore: 'संग्रह पहा',
      contact: 'आमच्याशी संपर्क साधा',
      material: '०१ / साहित्य',
      materialDesc: 'नैतिकदृष्ट्या प्राप्त अक्रोड आणि घन ओक',
      design: '०२ / डिझाइन',
      designDesc: 'सानुकूल आर्किटेक्चरल प्लॅनिंग',
      featured: 'वैशिष्ट्यपूर्ण उत्पादन',
      sofa: 'नॉर्डलँड मखमली सोफा'
    },
    categories: {
      title: 'क्युरेटेड संग्रह',
      subtitle: 'जागेनुसार शोधा',
      items: ['सोफा सेट', 'बेड', 'डायनिंग टेबल', 'ऑफिस फर्निचर', 'मॉड्युलर किचन', 'लाकडी फर्निचर'],
      label: 'संग्रह'
    },
    bestSellers: {
      title: 'डिझाइन आयकॉन्स',
      subtitle: 'बेस्ट सेलर्स',
      itemLabel: 'वस्तू',
      series: 'हँडक्राफ्टेड सिरीज',
      inquiry: 'चौकशी पाठवा'
    },
    about: {
      title: 'किमान हस्तकलेची कला',
      subtitle: 'ओम साई फर्निचर बद्दल',
      manifesto: 'आमचा जाहीरनामा',
      manifestoDesc: 'डिझाइनद्वारे टिकाऊपणा, क्राफ्टद्वारे गुणवत्ता.',
      desc1: 'ओम साई फर्निचरमध्ये, आमचा असा विश्वास आहे की तुमचे घर तुमच्या व्यक्तिमत्त्वाचे प्रतिबिंब आहे. आमचे ध्येय आधुनिक उपयोगितेसह कलाकुसर एकत्र करणारे उच्च-स्तरीय, समकालीन फर्निचर प्रदान करणे आहे.',
      desc2: '"आम्ही बनवलेली प्रत्येक गोष्ट आयुष्यभर टिकण्यासाठी तयार केली गेली आहे, ज्यामुळे तुमच्या आरामातील गुंतवणूक काळाच्या कसोटीवर उतरते."',
      artisan: '०३ / कारागीर',
      artisanDesc: 'दशकांचा वारसा लाभलेल्या कारागिरांनी हाताने तयार केलेले.',
      nature: '०४ / निसर्ग',
      natureDesc: 'आम्ही फक्त उत्कृष्ट, पर्यावरणास अनुकूल लाकूड आणि सेंद्रिय लक्झरी कापड वापरतो.'
    },
    owner: {
      title: 'ओम साई मागील दूरदृष्टी',
      subtitle: 'आमच्या संस्थापकांना भेटा',
      name: 'अभिषेक घोटेकर',
      role: 'संस्थापक आणि मुख्य डिझाइनर',
      message: 'फर्निचर म्हणजे केवळ उपयोग नाही; ते तुमच्या घरात एक वारसा तयार करण्याबद्दल आहे. ओम साई फर्निचरचा माझा प्रवास एका साध्या विश्वासाने सुरू झाला: लाकडाच्या प्रत्येक तुकड्याची एक कथा असते आणि ती कृपा आणि मजबुतीने सांगणे हे आमचे काम आहे.',
      experience: '१५+ वर्षांचे प्रभुत्व'
    },
    services: {
      quality: 'प्रीमियम गुणवत्ता',
      qualityDesc: 'दीर्घायुष्यासाठी उत्कृष्ट साहित्याने तयार केलेले.',
      pricing: 'परवडणारी किंमत',
      pricingDesc: 'स्पर्धात्मक बाजारभावात लक्झरी फर्निचर.',
      delivery: 'जलद वितरण',
      deliveryDesc: 'तुमच्या घरापर्यंत जलद आणि सुरक्षित शिपिंग.',
      trusted: 'विश्वासार्ह सेवा',
      trustedDesc: 'हजारो समाधानी घरमालक आणि व्यावसायिकांचा विश्वास.'
    },
    testimonials: {
      title: 'संवाद',
      subtitle: 'ग्राहकांचे अनुभव',
      reviews: [
        { name: 'एमिली रिव्हर्स', role: 'घरमालक', content: 'ओम साई फर्निचरने माझ्या घराचा कायापालट केला. तपशीलांकडे दिलेले लक्ष अतुलनीय आहे.' },
        { name: 'मार्कस चेन', role: 'इंटीरियर डिझायनर', content: 'डिझायनर म्हणून, मी नेहमी त्यांच्या सातत्य आणि प्रीमियम फिनिशसाठी ओम साई फर्निचरची शिफारस करतो.' },
        { name: 'सारा मिलर', role: 'ऑफिस मॅनेजर', content: 'आमचा नवीन ऑफिस सेटअप व्यावसायिक आणि आरामदायक आहे. टीमसोबत काम करणे विलक्षण होते.' }
      ]
    },
    gallery: {
      title: 'आर्किटेक्चरल दृश्ये',
      subtitle: 'व्हिज्युअल शोकेस'
    },
    contact: {
      title: 'संपर्क साधा',
      desc: 'मनात एखादा प्रकल्प आहे का? आमचे इंटीरियर कन्सल्टंट तुम्हाला तुमची जागा सजवण्यात मदत करण्यास तयार आहेत.',
      phone: 'फोन',
      email: 'ईमेल',
      visit: 'शो-रूमला भेट द्या',
      connected: 'आमच्याशी जोडलेले राहा',
      formTitle: 'चौकशी फॉर्म',
      name: 'तुमचे नाव',
      emailLabel: 'ईमेल पत्ता',
      subject: 'विषय',
      detail: 'आवश्यकतेचा तपशील',
      placeholderName: 'जॉन डो',
      placeholderEmail: 'john@example.com',
      placeholderDetail: 'तुमच्या जागेबद्दल सांगा...',
      submit: 'चौकशी संदेश पाठवा',
      footerNote: 'आम्ही २४ तासांच्या आत तुमच्याशी संपर्क साधू.',
      locationTitle: 'शो-रूमचे ठिकाण',
      whatsapp: 'आता व्हॉट्सॲप करा',
      subjects: ['शो-रूम भेट चौकशी', 'सानुकूल फर्निचर कॅटलॉग', 'इंटीरियर कन्सल्टेशन', 'मोठ्या ऑर्डरची चौकशी']
    },
    footer: {
      desc: '२०१० पासून उच्च-स्तरीय फर्निचर आणि सानुकूल इंटीरियर सोल्यूशन्स प्रदान करत आहोत. प्रत्येक कोपऱ्यात उत्कृष्ट गुणवत्ता.',
      social: ['इन्स्टाग्राम', 'पिनट्रेस्ट', 'बिहॅन्स'],
      company: 'कंपनी',
      access: 'शो-रूम प्रवेश',
      open: 'शो-रूम उघडे आहे',
      cities: 'न्यूयॉर्क / मिलान / टोक्यो',
      newsletter: 'ओम साई अपडेट्ससाठी सदस्य व्हा',
      submit: 'सबमिट करा',
      rights: 'सर्व हक्क राखीव.',
      privacy: 'गोपनीयता',
      terms: 'अटी'
    },
    process: {
      title: 'प्रक्रियेचा प्रवास',
      subtitle: 'निर्मिती प्रक्रिया',
      steps: [
        { id: '०१', title: 'परामर्श', desc: 'आम्ही तुमची कल्पना आणि जागेची रचना समजून घेण्यापासून सुरुवात करतो.' },
        { id: '०२', title: 'डिझाइन', desc: 'आमचे आर्किटेक्ट्स तुमच्या वस्तूचे तपशीलवार ३D ब्ल्यू प्रिंट्स तयार करतात.' },
        { id: '०३', title: 'क्राफ्ट', desc: 'कुशल कारागीर पारंपारिक अवजारांचा वापर करून वस्तू प्रत्यक्षात आणतात.' },
        { id: '०४', title: 'वितरण', desc: 'सुरक्षित वितरण तुमच्या वस्तूची सर्वोत्तम स्थितीत पोहोचण्याची खात्री देते.' }
      ]
    },
    sustainability: {
      title: 'पर्यावरण पूरक नैतिकता',
      subtitle: 'निसर्ग प्रथम',
      desc: 'सौंदर्य घडवताना आम्ही पृथ्वीचे रक्षण करण्यास वचनबद्ध आहोत. टिकाऊ लाकडाचा वापर करून निसर्गाचा समतोल राखला जातो.',
      stats: [
        { label: 'शाश्वत स्रोत', value: '१००%' },
        { label: 'शून्य कचरा उत्पादन', value: '९४%' },
        { label: 'फेअर ट्रेड कारागीर', value: '१००%' }
      ]
    },
    consultation: {
      title: 'तुमची जागा सजवा',
      subtitle: 'खाजगी इंटीरियर डिझाइन',
      desc: 'आमच्या विशेष इंटीरियर कन्सल्टेशन सेवेचा लाभ घ्या. आमचे वरिष्ठ डिझायनर तुमच्या आवडीनुसार जागा सजवण्यासाठी काम करतील.',
      button: 'खाजगी भेटीसाठी बुक करा'
    }
  }
};

const BRAND_INFO = {
  name: 'Om Sai Furniture',
  tagline: 'Modern Furniture For Modern Living',
  phone: '+1 (555) 000-SAI',
  whatsapp: '+15550005893',
  email: 'concierge@omsai-furniture.com',
  address: '123 Designer Row, Interiors District, NY 10001'
};

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Collection', href: '#collection' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

const CATEGORIES = [
  { name: 'Sofa Sets', image: '/hero.png' },
  { name: 'Beds', image: '/bedroom.png' },
  { name: 'Dining Tables', image: '/dining.png' },
  { name: 'Office Furniture', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800' },
  { name: 'Modular Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
  { name: 'Wooden Furniture', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800' }
];

const PRODUCTS = [
  { id: 1, name: 'Velvet Cloud Sofa', price: '$2,499', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Nordic Oak Bed', price: '$1,850', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Marble Top Dining Table', price: '$3,200', image: 'https://images.unsplash.com/photo-1577140917449-619eafbafe5f?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Executive Walnut Desk', price: '$1,400', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600' }
];

const WHY_CHOOSE_US = [
  { icon: ShieldCheck, title: 'Premium Quality', desc: 'Crafted with the finest materials for longevity.' },
  { icon: Tag, title: 'Affordable Pricing', desc: 'Luxury furniture at competitive market prices.' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Swift and secure shipping to your doorstep.' },
  { icon: Users, title: 'Trusted Service', desc: 'Thousands of satisfied homeowners and business owners.' }
];

const REVIEWS = [
  { name: 'Emily Rivers', role: 'Home Owner', content: 'Om Sai Furniture transformed my house into a dream home. The attention to detail is unmatched.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=emily' },
  { name: 'Marcus Chen', role: 'Interior Designer', content: 'As a designer, I always recommend Om Sai Furniture for their consistency and premium finish.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=marcus' },
  { name: 'Sarah Miller', role: 'Office Manager', content: 'Our new office setup is professional yet comfortable. The team was fantastic to work with.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=sarah' }
];

const GALLERY = [
  'https://images.unsplash.com/photo-1616486341353-c5833cd711bd?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1616594831320-a24d2820ac34?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1616593874853-228795fd0a21?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=600'
];

// Helper Hooks
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isIntersecting];
}

// Components
const SectionTitle = ({ title, subtitle, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-brand-wood font-serif italic text-lg mb-3 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-serif text-brand-brown uppercase tracking-tighter"
    >
      {title}
    </motion.h2>
    <div className={`h-[1px] w-24 bg-brand-border mt-8 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

const Navbar = ({ lang, setLang, t }: { lang: Language, setLang: (l: Language) => void, t: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-beige/90 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-brand-brown flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded-full"></div>
          {BRAND_INFO.name.toUpperCase()}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex items-center space-x-8">
            <a href="#home" className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-brand-wood ${isScrolled ? 'text-brand-brown' : 'text-white'}`}>{t.nav.home}</a>
            <a href="#collection" className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-brand-wood ${isScrolled ? 'text-brand-brown' : 'text-white'}`}>{t.nav.collection}</a>
            <a href="#about" className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-brand-wood ${isScrolled ? 'text-brand-brown' : 'text-white'}`}>{t.nav.about}</a>
            <a href="#services" className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-brand-wood ${isScrolled ? 'text-brand-brown' : 'text-white'}`}>{t.nav.services}</a>
            <a href="#contact" className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-brand-wood ${isScrolled ? 'text-brand-brown' : 'text-white'}`}>{t.nav.contact}</a>
          </div>
          
          <div className="flex items-center space-x-6 border-l border-brand-border/20 pl-12">
            {/* Language Switcher */}
            <div className="flex bg-brand-border/20 p-1 rounded-full">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-brand-brown text-white' : 'text-brand-brown/40 hover:text-brand-brown'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('mr')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'mr' ? 'bg-brand-brown text-white' : 'text-brand-brown/40 hover:text-brand-brown'}`}
              >
                मराठी
              </button>
            </div>

            <a 
              href="#contact" 
              className={`px-8 py-3 border text-[10px] font-bold uppercase tracking-widest transition-all ${isScrolled ? 'border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white' : 'border-white text-white hover:bg-white hover:text-brand-brown'}`}
            >
              {t.nav.book}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
            className={`text-[10px] font-bold p-2 rounded-lg border ${!isScrolled ? 'text-white border-white' : 'text-brand-brown border-brand-brown'}`}
          >
            {lang === 'en' ? 'मराठी' : 'EN'}
          </button>
          <button 
            className="text-brand-brown p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={!isScrolled ? 'text-white' : ''} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-800 border-b border-gray-50 pb-2">{t.nav.home}</a>
              <a href="#collection" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-800 border-b border-gray-50 pb-2">{t.nav.collection}</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-800 border-b border-gray-50 pb-2">{t.nav.about}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-800 border-b border-gray-50 pb-2">{t.nav.contact}</a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-brown text-white py-3 rounded-xl text-center font-bold"
              >
                {t.nav.book}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ t }: { t: any }) => {
  return (
    <section id="home" className="relative min-h-[auto] md:min-h-screen w-full flex items-center overflow-hidden border-b border-brand-border">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full">
        {/* Left Content */}
        <div className="md:col-span-7 flex flex-col justify-center px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20 border-b md:border-b-0 md:border-r border-brand-border bg-brand-beige">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-wood font-serif italic text-lg md:text-2xl mb-4 md:mb-6">{t.hero.subtitle}</p>
            <h1 className="text-[48px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[1.1] md:leading-[1.05] font-serif uppercase mb-6 md:mb-8 tracking-tighter text-brand-brown">
              {t.hero.title1} <br className="hidden sm:block"/> {t.hero.title2} <br className="hidden sm:block"/> <span className="text-brand-wood italic">{t.hero.title3}</span>
            </h1>
            <p className="max-w-md text-xs md:text-sm leading-relaxed opacity-80 mb-8 md:mb-10 font-medium italic text-brand-brown">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-brown text-white px-8 md:px-10 py-4 md:py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-accent transition-colors">
                {t.hero.explore}
              </button>
              <button className="border border-brand-brown px-8 md:px-10 py-4 md:py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-brown hover:text-white transition-all">
                {t.hero.contact}
              </button>
            </div>
          </motion.div>


          <div className="grid grid-cols-2 gap-8 mt-24 pt-12 border-t border-brand-border">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 text-brand-wood">{t.hero.material}</h3>
              <p className="text-xs font-bold uppercase text-brand-brown">{t.hero.materialDesc}</p>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest mb-3 text-brand-wood">{t.hero.design}</h3>
              <p className="text-xs font-bold uppercase text-brand-brown">{t.hero.designDesc}</p>
            </div>
          </div>
        </div>

        {/* Right Media */}
        <div className="md:col-span-5 relative bg-secondary-beige min-h-[400px] md:min-h-screen">
          <div className="absolute inset-0 group overflow-hidden">
            <img 
              src="/hero.png" 
              alt="Luxury Living" 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-brown/5"></div>
            
            {/* Featured Floating Badge */}
            <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 p-6 md:p-10 bg-brand-beige border border-brand-border shadow-2xl backdrop-blur-sm max-w-[240px] md:max-w-xs transition-transform group-hover:-translate-y-4">
              <p className="text-[8px] md:text-[10px] tracking-widest uppercase mb-2 font-bold text-brand-wood">{t.hero.featured}</p>
              <h2 className="text-xl md:text-2xl font-serif italic text-brand-brown">{t.hero.sofa}</h2>
              <div className="h-px bg-brand-border my-4 w-12"></div>
              <p className="text-sm font-bold uppercase tracking-tighter text-brand-brown">$3,299</p>
              <div className="absolute top-0 right-0 p-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-brand-brown flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform text-xs md:text-base">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedCategories = ({ t }: { t: any }) => {
  return (
    <section id="collection" className="py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle 
          title={t.categories.title} 
          subtitle={t.categories.subtitle}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-brand-border text-brand-brown">
          {CATEGORIES.map((cat, idx) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] md:h-[500px] cursor-pointer border-r border-b border-brand-border overflow-hidden"
            >

              <img 
                src={`${cat.image}`} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 left-0 p-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-beige mb-2">{t.categories.label} {idx + 1}</p>
                <h3 className="text-3xl font-serif text-white uppercase tracking-tighter">{t.categories.items[idx]}</h3>
              </div>
              <div className="absolute bottom-10 right-10">
                <div className="w-12 h-12 rounded-full border border-white text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSellers = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-secondary-beige border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-0 md:px-4">
          <SectionTitle 
            title={t.bestSellers.title} 
            subtitle={t.bestSellers.subtitle} 
            centered={false}
          />
          <div className="flex gap-4 mb-8 md:mb-20">
            <button className="w-10 h-10 md:w-12 md:h-12 border border-brand-border rounded-full flex items-center justify-center hover:bg-brand-brown hover:text-white transition-all">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 md:w-12 md:h-12 border border-brand-border rounded-full flex items-center justify-center hover:bg-brand-brown hover:text-white transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-brand-border">

          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group border-r border-b border-brand-border bg-white p-8 hover:bg-brand-beige transition-colors"
            >
              <div className="relative overflow-hidden mb-8 aspect-[4/5]">
                <img 
                   src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-wood mb-2">{t.bestSellers.itemLabel} {idx + 1}</p>
                  <h3 className="text-xl font-serif text-brand-brown mb-2 uppercase tracking-tight leading-tight">{product.name}</h3>
                  <p className="text-sm font-medium italic opacity-60">{t.bestSellers.series}</p>
                </div>
                <p className="text-sm font-bold text-brand-brown">{product.price}</p>
              </div>
              <button className="mt-8 w-full border border-brand-brown py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-brown hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">
                {t.bestSellers.inquiry}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = ({ t }: { t: any }) => {
  return (
    <section id="about" className="py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-6 border border-brand-border p-4 md:p-8 bg-white shadow-xl order-2 md:order-1"
        >
          <div className="relative overflow-hidden h-[400px] md:h-[600px] w-full border border-brand-border">
            <img 
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800" 
              alt="Designer working" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="pt-6 md:pt-8">
            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-brand-wood mb-2">{t.about.manifesto}</p>
            <p className="text-sm italic opacity-70">{t.about.manifestoDesc}</p>
          </div>
        </motion.div>

        <div className="md:col-span-6 order-1 md:order-2">

          <SectionTitle 
            title={t.about.title} 
            subtitle={t.about.subtitle} 
            centered={false} 
          />
          <p className="text-lg opacity-80 mb-8 leading-relaxed font-serif italic">
            {t.about.desc1}
          </p>
          <p className="text-md opacity-60 mb-12 leading-relaxed italic">
            {t.about.desc2}
          </p>
          
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-wood mb-4">{t.about.artisan}</h4>
              <p className="text-sm opacity-80 leading-relaxed font-medium">{t.about.artisanDesc}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-wood mb-4">{t.about.nature}</h4>
              <p className="text-sm opacity-80 leading-relaxed font-medium">{t.about.natureDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MeetTheOwner = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-brand-beige/20 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-wood mb-4 block">{t.owner.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-brown mb-8 leading-tight">
              {t.owner.title}
            </h2>
            <div className="space-y-6">
              <p className="text-lg italic font-serif text-brand-brown/80 leading-relaxed">
                "{t.owner.message}"
              </p>
              <div>
                <h3 className="text-xl font-serif text-brand-brown">{t.owner.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-wood">{t.owner.role}</p>
                <p className="text-xs font-medium italic text-brand-brown/60 mt-2">{t.owner.experience}</p>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-7 order-1 md:order-2"
          >
            <div className="relative">
              <div className="aspect-[16/10] overflow-hidden border border-brand-border p-4 bg-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Founder Portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent rounded-full flex items-center justify-center p-4 text-center shadow-xl">
                 <p className="text-[8px] font-black uppercase tracking-widest text-brand-brown">Crafting excellence Since 2010</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = ({ t }: { t: any }) => {
  const features = [
    { icon: ShieldCheck, title: t.services.quality, desc: t.services.qualityDesc },
    { icon: Tag, title: t.services.pricing, desc: t.services.pricingDesc },
    { icon: Truck, title: t.services.delivery, desc: t.services.deliveryDesc },
    { icon: Users, title: t.services.trusted, desc: t.services.trustedDesc },
  ];

  return (
    <section id="services" className="py-24 bg-brand-beige/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-brand-border bg-white overflow-hidden">
          {features.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-12 text-center group hover:bg-brand-brown hover:text-white transition-colors duration-500 ${idx !== features.length - 1 ? 'md:border-r border-brand-border' : ''} ${idx < 2 ? 'border-b md:border-b-0' : ''}`}
            >
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:text-brand-brown transition-all duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4">{item.title}</h3>
              <p className="text-gray-500 group-hover:text-white/70 text-xs font-bold leading-relaxed transition-colors uppercase tracking-tight">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SignatureSeries = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-white overflow-hidden border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden border border-brand-border p-3">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200" 
                alt="Signature Series" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Absolute decorative elements */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 hidden xl:block">
              <div className="w-40 h-40 border border-brand-border rounded-full flex items-center justify-center animate-spin-slow">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-wood text-center flex items-center justify-center h-full">Signature Edition Om Sai</span>
              </div>
            </div>
          </motion.div>

          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-wood mb-4 block">Limited Signature Edition</span>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-brown uppercase leading-[0.9] tracking-tighter mb-8">
              The <span className="italic text-brand-wood lowercase">Royal</span><br/>Velvet Throne
            </h2>
            <p className="text-xl opacity-70 italic font-serif leading-relaxed mb-12">
              Inspired by neoclassical architecture and modern ergonomic science. A piece that doesn't just fill a room, but defines it.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                "Individually hand-tufted French velvet",
                "Solid seasoned teak wood frame",
                "24K Gold-leaf accented legs",
                "Limited series 01/50"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-brown">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-brand-brown text-white px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-accent transition-all shadow-xl">
              Request Exclusive Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 border-b border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle 
          title={t.process.title}
          subtitle={t.process.subtitle}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-brand-border">
          {t.process.steps.map((step: any, idx: number) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-12 border-r border-b border-brand-border relative group"
            >
              <span className="text-[100px] font-serif font-black text-brand-brown/5 absolute top-0 right-4 leading-none group-hover:text-brand-accent/20 transition-colors">
                {step.id}
              </span>
              <div className="relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-wood mb-4">Step {step.id}</h4>
                <h3 className="text-2xl font-serif italic text-brand-brown mb-6">{step.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SustainabilitySection = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-brand-brown text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <div>
            <span className="text-brand-accent font-serif italic text-2xl mb-4 block">{t.sustainability.subtitle}</span>
            <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter mb-8 leading-tight">
              {t.sustainability.title}
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed italic mb-12 max-w-xl">
              {t.sustainability.desc}
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {t.sustainability.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl md:text-4xl font-serif text-brand-accent mb-2">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] border border-white/20 p-4">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
                alt="Sustainability" 
                className="w-full h-full object-cover transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-10 -left-10 bg-brand-accent text-brand-brown p-8 max-w-xs hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-widest mb-2">Om Sai Promise</p>
              <p className="font-serif italic text-lg leading-snug">"Every log is tracked back to its origin, ensuring absolute transparency."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConsultationCTA = ({ t }: { t: any }) => {
  return (
    <section className="py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionTitle 
            title={t.consultation.title}
            subtitle={t.consultation.subtitle}
          />
          <p className="text-xl md:text-2xl font-serif italic text-brand-brown mb-12 opacity-80 leading-relaxed">
            {t.consultation.desc}
          </p>
          <button className="bg-brand-brown text-white px-12 py-6 rounded-full text-[12px] font-black uppercase tracking-[0.3em] hover:bg-brand-accent transition-all shadow-xl hover:shadow-2xl translate-y-0 hover:-translate-y-1">
            {t.consultation.button}
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = ({ t }: { t: any }) => {
  return (
    <section className="py-24 bg-secondary-beige border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-10">
        <SectionTitle 
          title={t.testimonials.title} 
          subtitle={t.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-brand-border">
          {t.testimonials.reviews.map((review: any, idx: number) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 border-r border-b border-brand-border group hover:bg-brand-brown hover:text-white transition-colors duration-500"
            >
              <p className="text-xl font-serif leading-relaxed italic mb-12">
                "{review.content}"
              </p>
              <div className="flex items-center gap-6 mt-auto">
                <img 
                  src={REVIEWS[idx].avatar} 
                  alt={review.name} 
                  className="w-16 h-16 rounded-full object-cover transition-all border border-brand-border"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">{review.name}</h4>
                  <p className="text-[10px] text-brand-wood uppercase tracking-tighter mt-1">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = ({ t }: { t: any }) => {
  return (
    <section id="gallery" className="py-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle 
          title={t.gallery.title} 
          subtitle={t.gallery.subtitle}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-l border-brand-border">
          {GALLERY.slice(0, 4).map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group cursor-pointer border-r border-b border-brand-border h-[300px] md:h-[400px]"
            >

              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-brown/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white text-white flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ t }: { t: any }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const MAP_CENTER = { lat: 40.748817, lng: -73.985428 }; // Empire State area for demo

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.lang === 'en' ? 'Thank you for your inquiry! Our concierge team will connect with you shortly.' : 'तुमच्या चौकशीबद्दल धन्यवाद! आमची टीम लवकरच तुमच्याशी संपर्क साधेल.');
  };

  const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
  const hasValidKey = Boolean(API_KEY);

  return (
    <section id="contact" className="py-24 bg-brand-beige/50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Details */}
          <div className="lg:w-1/3 bg-brand-brown p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8">{t.contact.title}</h3>
            <p className="opacity-70 mb-8 md:mb-10 text-sm">{t.contact.desc}</p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-beige" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{t.contact.phone}</p>
                  <p className="font-bold text-sm md:text-base">{BRAND_INFO.phone}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-beige" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{t.contact.email}</p>
                  <p className="font-bold text-sm md:text-base break-all">{BRAND_INFO.email}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-beige" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{t.contact.visit}</p>
                  <p className="font-bold text-sm md:text-base">{BRAND_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-10 border-t border-white/10">

              <p className="text-xs text-white/50 uppercase tracking-widest mb-6">{t.contact.connected}</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-wood transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-wood transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-wood transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
              <div>
                <h4 className="text-xl md:text-2xl font-serif text-brand-brown mb-8 text-center">{t.contact.formTitle}</h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">{t.contact.name}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-brand-beige/30 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-brand-wood outline-none" 
                        placeholder={t.contact.placeholderName}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">{t.contact.emailLabel}</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-brand-beige/30 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-brand-wood outline-none" 
                        placeholder={t.contact.placeholderEmail}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">{t.contact.subject}</label>
                    <select className="w-full bg-brand-beige/30 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-brand-wood outline-none appearance-none">
                      {t.contact.subjects.map((s: string) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-widest">{t.contact.detail}</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-brand-beige/30 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-brand-wood outline-none resize-none" 
                      placeholder={t.contact.placeholderDetail}
                    ></textarea>
                  </div>
                  <button className="w-full bg-brand-wood text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all translate-y-0 active:translate-y-1">
                    {t.contact.submit}
                  </button>
                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">{t.contact.footerNote}</p>
                </form>
              </div>

              <div className="flex flex-col h-full">
                <h4 className="text-2xl font-serif text-brand-brown mb-8 text-center text-brand-brown">{t.contact.locationTitle}</h4>
                <div className="flex-grow rounded-[2rem] overflow-hidden shadow-inner border border-gray-100 min-h-[300px]">
                  {hasValidKey ? (
                    <APIProvider apiKey={API_KEY} version="weekly">
                      <Map
                        defaultCenter={MAP_CENTER}
                        defaultZoom={15}
                        mapId="DEMO_MAP_ID"
                        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                        style={{ width: '100%', height: '100%' }}
                      >
                        <AdvancedMarker position={MAP_CENTER}>
                          <Pin background="#8b5e3c" glyphColor="#fff" />
                        </AdvancedMarker>
                      </Map>
                    </APIProvider>
                  ) : (
                    <div className="w-full h-full bg-brand-beige flex items-center justify-center p-8 text-center">
                      <div>
                        <MapPin size={48} className="text-brand-wood mx-auto mb-4 opacity-50" />
                        <p className="text-brand-brown font-bold mb-2">{t.contact.locationTitle}</p>
                        <p className="text-xs text-gray-500">Google Maps API key required to view interactive map.</p>
                        <p className="text-xs text-gray-400 mt-4 leading-relaxed">{BRAND_INFO.address}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-8 flex gap-4">
                  <a 
                    href={`https://wa.me/${BRAND_INFO.whatsapp}`} 
                    target="_blank" rel="noopener noreferrer"
                    className="flex-grow bg-green-500 text-white rounded-xl py-4 flex items-center justify-center gap-2 font-bold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={20} /> {t.contact.whatsapp}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: any }) => {
  return (
    <footer className="bg-white py-16 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          <div className="md:col-span-5">
            <a href="#home" className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-brand-brown flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-brand-accent rounded-full"></div>
              {BRAND_INFO.name.toUpperCase()}
            </a>
            <p className="text-brand-brown/60 text-sm leading-relaxed mb-8 max-w-sm font-medium italic">
              {t.footer.desc}
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8 text-[10px] font-black uppercase tracking-widest">
              {t.footer.social.map((s: string) => (
                <a key={s} href="#" className="hover:text-brand-wood transition-colors">{s}</a>
              ))}
            </div>
          </div>


          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-brand-wood">{t.footer.company}</h4>
            <ul className="space-y-4">
              <li key="nav-home">
                <a href="#home" className="text-brand-brown/60 text-xs font-bold uppercase transition-colors hover:text-brand-brown">{t.nav.home}</a>
              </li>
              <li key="nav-coll">
                <a href="#collection" className="text-brand-brown/60 text-xs font-bold uppercase transition-colors hover:text-brand-brown">{t.nav.collection}</a>
              </li>
              <li key="nav-about">
                <a href="#about" className="text-brand-brown/60 text-xs font-bold uppercase transition-colors hover:text-brand-brown">{t.nav.about}</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-brand-wood">{t.footer.access}</h4>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> 
                {t.footer.open}
              </span>
              <span>{t.footer.cities}</span>
            </div>
            <div className="mt-10 pt-10 border-t border-brand-border">
              <form className="flex gap-4">
                <input 
                  type="email" 
                  placeholder={t.footer.newsletter} 
                  className="flex-grow bg-secondary-beige border border-brand-border p-4 text-[10px] font-black tracking-widest uppercase outline-none focus:bg-white transition-colors"
                />
                <button className="bg-brand-brown text-white px-8 text-[10px] font-black tracking-widest uppercase hover:bg-brand-accent transition-colors">
                  {t.footer.submit}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-border flex flex-col md:flex-row justify-between items-center text-brand-brown/40 text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>&copy; {new Date().getFullYear()} {BRAND_INFO.name.toUpperCase()} STUDIO / {t.footer.rights}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-brown transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-brand-brown transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = TRANSLATIONS[lang];
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white font-sans text-brand-brown selection:bg-brand-wood selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        <Features t={t} />
        <FeaturedCategories t={t} />
        <BestSellers t={t} />
        <ProcessSection t={t} />
        <SignatureSeries t={t} />
        <AboutUs t={t} />
        <MeetTheOwner t={t} />
        <SustainabilitySection t={t} />
        <ConsultationCTA t={t} />
        <GallerySection t={t} />
        <Testimonials t={t} />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />

      {/* Floating Inquiry Button (Mobile Exclusive) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a 
          href={`https://wa.me/${BRAND_INFO.whatsapp}`} 
          className="bg-green-500 text-white w-full py-4 rounded-full flex items-center justify-center gap-3 font-bold shadow-2xl"
        >
          <MessageCircle size={20} /> {lang === 'en' ? 'Chat with Specialist' : 'तज्ञांशी बोला'}
        </a>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 right-10 z-40 bg-brand-brown text-white p-4 rounded-full hover:bg-brand-wood shadow-xl transition-colors hidden md:block"
          >
            <ChevronRight size={24} className="-rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
