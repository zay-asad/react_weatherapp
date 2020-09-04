import React from "react";
import Button from "react-bootstrap/Button";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h1">Weather Search</Popover.Title>
        <Popover.Content>
            Start by searching locations in the following format e.g. <strong>London,GB</strong>
        </Popover.Content>
    </Popover>
);

const Help = () => (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button variant="success">Show me how to use it</Button>
    </OverlayTrigger>
);

// render(<Example />);

export default Help;