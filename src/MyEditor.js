import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import {htmlStr} from './html-str';
import './App.css';

class MyEditor extends Component {
    render() {
        return (
            <div className="MyEditor">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ BalloonEditor }
                    data={htmlStr}
                    config={{
                        toolbar: {
                            items: ['heading', '|', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'link']
                        }
                    }}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default MyEditor;