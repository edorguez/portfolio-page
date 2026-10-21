import { profile } from '../data/profile';

export const currentYear = new Date().getFullYear();

/** Whole years since the first role, by calendar-year difference. */
export const yearsExperience = currentYear - profile.careerStartYear;
