/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useMemo } from 'react';
import Image from 'next/image';
import { IntersectionProvider, useIntersection } from "@adrihfly/intersection-hook";
import { ProviderDate } from '@/providers/date';
import { ComponentProps } from '@/interfaces';
import { Card, Icon, List, Text } from '@/components';
import { TECH_STACK } from '@/common';
import styles from './style.module.scss';
import Experience from '@/app/[locale]/experience/page';
import React from 'react';

type Experience = {
  company: string;
  position: string;
  logo: {
    path: string;
    height: number;
    width: number;
  };
  from: string;
  to: string | '-';
  description: string;
  location: string;
  stack: (keyof typeof TECH_STACK)[];
  background?: string;
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

const StackList = React.memo(function render({ stack }: { stack: Experience['stack'] }) {
  return (
    <List
      list={stack}
      renderElement={(icon) => <Icon.Brand icon={icon} className={styles.tech} />}
      className={styles.stack}
      delay={0.02}
    />
  );
});

const Section = React.memo(function render({ company, id, position, from, to, description, stack, location, logo, ...props }: Experience & ComponentProps & { id: string }) {
  const { register } = useIntersection();
  return (
    <Card
      ref={register({ id, label: company })}
      className={styles.section}
      {...props}
    >
      <div className={styles.flexGap}>
        <Image src={logo.path} width={logo.width} height={logo.height} alt={company} />
        <div style={{ width: '100%' }}>
          <div className={styles.title}>
            <Text size='medium'>{company}</Text>
            <Text size='small'>
              {to !== '-' ? ProviderDate.format({ date: to, format: 'MMM yy' }) : 'Present'}
              -
              {ProviderDate.format({ date: from, format: 'MMM yy' })}
            </Text>
          </div>
          <Text bold size='medium' color='secondary'>{position}</Text>
        </div>
      </div>
      <div className={styles.description}>
        <Text.Expandable italic size='medium' text={description} maxLength={300} bionic />
      </div>
      <div className={styles.flexGap}>
        <Icon src='location' />
        <Text size='small'>{location}</Text>
      </div>
      <StackList stack={stack}/>
    </Card>
  );
});

const Sections = ({ experiences }: { experiences: Record<string, Experience> }) => {
  const sortedExperiences = Object.entries(experiences)
    .sort(([, a], [, b]) => ProviderDate.isBefore(a.from, b.from) ? 1 : 0)
  return (
    <>
      {sortedExperiences.map(([id, experience], i) => {
        return (
          <Section {...experience} id={id} key={id} style={{ animationDelay: `${i * 0.3}s`, background: experience.background }} />
        )
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
