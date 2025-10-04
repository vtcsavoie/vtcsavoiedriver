// Mobile menu toggle
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger?.addEventListener('click', ()=> menu.style.display = (menu.style.display==='block' ? 'none' : 'block'));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      window.scrollTo({top: el.offsetTop-60, behavior:'smooth'});
      if (menu.style.display==='block') menu.style.display='none';
    }
  })
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp links
const waNumber = '33610493409';
const waTextFR = encodeURIComponent('Bonjour, je souhaite réserver un trajet.');
const waTextEN = encodeURIComponent('Hello, I’d like to book a ride.');
const waBase = `https://wa.me/${waNumber}?text=`;
['waCta','waCta2','waFloat','waLink'].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.href = waBase + waTextFR;
});

// Language toggle (FR/EN)
let current = 'FR';
const langBtn = document.getElementById('langToggle');
const dict = {
  FR: {
    'nav.home':'Accueil','nav.services':'Services','nav.fares':'Tarifs','nav.contact':'Contact',
    'hero.tagline':'Votre chauffeur privé en Savoie',
    'cta.book':'Réserver maintenant',
    'services.title':'Nos services',
    'services.airports.title':'Transferts aéroports',
    'services.airports.text':'Genève, Lyon, Chambéry, Grenoble… Accueil personnalisé & suivi des vols.',
    'services.ski.title':'Stations de ski',
    'services.ski.text':'Courchevel, Val Thorens, Méribel, Tignes, Val d’Isère… véhicules confort & grands coffres.',
    'services.trains.title':'Gares & longues distances',
    'services.trains.text':'Chambéry, Annecy, Aix-les-Bains… trajets inter‑villes toutes distances.',
    'services.hourly.title':'Mise à disposition',
    'services.hourly.text':'Évènements, entreprises, mariages — chauffeur privé à l’heure.',
    'fares.title':'Tarifs (à partir de)',
    'fares.cta':'Réserver maintenant',
    'fares.note':'Prix indicatifs « à partir de ». Tarifs de nuit, bagages spéciaux et attentes peuvent s’appliquer.',
    'contact.title':'Contact',
    'contact.name':'Nom',
    'contact.message':'Message',
    'contact.send':'Envoyer',
    'footer.rights':'Tous droits réservés.'
  },
  EN: {
    'nav.home':'Home','nav.services':'Services','nav.fares':'Fares','nav.contact':'Contact',
    'hero.tagline':'Your private driver in Savoie',
    'cta.book':'Book now',
    'services.title':'Our services',
    'services.airports.title':'Airport transfers',
    'services.airports.text':'Geneva, Lyon, Chambéry, Grenoble… Meet & greet and flight tracking.',
    'services.ski.title':'Ski resorts',
    'services.ski.text':'Courchevel, Val Thorens, Méribel, Tignes, Val d’Isère… comfort vehicles & large trunks.',
    'services.trains.title':'Stations & long distance',
    'services.trains.text':'Chambéry, Annecy, Aix‑les‑Bains… intercity rides any distance.',
    'services.hourly.title':'Hourly hire',
    'services.hourly.text':'Events, corporate, weddings — private chauffeur by the hour.',
    'fares.title':'Fares (from)',
    'fares.cta':'Book now',
    'fares.note':'Indicative “from” prices. Night fares, special luggage and waiting time may apply.',
    'contact.title':'Contact',
    'contact.name':'Name',
    'contact.message':'Message',
    'contact.send':'Send',
    'footer.rights':'All rights reserved.'
  }
};
function setLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[lang][key]) el.textContent = dict[lang][key];
  });
  // Switch WA default text
  const t = (lang==='FR'? waTextFR : waTextEN);
  ['waCta','waCta2','waFloat','waLink'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.href = waBase + t;
  });
  langBtn.textContent = lang;
}
langBtn.addEventListener('click', ()=>{
  current = (current==='FR'?'EN':'FR');
  setLang(current);
});
setLang('FR');
