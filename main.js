const paragraph = document.querySelector('p');
paragraph.style.color = 'LightBlue';
const heading = document.querySelector('h1');
heading.style.fontSize = '5em';
const para2 = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.';
paragraph.innerHTML = para2;
const item13 = document.querySelector('#item-13');
item13.style.color = 'rgba(0,0,0,0.5)';
const item3 = document.querySelector('#item-3');
const greeting = `say, "Hi!"`;
item3.innerHTML = greeting;
const image1 = document.querySelector('img');
image1.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg"
image1.height = '300';
const bone = document.createElement('img');
bone.src = 'https://beta.techcrunch.com/wp-content/uploads/2009/09/dinoauction.jpg';
bone.height = '300';
document.body.appendChild(bone);
const bullet = document.createElement('li');
bullet.innerHTML = `Won't get fooled again.`
const list = document.querySelector('ul')
list.appendChild(bullet);