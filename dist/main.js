"use strict";
const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
];
randomize.addEventListener('click', result);
function result() {
    const newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    const replaceX = newStory.replaceAll(":insertx:", xItem);
    const replaceY = replaceX.replace(":inserty:", yItem);
    let replaceZ = replaceY.replace(":insertz:", zItem);
    if (customName.value !== '') {
        const name = customName.value;
        replaceZ = replaceZ.replace("Bob", name);
    }
    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300 * 0.071429)} stone`;
        const temperature = `${Math.round((94 - 32) / 1.8)} centigrade`;
        replaceZ = replaceZ.replace("94 fahrenheit", temperature);
        replaceZ = replaceZ.replace("300 pounds", weight);
    }
    story.textContent = replaceZ;
    story.style.visibility = 'visible';
}
