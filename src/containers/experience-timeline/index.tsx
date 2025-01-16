'use client'
import { useMemo } from 'react';
import { IntersectionProvider, useIntersection } from "@adrihfly/intersection-hook";
import { ProviderDate } from '@/providers';
import styles from './style.module.scss';
import { ComponentProps } from '@/interfaces';
import { Card, Icon, Text } from '@/components';

type Experience = {
  company: string;
  position: string;
  logopath: string;
  from: string;
  to: string | '-';
  description: string;
  location: string;
  stack: string[];
};

type ExperienceTimelineProps = {
  experiences: Record<string, Experience>;
};

const getOlderSection = ({ experiences }: ExperienceTimelineProps) => {
  const values = Object.values(experiences);
  return values.reduce((acc, section) => {
    return ProviderDate.isBefore(acc.from, section.from) ? acc : section;
  }, values[0]);
};

const useTimeline = ({ experiences }: ExperienceTimelineProps) => {
  const { activeSection } = useIntersection();
  const { from, to } = experiences[activeSection ?? Object.keys(experiences)[0]];

  const timelinePercentage = useMemo(() => {
    const firstExperience = getOlderSection({ experiences });
    const total = ProviderDate.diffDaysToNow(firstExperience.from);

    const currentSectionDuration = ProviderDate.diffDays({ from: from, to: to === '-' ? new Date() : to });
    const daysFromBegining = ProviderDate.diffDays({ from: firstExperience.from, to: to === '-' ? new Date() : to });

    const result = ((total - (daysFromBegining - currentSectionDuration)) / total) * 100;
    return result;
  }, [from, to, experiences]);

  return {
    timelinePercentage: activeSection ? timelinePercentage : 0,
    yearFrom: from.split('-')[0],
  };
};

const Timeline = ({ experiences }: ExperienceTimelineProps) => {
  const { timelinePercentage, yearFrom } = useTimeline({ experiences });
  return (
    <div className={styles.timeline} style={{ ...(!timelinePercentage && { height: 0, padding: 0 }) }}>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${timelinePercentage}%` }} />
      </div>
      <div className={styles.date} style={{ width: `${timelinePercentage}%` }}>
        <div>Today</div>
        <div>{yearFrom}</div>
      </div>
    </div>
  );
};

const Section = ({ company, id, position, ...props }: Experience & ComponentProps & { id: string }) => {
  const { register } = useIntersection();
  return (
    <Card
      ref={register({ id, label: company })}
      className={styles.section}
      {...props}
    >
      <div className={styles.header}>
        <Icon src='npm' size={100} />
        <div>
          <Text>{company}</Text>
          <Text>{position}</Text>
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
    </Card>
  );
};

const Sections = ({ experiences }: { experiences: Record<string, Experience> }) => {
  const sortedExperiences = Object.entries(experiences).sort(([, a], [, b]) => ProviderDate.isBefore(a.from, b.from) ? 1 : 0);
  return (
    <>
      {sortedExperiences.map(([id, experience]) => {
        return <Section key={id} {...experience} id={id} />
      })}
    </>
  );
};

const ExperienceTimeline = ({ experiences }: { experiences: Record<string, Experience> }) => {
  return (
    <IntersectionProvider config={{ threshold: 0.7, scrollBehavior: 'smooth' }}>
      <Timeline {...{ experiences }} />
      <Sections {...{ experiences }} />
    </IntersectionProvider>
  );
};

export { ExperienceTimeline };
export type { Experience };
