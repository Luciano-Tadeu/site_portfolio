function configurarBotaoCopiar(idBotao, textoOriginal) {
    const botao = document.getElementById(idBotao);
    if (!botao) return;

    botao.addEventListener('click', function(event) {
        event.preventDefault();
        
        const textoParaCopiar = botao.getAttribute('data-copy');
        const spanTexto = botao.querySelector('.btn-texto');
        
        navigator.clipboard.writeText(textoParaCopiar).then(() => {
            const textoSubstituir = languageToggle.checked? "Copiado" : "Copied";

            if (spanTexto) spanTexto.textContent = textoSubstituir;
            botao.classList.add('copiado-anim');
            
            setTimeout(() => {
                if (spanTexto) spanTexto.textContent = textoOriginal;
                botao.classList.remove('copiado-anim');
            }, 2500);
        });
    });
}

configurarBotaoCopiar('btn-email', 'Email');
configurarBotaoCopiar('btn-contato', 'Contato');

const themeToggle = document.querySelector('#theme');

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
});

const traducoes = {
    pt: {
        "contato-text": "Contato",
        "sobre-title": "SOBRE",
        "sobre-text": "Graduando em Engenharia de Computação pela Universidade Federal de Mato Grosso (UFMT), com formação prevista para 2029 e sólida base matemática. Possui experiência prática no desenvolvimento de sistemas de ponta a ponta, desde aplicativos móveis em Flutter integrando UI/UX no Figma, até sistemas desktop em Java com persistência de dados em MySQL e otimização de algoritmos complexos em C. Com vivência profissional em educação tecnológica (Robótica/STEM) e suporte administrativo-financeiro no TJMT, demonstra facilidade em traduzir conceitos técnicos para públicos diversos e gerenciar dados. Inglês intermediário com foco técnico.",
        "formacao-title": "formação",
        "formacao-data-1": "2024 - Presente",
        "formacao-text-1": "UFMT - Universidade Federal de Mato Grosso",
        "formacao-tipo-1": "Bacharelado em Engenharia de Computação",
        "atuacao-title": "atuação",
        "atuacao-data-1": "2026 - Presente",
        "atuacao-text-1": "UFMT - Universidade Federal do Mato Grosso",
        "atuacao-tipo-1": "Monitor de Fundamentos Algébricos",
        "atuacao-data-2": "2024 - 2025",
        "atuacao-text-2": "Instituição Adventista Central",
        "atuacao-tipo-2": "Professor de Robótica e Matemática",
        "atuacao-data-3": "2022 - 2023",
        "atuacao-text-3": "TJMT - Tribunal de Justiça do Estado de Mato Grosso",
        "atuacao-tipo-3": "Estagiário Administrativo",
        "atuacao-data-4": "Fev 2024 - Ago 2024",
        "atuacao-text-4": "Raia Drogasil S/A",
        "atuacao-tipo-4": "Balconista",
        "projetos-title": "projetos",
        "projeto-title-1": "Aplicativo Mobile \"Ciência sem Moage\"",
        "projeto-title-2": "Jogo da Memória",
        "projeto-title-3": "Sistema de Controle de Acesso",
        "projeto-title-4": "Sistema de Controle de Transporte Aereo"
    },
    en: {
        "contato-text": "Contact",
        "sobre-title": "ABOUT",
        "sobre-text": "Undergraduate in Computer Engineering at the Federal University of Mato Grosso (UFMT), expected to graduate in 2029 with a solid mathematical foundation. Has practical experience in end-to-end system development, ranging from mobile applications in Flutter integrated with UI/UX prototyping in Figma, to desktop systems in Java with MySQL data persistence, and optimization of complex algorithms in C. With professional experience in technology education (Robotics/STEM) and administrative-financial support at TJMT, demonstrates a strong ability to translate technical concepts for diverse audiences and manage data. Intermediate English with a technical focus.",
        "formacao-title": "education",
        "formacao-data-1": "2024 - Present",
        "formacao-text-1": "UFMT - Federal University of Mato Grosso",
        "formacao-tipo-1": "Bachelor's Degree in Computer Engineering",
        "atuacao-title": "experience",
        "atuacao-data-1": "2026 - Present",
        "atuacao-text-1": "UFMT - Federal University of Mato Grosso",
        "atuacao-tipo-1": "Algebraic Foundations Teaching Assistant",
        "atuacao-data-2": "2024 - 2025",
        "atuacao-text-2": "Central Adventist Institution",
        "atuacao-tipo-2": "Robotics and Mathematics Teacher",
        "atuacao-data-3": "2022 - 2023",
        "atuacao-text-3": "TJMT - Court of Justice of the State of Mato Grosso",
        "atuacao-tipo-3": "Administrative Intern",
        "atuacao-data-4": "Feb 2024 - Aug 2024",
        "atuacao-text-4": "Raia Drogasil S/A",
        "atuacao-tipo-4": "Pharmacy Clerk",
        "projetos-title": "projects",
        "projeto-title-1": "Mobile Application \"Ciência sem Moage\"",
        "projeto-title-2": "Memory Game",
        "projeto-title-3": "Access Control System",
        "projeto-title-4": "Air Transport Management System"
    }
};

const languageToggle = document.querySelector('#language');

languageToggle.addEventListener('change', () => {
    const lang = languageToggle.checked? "pt" : "en";

    document.querySelectorAll('[data-translate]').forEach(elemento => {
        const chave = elemento.getAttribute('data-translate');

        if(traducoes[lang][chave]){
            elemento.textContent = traducoes[lang][chave];
        }
    })
});
