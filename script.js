const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImg = document.querySelector('.user-img');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const roles = ['Marketing', 'PR-manager', 'Designer', 'Web-developer', 'CEO', 'Fullstack developer'];

const texts = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim tempore quam excepturi, eum maiores quos voluptates, omnis reprehenderit commodi dolores. Molestiae, sed. Dolorum provident, modi quia laboriosam asperiores sed rem, ex harum exercitationem rerum earum consectetur? Molestias in, consequuntur laboriosam sequi eos ipsam voluptatem sapiente nisi provident vel. Placeat.',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsa accusantium, debitis quaerat animi reiciendis quos. Nesciunt, quidem soluta, harum, culpa voluptatem magnam quod necessitatibus optio saepe aut laborum earum?',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quibusdam cumque quasi natus reiciendis esse voluptatem veritatis sit maiores saepe.',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem fugit perferendis quas veniam in cupiditate at cum voluptatibus nam illo recusandae, quisquam ipsum ut.',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur laboriosam doloremque placeat rem vitae.',

    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem fugit perferendis quas veniam in cupiditate at cum voluptatibus nam illo recusandae, quisquam ipsum ut.'
];

let users = [];

async function getUsers() {    
    const res = await fetch('https://randomuser.me/api/?results=6');
    const {results} = await res.json();
    results.forEach(result => {
        const user = {
            username: `${result.name.first} ${result.name.last}`,
            image: result.picture.thumbnail
        }
        users.push(user)
    });
}

getUsers();

changeUser();

function changeUser() {
    const interval = setInterval(() => {
        let i = randomChoice();
        testimonial.innerText = texts[i];
        userImg.src = users[i].image;
        username.innerText = users[i].username;
        role.innerText = roles[i];
    }, 10000)
}

function randomChoice() {
    return Math.floor(Math.random() * users.length)
}


