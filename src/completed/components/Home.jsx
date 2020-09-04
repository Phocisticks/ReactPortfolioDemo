import React from "react";

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { NavBar } from './NavBar';
import { HomeWrapper, MainContent, Greeting, Hobbies, SocialLinks, Avatar} from './HomeStyledComponents';

const funFacts = [
    'React Enthusiast',
    'Budding Board Gamer',
    'Door Dash Premium Member',
    'Fall Guys Champion',
    'Sourdough Non-Starter'
]

const funFactsBuilder = (length = 3) => {
    const facts = funFacts.map(fact => ({ fact, randPos: Math.random() }))
        .sort((a, b) => a.randPos - b.randPos)
        .map(factObject => factObject.fact)
        .slice(0, length)
        .join(' | '); 
    return facts;
}

const SocialLink = (props) => (
    <a target="_blank" rel="noopener noreferrer" href={props.url}>
        {props.children}
    </a>
);

export const Home = () => (
    <HomeWrapper>
        <NavBar />
        <MainContent>
            <Avatar picture='images/mark-color.jpg'></Avatar>
            <Greeting>Sup, I'm Mark!</Greeting>
            <Hobbies>{funFactsBuilder(3)}</Hobbies>
            <SocialLinks>
                <SocialLink url='https://www.instagram.com/phocisticks/'><InstagramIcon style={{ fontSize: 40 }} /></SocialLink>
                <SocialLink url='https://github.com/phocisticks'><GitHubIcon style={{ fontSize: 40 }} /></SocialLink>
                <SocialLink url='https://www.linkedin.com/in/mark-glose'><LinkedInIcon style={{ fontSize: 40 }} /></SocialLink>
            </SocialLinks>
        </MainContent>
    </HomeWrapper>
);