import { Picker } from 'emoji-mart';

const EmojiPicker = ({ onSelect }) => {
  return <Picker onSelect={onSelect} />;
};

export default EmojiPicker;