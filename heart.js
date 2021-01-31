let contacts = [
  {
    title: 'Global',
    info: [
      {
        name: 'Befrienders',
        url: 'http://www.befrienders.org',
      }
    ]
  },
  {
    title: 'Austrália',
    info: [
      {
        name: 'Lifeline Australia',
        url: 'http://www.lifeline.org.au',
        phone: '13 11 14',
        networking: [
          {
            type: 'facebook',
            url: 'https://www.facebook.com/LifelineAustralia'
          },
          {
            type: 'twitter',
            url: 'https://twitter.com/LifelineAust'
          },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/lifelineaustralia'
          },
          {
            type: 'youtube',
            url: 'https://www.youtube.com/channel/UC_Rhz-XoVbo02fNrHQZQQHw'
          },
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/company/lifeline-australia'
          }
        ]
      },
      {
        name: 'Kids Helpline',
        url: 'http://www.kidshelp.com.au',
        phone: '1800 55 1800',
        networking: [
          {
            type: 'facebook',
            url: 'https://www.facebook.com/kidshelpline'
          },
          {
            type: 'twitter',
            url: 'https://twitter.com/kidshelplineau'
          },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/kidshelplineau'
          },
          {
            type: 'youtube',
            url: 'https://www.youtube.com/user/kidshelpline101'
          }
        ]
      },
      {
        name: 'Headspace',
        url: 'http://www.eheadspace.org.au',
        phone: '1800 650 890',
        networking: [
          {
            type: 'facebook',
            url: 'https://www.facebook.com/headspaceAustralia'
          },
          {
            type: 'twitter',
            url: 'https://twitter.com/headspace_aus'
          },
          {
            type: 'instagram',
            url: 'https://instagram.com/headspace_aus'
          },
          {
            type: 'youtube',
            url: 'https://www.youtube.com/user/headspaceAustralia'
          }
        ]
      }
    ]
  },
  {
    title: 'Bélgica',
    info: [
      {
        name: 'Centrum Ter Preventie Van Zelfdoding',
        url: 'http://www.zelfmoord1813.be',
        phone: '1813',
        email: 'mail@zelfmoordlijn.be',
        networking: [
          {
            type: 'twitter',
            url: 'https://twitter.com/Zelfmoord1813'
          },
          {
            type: 'youtube',
            url: 'https://www.youtube.com/user/Zelfmoord1813'
          }
        ]
      }
    ]
  },
  {
    title: 'Brasil e Portugal',
    info: [
      {
        name: 'CVV',
        url: 'http://www.cvv.org.br',
        phone: '188',
        email: 'atendimento@cvv.org.br',
        networking: [
          {
            type: 'facebook',
            url: 'https://www.facebook.com/cvvoficial'
          },
          {
            type: 'twitter',
            url: 'https://twitter.com/CVVoficial'
          },
          {
            type: 'instagram',
            url: 'https://www.instagram.com/cvvoficial'
          },
          {
            type: 'youtube',
            url: 'https://www.youtube.com/user/CVVdivulgacao'
          },
          {
            type: 'linkedin',
            url: 'https://www.linkedin.com/company/cvv---centro-de-valoriza%C3%A7%C3%A3o-da-vida'
          }
        ]
      }
    ]
  },
]

let heartStyles = `
body {
  font-family: Arial;
  background: url('assets/diamond.png') repeat #ffffad;
  margin: 0;
  padding: 20px;
  text-align: center;
}

h1 {
  font-family: 'Amatic SC', cursive;
  font-size: 3em;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: #c53d7c;
}

a:hover {
  text-decoration: underline;
  filter: invert(1);
}

.container-max {
  max-width: 600px;
  margin: 0 auto;
}

.header h1 {
  margin-top: 0;
}

.contact {
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,0), rgba(255,255,255,1));
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  padding: 10px;
  margin: 20px auto;
  border-radius: 10px;
  max-width: 350px;
}

.contact h1 {
  margin: 0;
}

.list-social {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

.list-social li {
  margin-right: 10px;
}

.list-social li:last-of-type {
  margin-right: 0;
}

.icon-social {
  font-size: 0;
  transition: .5s all;
  display: flex;
}

.icon-social svg {
  fill: #c53d7c;
  filter: invert(1);
  transition: .5s all;
}

.icon-social:hover {
  transform: scale(1.2);
  background: #000;
  border-radius: 100px;
  box-shadow: 0 0 0 3px #000;
}

.footer {
  text-align: center;
  padding: 2em;
}
`;

let container = elem('div', null, [{type: 'class', value: 'container-max'}], document.body, 'prepend')

function header() {
  let title = 'Redes globais de apoio emocional e prevenção ao suicídio'
  let text = 'Se você precisar de ajuda entre em contato com uma destas redes ou se precisar ajudar um amigo estiver preocupado com alguém.'

  let header = elem('header', null, [{type: 'class', value: 'header'}])

  elem('h1', title, null, header)
  elem('p', text, null, header)

  container.prepend(header)
}

function list() {
  let main = document.createElement('main')  

  main.classList.add('main')

  for(let contact of contacts) {
    let article = elem('article', null, [{type: 'class', value: 'contact'}])
    elem('h1', contact.title, null, article)

    let list = contact.info

    for(let item of list) {
      if(item.name)  elem('h4', item.name, null, article)
      if(item.url)   elem('a', item.url, [{type: 'href', value: item.url}, {type: 'target', value: '_blank'}], article)
      if(item.phone) elem('p', `Telefone: ${item.phone}`, null, article)
      if(item.email) elem('p', `Email: ${item.email}`, null, article)

      if(item.networking) {
        let list_social = elem('ul', null, [{type: 'class', value: 'list-social'}], article)
        for(let social of item.networking) {
          elem('li', `<a class="icon-social" href='${social.url}' target='_blank'>${iconSocial(social.type)} ${social.url}</a>`, null, list_social)
        }
      }
    }
    
    main.appendChild(article)
  }

  container.appendChild(main)
}

function iconSocial(type) {
  switch(type) {
    case 'facebook':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.657 167.657" width="30px" height="30px"><path d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"/></svg>`
      break;
    case 'twitter':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="30px"><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm116.887 199.602c.113 2.52.168 5.05.168 7.593 0 77.645-59.102 167.18-167.184 167.184h.004-.004c-33.184 0-64.062-9.727-90.066-26.395 4.597.543 9.277.813 14.015.813 27.532 0 52.868-9.39 72.98-25.152-25.722-.477-47.41-17.465-54.894-40.813a58.481 58.481 0 0011.043 1.063c5.363 0 10.559-.723 15.496-2.07-26.886-5.384-47.14-29.145-47.14-57.598 0-.266 0-.504.007-.75a58.354 58.354 0 0026.614 7.347c-15.778-10.527-26.149-28.523-26.149-48.91a58.597 58.597 0 017.957-29.535c28.977 35.555 72.282 58.937 121.118 61.394a58.708 58.708 0 01-1.528-13.398c0-32.437 26.317-58.754 58.766-58.754 16.902 0 32.168 7.145 42.89 18.567a117.855 117.855 0 0037.313-14.262c-4.395 13.715-13.707 25.222-25.84 32.5 11.887-1.422 23.215-4.574 33.742-9.254a119.412 119.412 0 01-29.308 30.43zm0 0"/></svg>`
      break;
    case 'linkedin':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="30px"><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm-74.39 387h-62.348V199.426h62.347zm-31.173-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0"/></svg>`
      break;
    case 'youtube':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="30px"><path d="M224.113 303.96L307.387 256l-83.274-47.96zm0 0"/><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm159.96 256.262s0 51.918-6.585 76.953c-3.691 13.703-14.496 24.508-28.2 28.195C356.142 368 256 368 256 368s-99.879 0-125.176-6.852c-13.703-3.687-24.508-14.496-28.199-28.199-6.59-24.77-6.59-76.949-6.59-76.949s0-51.914 6.59-76.95c3.688-13.702 14.758-24.773 28.2-28.46C155.858 144 256 144 256 144s100.14 0 125.176 6.852c13.703 3.687 24.508 14.496 28.199 28.199 6.852 25.035 6.586 77.21 6.586 77.21zm0 0"/></svg>`
      break;
    case 'instagram':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="30px"><path d="M305 256c0 27.063-21.938 49-49 49s-49-21.938-49-49 21.938-49 49-49 49 21.938 49 49zm0 0"/><path d="M370.594 169.305a45.546 45.546 0 00-10.996-16.903 45.514 45.514 0 00-16.903-10.996c-5.18-2.011-12.96-4.406-27.293-5.058-15.504-.707-20.152-.86-59.402-.86-39.254 0-43.902.149-59.402.856-14.332.656-22.118 3.05-27.293 5.062a45.483 45.483 0 00-16.903 10.996 45.572 45.572 0 00-11 16.903c-2.011 5.18-4.406 12.965-5.058 27.297-.707 15.5-.86 20.148-.86 59.402 0 39.25.153 43.898.86 59.402.652 14.332 3.047 22.114 5.058 27.293a45.563 45.563 0 0010.996 16.903 45.514 45.514 0 0016.903 10.996c5.18 2.015 12.965 4.41 27.297 5.062 15.5.707 20.144.856 59.398.856 39.258 0 43.906-.149 59.402-.856 14.332-.652 22.118-3.047 27.297-5.062a48.68 48.68 0 0027.899-27.899c2.011-5.18 4.406-12.96 5.062-27.293.707-15.504.856-20.152.856-59.402 0-39.254-.149-43.902-.856-59.402-.652-14.332-3.047-22.118-5.062-27.297zM256 331.485c-41.691 0-75.488-33.794-75.488-75.485s33.797-75.484 75.488-75.484c41.688 0 75.484 33.793 75.484 75.484S297.688 331.484 256 331.484zm78.469-136.313c-9.742 0-17.64-7.899-17.64-17.64s7.898-17.641 17.64-17.641 17.64 7.898 17.64 17.64c-.004 9.742-7.898 17.64-17.64 17.64zm0 0"/><path d="M256 0C114.637 0 0 114.637 0 256s114.637 256 256 256 256-114.637 256-256S397.363 0 256 0zm146.113 316.605c-.71 15.649-3.199 26.333-6.832 35.684a75.164 75.164 0 01-42.992 42.992c-9.348 3.633-20.035 6.117-35.68 6.832-15.675.715-20.683.887-60.605.887-39.926 0-44.93-.172-60.61-.887-15.644-.715-26.331-3.199-35.68-6.832a72.018 72.018 0 01-26.038-16.957 72.044 72.044 0 01-16.953-26.035c-3.633-9.348-6.121-20.035-6.832-35.68-.723-15.68-.891-20.687-.891-60.609s.168-44.93.887-60.605c.71-15.649 3.195-26.332 6.828-35.684a72.013 72.013 0 0116.96-26.035 72.003 72.003 0 0126.036-16.957c9.352-3.633 20.035-6.117 35.684-6.832C211.07 109.172 216.078 109 256 109s44.93.172 60.605.89c15.649.712 26.332 3.196 35.684 6.825a72.061 72.061 0 0126.04 16.96 72.027 72.027 0 0116.952 26.036c3.637 9.352 6.121 20.035 6.836 35.684.715 15.675.883 20.683.883 60.605s-.168 44.93-.887 60.605zm0 0"/></svg>`
      break;
  }
}

function elem(type, content, attribute, insert, appendType) {
  let el = document.createElement(type)

  if(content) el.innerHTML = content
  if(attribute) for(let attr of attribute) { el.setAttribute(attr.type, attr.value) }
  if(insert) { appendType ? insert.prepend(el) : insert.appendChild(el) }

  return el
}

header()
list()

elem('style', heartStyles, [{type: 'type', value: 'text/css'}], document.head)