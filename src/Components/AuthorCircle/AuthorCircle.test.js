import React from 'react';
import ReactDOM from 'react-dom';
import AuthorCircle from './AutorCircle';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorCircle />, div);
    ReactDOM.unmountComponentAtNode(div);
});
