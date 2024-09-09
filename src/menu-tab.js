import Feijoada from './feijoada.jpg';
import Steak from './steak.jpg';
import Coxinha from './coxinha.jpg';

const menuItemCreator = () => {
    class MenuItem {
        constructor(name, image, description) {
            this.name = name;
            this.image = image;
            this.description = description;
        }

        appendSection() {
            const MAIN_CONTENT2 = document.getElementById('content');
            const newSection = document.createElement('div');
            newSection.classList.add('menu-section');

            const menuItemImage = document.createElement('img');
            menuItemImage.src = this.image;
            menuItemImage.style.width ='500px'

            const menuItemName = document.createElement('h1');
            menuItemName.textContent = this.name;
            
            const menuItemDescription = document.createElement('h3');
            menuItemDescription.textContent = this.description;

            newSection.appendChild(menuItemImage);
            newSection.appendChild(menuItemName);
            newSection.appendChild(menuItemDescription);

            MAIN_CONTENT2.appendChild(newSection);
        }
    }

    return { 
        MenuItem //returned as a property of an object
    }
}


export function menuTabComponents() {

    const { MenuItem } = menuItemCreator();

    const feijoada = new MenuItem('Feijoada', Feijoada, 'delicious brazilian beans!');
    const steak = new MenuItem('Brazilian Style Steak', Steak, 'delicious steak!');
    const coxinha = new MenuItem('Coxinha', Coxinha, 'delicious deep fried dough stuffed with chicken!')


    feijoada.appendSection();
    steak.appendSection();
    coxinha.appendSection();

}