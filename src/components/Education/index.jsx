import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, } from '@mui/lab';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import { Container, Wrapper, Title, Desc, TimelineSection } from './EducationStyle';

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    Aqui estão alguns detalhes sobre minha formação acadêmica.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((edu, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
     
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={edu} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
}

export default Education;
