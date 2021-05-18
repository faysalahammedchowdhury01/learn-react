import Emoji from './Emoji';

export default class Text extends Emoji {
  constructor(props) {
    super(props);
  }

  render() {
    const text = 'I am Javascript Programming Language';
    return this.addEmoji(text, '❤️');
  }
}
