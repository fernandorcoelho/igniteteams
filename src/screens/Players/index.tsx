import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import * as S from './styles';

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
    </S.Container>
  );
}
