const quotesArray = [
    ' “The Best Way To Get Started Is To Quit Talking And Begin Doing.” <br> – Walt Disney',
    ' "The greatest glory in living lies not in never falling, but in rising every time we fall." <br> - Nelson Mandela',
    ' “The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” <br> – Winston Churchill',
    ' "Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking." <br> - Steve Jobs',
    ' “Don’t Let Yesterday Take Up Too Much Of Today.” <br> – Will Rogers',
    ' “Whether You Think You Can Or Think You Can’t, You’re Right.” <br> – Quote By Henry Ford',
    ' “You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” <br> – Unknown',
    ' "Spread love everywhere you go. Let no one ever come to you without leaving happier." <br> - Mother Teresa',
    ' “It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” <br> – Inspirational Quote By Vince Lombardi',
    ' "The future belongs to those who believe in the beauty of their dreams." <br> - Eleanor Roosevelt',
    ' “People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” <br> – Rob Siltanen',
    ' "Whoever is happy will make others happy too." <br> - Anne Frank',
    ' “Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” <br> – Og Mandino',
    ' "Do not go where the path may lead, go instead where there is no path and leave a trail." <br> - Ralph Waldo Emerson',
    ' “We May Encounter Many Defeats But We Must Not Be Defeated.” <br> – Maya Angelou',
    ' "Tell me and I forget. Teach me and I remember. Involve me and I learn." <br> - Benjamin Franklin',
    ' “Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” <br> – Johann Wolfgang Von Goethe',
    ' “ A setback is a setup for a comeback.” <br> - TD Jakes',
    ' “We Generate Fears While We Sit. We Overcome Them By Action.” <br> – Dr. Henry Link',
    ' "Life is what happens when you\'re busy making other plans." <br> - John Lennon'

]

const button = document.querySelector('button');
button.addEventListener('click', function(e) {
    e.preventDefault();

    let display = document.getElementById('display-div');

    let randomNumber = Math.floor(Math.random() * quotesArray.length);

    setTimeout(() => {
        display.innerHTML = quotesArray[randomNumber];

    }, 500);


})