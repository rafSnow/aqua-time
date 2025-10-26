// User Types
export interface User {
  id: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  createdAt: string; // ISO string
  lastLoginAt: string; // ISO string
}

// Water Intake Types
export interface WaterIntake {
  id: string;
  userId: string;
  amount: number; // in ml
  timestamp: string; // ISO string
  synced: boolean;
  createdAt: string; // ISO string
}

// User Profile/Config
export interface UserProfile {
  id: string;
  userId: string;
  dailyGoal: number; // in ml
  weight: number; // in kg
  activityLevel: ActivityLevel;
  reminderEnabled: boolean;
  reminderInterval: number; // in minutes
  reminderStartTime: string; // "08:00"
  reminderEndTime: string; // "22:00"
  cupSizes: number[]; // [250, 500, 750, 1000]
  theme: 'light' | 'dark' | 'auto';
  updatedAt: string; // ISO string
}

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';

// Stats Types
export interface DailyStats {
  date: string; // YYYY-MM-DD
  totalAmount: number;
  goal: number;
  percentage: number;
  intakesCount: number;
  firstIntake: string | null; // ISO string
  lastIntake: string | null; // ISO string
}

export interface WeeklyStats {
  startDate: string;
  endDate: string;
  days: DailyStats[];
  averageDaily: number;
  totalWeek: number;
  goalAchievedDays: number;
}

export interface MonthlyStats {
  month: string; // YYYY-MM
  weeks: WeeklyStats[];
  averageDaily: number;
  totalMonth: number;
  goalAchievedDays: number;
  bestDay: { date: string; amount: number };
  worstDay: { date: string; amount: number };
}

// Achievement Types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  requirement: number;
  unit: AchievementUnit;
  unlockedAt: string | null; // ISO string
  progress: number;
}

export type AchievementCategory = 'streak' | 'total' | 'daily' | 'special';
export type AchievementUnit = 'days' | 'liters' | 'intakes' | 'goals';

// Reminder Types
export interface Reminder {
  id: string;
  userId: string;
  enabled: boolean;
  time: string; // "HH:mm"
  days: number[]; // [0-6] Sunday to Saturday
  sound: string;
  vibrate: boolean;
}

// Navigation Types
export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Onboarding: undefined;
  Main: undefined;
  Home: undefined;
  Stats: undefined;
  Achievements: undefined;
  Profile: undefined;
};
