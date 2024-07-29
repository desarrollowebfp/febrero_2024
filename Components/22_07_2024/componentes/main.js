import './style.css'
import Avatar from './components/Avatar/Avatar'

document.querySelector("#app").innerHTML = `
${Avatar()}
${Avatar("small", "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250", "Ash Allen")}
${Avatar("large", "https://res.cloudinary.com/practicaldev/image/fetch/s--G2co0DXE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://avatars.dicebear.com/api/adventurer-neutral/mail%2540ashallendesign.co.uk.svg", "Paco")}
`