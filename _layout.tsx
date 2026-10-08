import { View } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import SettingsButton from '../components/SettingsButton';

function DrawerLayout() {
  const { isDarkMode } = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode ? '#121212' : '#fff',
          },
          headerTintColor: isDarkMode ? '#fff' : '#000',
          drawerStyle: {
            backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
          },
          drawerActiveTintColor: isDarkMode ? '#fff' : '#000',
          drawerInactiveTintColor: isDarkMode ? '#ccc' : '#666',
        }}
      >
        <Drawer.Screen name="index" options={{ drawerLabel: 'Início', title: 'LifeTrack' }} />
        <Drawer.Screen name="tasks" options={{ drawerLabel: 'Tarefas', title: 'Tarefas' }} />
        <Drawer.Screen name="habits" options={{ drawerLabel: 'Hábitos', title: 'Hábitos' }} />
        <Drawer.Screen name="stats" options={{ drawerLabel: 'Estatísticas', title: 'Estatísticas' }} />
        <Drawer.Screen name="profile" options={{ drawerLabel: 'Perfil', title: 'Perfil' }} />
        <Drawer.Screen
          name="settings"
          options={{
            drawerItemStyle: { display: 'none' },
            headerShown: false,
          }}
        />
      </Drawer>
      <SettingsButton />
    </View>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <DrawerLayout />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}