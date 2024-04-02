import React from "react";
import { BuilderComponent, Builder, builder } from "@builder.io/react";

const Hero: React.FC<React.AnchorHTMLAttributes<any>> = ({
    href,
    children,
    ...props
}) => {
    return (
        <>
            <h1 style={{ color: props.color }}>{props.title}</h1>
        </>
    )
}

export default Hero;

