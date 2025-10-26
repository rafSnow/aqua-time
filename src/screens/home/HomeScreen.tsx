import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme';
import { useAppSelector } from '../../hooks';
import { formatWaterAmount, calculatePercentage, getMotivationalMessage } from '../../utils';

const HomeScreen: React.FC = () => {
  const { totalToday, dailyGoal } = useAppSelector(state => state.water);
  const percentage = calculatePercentage(totalToday, dailyGoal);
  const message = getMotivationalMessage(percentage);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.greeting}>Olá! 👋</Text>
        <Text style={styles.title}>Como está sua hidratação hoje?</Text>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <Text style={styles.motivationalMessage}>{message}</Text>
          
          <View style={styles.progressCircle}>
            <Text style={styles.progressAmount}>{formatWaterAmount(totalToday)}</Text>
            <Text style={styles.progressGoal}>de {formatWaterAmount(dailyGoal)}</Text>
            <Text style={styles.progressPercentage}>{percentage}%</Text>
          </View>

          <View style={styles.progressBar}>
            <View style={[styles.progressBarFill, { width: `${Math.min(percentage, 100)}%` }]} />
          </View>
        </View>

        {/* Quick Add Buttons */}
        <View style={styles.quickAddSection}>
          <Text style={styles.sectionTitle}>Adicionar Água</Text>
          <View style={styles.quickAddGrid}>
            {[250, 500, 750, 1000].map(amount => (
              <View key={amount} style={styles.quickAddButton}>
                <Text style={styles.quickAddIcon}>💧</Text>
                <Text style={styles.quickAddText}>{amount}ml</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Today's History */}
        <View style={styles.historySection}>
          <Text style={styles.sectionTitle}>Histórico de Hoje</Text>
          <Text style={styles.emptyState}>Nenhum registro ainda</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.lg,
  },
  greeting: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.text.secondary,
  },
  title: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xl,
  },
  progressCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    marginBottom: theme.spacing.lg,
    ...theme.shadows.md,
  },
  motivationalMessage: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
    fontWeight: theme.typography.fontWeight.semiBold,
  },
  progressCircle: {
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  progressAmount: {
    fontSize: 48,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  },
  progressGoal: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
  },
  progressPercentage: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.colors.primary,
    marginTop: theme.spacing.sm,
  },
  progressBar: {
    height: 8,
    backgroundColor: theme.colors.water.empty,
    borderRadius: theme.borderRadius.round,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.round,
  },
  quickAddSection: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  quickAddGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  quickAddButton: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    ...theme.shadows.sm,
  },
  quickAddIcon: {
    fontSize: 32,
    marginBottom: theme.spacing.xs,
  },
  quickAddText: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.colors.primary,
  },
  historySection: {
    marginBottom: theme.spacing.lg,
  },
  emptyState: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.xl,
    textAlign: 'center',
    color: theme.colors.text.secondary,
    ...theme.shadows.sm,
  },
});

export default HomeScreen;
