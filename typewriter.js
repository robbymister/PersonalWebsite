/*
 * My own take on the typewriter effect.
 * Loosely inspired by the ones at https://css-tricks.com/snippets/css/typewriter-effect/
 */
const fullTextDelay = 3500;
/** The time in ms for which no text is shown. */
const emptyTextDelay = 500;
/** The delay in ms before each character gets deleted. */
const characterDeleteDelay = 40;

export class Typewriter {
  loopCount = 0;
  isDeleting = true;

  /**
   * @param {HTMLElement} element
   * @param {string[]} strings
   */
  constructor(element, strings) {
    this.element = element;
    this.strings = [element.innerText, ...strings];
    this.letterCount = strings[0].length;
    setTimeout(() => this.tick(), fullTextDelay);
  }

  tick() {
    const currentString = this.strings[this.loopCount % this.strings.length];
    this.letterCount += this.isDeleting ? -1 : 1;

    const displayText = currentString.substring(0, this.letterCount);
    this.element.innerText = displayText;

    let nextLetterDelay;

    if (!this.isDeleting && this.letterCount === currentString.length) {
      nextLetterDelay = fullTextDelay;
      this.isDeleting = true;
    } else if (this.isDeleting && this.letterCount === 0) {
      nextLetterDelay = emptyTextDelay;
      this.isDeleting = false;
      this.loopCount++;
    } else if (this.isDeleting) {
      nextLetterDelay = characterDeleteDelay;
    } else {
      nextLetterDelay = 50 + Math.random() * 100;
    }

    setTimeout(() => this.tick(), nextLetterDelay);
  }
}
