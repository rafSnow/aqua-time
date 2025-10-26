import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme';
import { useAppDispatch } from '../../hooks';
import { setUser } from '../../store/slices/authSlice';

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleMockLogin = () => {
    // Simular login para testar navegação
    dispatch(
      setUser({
        id: '1',
        email: 'teste@aquatime.com',
        displayName: 'Usuário Teste',
        photoURL: null,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      })
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.content}>
        <Text style={styles.logo}>💧</Text>
        <Text style={styles.title}>Bem-vindo ao AquaTime</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <View style={styles.formPlaceholder}>
          <Text style={styles.placeholderText}>
            Tela de Login{'\n'}(Em desenvolvimento)
          </Text>

          <TouchableOpacity style={styles.mockLoginButton} onPress={handleMockLogin}>
            <Text style={styles.mockLoginText}>Entrar (Teste)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  formPlaceholder: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.xl,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    ...theme.shadows.md,
  },
  placeholderText: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  mockLoginButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.md,
    width: '100%',
    alignItems: 'center',
  },
  mockLoginText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.semiBold,
  },
});

export default LoginScreen;
