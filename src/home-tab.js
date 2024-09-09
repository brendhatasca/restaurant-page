import HomePic from './brazilian-food.jpg'

export function homeTabComponents() {

    const MAIN_CONTENT = document.getElementById('content');

    const heroImage = document.createElement('img');
    heroImage.style.width = "400px"
    heroImage.src = HomePic;

    const restaurantHeader = document.createElement('h1');
    restaurantHeader.textContent = 'Puro Amor';  

    const restaurantInfo = document.createElement('h3');
    restaurantInfo.textContent = `Discover the rich flavors of Brazil right in the heart of Toronto at Café Tropical, a cherished gem that's been delighting locals and visitors alike for over 20 years. This family-owned restaurant offers an authentic Brazilian dining experience with a warm, inviting atmosphere. From sizzling churrasco and mouthwatering feijoada to vibrant caipirinhas and decadent desserts, each dish is crafted with love and tradition.`;

    MAIN_CONTENT.appendChild(heroImage);
    MAIN_CONTENT.appendChild(restaurantHeader);
    MAIN_CONTENT.appendChild(restaurantInfo);
}
