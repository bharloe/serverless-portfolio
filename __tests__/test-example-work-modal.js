import React from 'react';
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWorkModal from '../js/example-work-modal';

configure({ adapter: new Adapter() });

const myExample = {
    'title': "Work Example 1",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a velit purus. Nulla at interdum urna. Maecenas placerat quis lorem sed scelerisque. Integer id nisi condimentum, aliquam nibh quis, pretium quam. Etiam volutpat dui id porttitor elementum. Proin dolor eros, ornare ac massa nec, auctor finibus tortor. Mauris pellentesque tempus lorem et malesuada. ",
    'image': {
        'desc': "example screenshot of a project involving code",
        'src': "images/example1.png",
        'comment': ""
    }
}

describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={myExample} open={false}/>);
    let openComponent = shallow(<ExampleWorkModal example={myExample} open={true}/>)
    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.getElement(0).props.href).toEqual(myExample.href);
    });

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    })
})