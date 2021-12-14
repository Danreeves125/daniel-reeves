const getRandomColor = () => {
    let colourArray = ['#0067D2', '#665CD0', '#AE48BC', '#DC309B', '#F62971'];
    
    let randomColor = Math.floor(Math.random() * colourArray.length);

    return colourArray[randomColor];
}

export default getRandomColor;