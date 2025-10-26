import { ActivityLevel } from '../types';

/**
 * Calcula a meta diária de água baseada em peso e nível de atividade
 * Fórmula: peso (kg) * 35ml + ajuste por atividade
 */
export const calculateDailyGoal = (weightKg: number, activityLevel: ActivityLevel): number => {
  const baseAmount = weightKg * 35; // ml por kg

  const activityMultipliers: Record<ActivityLevel, number> = {
    sedentary: 1.0,
    light: 1.1,
    moderate: 1.2,
    active: 1.3,
    very_active: 1.4,
  };

  const multiplier = activityMultipliers[activityLevel];
  return Math.round(baseAmount * multiplier);
};

/**
 * Calcula a porcentagem de meta atingida
 */
export const calculatePercentage = (current: number, goal: number): number => {
  if (goal === 0) return 0;
  return Math.round((current / goal) * 100);
};

/**
 * Formata mililitros para exibição
 * < 1000ml: "500ml"
 * >= 1000ml: "1.5L"
 */
export const formatWaterAmount = (ml: number): string => {
  if (ml < 1000) {
    return `${ml}ml`;
  }
  const liters = (ml / 1000).toFixed(1);
  return `${liters}L`;
};

/**
 * Converte litros para mililitros
 */
export const litersToMl = (liters: number): number => {
  return Math.round(liters * 1000);
};

/**
 * Converte mililitros para litros
 */
export const mlToLiters = (ml: number): number => {
  return ml / 1000;
};

/**
 * Calcula quantos copos faltam para a meta
 */
export const calculateCupsRemaining = (current: number, goal: number, cupSize: number): number => {
  const remaining = Math.max(0, goal - current);
  return Math.ceil(remaining / cupSize);
};

/**
 * Obtém mensagem motivacional baseada na porcentagem
 */
export const getMotivationalMessage = (percentage: number): string => {
  if (percentage === 0) {
    return '🌊 Comece seu dia hidratado!';
  }
  if (percentage < 25) {
    return '💧 Bom começo! Continue assim!';
  }
  if (percentage < 50) {
    return '🚰 Você está no caminho certo!';
  }
  if (percentage < 75) {
    return '💪 Mais da metade! Quase lá!';
  }
  if (percentage < 100) {
    return '🏆 Falta pouco para a meta!';
  }
  if (percentage === 100) {
    return '🎉 Meta atingida! Parabéns!';
  }
  return '⭐ Incrível! Você superou a meta!';
};

/**
 * Valida se uma quantidade de água é válida
 */
export const isValidWaterAmount = (amount: number): boolean => {
  return amount > 0 && amount <= 5000; // Máximo 5L de uma vez
};
