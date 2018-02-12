import React from 'react';
import ReactDOM from 'react-dom';
import JournalFooter from './JournalFooter';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JournalFooter />, div);
    ReactDOM.unmountComponentAtNode(div);
});
