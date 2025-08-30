// Theme: force dark (no toggle)
(function forceDarkTheme() {
  try {
    localStorage.removeItem('theme');
  } catch (e) {}
})();

// ----- Site content data (edit here) -----
const siteData = {
  brandName: 'Seif Zayed',
  navLinks: [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    fullName: 'Seif Eldin Hossam Mohamed Zayed',
    avatarSrc: 'pfp.jpg',
    avatarAlt: 'Photo of Seif Eldin Zayed',
    lede:
      "Ain Shams University student with a strong focus on applied technology and hands-on development. Experienced in building a wide range of projects—from mobile applications and game prototypes to robotic systems—demonstrating a consistent drive to explore new frameworks, tools, and methodologies. Adept at rapid prototyping and problem-solving, with a practical, self-directed approach to learning and innovation.",
    highlights: ['AI/ML', 'Robotics', 'Game Development', 'Web Development', 'Mobile', 'Cloud', 'DevOps', 'Databases'],
  },
  projects: [
    {
      category: 'Robotics',
      title: 'AI‑Powered Humanoid Customer Service Robot',
      description:
        'Multilingual agent with LLMs, machine vision, speech recognition, sign language, and CRM. Launched at Mactech Egypt 2024; 1st place entrepreneurship award.',
      tags: ['Python', 'OpenCV', 'LLMs', 'Speech'],
      href: 'https://www.facebook.com/share/v/16Ufohp2iC/',
    },
    {
      category: 'Game',
      title: 'Blades of Babel',
      description: 'Soulslike 3D RPG prototype built on Unreal Engine 5. Role: Lead programmer.',
      tags: ['Unreal Engine 5', 'C++'],
      href: 'https://mo0zart.itch.io/blades-of-babel',
    },
    {
      category: 'Game',
      title: 'Luna: The Inner Struggle',
      description: 'Simple 2D platformer made using GODOT. Role: Lead programmer.',
      tags: ['Godot', 'GDScript'],
      href: 'https://mo0zart.itch.io/luna',
    },
    {
      category: 'Robotics',
      title: 'Robotic Arm System',
      description:
        'Python IK and simulation with AI vision; Arduino for motor control. Custom 6‑DOF stepper control library.',
      tags: ['Python', 'OpenCV', 'Arduino'],
      href: 'https://www.facebook.com/bighero6egypt/videos/768579524155275',
    },
    {
      category: 'Tooling',
      title: 'Automatic YouTube Music Video Creator',
      description: 'Cloud script to stitch audio and video with generated description and timestamps.',
      tags: ['Python', 'Colab'],
      href: 'https://www.youtube.com/watch?v=wlDwLiE3GmA',
    },
    {
      category: 'Robotics',
      title: 'AI Gate',
      description:
        'Humanoid gatekeeper with dual cameras on Jetson Nano using TensorRT for tracking and identification.',
      tags: ['Python', 'Jetson', 'TensorRT'],
      href: 'https://www.youtube.com/watch?v=Xf29MjSN9bg&t=68s',
    },
    {
      category: 'Robotics',
      title: 'Cotton Candy Robot',
      description: 'Interactive robot with tablet face and dual arms, Arduino‑controlled.',
      tags: ['Arduino', 'Robotics'],
      href: 'https://www.facebook.com/bighero6egypt/videos/1900607940015213',
    },
  ],
  skills: [
    { category: 'AI/ML', items: ['TensorFlow', 'Machine Learning'] },
    { category: 'Robotics', items: ['Arduino', 'Jetson', 'OpenCV', 'Fusion 360'] },
    { category: 'Game Development', items: ['Unreal Engine 5', 'C++'] },
    { category: 'Web Development', items: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'NGINX'] },
    { category: 'Mobile', items: ['Flutter', 'Android'] },
    { category: 'Cloud', items: ['AWS', 'Firebase'] },
    { category: 'DevOps', items: ['Docker', 'Git', 'Linux', 'Bash'] },
    { category: 'Databases', items: ['PostgreSQL', 'Redis'] },
  ],
  education: [
    {
      school: 'Faculty of Engineering, Ain Shams University',
      period: '09/2023 – present',
      details: 'Sophomore, ELCE & CSYE — GPA: 3.27',
    },
    { school: 'Horus Language School', period: '07/2023', details: 'High school — Thanawy Amma: 89.8%' },
  ],
  contact: {
    buttons: [
      { label: 'Email', href: 'mailto:zayed.seifeldin@gmail.com', aria: 'Email' },
      { label: 'GitHub', href: 'https://github.com/Douvakiing', aria: 'GitHub', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/seif-zayed-a32a3b242/', aria: 'LinkedIn', external: true },
      { label: 'Discord', href: '#contact', aria: 'Discord', id: 'discord-btn', username: 'douvakiing' },
    ],
  },
};

// ----- Render helpers -----
function createChip(text) {
  const span = document.createElement('span');
  span.className = 'chip';
  span.textContent = text;
  return span;
}

function renderBrandAndNav() {
  const brand = document.querySelector('.brand');
  if (brand) {
    const nameSpan = brand.querySelector('span') || document.createElement('span');
    nameSpan.textContent = siteData.brandName;
    if (!brand.querySelector('span')) brand.appendChild(nameSpan);
  }
  const nav = document.querySelector('.nav-links');
  if (nav) {
    nav.innerHTML = '';
    siteData.navLinks.forEach((link) => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.label;
      nav.appendChild(a);
    });
  }
}

function renderHero() {
  const h1 = document.querySelector('.hero-card .hero-heading h1');
  if (h1) h1.textContent = siteData.hero.fullName;
  const avatarImg = document.querySelector('.hero-card .hero-heading .avatar img');
  if (avatarImg) {
    avatarImg.src = siteData.hero.avatarSrc;
    avatarImg.alt = siteData.hero.avatarAlt;
  }
  const lede = document.querySelector('.hero-card .lede');
  if (lede) lede.textContent = siteData.hero.lede;
  const chipsRow = document.querySelector('.hero-card .chip-row');
  if (chipsRow) {
    chipsRow.innerHTML = '';
    siteData.hero.highlights.forEach((t) => chipsRow.appendChild(createChip(t)));
  }
}

function renderProjects() {
  const grid = document.querySelector('#work .grid');
  if (!grid) return;
  grid.innerHTML = '';
  siteData.projects.forEach((p) => {
    const a = document.createElement('a');
    a.className = 'card project-card reveal';
    a.href = p.href;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.setAttribute('aria-label', `${p.title} (opens external)`);
    a.tabIndex = 0;
    a.innerHTML = `
      <span class="muted">${p.category}</span>
      <h3>${p.title}</h3>
      <p class="muted">${p.description}</p>
      <div class="chip-row">${p.tags.map((t) => `<span class="chip">${t}</span>`).join('')}</div>
    `;
    grid.appendChild(a);
  });
}

function renderSkills() {
  const grid = document.querySelector('#skills .grid');
  if (!grid) return;
  grid.innerHTML = '';
  siteData.skills.forEach((cat) => {
    const card = document.createElement('div');
    card.className = 'card reveal';
    const h3 = document.createElement('h3');
    h3.textContent = cat.category;
    const row = document.createElement('div');
    row.className = 'chip-row';
    cat.items.forEach((it) => row.appendChild(createChip(it)));
    card.appendChild(h3);
    card.appendChild(row);
    grid.appendChild(card);
  });
}

function renderEducation() {
  const grid = document.querySelector('#education .grid');
  if (!grid) return;
  grid.innerHTML = '';
  siteData.education.forEach((e) => {
    const art = document.createElement('article');
    art.className = 'card reveal';
    art.innerHTML = `
      <h3>${e.school}</h3>
      <p class="muted">${e.period}</p>
      <p class="muted">${e.details}</p>
    `;
    grid.appendChild(art);
  });
}

function renderContact() {
  const contactCard = document.querySelector('#contact .card .chip-row');
  const discordBtn = document.getElementById('discord-btn');
  if (contactCard) {
    contactCard.innerHTML = '';
    siteData.contact.buttons.forEach((btn) => {
      const a = document.createElement('a');
      a.className = 'btn secondary magnetic';
      a.href = btn.href;
      a.setAttribute('aria-label', btn.aria || btn.label);
      a.textContent = btn.label;
      if (btn.external) { a.target = '_blank'; a.rel = 'noreferrer'; }
      if (btn.id === 'discord-btn') { a.id = 'discord-btn'; a.dataset.username = btn.username || ''; }
      contactCard.appendChild(a);
    });
  }
  // Ensure Discord handler sees the new element
  setupDiscordCopy();
}

// ----- Render on load -----
function renderAll() {
  renderBrandAndNav();
  renderHero();
  renderProjects();
  renderSkills();
  renderEducation();
  renderContact();
  // Attach scroll reveal to dynamically inserted elements
  requestAnimationFrame(() => attachReveal());
}

document.addEventListener('DOMContentLoaded', renderAll);

// Contact hover highlight moved to CSS (no availability glow)

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
(function reveal() {
  const items = Array.from(document.querySelectorAll('.reveal'));
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  items.forEach(el => io.observe(el));
})();

// Attach reveal to any elements not yet observed (used after dynamic rendering)
function attachReveal() {
  const items = Array.from(document.querySelectorAll('.reveal:not(.in)'));
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  items.forEach(el => io.observe(el));
}



// Magnetic buttons
(function magnetic() {
  const magnets = document.querySelectorAll('.magnetic');
  const strength = 18;
  function calc(e, el) {
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    const moveX = (relX / rect.width) * strength;
    const moveY = (relY / rect.height) * strength;
    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
  function reset(el) { el.style.transform = 'translate(0, 0)'; }
  magnets.forEach((el) => {
    el.addEventListener('mousemove', (e) => calc(e, el));
    el.addEventListener('mouseleave', () => reset(el));
    el.addEventListener('blur', () => reset(el));
  });
})();

// Cursor blob follows pointer
// Disable cursor blob script on touch devices (coarse pointer)
(function cursorBlob() {
  const isCoarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const dot = document.getElementById('cursor-dot');
  if (!dot || isCoarse) {
    const blob = document.querySelector('.cursor-blob');
    if (blob) blob.style.display = 'none';
    return;
  }
  let x = innerWidth / 2, y = innerHeight / 2;
  let tx = x, ty = y;
  const speed = 0.12;
  const raf = () => {
    x += (tx - x) * speed;
    y += (ty - y) * speed;
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    requestAnimationFrame(raf);
  };
  window.addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; });
  raf();
})();

// Subtle particle background
(function particles() {
  const canvas = document.getElementById('space');
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  let particles = [];
  const COUNT = 80;
  const hueBase = 260;
  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = canvas.width = innerWidth * dpr;
    h = canvas.height = innerHeight * dpr;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
  }
  function rand(a, b) { return a + Math.random() * (b - a); }
  function init() {
    particles = Array.from({ length: COUNT }, () => ({
      x: rand(0, w), y: rand(0, h),
      vx: rand(-0.15, 0.15), vy: rand(-0.15, 0.15),
      r: rand(0.6, 1.8) * dpr,
      life: rand(0, 1)
    }));
  }
  function step() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy; p.life += 0.002;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      const alpha = 0.1 + 0.1 * Math.sin(p.life * 6.28);
      const hue = hueBase + 40 * Math.sin(p.life * 2);
      ctx.beginPath();
      ctx.fillStyle = `hsla(${hue}, 90%, 70%, ${alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    // soft link lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 90 * dpr) {
          const alpha = 0.05 * (1 - dist / (90 * dpr));
          ctx.strokeStyle = `rgba(124,92,255,${alpha})`;
          ctx.lineWidth = 1 * dpr;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(step);
  }
  resize();
  init();
  step();
  addEventListener('resize', () => { resize(); init(); });
})();

// Discord copy to clipboard (rebind-safe)
function setupDiscordCopy() {
  const btn = document.getElementById('discord-btn');
  if (!btn) return;
  btn.onclick = null;
  const username = btn.getAttribute('data-username') || '';
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!username) return;
    navigator.clipboard?.writeText(username).then(() => {
      btn.textContent = 'Discord (copied)';
      setTimeout(() => (btn.textContent = 'Discord'), 1600);
    }).catch(() => {
      btn.textContent = 'Discord (copy failed)';
      setTimeout(() => (btn.textContent = 'Discord'), 1600);
    });
  });
}
setupDiscordCopy();


