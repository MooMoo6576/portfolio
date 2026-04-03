// Project cards data
const projects = [
  {
    title: 'GitHub Portfolio',
    img: 'https://placehold.co/300x180?text=Project+1',
    link: 'https://github.com/',
    desc: 'GitHub Portfolio'
  },
  {
    title: 'CodePen Demos',
    img: 'https://placehold.co/300x180?text=Project+2',
    link: 'https://codepen.io/',
    desc: 'CodePen Demos'
  },
  {
    title: 'Behance Designs',
    img: 'https://placehold.co/300x180?text=Project+3',
    link: 'https://www.behance.net/',
    desc: 'Behance Designs'
  },
  {
    title: 'FreeCodeCamp Challenges',
    img: 'https://placehold.co/300x180?text=Project+4',
    link: 'https://www.freecodecamp.org/',
    desc: 'FreeCodeCamp Challenges'
  },
  {
    title: 'LinkedIn Profile',
    img: 'https://placehold.co/300x180?text=Project+5',
    link: 'https://www.linkedin.com/',
    desc: 'LinkedIn Profile'
  },
  {
    title: 'DeviantArt Gallery',
    img: 'https://placehold.co/300x180?text=Project+6',
    link: 'https://www.deviantart.com/',
    desc: 'DeviantArt Gallery'
  }
];

// Render project cards
function renderProjects() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <a href="${project.link}" target="_blank">
        <img src="${project.img}" alt="${project.title}" class="project-img" />
        <div class="project-desc">${project.desc}</div>
      </a>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});

// Example: Add more interactive features below
// - Filter projects by category
// - Show project details in a modal
// - Animate cards on scroll
// - Add favorite/star button
// - Load more projects button
// - Sort projects by date or name
