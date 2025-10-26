import { format, parseISO, startOfDay, endOfDay, isToday, isYesterday } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Converte Date para ISO string (para salvar no Redux/Firestore)
 */
export const toISOString = (date: Date = new Date()): string => {
  return date.toISOString();
};

/**
 * Converte ISO string para Date (para exibição)
 */
export const fromISOString = (isoString: string): Date => {
  return parseISO(isoString);
};

/**
 * Formata data para exibição
 */
export const formatDate = (date: Date | string, formatStr: string = 'dd/MM/yyyy'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr, { locale: ptBR });
};

/**
 * Formata hora para exibição
 */
export const formatTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'HH:mm', { locale: ptBR });
};

/**
 * Formata data de forma relativa (Hoje, Ontem, etc)
 */
export const formatRelativeDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;

  if (isToday(dateObj)) {
    return 'Hoje';
  }
  if (isYesterday(dateObj)) {
    return 'Ontem';
  }
  return formatDate(dateObj, 'dd/MM/yyyy');
};

/**
 * Obtém data no formato YYYY-MM-DD
 */
export const getDateKey = (date: Date = new Date()): string => {
  return format(date, 'yyyy-MM-dd');
};

/**
 * Obtém início do dia
 */
export const getStartOfDay = (date: Date = new Date()): Date => {
  return startOfDay(date);
};

/**
 * Obtém fim do dia
 */
export const getEndOfDay = (date: Date = new Date()): Date => {
  return endOfDay(date);
};

/**
 * Verifica se data é hoje
 */
export const isDateToday = (date: Date | string): boolean => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return isToday(dateObj);
};
