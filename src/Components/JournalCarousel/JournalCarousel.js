import React from 'react';
import './JournalCarousel.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import AirplaneImage from "./airplane.jpeg";
import AutomotiveImage from "./automotive.jpeg";
import ElectronicsImage from "./electronics.jpeg";
import ProgrammingImage from "./programming.jpeg";

const items = [
    {
        src: AirplaneImage,
        altText: "Airplane construction site.",
        header: "Aerospace",
        caption: ""
    },
    {
        src: AutomotiveImage,
        altText: "Car's interior.",
        header: "Automotive",
        caption: ""
    },
    {
        src: ElectronicsImage,
        altText: "Electrical Engineer using an oscilloscope.",
        header: "Electronics",
        caption: ""
    },
    {
        src: ProgrammingImage,
        altText: "A programmer's view.",
        header: "Algorithms",
        caption: ""
    }
];

class JournalCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render() {
        const {activeIndex} = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText}/>
                    <CarouselCaption captionText={item.caption} captionHeader={item.header}/>
                </CarouselItem>
            );
        });

        return (
            <div className="row">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
                </Carousel>
            </div>
        );
    }
}

export default JournalCarousel;