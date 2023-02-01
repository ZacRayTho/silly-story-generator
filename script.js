const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];

const insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];

const insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // look for where ever "fahrenheit" is and grab the digits that come before it with Regular Expressions,
    // then convert the string to a number with "Number()"
    // then do the formula to convert it to centigrade and round it
    let weight = `${Math.round((Number(newStory.match(/\d+(?= fahrenheit)/)) - 32) * 5 / 9)} centigrade`;
    let temp = `${Math.round(Number(newStory.match(/\d+(?= pounds)/)) / 14)} stone`;
 
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        // const weight = `${Math.round(300 * 0.0714286)} stone`;
        // const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;

        //Didn't have time to figure out a active search for different fahrenheit degrees.
        newStory = newStory.replaceAll('94 fahrenheit', weight);
        newStory = newStory.replaceAll('300 pounds', temp);
    }

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
