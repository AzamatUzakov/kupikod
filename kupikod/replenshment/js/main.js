let originalPrices = {};

function changeCurrency(currency) {
    let exchangeRate;

    
    switch (currency) {
        case 'RUB':
            exchangeRate = 1;
            break;
        case 'KZT':
            exchangeRate = 4.80;
            break;
        case 'USD':
            exchangeRate = 0.011;
            break;
        default:
            exchangeRate = 1;
    }

    
let prices = document.getElementsByClassName('price');
for (let i = 0; i < prices.length; i++) {
    let priceText = prices[i].textContent;

    if (!prices[i].classList.contains('converted')) {
        let price = parseFloat(priceText);
        
        originalPrices[i] = price;
        
        prices[i].textContent = (price * exchangeRate).toFixed(0) + ' ' + currency;
        
        prices[i].classList.add('converted');
    } else {
        prices[i].textContent = (originalPrices[i] * exchangeRate).toFixed(0) + ' ' + currency;
    }
}
}

function changeWidth(element) {
    var scale = document.getElementById('scale');
    var itemPosition = element.getBoundingClientRect();
    var scalePosition = scale.getBoundingClientRect();
    
    var newWidth = itemPosition.left - scalePosition.left;
    scale.style.width = newWidth + 'px';
}