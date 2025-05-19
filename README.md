<a id="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/joao-montanari/url-shortener">
    <img src="./public/logo.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">Your URL</h3>

  <p align="center">
    Encurtador de URL e gerador de QRCode
    <br />
    <a href="https://github.com/joao-montanari/url-shortener"><strong>Repositório »</strong></a>
    <br />
    <br />
    <a href="https://your-url.vercel.app">Site</a>
    <!-- &middot;
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a> -->
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário - Tópicos do README</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 📌 About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Este repositório contém um encurtador de URLs simples, conectado ao Firebase Firestore, que oferece:

- Encurtamento de links
  - O usuário digita uma URL e recebe um link compacto.
  - Registro salvo no Firestore com o esquema:
```json
{
  link: "https://exemplo.com",
  clicks: 0,
  last_access: null
}
```
- Métrica de acessos
  - Cada clique incrementa `clicks`.
  - `last_access` armazena a data/hora do último acesso.
- Geração de QR Code
  - Para cada URL encurtada, é gerado um QR Code.
  - Download disponível nos formatos SVG, PNG e JPEG.
- Roadmap
  - Dashboard analítico: página dedicada a exibir número de cliques e último acesso para cada URL.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 🛠️ Built With

Este projeto foi desenvolvido com as seguintes tecnologias:

* [![React][React.js]][React-url] – Biblioteca para criação de interfaces.
* [![Vite][Vite]][vite-url] – Ferramenta de build rápida para front-end moderno.
* [![Firebase][Firebase]][firebase-url] – Ferramenta de serviços online gratuitra.

<!-- * [![Next][Next.js]][Next-url] -->
<!-- * [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## 🦮 Getting Started

Estas instruções irão te guiar para rodar uma cópia do projeto localmente, para fins de desenvolvimento e testes.
(...)

### Prerequisites

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Installation

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/joao-montanari/url-shortener.git
cd url-shortener
npm install
# ou
yarn install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## ✏️ Usage

Para rodar o projeto em ambiente de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## 🗺️ Roadmap

- [x] Conexão com banco de dados não relacional.
- [x] Criar uma URL curta que redireciona o usuário para a URL cadastrada.
- [ ] Criar página para a análise de clicks e último acesso.
- [x] Criar QRCode para a URL encurtada.
    - [x] Disponibilizar no formato SVG, PNG e JPEG.
- [ ] Suporte a múltiplas linguas
    - [ ] Inglês
    - [x] Português

Acesse o [open issues](https://github.com/joao-montanari/url-shortener/issues) para ver uma lista do processos completos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

## 😀 Top contributors:

<a href="https://github.com/joao-montanari/url-shortener/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=joao-montanari/url-shortener" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## 📖 License

A distribuição não tem nenhuma licença. Veja `LICENSE.txt` para mais informações.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## ☎️ Contact

João Montanari - [@joaomontanari26](https://instagram.com/joaomontanari26)

Link do projeto: [Repositório](https://github.com/joao-montanari/url-shortener)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/joao-montanari/url-shortener.svg?style=for-the-badge
[contributors-url]: https://github.com/joao-montanari/url-shortener/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/joao-montanari/url-shortener.svg?style=for-the-badge
[forks-url]: https://github.com/joao-montanari/url-shortener/network/members
[stars-shield]: https://img.shields.io/github/stars/joao-montanari/url-shortener.svg?style=for-the-badge
[stars-url]: https://github.com/joao-montanari/url-shortener/stargazers
[issues-shield]: https://img.shields.io/github/issues/joao-montanari/url-shortener.svg?style=for-the-badge
[issues-url]: https://github.com/joao-montanari/url-shortener/issues
[license-shield]: https://img.shields.io/github/license/joao-montanari/url-shortener.svg?style=for-the-badge
[license-url]: https://github.com/joao-montanari/url-shortener/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/joão-vitor-montanari-da-silva
<!-- [product-screenshot]: images/screenshot.png -->

<!-- ICONS -->

[React.js]: https://img.shields.io/badge/React-58C4DC?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://reactjs.org/

[Vite]: https://img.shields.io/badge/vite-FFCE26?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vite.dev/

[Firebase]: https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
