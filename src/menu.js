import kebabImage from "./durumKebab.jpg"
import pinchoImage from "./pinchoCarne.jpg"
import falafelImage from "./falafelCombo.jpg"



export const menu = () => {
    const content = document.querySelector('#content')
    content.innerHTML = `
    <h2>Menu</h2>
        <div class="dish">
            <img class="dish-foto pic" src="durumKebab.jpg" alt="">
            <div class="dish-info">
                <h3>Durum Kebab</h3>
                <p>Enjoy a traditional dürüm kebab, filled with chicken, beef or both, accompanied with suculent vegetables at personal choice and tasteful sauce.</p>
                <h4>4€</h4>
            </div>
        </div>
        <div class="dish">
            <img class="dish-foto pic1" src="pinchoCarne.jpg" alt="">
            <div class="dish-info">
                <h3>Pinchos</h3>
                <p>A delicious skewer prepared with seasoned meat and freshly colected vegetables. Also a selection of sauces at your disposal (Please ask the waiter).</p>
                <h4>5€</h4>
            </div>
        </div>
        <div class="dish">
            <img class="dish-foto pic2" src="falafelCombo.jpg" alt="">
            <div class="dish-info">
                <h3>Falafel Combo</h3>
                <p>The star dish of 'Cal Magrebí'. Combination of our most fresh vegetables (depending on season) and a delicious homemade falafel accompanied by our secret special sauce.</p>
                <h4>7€</h4>
            </div>
        </div>
        <div class="dish-info">
            <h3>Make It A Menu!</h3>
            <p>Pay 3€ more for each dish to include a small serving of fries and a drink!</p>
        </div>
    `
    const image1 = document.querySelector(".pic");
    const image2 = document.querySelector(".pic1");
    const image3 = document.querySelector(".pic2");
    image1.src = kebabImage;
    image2.src = pinchoImage;
    image3.src = falafelImage;
    
}