const posts = [
  {
    id: 23,
    title: "Implemente o Tema Dark Mode em suas Páginas",
    image: "posts/dark-mode/images/cover.jpg",
    date: "24-Abr-2025",
    description: "Utilize Javascript e CSS para alternar entre temas escuro e claro.",
    link: "posts/dark-mode/index.html",
  },
  {
    id: 1,
    title: "Visualizador de Imagens com a API do Unsplash",
    image: "images/youtube/unsplash-api.jpg",
    date: "15-Abr-2025",
    description: "Aprenda a utilizar a API do Unsplash com Javascript.",
    link: "posts/unsplash-api/index.html",
  },
  {
    id: 2,
    title: "Jogo da Cobrinha com JavaScript, HTML e CSS (Sem Canvas!)",
    image: "images/youtube/snake-game.jpg",
    date: "07-Abr-2025",
    description:
      "Vamos recriar esse incrível jogo usando apenas JavaScript, HTML e CSS, sem usar canvas — tudo feito com divs!",
    link: "posts/js-snake-div/index.html",
  },
  {
    id: 3,
    title: "App de Clima com JavaScript e OpenWeatherMap",
    image: "images/youtube/weather-app.jpg",
    date: "30-Mar-2025",
    description: "Aprenda a utilizar a API OpenWeatherMap e construa um app para mostrar o clima das cidades.",
    link: "posts/js-openweather-api/index.html",
  },
  {
    id: 4,
    title: "Relógio Digital com JavaScript, CSS e HTML",
    image: "images/youtube/digital-clock.jpg",
    date: "17-Mar-2025",
    description: "Com o Javascript podemos criar um relógio digital!",
    link: "posts/js-digital-clock/index.html",
  },
  {
    id: 5,
    title: "Clone do Google Docs",
    image: "images/youtube/google-docs-clone.jpg",
    date: "09-Mar-2025",
    description: "Implemente o Google Docs com React 19, Node.js, MongoDB, Socket.io e Quill.js",
    link: "post.html?id=5",
  },
  {
    id: 6,
    title: "Efeito Hover em Imagens",
    image: "images/youtube/image-hover.webp",
    date: "08-Mar-2025",
    description: "Aprenda esse efeito do CSS e coloque as imagens em destaque!",
    link: "post.html?id=6",
  },
  {
    id: 7,
    title: "Human Benchmark bot",
    image: "images/youtube/human-benchmark.jpg",
    date: "28-Fev-2025",
    description: "Crie um bot para o site Human Benchmark e bata todos os recordes!",
    link: "post.html?id=7",
  },
  {
    id: 8,
    title: "Automatizando Traduções no Google Translator",
    image: "images/youtube/translator.jpg",
    date: "20-Fev-2025",
    description: "Com Python e Selenium podemos traduzir textos inteiros em poucos minutos.",
    link: "post.html?id=8",
  },
  {
    id: 9,
    title: "Quiz com HTML, CSS e JavaScript",
    image: "images/youtube/quiz.jpg",
    date: "12-Fev-2025",
    description: "Crie um Quiz com diversas perguntas para desafiar seus amigos!",
    link: "post.html?id=9",
  },
  {
    id: 10,
    title: "10 Tags HTML Essenciais",
    image: "images/youtube/html-10-tags.jpg",
    date: "29-Jan-2025",
    description: "Você precisa conhecer essas 10 tags do HTML para facilitar o seu dia-a-dia na programação frontend",
    link: "post.html?id=10",
  },
  {
    id: 11,
    title: "Popups com Popover API",
    image: "images/youtube/popover-api.webp",
    date: "2025-04-11",
    description: "Crie popups sem utilizar o Javascript com o Popover API",
    link: "post.html?id=11",
  },
  {
    id: 12,
    title: "API ViaCEP usando JavaScript e Async/Await",
    image: "images/youtube/viacep.webp",
    date: "13-Jan-2025",
    description: "Aprenda a usar funções assíncronas no Javascript consultando a API ViaCEP",
    link: "post.html?id=12",
  },
  {
    id: 13,
    title: "CSS Grid: Fácil e descomplicado",
    image: "images/youtube/css-grid.jpg",
    date: "05-Jan-2025",
    description: "O básico do CSS Grid, explicado de forma prática e direta.",
    link: "post.html?id=13",
  },
  {
    id: 14,
    title: "CSS Flexbox: Crie Layouts Modernos com Facilidade!",
    image: "images/youtube/css-flexbox.jpg",
    date: "28-Dez-2024",
    description: "Guia rápido e prático",
    link: "post.html?id=14",
  },
  {
    id: 15,
    title: "Automatize o Teste de um Site de ecommerce",
    image: "images/youtube/selenium.jpg",
    date: "21-Dez-2024",
    description: "Crie testes automatizados usando Python e Selenium",
    link: "post.html?id=15",
  },
  {
    id: 16,
    title: "Aprenda Python em 21 Minutos",
    image: "images/youtube/python-21-minutos.jpg",
    date: "14-Dez-2024",
    description: "Introdução a linguagem Python de forma rápida e prática",
    link: "post.html?id=16",
  },
  {
    id: 17,
    title: "Popups com HTML, CSS e JavaScript",
    image: "images/youtube/popup-js.jpg",
    date: "06-Dez-2024",
    description: "Aprenda a criar uma popup simples e funcional usando HTML, CSS e JavaScript! ",
    link: "post.html?id=17",
  },
  {
    id: 18,
    title: "Visual Studio Code - Domine esse editor",
    image: "images/youtube/vscode.webp",
    date: "28-Nov-2024",
    description:
      "Vamos aprender a instalar e configurar o Visual Studio Code para facilitar o seu dia-a-dia de programador",
    link: "post.html?id=18",
  },
  {
    id: 19,
    title: "Lista de Convidados com LocalStorage",
    image: "images/youtube/guestlist-ls.jpg",
    date: "18-Nov-2024",
    description: "Aprenda a usar o LocalStorage para armazenar dados diretamente no navegador",
    link: "post.html?id=19",
  },
  {
    id: 20,
    title: "Calculadora em Javascript, HTML e CSS",
    image: "images/youtube/calculator.jpg",
    date: "07-Nov-2024",
    description: "Como Criar uma Calculadora Simples com HTML, CSS e JavaScript.",
    link: "post.html?id=20",
  },
  {
    id: 21,
    title: "Criar Contagem Regressiva",
    image: "images/youtube/countdown-js.jpg",
    date: "04-Nov-2024",
    description: "Aprenda como criar uma contagem regressiva para qualquer data que desejar.",
    link: "post.html?id=21",
  },
  {
    id: 22,
    title: "Jogo da Forca com HTML, CSS e JavaScript",
    image: "images/youtube/forca.webp",
    date: "28-Out-2024",
    description:
      "Vamos fazer o velho e bom jogo da forca, aprenda a lógica de programação desenvolvendo um jogo simples.",
    link: "post.html?id=22",
  },
];

const postsPerPage = 8;
let currentPage = 1;
let filteredPosts = posts;

function renderPosts() {
  const container = document.getElementById("posts-container");
  container.innerHTML = "";

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const pagePosts = filteredPosts.slice(start, end);

  pagePosts.forEach((post) => {
    const el = document.createElement("div");
    el.className = "post";
    el.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="post-content">
        <h2>${post.title}</h2>
        <p class="date">${post.date}</p>
        <p>${post.description}</p>
        <a class="read-more" href="${post.link}">Leia mais</a>
      </div>
    `;
    container.appendChild(el);
  });

  renderPagination();
  renderLatestPosts();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      window.scrollTo({ top: 0, behavior: "smooth" }); // <-- this line
      renderPosts();
    });
    pagination.appendChild(btn);
  }
}

function setupSearch() {
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    filteredPosts = posts.filter(
      (post) => post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderPosts();
  });
}

function renderLatestPosts() {
  const latestList = document.getElementById("latest-list");
  if (!latestList) return;

  const latest = posts.slice(0, 5);
  latestList.innerHTML = latest
    .map(
      (p) => `
    <li><a href="${p.link}">${p.title}</a></li>
  `
    )
    .join("");
}

const toggle = document.getElementById("darkModeToggle");

function setDarkMode(enabled) {
  document.body.classList.toggle("dark-mode", enabled);
  toggle.textContent = enabled ? "🌞" : "🌙";
  localStorage.setItem("darkMode", enabled ? "true" : "false");
}

document.addEventListener("DOMContentLoaded", () => {
  const darkPref = localStorage.getItem("darkMode") === "true";
  setDarkMode(darkPref);

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(!isDark);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setupSearch();
  renderPosts();
});
