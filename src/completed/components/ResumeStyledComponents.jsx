import Styled from '@emotion/styled';

export const ResumeWrapper = Styled.div`
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
    max-width: 60%;
    margin-left: 20%;
    -ms-flex-pack: center;
        justify-content: center;
    text-align: center;
`;

export const HeaderWrapper = Styled.div`
    display: flex;
    justify-content: space-between;
`

export const Dates = Styled.div`
    line-height: 40px;
    font-weight: 600;
`

export const Header = Styled.div`
    font-size: 2.20em;
    font-weight: 720;    
`;

export const SubHeader = Styled.div`
    font-size: 1.20em;
    font-style: italic;
    padding-bottom: 10px
`;

export const ResumeEntryWrapper = Styled.div`
    padding: 20px;
    text-align: left;
`;

export const Description = Styled.div`

`;

export const SectionTitle = Styled.div`
    font-size: 2.20em;
    font-weight: 720;  
`