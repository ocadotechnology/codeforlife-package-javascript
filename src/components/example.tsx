// This is an example component to demonstrate.
// TODO: delete this.

import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => (
    <div>Hey {name}, say hello to TypeScript.</div>
);

export default SayHello;