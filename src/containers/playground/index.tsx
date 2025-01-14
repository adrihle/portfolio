'use client'
import { useMemo } from 'react';
import { IntersectionProvider, useIntersection } from "@adrihfly/intersection-hook";
import { ProviderDate } from '@/providers';
import styles from './style.module.scss';

const SECTIONS = {
  1: {
    label: 'section 1',
    from: '2015-02-14',
    to: '2016-06-16',
  },
  2: {
    label: 'section 2',
    from: '2016-06-16',
    to: '2017-08-03',
  },
  3: {
    label: 'section 3',
    from: '2017-08-03',
    to: '2019-03-05',
  },
  4: {
    label: 'section 4',
    from: '2019-03-05',
    to: '2020-04-27',
  },
  5: {
    label: 'section 5',
    from: '2020-04-27',
    to: '2022-07-12',
  },
  6: {
    label: 'section 6',
    from: '2022-08-18',
    to: '',
  },
};

const Header = () => {
  return (
    <div className={styles.header}>
    </div>
  );
};

const getOlderSection = () => {
  const values = Object.values(SECTIONS);
  return values.reduce((acc, section) => {
    return ProviderDate.isBefore(acc.from, section.from) ? acc : section;
  }, values[0]);
}

const useTimeline = () => {
  const { activeSection } = useIntersection();
  const { from, to } = SECTIONS[activeSection as unknown as keyof typeof SECTIONS || 1];

  const timelinePercentage = useMemo(() => {
    const total = ProviderDate.diffDaysToNow(SECTIONS[1].from);
    const fromBegining = getOlderSection().from;

    const currentSectionDuration = ProviderDate.diffDays({ from: from, to: to || new Date() });
    const daysFromBegining = ProviderDate.diffDays({ from: fromBegining, to: to || new Date() });

    const result = ((total - (daysFromBegining - currentSectionDuration)) / total) * 100;
    return result;
  }, [from, to]);

  return {
    timelinePercentage: activeSection ? timelinePercentage : 0,
    yearFrom: from.split('-')[0],
  };
};

const Dates = () => {
  const { timelinePercentage, yearFrom } = useTimeline();
  return (
    <div className={styles.dates} style={{ width: `${timelinePercentage}%` }}>
      <div>Today</div>
      <div>{yearFrom}</div>
    </div>
  );
};

const Timeline = () => {
  const { timelinePercentage } = useTimeline();
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        <div className={styles.fillTimeline} style={{ width: `${timelinePercentage}%` }} />
      </div>
    </div>
  );
};

const Sections = () => {
  const { register } = useIntersection();
  return (
    <>
      {Object.entries(SECTIONS).reverse().map(([id, { label }]) => {
        return <div key={id} ref={register({ id, label })} className={styles.section}>{label}</div>
      })}
    </>
  );
};

const Playground = () => {
  return (
    <IntersectionProvider config={{ threshold: 0.7, scrollBehavior: 'smooth' }}>
      <Header />
      <Dates />
      <Timeline />
      <Sections />
    </IntersectionProvider>
  );
};

export default Playground;
