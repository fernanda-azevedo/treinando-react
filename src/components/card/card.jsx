import Card from "@material-tailwind/react/Card";
import coracaozinhoLaranja from "../../assets/imgs/coracaozinhoLaranja.svg"
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import React from 'react';
import '../../App.css';

export default function GenericCard() {
    return (
        <Card variant="contained" className="max-w-3xl float-right m-right-30 shadow-none">
            <CardBody>
                <span className="in-love-we-trust">
                    <img className="coracaozinho-laranja" alt="" src={ coracaozinhoLaranja } />
                    SOBRE NÓS
                </span>
                <span className="titulo-home">ELES ESTÃO PRECISANDO DA SUA AJUDA!</span>
                <Paragraph color="gray">
                    Você pode escolher a ONG de sua preferência, saber a necessidade, e a partir de então há o intermédio dessas ONG’s que estão dispostas a receber e ajudar, e à você, doador, que irá contribuir conosco.
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="orange" size="lg" ripple="light">
                    Ver campanhas
                </Button>
            </CardFooter>
        </Card>
    );
}