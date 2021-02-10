const fs = require("fs");
const contacts = require('./js/contacts.js');
const urlHosting = 'https://lucasferreiralimax.github.io/save-our-soul'

let readme = `# [save-our-soul](${urlHosting})

Project with contacts S.O.S

[List live save-our-soul](${urlHosting})

Do you are not alone, keep calm, call or send a message.
`;

function contactItem(contact) {
  let removeSVG = /(<svg)([^<]*|[^>]*)(.*<\/svg>)/
  let contactContext = `\n<hr>\n\n`
  contactContext += `## ${contact.title.replace(removeSVG, "")}`

  for(let item of contact.info) {
    let info = `\n##### ${item.name} \n`
    if(item.url) info += `* Site: ${item.url}\n`
    if(item.phone && typeof item.phone == 'string') {
      info += `* Telefone: ${item.phone}\n`
    } else if(item.phone) {
      for(let cellphone of item.phone) {
        info += `* Telefone: ${cellphone}\n`
      }
    }
    if(item.skype) info += `* Skype: <a href='skype:${item.skype}?call'>${item.skype}</a>\n`
    if(item.email) info += `* E-mail: ${item.email}\n`
    if(item.networking) {
      for(let social of item.networking) {
        info += `\n<a href="${social.url}" target="_blank"><img alt="${social.type} - ${social.url}" width="30px" src="assets/icons/${social.type}-logo.svg" /></a>`
      }
      info += '\n'
    }
    contactContext += info
  }

  readme += contactContext
}

for(let contact of contacts) { contactItem(contact) }

readme += `\n___
> Se tiver problemas [abra uma nova issue aqui](https://github.com/lucasferreiralimax/save-our-soul/issues/new)

### :performing_arts: Com quem você pode conversar sobre o projeto?
#### Who can you talk to about the project?
#### ¿Con quién puedes hablar sobre el proyecto?
#### С кем вы можете поговорить о проекте?
#### 誰がプロジェクトについて話すことができますか？
#### À qui pouvez-vous parler du projet?
#### Projeyle ilgili kim konuşabilirsin?
#### 你能谈谈这个项目吗？

* :ghost: @lucasferreiralimax
* :email: lucasferreiralimax@gmail.com`

fs.writeFileSync('README.md', readme);