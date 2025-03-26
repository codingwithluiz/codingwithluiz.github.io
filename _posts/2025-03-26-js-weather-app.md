---
Title    : 🔥 Crie seu PRÓPRIO App de Clima com JavaScript e OpenWeatherMap! 🌦️🚀
Subtitle : Aprenda a integrar a API OpenWeatherMap e exibir a previsão do tempo em tempo real!
Author   : Luiz F. Estivalet
Date     : March 25, 2025
Category : Frontend
Languages: HTML, CSS, Javascript
Level    : Basic
Duration : 20 minutes
Links    : <link_blog_post>
Video    : <link_video_class>
Tags     : Programming, API, OpenWeatherMap
---
- [Descrição do Projeto](#descrição-do-projeto)
- [Estrutura do HTML](#estrutura-do-html)
- [API OpenWeather](#api-openweather)
- [Estilizando a Página](#estilizando-a-página)
  - [Estilos Globais do `body`](#estilos-globais-do-body)
  - [Estilizando a `.container`](#estilizando-a-container)
  - [Estilizando o `form`](#estilizando-o-form)
  - [Estilizando o Campo de Texto](#estilizando-o-campo-de-texto)
  - [Estilizando o Botão de Envio](#estilizando-o-botão-de-envio)
  - [Efeito Hover no Botão](#efeito-hover-no-botão)
  - [Estilizando a Imagem do Ícone](#estilizando-a-imagem-do-ícone)
  - [Estilizando a Temperatura](#estilizando-a-temperatura)
  - [Estilizando a Descrição](#estilizando-a-descrição)
  - [Estilizando a Seção `.details`](#estilizando-a-seção-details)
  - [Estilizando os Blocos de Detalhes](#estilizando-os-blocos-de-detalhes)
  - [Responsividade (Media Query)](#responsividade-media-query)
- [Referência](#referência)


# Descrição do Projeto

<img src="img/weather-app.jpg"/>

Já imaginou criar um aplicativo de clima do zero? 🌎☀️ Neste vídeo, você aprenderá a desenvolver um app de previsão do tempo usando JavaScript e a API OpenWeatherMap! Vamos construir uma interface interativa onde o usuário pode digitar o nome de uma cidade e obter informações detalhadas sobre o clima, incluindo temperatura, umidade e condições atmosféricas. Além disso, vamos usar ícones dinâmicos para representar o clima atual e aprender a tratar erros ao buscar dados da API.

🔥 O que você vai aprender?
✅ Como integrar a API OpenWeatherMap em um projeto JavaScript
✅ Como buscar e exibir dados meteorológicos em tempo real
✅ Como usar ícones dinâmicos para representar o clima
✅ Como tratar erros com try...catch para uma experiência fluida

💡 Tecnologias utilizadas: JavaScript, OpenWeatherMap API, HTML, CSS

📌 Se inscreva no canal e ative o sininho 🔔 para mais tutoriais incríveis! 🚀

# Estrutura do HTML

Vamos iniciar o nosso projeto pelo HTML. A página vai ser bastante simples
com uma caixa de texto para que possamos digitar o nome da cidade que
queremos ver o clima atual e um botão para disparar a consulta.

Depois vamos ter um espaço para colocar uma imagem representando o clima
atual e alguns detalhes como sensação térmica, humidade e velocidade do
vento.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Weather App</h1>
      <form>
        <input type="text" id="city-input" placeholder="Enter City" />
        <input type="submit" value="Get Weather" />
      </form>
      <div id="weather-data">
        <div class="icon">
          <!-- Imagem dinamica representando o clima:
           <img src="http://openweathermap.org/img/wn/01d.png" alt="Weather Icon"> 
           -->
        </div>
        <div class="temperature"></div>
        <div class="description"></div>
        <div class="details">
          <!-- Detalhes do clima:
           <div>Feels like: 23°C</div>
           <div>Humidity: 40%</div>
           <div>Wind speed: 5 m/s</div> 
           -->
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

# API OpenWeather

Para acessar a API [OpenWeather](https://openweathermap.org/) precisamos fazer
um cadastro no site.

<img src="img/openweather-signup.jpg"/>

# Estilizando a Página

## Estilos Globais do `body`

```css
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  background-color: #f7f7f7;
}
```
- `margin: 0;` → Remove a margem padrão do corpo da página, evitando espaços extras ao redor do conteúdo.
- `font-family: "Montserrat", sans-serif;` → Define a fonte principal do texto para "Montserrat". Caso ela não esteja disponível, um fallback genérico `sans-serif` será utilizado.
- `background-color: #f7f7f7;` → Define um fundo cinza claro para a página.

## Estilizando a `.container`

```css
.container {
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  max-width: 600px;
  border-radius: 5px;
  padding: 20px;
}
```
- `background-color: #fff;` → Define o fundo do contêiner como branco.
- `box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);` → Adiciona uma sombra suave ao redor do contêiner, dando um efeito elevado.
- `margin: 0 auto;` → Centraliza o contêiner horizontalmente.
- `margin-top: 50px;` → Cria um espaçamento superior de 50px, afastando o contêiner do topo da página.
- `text-align: center;` → Centraliza o conteúdo de texto dentro do contêiner.
- `max-width: 600px;` → Limita a largura do contêiner a 600 pixels.
- `border-radius: 5px;` → Arredonda os cantos do contêiner.
- `padding: 20px;` → Adiciona um espaçamento interno de 20px em todas as direções.

## Estilizando o `form`

```css
form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
```
- `display: flex;` → Usa Flexbox para organizar os elementos do formulário em linha.
- `justify-content: center;` → Centraliza os elementos horizontalmente.
- `align-items: center;` → Alinha os elementos verticalmente ao centro.
- `margin-bottom: 20px;` → Adiciona um espaço abaixo do formulário.

---

## Estilizando o Campo de Texto

```css
form input[type="text"] {
  padding: 10px;
  border: none;
  outline: none;
  font-size: 18px;
  width: 60%;
}
```
- `padding: 10px;` → Adiciona um espaçamento interno para melhorar a aparência.
- `border: none;` → Remove a borda padrão do campo de entrada.
- `outline: none;` → Remove o contorno ao focar no campo (evita o efeito de borda azul padrão).
- `font-size: 18px;` → Define o tamanho da fonte como 18px.
- `width: 60%;` → Define a largura do campo de entrada como 60% do contêiner pai.

## Estilizando o Botão de Envio

```css
form input[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
}
```
- `background-color: #007bff;` → Define a cor de fundo do botão como azul.
- `color: #fff;` → Define a cor do texto como branca.
- `border: none;` → Remove a borda do botão.
- `padding: 10px 20px;` → Adiciona espaçamento interno.
- `border-radius: 5px;` → Arredonda os cantos do botão.
- `font-size: 18px;` → Define o tamanho da fonte.
- `cursor: pointer;` → Altera o cursor para um ponteiro ao passar o mouse, indicando que o botão é clicável.
- `outline: none;` → Remove o contorno ao focar no botão.
- `transition: background-color 0.3s ease;` → Adiciona uma transição suave para mudanças de cor.

## Efeito Hover no Botão

```css
form input[type="submit"]:hover {
  background-color: #0062cc;
}
```
- `background-color: #0062cc;` → Muda a cor de fundo quando o mouse passa sobre o botão, criando um efeito visual interativo.

## Estilizando a Imagem do Ícone
```css
.icon img {
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
```
- `width: 100px;` e `height: 100px;` → Define um tamanho fixo para a imagem do ícone.
- `background-size: contain;` → Garante que a imagem seja ajustada dentro do espaço disponível sem ser cortada.
- `background-repeat: no-repeat;` → Evita a repetição da imagem.
- `background-position: center center;` → Centraliza a imagem dentro do espaço disponível.

## Estilizando a Temperatura

```css
.temperature {
  font-size: 48px;
  font-weight: bold;
  margin: 20px 0;
}
```
- `font-size: 48px;` → Define um tamanho grande para a exibição da temperatura.
- `font-weight: bold;` → Torna o texto em negrito.
- `margin: 20px 0;` → Adiciona espaçamento acima e abaixo da temperatura.

## Estilizando a Descrição
```css
.description {
  font-size: 24px;
  margin-bottom: 20px;
}
```
- `font-size: 24px;` → Define um tamanho de fonte maior para a descrição do tempo.
- `margin-bottom: 20px;` → Adiciona espaço abaixo da descrição.

## Estilizando a Seção `.details`
```css
.details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
```
- `display: flex;` → Usa Flexbox para organizar os elementos.
- `justify-content: center;` → Centraliza os elementos horizontalmente.
- `align-items: center;` → Alinha verticalmente ao centro.
- `flex-wrap: wrap;` → Permite que os elementos quebrem linha se necessário.

## Estilizando os Blocos de Detalhes
```css
.details > div {
  padding: 20px;
  background-color: #f1f1f1;
  margin: 10px;
  flex: 1;
  border-radius: 5px;
  text-align: center;
  min-height: 45px;
}
```
- `padding: 20px;` → Adiciona espaçamento interno.
- `background-color: #f1f1f1;` → Define um fundo cinza claro.
- `margin: 10px;` → Adiciona espaçamento externo.
- `flex: 1;` → Permite que os elementos cresçam proporcionalmente no espaço disponível.
- `border-radius: 5px;` → Arredonda os cantos.
- `text-align: center;` → Centraliza o texto.
- `min-height: 45px;` → Define uma altura mínima.

## Responsividade (Media Query)
```css
@media (max-width: 768px) {
  form {
    flex-direction: column;
  }

  form input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
  }
}
```
- Para telas menores que 768px:
  - O formulário passa a ter `flex-direction: column;`, colocando os elementos em coluna.
  - O campo de entrada ocupa toda a largura disponível e recebe `margin-bottom: 10px;` para separação.

# Referência

- https://www.100jsprojects.com/project/weather-app
