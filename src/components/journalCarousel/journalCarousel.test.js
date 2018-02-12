import React from 'react';
import ReactDOM from 'react-dom';
import JournalCarousel from './journalCarousel';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JournalCarousel />, div);
    ReactDOM.unmountComponentAtNode(div);
});
