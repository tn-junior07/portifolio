import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { Container, Wrapper, Title, Desc, TimelineSection } from './ExperienceStyle';

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    Possuo experiência em desenvolvimento de software através de projetos desafiadores, onde adquiri habilidades sólidas em programação e resolução de problemas.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#4CE684' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
}

export default Experience;
