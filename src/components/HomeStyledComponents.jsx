import Styled from '@emotion/styled';

export const HomeWrapper = Styled.div`
    background-color: darkGreen;
    background-size: cover;
    height: 100%;
    overflow: hidden;
`;

export const MainContent = Styled.div`
    color: white;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
        flex-direction: column;
    min-height: 100vh;
    max-width: 75%;
    margin-left: 12.5%;
    -ms-flex-pack: center;
        justify-content: center;
    text-align: center;
`;

export const Greeting = Styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 4.20em;
    font-weight: 720;
`;

export const Hobbies = Styled.div`
    font-size: 1.5em;
    margin: 1.0rem 0;
    font-weight: 100;
`;

export const SocialLinks = Styled.div`
    font-size: 2.2em;
    & > a {
        margin: 0 1rem 1rem 0
    }
`;

export const Avatar = Styled.img`
    margin-left: auto;
    margin-right: auto;
    background-image: url(${props => props.picture});
    width: 250px;
    height: 250px;
    background-size: cover;
    background-position: top center;
    border-radius: 50%;
`