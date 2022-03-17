import Card from "@material-tailwind/react/Card";
import coracaozinhoLaranja from "../../assets/imgs/coracaozinhoLaranja.svg"
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import React from 'react';

export default function GenericCard() {
    return (
        <Card id="root">

            <CardBody style="flex w-64">
            {/* <CardImage
                src="https://picsum.photos/seed/2/200/200"
                alt="Card Image"
                class="max-w-16 max-h-16 rounded-full"
            /> */}
                    <span className="in-love-we-trust">
                    <img className="coracaozinho-laranja" src={ coracaozinhoLaranja } />
                     SOBRE NÓS
                    </span>
                <H6 color="gray">ELES ESTÃO PRECISANDO DA SUA AJUDA!</H6>
                <Paragraph color="gray">
                    Você pode escolher a ONG de sua preferência, saber a necessidade, e a partir de então há o intermédio dessas ONG’s que estão dispostas a receber e ajudar, e à você, doador, que irá contribuir conosco.
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="orange" size="lg" ripple="light">
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
}