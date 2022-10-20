import { Loading } from '@components/Loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import theme from '@theme/index';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
