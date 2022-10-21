import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('groups');
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoHome}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
