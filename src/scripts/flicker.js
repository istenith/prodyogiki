//find the text i want to flicker
const text = document.getElementById("flicker");
console.log(text);

const getDuration = () => {
    //find a random time interval b/w 0 to 0.5 sec
    const randVal = Math.random()*500+1;
    console.log(randVal);
    return randVal;
};

const doFlicker = () => {
    //logic to invert the opacity
    text.classList.toggle('clear');
        
    setTimeout(doFlicker, getDuration());  
};

setTimeout(doFlicker, getDuration());