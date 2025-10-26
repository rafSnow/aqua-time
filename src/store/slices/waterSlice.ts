import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WaterIntake } from '../../types';

interface WaterState {
  todayIntakes: WaterIntake[];
  totalToday: number;
  dailyGoal: number;
  isLoading: boolean;
}

const initialState: WaterState = {
  todayIntakes: [],
  totalToday: 0,
  dailyGoal: 2000, // Default 2L
  isLoading: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    addIntake: (state, action: PayloadAction<WaterIntake>) => {
      state.todayIntakes.push(action.payload);
      state.totalToday += action.payload.amount;
    },
    removeIntake: (state, action: PayloadAction<string>) => {
      const intake = state.todayIntakes.find(i => i.id === action.payload);
      if (intake) {
        state.totalToday -= intake.amount;
        state.todayIntakes = state.todayIntakes.filter(i => i.id !== action.payload);
      }
    },
    setTodayIntakes: (state, action: PayloadAction<WaterIntake[]>) => {
      state.todayIntakes = action.payload;
      state.totalToday = action.payload.reduce((sum, intake) => sum + intake.amount, 0);
    },
    setDailyGoal: (state, action: PayloadAction<number>) => {
      state.dailyGoal = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetDay: state => {
      state.todayIntakes = [];
      state.totalToday = 0;
    },
  },
});

export const { addIntake, removeIntake, setTodayIntakes, setDailyGoal, setLoading, resetDay } =
  waterSlice.actions;
export default waterSlice.reducer;
