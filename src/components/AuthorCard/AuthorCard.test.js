import React from 'react';
import ReactDOM from 'react-dom';
import AuthorCard from './AuthorCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});
