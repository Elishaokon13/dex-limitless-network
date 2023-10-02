/* eslint-disable import/no-default-export */
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const LiFiWidgetNext = dynamic(
  () => import('../components/Widget').then((module) => module.Widget) as any,
  {
    ssr: false,
  },
);

const Home: NextPage = () => {
  return <LiFiWidgetNext />;
};

export default Home;
