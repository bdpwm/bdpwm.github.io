const translations = {
    'en': {
        'about_me_title': 'About me',
        'about_me_p1': 'Passionate developer with a knack for building things that actually work.',
        'about_me_p2': 'I enjoy solving complex problems with elegant solutions, and believe good code should read like a good story—clear, concise, and without unnecessary plot twists. Outside of coding, you might find me experimenting with new tech stacks, attempting to explain programming concepts to non-technical friends, or debating the perfect indentation style (spaces, obviously).',
        'catch_me': 'You can catch me on',
        'developed_by': 'developed by'
    },
    'ru': {
        'about_me_title': 'Обо мне',
        'about_me_p1': 'Разработчик с талантом создавать вещи, которые действительно работают.',
        'about_me_p2': 'Мне нравится решать сложные задачи с помощью элегантных решений. Вне кодинга, вы можете найти меня экспериментирующим с новыми технологическими стеками, пытающимся объяснить концепции программирования нетехническим друзьям или обсуждающим идеальный стиль отступов (пробелы, очевидно).',
        'catch_me': 'Связь со мной',
        'developed_by': 'разработано'
    },
    'sk': {
        'about_me_title': 'O mne',
        'about_me_p1': 'Vášnivý vývojár so schopnosťou vytvárať veci, ktoré skutočne fungujú.',
        'about_me_p2': 'Rád riešim zložité problémy elegantnými riešeniami. Mimo kódovania ma môžete nájsť experimentovať s novými technológiami, pokúšať sa vysvetliť koncepty programovania netechnickým priateľom alebo diskutovať o dokonalom štýle odsadenia (medzery, samozrejme).',
        'catch_me': 'Môžete ma nájsť na',
        'developed_by': 'vyvinul'
    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        updateContent();
        updateActiveLanguageLink();
        localStorage.setItem('preferredLanguage', lang);
    }
}

function updateContent() {
    document.querySelector('.wrapper-points h3').textContent = translations[currentLanguage].about_me_title;
    
    const aboutParagraphs = document.querySelectorAll('.wrapper-points p');
    if (aboutParagraphs.length >= 2) {
        aboutParagraphs[0].textContent = translations[currentLanguage].about_me_p1;
        aboutParagraphs[1].textContent = translations[currentLanguage].about_me_p2;
    }
    
    document.querySelector('.category-title').textContent = translations[currentLanguage].catch_me;
    document.querySelector('.water-text-st').innerHTML = 
        translations[currentLanguage].developed_by + ' <span class="water-text-name">Valerii Bondariev</span>';
}

function updateActiveLanguageLink() {
    document.querySelectorAll('.lang-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.querySelector(`.lang-link[onclick="changeLanguage('${currentLanguage}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
        return;
    }
    
    const fullBrowserLang = navigator.language || navigator.userLanguage;
    const browserLang = fullBrowserLang.split('-')[0].toLowerCase();
    
    if (translations[browserLang]) {
        changeLanguage(browserLang);
    } else {
        changeLanguage('en');
    }
});