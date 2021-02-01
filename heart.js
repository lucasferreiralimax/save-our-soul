function header() {
  let title = 'Redes globais de apoio emocional e <span class=\'alert\'>prevenção</span> ao suicídio'
  let text = 'Se você precisar de ajuda entre em contato com uma destas redes ou se precisar ajudar um amigo e estiver preocupado com alguém.'

  let header = elem('header', null, [{type: 'class', value: 'header'}])
  let container = elem('div', null, [{type: 'class', value: 'container-max'}], header, 'prepend')

  elem('h1', title, null, container)
  elem('p', text, null, container)

  document.body.insertBefore(header, document.querySelector('.footer'))
}

function list() {
  let main = document.createElement('main')
  let container = elem('div', null, [{type: 'class', value: 'container-max'}], main, 'prepend')

  main.classList.add('main')

  for(let contact of contacts) {
    let article = elem('article', null, [{type: 'class', value: 'contact'}])
    elem('h1', contact.title, null, article)

    let list = contact.info

    for(let item of list) {
      if(item.name)  elem('h4', item.name, null, article)
      if(item.url)   elem('a', item.url, [{type: 'href', value: item.url}, {type: 'target', value: '_blank'}], article)
      if(item.phone) {
        if(typeof item.phone == 'string') {
          elem('p', `<b>Telefone:</b> ${item.phone}`, null, article)
        } else {
          for(let phone of item.phone) {
            elem('p', `<b>Telefone:</b> ${phone}`, null, article)
          }
        }
      }
      if(item.skype) elem('p', `<b>Skype:</b> ${item.skype}`, null, article)
      if(item.email) elem('p', `<b>Email:</b> ${item.email}`, null, article)      

      if(item.networking) {
        let list_social = elem('ul', null, [{type: 'class', value: 'list-social'}], article)
        for(let social of item.networking) {
          elem('li', `<a class="icon-social" href='${social.url}' target='_blank'>${iconSocial(social.type)} ${social.url}</a>`, null, list_social)
        }
      }
    }
    
    container.appendChild(article)
  }

  document.body.insertBefore(main, document.querySelector('.footer'))
}

function expandContact() {
  for(let contact of document.querySelectorAll('.contact')) {
    contact.addEventListener('click', (event) => {
      cleanContacts()
      contact.classList.add('active')
      contact.style.maxHeight = `${contact.scrollHeight}px`
      setTimeout(() => {
        const y = contact.getBoundingClientRect().top + window.pageYOffset - 10;
        window.scrollTo({top: y, behavior: 'smooth'});
      }, 500);      
    })
  } 
}

function cleanContacts() {
  for(let contact of document.querySelectorAll('.contact')) {
    contact.classList.remove('active')
    contact.removeAttribute('style')
  }
}

header()
list()
expandContact()