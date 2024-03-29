let keep_again = true;
const messages = [
  'Tenha calma, tudo bem? Precisamos de você vivo! <br>Converse com algum contato conforme sua urgência <br>Hoje pode está difícil mas amanhã, amanhã é um novo dia.',
  'Não se precipite, podemos resolver qualquer problema trabalhando com a paciência. <br>Se precisar entre em contato com quem achar melhor.',
  'Posso não te conhecer ainda, mas se você precisar de ajuda ficarei grato em te ajudar <br>@lucasferreiralimax',
  'Você não está sozinho, tenha calma, conforme sua urgência busque compartilhar o que precisa para esses contatos listados aqui.',
  'Compartilhando informação podemos melhorar o Mundo de cada pessoa, se estiver passando por alguma dificuldade entre em contato.',
  'Nesse Mundo viemos para aprender a evoluir nossa alma, tenha calma, a vida pode parecer difícil mas não é nada impossível para que possamos melhorar.',
  'Respire fundo, pense no tamanho do universo. Consegue imaginar tudo que ainda vai conhecer? Tenha calma, respire fundo.',
  'Você é importante se chegou até aqui, tenha calma antes de seguir converse com alguém dessa lista se precisar.',
  'Se você já foi ajudado, retribua isso para o universo e mantenha a calma. Se precisar de ajuda entre em contato.'
]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function keepCalm() {
  if(keep_again) {    
    let lucky = getRandomIntInclusive(0, messages.length)
    keep_again = false

    showMessage(messages[lucky])
    setTimeout(function(){ keep_again = true }, 5000)
  }
}

document.addEventListener('mouseleave', keepCalm)

function showMessage(message) {
  let last_message = document.querySelector('.message')

  if(last_message) {
    last_message.remove()
    document.querySelector('.message-overlay').remove()
  }

  document.body.style.overflow = 'hidden'
  elem('section', `<p>${message}</p>`, [{type: 'class', value: 'message'}], document.body)
  elem('div', null, [{type: 'class', value: 'message-overlay'}], document.body)
  elem('h1', "Atenção", null, document.querySelector('.message'), true)
  elem('button', "ok", [{type: 'class', value: 'action'}], document.querySelector('.message'))

  document.querySelector('.message .action').addEventListener('click', cleanMessage)
}

function cleanMessage() {
  document.body.removeAttribute('style')
  document.querySelector('.message').remove()
  document.querySelector('.message-overlay').remove()
}

function elem(type, content, attribute, insert, appendType) {
  let el = document.createElement(type)

  if(content) el.innerHTML = content
  if(attribute) for(let attr of attribute) { el.setAttribute(attr.type, attr.value) }
  if(insert) { appendType ? insert.prepend(el) : insert.appendChild(el) }

  return el
}

function iconSocial(type) {
  let sizeIcon = 'width=\'35px\' height=\'35px\''
  let nameSpaceSVG = 'xmlns=\'http://www.w3.org/2000/svg\''

  switch(type) {
    case 'facebook':
      return `<svg ${nameSpaceSVG} viewBox="0 0 167.657 167.657" ${sizeIcon}><path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"/></svg>`
    case 'twitter':
      return `<svg ${nameSpaceSVG} viewBox="0 0 512 512" ${sizeIcon}><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm116.887 199.602c.113 2.52.168 5.05.168 7.593 0 77.645-59.102 167.18-167.184 167.184h.004-.004c-33.184 0-64.062-9.727-90.066-26.395 4.597.543 9.277.813 14.015.813 27.532 0 52.868-9.39 72.98-25.152-25.722-.477-47.41-17.465-54.894-40.813a58.481 58.481 0 0011.043 1.063c5.363 0 10.559-.723 15.496-2.07-26.886-5.384-47.14-29.145-47.14-57.598 0-.266 0-.504.007-.75a58.354 58.354 0 0026.614 7.347c-15.778-10.527-26.149-28.523-26.149-48.91a58.597 58.597 0 017.957-29.535c28.977 35.555 72.282 58.937 121.118 61.394a58.708 58.708 0 01-1.528-13.398c0-32.437 26.317-58.754 58.766-58.754 16.902 0 32.168 7.145 42.89 18.567a117.855 117.855 0 0037.313-14.262c-4.395 13.715-13.707 25.222-25.84 32.5 11.887-1.422 23.215-4.574 33.742-9.254a119.412 119.412 0 01-29.308 30.43zm0 0"/></svg>`
    case 'linkedin':
      return `<svg ${nameSpaceSVG} viewBox="0 0 512 512" ${sizeIcon}><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0"/></svg>`
    case 'youtube':
      return `<svg ${nameSpaceSVG} viewBox="0 0 512 512" ${sizeIcon}><path d="M224.113 303.96L307.387 256l-83.274-47.96zm0 0"/><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm159.96 256.262s0 51.918-6.585 76.953c-3.691 13.703-14.496 24.508-28.2 28.195C356.142 368 256 368 256 368s-99.879 0-125.176-6.852c-13.703-3.687-24.508-14.496-28.199-28.199-6.59-24.77-6.59-76.949-6.59-76.949s0-51.914 6.59-76.95c3.688-13.702 14.758-24.773 28.2-28.46C155.858 144 256 144 256 144s100.14 0 125.176 6.852c13.703 3.687 24.508 14.496 28.199 28.199 6.852 25.035 6.586 77.21 6.586 77.21zm0 0"/></svg>`
    case 'instagram':
      return `<svg ${nameSpaceSVG} viewBox="0 0 512 512" ${sizeIcon}><path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0"/><path d="M370.594 169.305a45.546 45.546 0 00-10.996-16.903 45.514 45.514 0 00-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 00-16.903 10.996 45.572 45.572 0 00-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0010.996 16.903 45.514 45.514 0 0016.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0027.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0"/><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 01-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 01-26.038-16.957 72.044 72.044 0 01-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0116.96-26.035 72.003 72.003 0 0126.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0126.04 16.96 72.027 72.027 0 0116.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0"/></svg>`
    case 'whatsapp':
      return `<svg ${nameSpaceSVG} viewBox="0 0 512 512" ${sizeIcon}><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm5.425781 405.050781c-.003906 0 .003907 0 0 0h-.0625c-25.644531-.011719-50.84375-6.441406-73.222656-18.644531l-81.222656 21.300781 21.738281-79.375c-13.410156-23.226562-20.464844-49.578125-20.453125-76.574219.035156-84.453124 68.769531-153.160156 153.222656-153.160156 40.984375.015625 79.457031 15.96875 108.382813 44.917969 28.929687 28.953125 44.851562 67.4375 44.835937 108.363281-.035156 84.457032-68.777343 153.171875-153.21875 153.171875zm0 0"/><path d="m261.476562 124.46875c-70.246093 0-127.375 57.105469-127.40625 127.300781-.007812 24.054688 6.726563 47.480469 19.472657 67.75l3.027343 4.816407-12.867187 46.980468 48.199219-12.640625 4.652344 2.757813c19.550781 11.601562 41.964843 17.738281 64.816406 17.746094h.050781c70.191406 0 127.320313-57.109376 127.351563-127.308594.011718-34.019532-13.222657-66.003906-37.265626-90.066406-24.042968-24.0625-56.019531-37.324219-90.03125-37.335938zm74.90625 182.035156c-3.191406 8.9375-18.484374 17.097656-25.839843 18.199219-6.597657.984375-14.941407 1.394531-24.113281-1.515625-5.5625-1.765625-12.691407-4.121094-21.828126-8.0625-38.402343-16.578125-63.484374-55.234375-65.398437-57.789062-1.914063-2.554688-15.632813-20.753907-15.632813-39.59375 0-18.835938 9.890626-28.097657 13.398438-31.925782 3.511719-3.832031 7.660156-4.789062 10.210938-4.789062 2.550781 0 5.105468.023437 7.335937.132812 2.351563.117188 5.507813-.894531 8.613281 6.570313 3.191406 7.664062 10.847656 26.5 11.804688 28.414062.957031 1.917969 1.59375 4.152344.320312 6.707031-1.277344 2.554688-5.519531 8.066407-9.570312 13.089844-1.699219 2.105469-3.914063 3.980469-1.679688 7.8125 2.230469 3.828125 9.917969 16.363282 21.296875 26.511719 14.625 13.039063 26.960938 17.078125 30.789063 18.996094 3.824218 1.914062 6.058594 1.59375 8.292968-.957031 2.230469-2.554688 9.570313-11.175782 12.121094-15.007813 2.550782-3.832031 5.105469-3.191406 8.613282-1.914063 3.511718 1.273438 22.332031 10.535157 26.160156 12.449219 3.828125 1.917969 6.378906 2.875 7.335937 4.472657.960938 1.597656.960938 9.257812-2.230469 18.199218zm0 0"/></svg>`
  }
}
let color1 = '#c53d7c'

let heartStyles = `
::-webkit-scrollbar-track { background: #ededb5; }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0, .5);
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,0);
}

::selection {
  background: ${color1};
  color: #fff;
}

.alert {
  background: ${color1};
  color: #000;
  filter: invert(1);
  font-family: 'Courgette', cursive;
  padding: 0 10px;
  cursor: help;
}

.alert[data-tooltip]:before { top: 0; }
.alert[data-tooltip]:after { width: 100%; }

body {
  background: url('assets/diamond.png') repeat #ffffad fixed;
  font-family: Arial;
  margin: 0;
  padding: 20px;
  text-align: center;
}

h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 3em;
}

a {
  color: ${color1};
  font-weight: bold;
  text-decoration: none;
}

a:hover {
  filter: invert(1);
  text-decoration: underline;
}

.container-max {
  margin: 0 auto;
  max-width: 600px;
}

.header h1 { margin-top: 0; }
.header p {
  font-family: 'Courgette', cursive;
  font-size: 1.5em;
}

.contact {
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,0), rgba(255,255,255,1));
  border-radius: 10px;
  box-shadow:0 0 0 2px #fff, 0 0 10px rgba(0,0,0,.2);
  cursor: pointer;
  margin: 20px auto;
  max-height: 55px;
  max-width: 350px;
  overflow: hidden;
  padding: 10px 10px 20px;
  transition: .5s all;
}

.contact.active { cursor: default; }

.contact h1 { margin: 0; }

.contact h2 {
  border-top: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 -1px 0 rgba(255,255,255,.5);
  font-size: 20px;
  padding-top: 20px;  
}

.list-social {
  display: flex;
  justify-content: center;  
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-social li { margin-right: 10px; }
.list-social li:last-of-type { margin-right: 0; }

.icon-social {
  display: flex;
  font-size: 0;
  transition: .5s all;
  position: relative;
}

.icon-social svg {
  fill: ${color1};
  filter: invert(1);
  transition: .5s all;
}

.icon-social:hover {
  background: #000;
  border-radius: 100px;
  box-shadow: 0 0 0 3px #000;
  transform: scale(1.2);
}

[data-tooltip] {
  position: relative;
  display: inline-block;
}

[data-tooltip]:before,
[data-tooltip]:after {
  display: inline-block;
  position: absolute;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50%);
  transition: .1s all;
  z-index: 9;
}
[data-tooltip]:after {
  content: attr(data-tooltip);
  background: #fff;
  color: #000;
  border: 1px solid #000;
  padding: 3px 6px;
  border-radius: 3px;
  top: -25px;
  font-size: 13px;
}

[data-tooltip]:before {
  content: '';
  width: 1px;
  height: 1px;
  border: 5px solid transparent;
  border-top: 5px solid #000;
  top: -2px;
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  opacity: 1;
  pointer-events: all;
  filter: invert(1);
}

.message {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  max-width: 400px;
  width: calc(100% - 30px);
  margin: 0 auto;
  position: fixed;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #333;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  z-index: 9;
  font-size: 18px;
}

.message h1 {
  font-size: 40px;
  margin: 0;
}

.message .action {
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  background: #eee;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.message .action:hover {
  background: #fff;
}

.message-overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(10px) brightness(0.2);
}

.footer {
  padding: 2em;
  text-align: center;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer a svg {
  min-width: 32px;
  margin-right: 10px;
}

.footer a:hover svg { filter: invert(1); }
`;

elem('style', heartStyles, [{type: 'type', value: 'text/css'}], document.head)
