/*global it, expect */

function replaceTexts(newStory, customName, xItem, yItem, zItem) {
  const replaceX = newStory.replaceAll(":insertx:", xItem);
  const replaceY = replaceX.replace(":inserty:", yItem);
  let replaceZ = replaceY.replace(":insertz:", zItem)

  if(customName !== '') {
    replaceZ = replaceZ.replace("Bob", customName)
  }

  return replaceZ;
}

const story =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const inputName = "test";
const x = "Willy the Goblin";
const y = "the soup kitchen";
const z = "spontaneously combusted";

it('引数の値で対応する文字列を置換できること', () => {
  expect(replaceTexts(story, inputName, x, y, z)).toBe("It was 94 fahrenheit outside, so Willy the Goblin went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then spontaneously combusted. test saw the whole thing, but was not surprised — Willy the Goblin weighs 300 pounds, and it was a hot day.");
});