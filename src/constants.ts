export type Language = 'en' | 'mr';

export const TRANSLATIONS = {
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
      name: 'Swapnil Dighe',
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
      name: 'स्वप्नील दिघे',
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

export const BRAND_INFO = {
  name: 'Om Sai Furniture',
  tagline: 'Modern Furniture For Modern Living',
  phone: '+91 96578 66450',
  whatsapp: '919657866450',
  email: 'swapnildighe7592@gmail.com',
  address: 'Koprgaon Road, Talegaon Dighe, Dist Sangamner, 422608, Ahmednagar, Maharashtra',
  ownerPhoto: '/photos/Screenshot 2026-05-14 160247.png'
};

export const CATEGORIES = [
  { name: 'Sofa Sets', image: '/photos/classic-sofa-set.jpeg' },
  { name: 'Beds', image: '/photos/premium-king-bed.jpeg' },
  { name: 'Dining Tables', image: '/photos/marble-dining-table.jpeg' },
  { name: 'Office Furniture', image: '/photos/minimalist-sofa.jpeg' },
  { name: 'Modular Kitchen', image: '/photos/modular-kitchen-wall.jpeg' },
  { name: 'Wooden Furniture', image: '/photos/designer-sofa-chair.jpeg' }
];

export const PRODUCTS = [
  { id: 1, name: 'Velvet Cloud Sofa', price: '₹45,000', image: '/photos/luxury-velvet-sofa.jpeg' },
  { id: 2, name: 'Nordic Oak Bed', price: '₹35,000', image: '/photos/modern-wooden-bed.jpeg' },
  { id: 3, name: 'Marble Top Dining Table', price: '₹55,000', image: '/photos/round-dining-table.jpeg' },
  { id: 4, name: 'Executive Walnut Desk', price: '₹25,000', image: '/photos/executive-office-desk.jpeg' }
];

export const GALLERY = [
  { image: '/photos/showroom-gallery-1.jpeg', title: 'Main Showroom', desc: 'Experience luxury in every corner of our flagship store.' },
  { image: '/photos/interior-design-work.jpeg', title: 'Interior Projects', desc: 'Custom interior solutions for modern living spaces.' },
  { image: '/photos/classic-sofa-set.jpeg', title: 'Living Comfort', desc: 'Handcrafted sofa sets designed for ultimate relaxation.' },
  { image: '/photos/premium-king-bed.jpeg', title: 'Master Bedroom', desc: 'Premium king-sized beds with artistic headboards.' },
  { image: '/photos/designer-sofa-chair.jpeg', title: 'Accent Seating', desc: 'Unique designer chairs that define your room style.' },
  { image: '/photos/modular-kitchen-wall.jpeg', title: 'Modular Kitchen', desc: 'Modern kitchen solutions that blend utility with beauty.' }
];
