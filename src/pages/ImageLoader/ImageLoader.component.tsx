import { Button } from "@mui/material";
import React  from "react";

type ImageLoaderProps = {
    title: string,
    description: string
}

const ImageLoader = ({ title, description }: ImageLoaderProps) => {
    return (
        <>
            <h2>{ title }</h2>
            <p>{ description }</p>
            <Button variant='contained'>Cargar imagen</Button>
        </>
    );
};

export default ImageLoader;