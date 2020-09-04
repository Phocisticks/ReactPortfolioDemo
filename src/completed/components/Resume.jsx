import React from "react";
import Styled from '@emotion/styled';

import { NavBar } from './NavBar';
import { ResumeWrapper, MainContent, HeaderWrapper, Dates, Header, SubHeader, ResumeEntryWrapper, Description, SectionTitle } from './ResumeStyledComponents';

const resumeObject = {
    education: [
        { header: 'University of Oklahoma', subHeader: 'Bachelors of Science in Computer Science', dates: '2013-2017', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl est, hendrerit et sagittis ac, elementum eu tellus. Quisque elementum mauris non lacus consequat, tincidunt maximus lacus tristique.' },
    ],
    work: [
        { header: 'University of Oklahoma', subHeader: 'Teachers Assistant', dates: '2016-2017', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl est, hendrerit et sagittis ac, elementum eu tellus. Quisque elementum mauris non lacus consequat, tincidunt maximus lacus tristique.' },
        { header: 'Paycom', subHeader: 'Intern', dates: 'May 2016 - Aug 2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl est, hendrerit et sagittis ac, elementum eu tellus. Quisque elementum mauris non lacus consequat, tincidunt maximus lacus tristique.' },
        { header: 'Paycom', subHeader: 'Intern Again', dates: 'May 2017 - Aug 2017', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl est, hendrerit et sagittis ac, elementum eu tellus. Quisque elementum mauris non lacus consequat, tincidunt maximus lacus tristique.' },
        { header: 'Paycom', subHeader: 'Software Developer - Research', dates: '2018 - 2019', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl est, hendrerit et sagittis ac, elementum eu tellus. Quisque elementum mauris non lacus consequat, tincidunt maximus lacus tristique.' },
        { header: 'Paycom', subHeader: 'Software Development Team Lead - UI', dates: '2020 - Present', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl est, hendrerit et sagittis ac, elementum eu tellus. Quisque elementum mauris non lacus consequat, tincidunt maximus lacus tristique.' },
    ]
};

const ResumeEntry = ({ header = '', subHeader = '', dates = '', description = '' }) => (
    <ResumeEntryWrapper>
        <HeaderWrapper>
            <Header>{header}</Header>
            <Dates>{dates}</Dates>
        </HeaderWrapper>
        <SubHeader>{subHeader}</SubHeader>
        <Description>{description}</Description>
    </ResumeEntryWrapper>
);

const resumeEntryBuilder = (entries) => (
    entries.map(entry =>
        <ResumeEntry header={entry.header} subHeader={entry.subHeader} dates={entry.dates} description={entry.description} />
    )
)



export const Resume = () => (
    <ResumeWrapper>
        <NavBar />
        <MainContent>
            <SectionTitle>EDUCATION</SectionTitle>
            {resumeEntryBuilder(resumeObject.education)}
            <SectionTitle>WORK</SectionTitle>
            {resumeEntryBuilder(resumeObject.work)}
        </MainContent>
    </ResumeWrapper>
);