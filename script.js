const languages = [
  { name: "Telugu", script: "తెలుగు", url: "https://bhashabytes.github.io/TL-Lang/" },
  { name: "Sanskrit", script: "संस्कृतम्", url: "https://bhashabytes.github.io/SN-Lang/" },
  { name: "Kannada", script: "ಕನ್ನಡ", url: "https://bhashabytes.github.io/KN-Lang/" },
  { name: "Tamil", script: "தமிழ்", url: "https://bhashabytes.github.io/TM-Lang/" },
  { name: "Malayalam", script: "മലയാളം", url: "https://bhashabytes.github.io/ML-Lang/" },
  { name: "Bengali", script: "বাংলা", url: "https://bhashabytes.github.io/BN-Lang/" },
  { name: "Gujarati", script: "ગુજરાતી", url: "https://bhashabytes.github.io/GJ-Lang/" },
  { name: "Hindi", script: "हिन्दी", url: "https://bhashabytes.github.io/HN-Lang/" },
  { name: "Marathi", script: "मराठी", url: "https://bhashabytes.github.io/MR-Lang/" },
  { name: "Odia", script: "ଓଡ଼ିଆ", url: "https://bhashabytes.github.io/OD-Lang/" },
  { name: "Punjabi", script: "ਪੰਜਾਬੀ", url: "https://bhashabytes.github.io/PB-Lang/" },
  { name: "Multilingual", script: "Hybrid", url: "https://bhashabytes.github.io/HYBRID-VERSION/" },

];

const grid = document.getElementById("languageGrid");

languages.forEach((lang) => {
  const card = document.createElement("div");
  card.className = "language-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <h3>${lang.name}</h3>
    <div class="lang-script">${lang.script}</div>
    <p>Write & run code in ${lang.name} script and their transliterations</p>
  `;
  card.addEventListener("click", () => {
    window.location = lang.url;
  });
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      window.location = lang.url;
    }
  });
  grid.appendChild(card);
});

const toggle = document.getElementById("navbarToggle");
const links = document.getElementById("navbarLinks");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

