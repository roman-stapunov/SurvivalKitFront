import styled from 'styled-components';
import {Card, FormLabel} from "react-bootstrap";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export const CardHeader = styled(Card.Header)`
    color: orange;
    font-weight: bold;
    font-size: 1em;
`;

export const CatCardGroup = styled(CardDeck)`
    padding: 1em 1em;
`;

export const CardCat = styled(Card)`
    width: 15em;
    margin: 1em;
    min-width: 15em;
    max-width: 15em; 
    position: relative
    padding: 1em 1em;
    flex-direction: row;
`;

export const Header = styled.h2`
    padding: 10px 20px;
    text-align: center;
    color: #595d6e;
    font-weight: 500;
    width: 30%;
`;

export const InputFileLabel = styled(FormLabel)`
    background-color: #2196F3;
    border-top-left-radius:10%;
    border-bottom-left-radius:10%;
    color: white;
    padding: 6px;
    height: calc(1.5em + .75rem + 2px);
    font-size: 1rem;
    font-family: Arial;
`;

export const HomeJumbotron = styled(Jumbotron)`
    color: #17a2b8;
    background-position: center center;
    position: fixed;    
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    z-index: -2;
    margin: 0;
    padding: 0;
`;

export const JumbotronBk = styled(Container)`
    position: absolute;
    top: 0;
    z-index: -2;
    width: 100vw;
    opacity: 0.5;
    margin: 0;
    padding: 0
`;

export const blur = `
    webkit-filter: blur(4px);
    filter: blur(4px);
    filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='4')
`;

const styles = {
    Header: Header,
    CardHeader: CardHeader,
    ShopCardGroup: CatCardGroup,
    InputFileLabel: InputFileLabel,
    CardShop: CardCat,
    HomeJumbotron: HomeJumbotron,
    JumbotronBk: JumbotronBk
};

export default styles;