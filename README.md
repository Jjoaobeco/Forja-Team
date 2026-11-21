# Forja Team — Escola de Lutas

Site institucional e grade interativa de treinos da **Forja Team**, escola de artes marciais localizada em **Sarzedo - MG**. O projeto apresenta as modalidades oferecidas, o corpo docente, uma galeria filtrável com visualização ampliada (lightbox), a grade semanal de aulas com filtros combinados e integração direta com o WhatsApp para agendamento de aula experimental.

## Funcionalidades

* **Hero & Identidade Visual:** Apresentação principal da academia com chamada para a grade de horários e agendamento de aula experimental via WhatsApp.
* **Modalidades:** Cartões detalhados para **Muay Thai**, **Jiu-Jitsu** (incluindo público adulto, infantil e *Baby*) e **Boxe**.
* **Corpo Docente:** Perfis completos do **Professor Rômulo** e da **Professora Fabiana** com suas formações e atuações.
* **Galeria de Treinos com Lightbox:** Filtragem por categoria (`Todas`, `Muay Thai / Boxe`, `Jiu-Jitsu`, `Equipe & Tatame`), legendas e visualização em tela cheia com navegação por setas na tela ou teclado (`Esc`, `←`, `→`).
* **Grade de Aulas Interativa:** Filtro duplo por **dia da semana** (`Segunda` a `Sexta`) e **modalidade** (`Muay Thai / Boxe`, `Jiu-Jitsu`, `Kids / Infantil`, `Feminino`), ocultando automaticamente os dias sem aulas correspondentes ao filtro ativo.
* **Contato & Localização:** Botões diretos para WhatsApp (incluindo botão flutuante) e informações de endereço, telefone e Instagram no rodapé.

## Estrutura de Arquivos

```text
forja-team/
├── index.html          # Estrutura das seções e marcação semântica
├── style.css           # Variáveis de tema, layout responsivo, animações e lightbox
├── script.js           # Dados da galeria, filtros da grade, menu mobile e lightbox
└── img/
    ├── logo-forja.png  # Logotipo principal e do rodapé
    ├── hero-bg.jfif    # Imagem de fundo da seção inicial
    ├── romulo.png      # Foto do Professor Rômulo
    ├── fabiana.jpeg    # Foto da Professora Fabiana
    └── galeria/        # Fotos dos treinos e da equipe
```

## Tecnologias Utilizadas

* **HTML5**
* **CSS3** (CSS Variables, CSS Grid, Flexbox, Media Queries)
* **JavaScript (ES6+)** (manipulação do DOM, filtragem dinâmica e controle de lightbox)
* **Google Fonts** (`Oswald` para títulos e `Inter` para textos)
* **Lucide Icons** (ícones vetoriais via CDN)

## Como Executar Localmente

Como o projeto é composto por arquivos estáticos sem etapa obrigatória de compilação:

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o arquivo `index.html` diretamente no navegador **ou** utilize uma extensão como o **Live Server** no VS Code para melhor experiência durante o desenvolvimento.

## Como Atualizar Conteúdos

* **Fotos da Galeria:** Adicione as novas imagens em `img/galeria/` e registre cada item no array `galleryItems` dentro de `script.js` com `src`, `category` e `caption`.
* **Grade de Horários:** Edite os elementos `.day-card` e `.class-item` diretamente em `index.html`, mantendo os atributos `data-day` e `data-tags` coerentes com os botões de filtro.
* **WhatsApp:** Atualize o número no formato internacional (`5531...`) nos links de agendamento e no botão flutuante em `index.html`.

## Deploy

O site é publicado de forma contínua na **Netlify** a partir das atualizações enviadas para o repositório no **GitHub**.

## Localização

**Forja Team — Escola de Lutas**  
Rua José Batista Filho, 26 — 3º andar, Centro  
Sarzedo - MG, CEP 32450-000  
WhatsApp: (31) 99546-6144  
Instagram: `@forjateamsarzedo`