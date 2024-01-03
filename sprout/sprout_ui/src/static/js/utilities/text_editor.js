import '../../css/text-editor.css';
import ReactQuill from 'react-quill';
import Quill from 'quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import QuillEmoji from 'quill-emoji';

Quill.register('modules/emoji', QuillEmoji);


const TextEditor = ({ value, onChange }) => {

    const modules = {
        toolbar: {
        container: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['emoji'],
            ['clean'],
        ],
        },
        clipboard: {
            matchVisual: false,
        }
    };
    
  return (
    <div>
        <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        placeholder="Write here... "
        />
    </div>
  );
};

export default TextEditor;
