// LIGHT/DARK MODE TOGGLE
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'dark' ? '☀️ Toggle Theme' : '🌙 Toggle Theme';
});


// THREE-WAY LANGUAGE CYCLE LOGIC
const translations = {
    en: {
        hireStatus: "Available for 2026 (Email Me)", heroP: "Welcome to my digital workspace. I engineer intelligent, full-stack software solutions.",
        resume: "RESUME", academics: "ACADEMICS", letters: "LETTERS", certifications: "CERTIFICATIONS",
        eduH3: "EDUCATION", eduDegree: "Computer Science & Engineering", eduUni: "University of Ioannina",
        eduMaster: "MEng (5-year Programme)", eduGrad: "Expected Graduation: 2026",
        eduCourseworkTitle: "KEY COURSEWORK", eduCourseworkList: "Software Engineering, Web Technologies, Neural Networks",
        locH3: "LOCATION", locCity: "Ioannina, Epirus (GR)",
        workPrefTitle: "WORK PREFERENCES", workPrefRelo: "Open to Relocation", workPrefSwiss: "(Strong interest in Switzerland)",
        gitTitle: "LIVE GITHUB DATA", gitRepos: "Public Repositories", gitFollowers: "Followers", gitCommits: "2024 Commits",
        gitVerified: "Verified Contributor", gitLang: "TOP LANGUAGES", gitFetching: "Fetching live data...",
        actH3: "ACTIVITY", curFocus: "Current Focus", focusSub: "Full-Stack & AI Systems",
        sysArch: "RECENT INTERESTS", secTitle: "Intent-Based Search Ranking", patTitle: "Full-Stack System Architecture",
        connect: "CONNECT", conNet: "LinkedIn", conSrc: "GitHub",
        eduTimelineTitle: "JOURNEY & MILESTONES",
        timeThesis: "Smart Wishlist Prioritization Flow (Master Thesis)", timeSpring: "Neural Classification and Unsupervised Learning",
        timeSpringBoot: "SpringBoot Traineeship Management System", timeMNIST: "MLP Classifier for MNIST Digit Recognition",
        timeTreegram: "Treegram App Social Media Platform", timeRobo: "Jackal and RRbot Simulations"
    },
    
    gr: {
        hireStatus: "Διαθέσιμος για το 2026 (Επικοινωνίστε μαζί μου)", heroP: "Καλώς ήρθατε στον ψηφιακό μου χώρο. Σχεδιάζω έξυπνες, full-stack λύσεις λογισμικού.",
        resume: "ΒΙΟΓΡΑΦΙΚΟ", academics: "ΒΑΘΜΟΛΟΓΙΑ", letters: "ΣΥΣΤΑΣΕΙΣ", certifications: "ΠΙΣΤΟΠΟΙΗΣΕΙΣ",
        eduH3: "ΕΚΠΑΙΔΕΥΣΗ", eduDegree: "Μηχανικών Η/Υ & Πληροφορικής", eduUni: "Πανεπιστήμιο Ιωαννίνων",
        eduMaster: "MEng (5ετές Πρόγραμμα)", eduGrad: "Αποφοίτηση: 2026",
        eduCourseworkTitle: "ΚΥΡΙΑ ΜΑΘΗΜΑΤΑ", eduCourseworkList: "Τεχνολογία Λογισμικού, Τεχνολογίες Διαδικτύου, Νευρωνικά Δίκτυα",
        locH3: "ΤΟΠΟΘΕΣΙΑ", locCity: "Ιωάννινα, Ήπειρος (GR)",
        workPrefTitle: "ΠΡΟΤΙΜΗΣΕΙΣ ΕΡΓΑΣΙΑΣ", workPrefRelo: "Δυνατότητα Μετεγκατάστασης", workPrefSwiss: "(Έντονο ενδιαφέρον για Ελβετία)",
        gitTitle: "ΖΩΝΤΑΝΑ ΔΕΔΟΜΕΝΑ GITHUB", gitRepos: "Δημόσια Αποθετήρια", gitFollowers: "Ακόλουθοι", gitCommits: "Commits 2024",
        gitVerified: "Πιστοποιημένος Συνεργάτης", gitLang: "ΚΥΡΙΕΣ ΓΛΩΣΣΕΣ", gitFetching: "Λήψη δεδομένων...",
        actH3: "ΔΡΑΣΤΗΡΙΟΤΗΤΑ", curFocus: "Τρέχουσα Εστίαση", focusSub: "Full-Stack & Συστήματα AI",
        sysArch: "ΠΡΟΣΦΑΤΑ ΕΝΔΙΑΦΕΡΟΝΤΑ", secTitle: "Κατάταξη αναζήτησης βάσει πρόθεσης", patTitle: "Αρχιτεκτονική συστήματος Full-Stack",
        connect: "ΣΥΝΔΕΣΗ", conNet: "LinkedIn", conSrc: "GitHub",
        eduTimelineTitle: "ΠΟΡΕΙΑ & ΟΡΟΣΗΜΑ",
        timeThesis: "Ροή Προτεραιότητας Έξυπνης Wishlist (Πτυχιακή Εργασία)", timeSpring: "Νευρωνική Ταξινόμηση και Μη Επιβλεπόμενη Μάθηση",
        timeSpringBoot: "Σύστημα Διαχείρισης Πρακτικής (SpringBoot)", timeMNIST: "MLP Classifier για MNIST Αναγνώριση Ψηφίων",
        timeTreegram: "Πλατφόρμα Social Media Treegram App", timeRobo: "Προσομοιώσεις Jackal και RRbot"
    },
    
    fr: {
        hireStatus: "Disponible pour 2026 (Contactez-moi)", heroP: "Bienvenue dans mon espace numérique. Je conçois des solutions logicielles full-stack intelligentes.",
        resume: "CV", academics: "CURSUS", letters: "LETTRES", certifications: "CERTIFICATIONS",
        eduH3: "ÉDUCATION", eduDegree: "Informatique et Ingénierie", eduUni: "Université d'Ioannina",
        eduMaster: "MEng (programme de 5 ans)", eduGrad: "Diplôme prévu : 2026",
        eduCourseworkTitle: "COURS CLÉS", eduCourseworkList: "Génie logiciel, Technologies Web, Réseaux de neurones",
        locH3: "EMPLACEMENT", locCity: "Ioannina, Épire (GR)",
        workPrefTitle: "PRÉFÉRENCES", workPrefRelo: "Ouvert à la délocalisation", workPrefSwiss: "(Fort intérêt pour la Suisse)",
        gitTitle: "DONNÉES GITHUB", gitRepos: "Dépôts Publics", gitFollowers: "Abonnés", gitCommits: "Contributions 2024",
        gitVerified: "Contributeur Vérifié", gitLang: "LANGAGES CLÉS", gitFetching: "Récupération...",
        actH3: "ACTIVITÉ", curFocus: "Focus Actuel", focusSub: "Systèmes Full-Stack et IA",
        sysArch: "INTÉRÊTS RÉCENTS", secTitle: "Classement de recherche basé sur l'intention", patTitle: "Architecture système Full-Stack",
        connect: "CONTACT", conNet: "LinkedIn", conSrc: "GitHub",
        eduTimelineTitle: "PARCOURS ET ÉTAPES",
        timeThesis: "Flux de priorité intelligent pour Wishlist (Mémoire de licence)", timeSpring: "Classification neurale et Apprentissage non supervisé",
        timeSpringBoot: "Système de gestion de stage (SpringBoot)", timeMNIST: "Classificateur MLP pour MNIST",
        timeTreegram: "Plateforme Sociale Treegram App", timeRobo: "Simulations Jackal et RRbot"
    }
};

const langCycle = ['en', 'gr', 'fr'];
let currentLangIndex = 0;

document.getElementById('lang-cycle').addEventListener('click', () => {
    // Increment index and cycle back to 0 if needed
    currentLangIndex = (currentLangIndex + 1) % langCycle.length;
    const selectedLang = langCycle[currentLangIndex];
    
    // Update button text to reflect the current language set
    document.getElementById('lang-cycle').textContent = `🌐 ${selectedLang.toUpperCase()} Cycle`;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[selectedLang] && translations[selectedLang][key]) {
            el.textContent = translations[selectedLang][key];
        }
    });
});


// HIRING STATUS ICON
document.getElementById('hire-me').addEventListener('click', () => {
    const email = "christosgkovariscs52@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const selectedLang = langCycle[currentLangIndex];
        const statusText = document.querySelector('[data-i18n="hireStatus"]');
        const originalText = statusText.textContent;
        const copyMsg = { en: "Email Copied!", gr: "Το Email Αντιγράφηκε!", fr: "Email Copié!" };
        statusText.textContent = copyMsg[selectedLang] || "Copied!";
        setTimeout(() => { statusText.textContent = originalText; }, 2000);
    });
});


// DYNAMIC TYPEWRITER EFFECT
const textArray = ["I'm Christos", "I'm a Full-Stack Developer", "I am a Software Engineer", "I love automating the impossible"];
let textIndex = 0, charIndex = 0;
const typewriterElement = document.getElementById('typewriter');
function type() { if (charIndex < textArray[textIndex].length) { typewriterElement.textContent += textArray[textIndex].charAt(charIndex); charIndex++; setTimeout(type, 100); } else { setTimeout(erase, 2000); } }
function erase() { if (charIndex > 0) { typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1); charIndex--; setTimeout(erase, 50); } else { textIndex = (textIndex + 1) % textArray.length; setTimeout(type, 500); } }
document.addEventListener("DOMContentLoaded", type);


// DYNAMIC GITHUB API FETCH
async function fetchGitHubStats() {
    try {
        const response = await fetch(`https://api.github.com/users/ChristosGkovaris`);
        const data = await response.json();
        document.getElementById('repo-count').textContent = data.public_repos || 0;
        document.getElementById('follower-count').textContent = data.followers || 0;
    } catch (e) { console.error(e); }
}
fetchGitHubStats();


// CLOCK
function updateClock() {
    const now = new Date();
    document.getElementById('live-time').textContent = now.toLocaleTimeString('en-US', { hour12: false });
}
setInterval(updateClock, 1000); updateClock();

async function fetchGithubLanguages() {
    const container = document.getElementById('languages-container');
    try {
        const response = await fetch(`https://api.github.com/users/ChristosGkovaris/repos`);
        const repos = await response.json();
        let langData = {};
        for (const repo of repos) { if (repo.language) langData[repo.language] = (langData[repo.language] || 0) + 1; }
        const sortedLangs = Object.entries(langData).sort((a, b) => b[1] - a[1]).slice(0, 3);
        const total = Object.values(langData).reduce((a, b) => a + b, 0);
        container.innerHTML = '';
        sortedLangs.forEach(([lang, count]) => {
            const p = document.createElement('p');
            p.style.fontWeight = 'normal'; p.style.color = 'white';
            p.innerHTML = `${lang} • ${Math.round((count / total) * 100)}%`;
            container.appendChild(p);
        });
    } catch (e) { container.innerHTML = '<p>Data unavailable</p>'; }
}
fetchGithubLanguages();