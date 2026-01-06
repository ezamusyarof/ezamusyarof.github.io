// Fade-in skills on scroll
const skillPills = document.querySelectorAll('.skill-pill');

window.addEventListener('scroll', () => {
  skillPills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      skill.style.opacity = 1;
      skill.style.transform = 'translateY(0)';
    }
  });
});

skillPills.forEach(skill => {
  skill.style.opacity = 0;
  skill.style.transform = 'translateY(10px)';
  skill.style.transition = 'all 0.5s ease';
});

const expButtons = document.querySelectorAll('.exp-btn');
const expContents = document.querySelectorAll('.exp-content');

expButtons.forEach(btn => {
  btn.addEventListener('click', () => {

    // Remove active
    expButtons.forEach(b => b.classList.remove('active'));
    expContents.forEach(c => c.classList.remove('active'));

    // Add active
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

const loadMoreBtn = document.getElementById("loadMoreBtn");
const extraProjects = document.querySelectorAll(".extra-projects");

let currentIndex = 0;

loadMoreBtn.addEventListener("click", () => {
  if (currentIndex < extraProjects.length) {
    extraProjects[currentIndex].classList.remove("d-none");
    currentIndex++;
  }

  if (currentIndex === extraProjects.length) {
    loadMoreBtn.innerText = "No more projects";
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.opacity = "0.6";
    loadMoreBtn.style.cursor = "default";
  }
});

const loadMoreBtnCert = document.getElementById("loadMoreBtnCert");
const extraCert = document.querySelectorAll(".extra-cert");

let currentIndexCert = 0;

loadMoreBtnCert.addEventListener("click", () => {
  if (currentIndexCert < extraCert.length) {
    extraCert[currentIndexCert].classList.remove("d-none");
    currentIndexCert++;
  }

  if (currentIndexCert === extraCert.length) {
    loadMoreBtnCert.innerText = "No more certificates";
    loadMoreBtnCert.disabled = true;
    loadMoreBtnCert.style.opacity = "0.6";
    loadMoreBtnCert.style.cursor = "default";
  }
});