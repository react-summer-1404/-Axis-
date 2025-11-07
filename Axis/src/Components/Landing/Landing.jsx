import React from 'react'
import HeroSection from './HeroSection'
import Category from "./Category";
import MainBanner from './MainBanner';
import CoursesSection from './CoursesSection';
import SearchBanner from './SearchBanner';
import TeamSection from './TeamSection';
import Statistics from './Statistics';
import MainSection from './MainSection';
import LearningSection from './LearningSection';
import NewsSection from './NewsSection';


const Landing = () => {
  return (
    <div>
      <HeroSection />
      <Category/>
      <MainBanner/>
      <CoursesSection/>
      <SearchBanner/>
      <TeamSection/>
      <Statistics/>
      <MainSection/>
      <LearningSection/>
      <NewsSection/>
    </div>
  )
}

export default Landing
