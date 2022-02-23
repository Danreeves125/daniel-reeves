const getRandomColor = () => {
    let colourArray = [
        {
            hex: '#0067D2',
            rgba: 'rgba(0, 103, 210, 0.8)'
        },
        {
            hex: '#665CD0',
            rgba: 'rgba(102, 92, 208, 0.8)'
        },
        {
            hex: '#AE48BC',
            rgba: 'rgba(174, 72, 188, 0.8)'
        },
        {
            hex: '#DC309B',
            rgba: 'rgba(220, 48, 155, 0.8)'
        },
        {
            hex: '#F62971',
            rgba: 'rgba(246, 41, 113, 0.8)'
        },
    ];
    
    let randomColor = Math.floor(Math.random() * colourArray.length);

    return colourArray[randomColor];
}

// console.log(getRandomColor())

export default getRandomColor;