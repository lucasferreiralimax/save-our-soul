let body = document.body
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

function header() {
  let title = 'Redes globais de apoio emocional e prevenção ao suicídio'
  let text = 'Se você precisar de ajuda entre em contato com uma destas redes ou se precisar ajudar um amigo estiver preocupado com alguém.'

  let header = document.createElement('header')
  let h1 = document.createElement('h1')
  let p = document.createElement('p')

  header.classList.add('header')

  h1.textContent = title
  p.textContent = text

  header.appendChild(h1)
  header.appendChild(p)
  body.prepend(header)
}

function list() {
  let main = document.createElement('main')  

  main.classList.add('main')

  for(let contact of contacts) {
    let article = document.createElement('article')
    let h1 = document.createElement('h1')

    article.classList.add('contact')
    h1.textContent = contact.title
    article.appendChild(h1)

    let list = contact.info

    for(let item of list) {
      let h4 = document.createElement('h4')
      let url = document.createElement('a')
      let phone = document.createElement('p')
      let email = document.createElement('p')

      h4.textContent = item.name
      url.textContent = item.url
      url.setAttribute('href', item.url)
      url.setAttribute('target', '_blank')
      phone.textContent = `Telefone: ${item.phone}`
      email.textContent = `Email: ${item.email}`
      article.appendChild(h4)
      article.appendChild(url)
      article.appendChild(phone)
      article.appendChild(email)

      let socials = item.networking

      if(socials) {
        for(let social of socials) {
          console.log(social)
        }
      }
    }       
    
    main.appendChild(article)
  }

  body.insertBefore(main, document.querySelector('footer'))
}

header()
list()