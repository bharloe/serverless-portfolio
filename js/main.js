import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
    {
        'title': "Work Example 1",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a velit purus. Nulla at interdum urna. Maecenas placerat quis lorem sed scelerisque. Integer id nisi condimentum, aliquam nibh quis, pretium quam. Etiam volutpat dui id porttitor elementum. Proin dolor eros, ornare ac massa nec, auctor finibus tortor. Mauris pellentesque tempus lorem et malesuada. ",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example 2",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a velit purus. Nulla at interdum urna. Maecenas placerat quis lorem sed scelerisque. Integer id nisi condimentum, aliquam nibh quis, pretium quam. Etiam volutpat dui id porttitor elementum. Proin dolor eros, ornare ac massa nec, auctor finibus tortor. Mauris pellentesque tempus lorem et malesuada. ",
        'image': {
            'desc': "example screenshot of a project involving chemistry",
            'src': "images/example2.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example 3",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a velit purus. Nulla at interdum urna. Maecenas placerat quis lorem sed scelerisque. Integer id nisi condimentum, aliquam nibh quis, pretium quam. Etiam volutpat dui id porttitor elementum. Proin dolor eros, ornare ac massa nec, auctor finibus tortor. Mauris pellentesque tempus lorem et malesuada. ",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': ""
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));