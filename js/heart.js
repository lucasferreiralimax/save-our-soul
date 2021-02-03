function header() {
  let title = 'Redes globais de apoio emocional e <span class=\'alert\' data-tooltip=\'você não está sozinho\'>prevenção</span> ao suicídio'
  let text = 'Se você precisar de ajuda entre em contato com uma destas redes ou se precisar ajudar um amigo e estiver preocupado com alguém.'

  let header = elem('header', null, [{type: 'class', value: 'header'}])
  let container = elem('div', null, [{type: 'class', value: 'container-max'}], header, 'prepend')

  elem('h1', title, null, container)
  elem('p', text, null, container)

  document.body.insertBefore(header, document.querySelector('body script'))
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
      if(item.name) elem('h2', item.name, null, article)
      if(item.url) elem('a', item.url, [{type: 'href', value: item.url}, {type: 'target', value: '_blank'}, {type: 'data-tooltip', value: 'site'}, {type: 'rel', value: 'noopener'}], article)
      if(item.phone) {
        if(typeof item.phone == 'string') {
          elem('p', `<b>Telefone:</b> ${item.phone}`, null, article)
        } else {
          for(let phone of item.phone) {
            elem('p', `<b>Telefone:</b> ${phone}`, null, article)
          }
        }
      }
      if(item.sms) elem('p', `<b>SMS:</b> ${item.sms}`, null, article)
      if(item.skype) elem('p', `<b>Skype:</b> <a href='skype:${item.skype}?call' target='_blank' rel='noopener'>${item.skype}</a>`, null, article)
      if(item.email) elem('p', `<b>Email:</b> ${item.email}`, null, article)      

      if(item.networking) {
        let list_social = elem('ul', null, [{type: 'class', value: 'list-social'}], article)
        for(let social of item.networking) {
          elem('li', `<a class="icon-social" href='${social.url}' target='_blank' data-tooltip='${social.type}' rel='noopener'>${iconSocial(social.type)} ${social.url}</a>`, null, list_social)
        }
      }
    }
    
    container.appendChild(article)
  }

  document.body.insertBefore(main, document.querySelector('body script'))
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

function footer() {
  let footer = elem('footer', null, [{type: 'class', value: 'footer'}])
  let github = `<svg viewBox="0 0 16 16" width="32" height="32" fill="#000"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`
  elem(
    'a',
    `${github} Código aberto no Github`,
    [
      {type: 'href', value: 'https://github.com/lucasferreiralimax/save-our-soul'},
      {type: 'target', value: '_blank'},
      {type: 'rel', value: 'noopener'},
      {type: 'data-tooltip', value: 'Projeto Open Source'}
    ],
      footer
    )

  document.body.insertBefore(footer, document.querySelector('body script'))
}

header()
list()
expandContact()
footer()