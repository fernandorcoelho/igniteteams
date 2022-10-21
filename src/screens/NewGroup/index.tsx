import React from 'react';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { createGroup } from '@storage/group/createGroup';

import * as S from './styles';

export function NewGroup() {
  const [group, setGroup] = React.useState('');
  const navigation = useNavigation();

  async function handleNew() {
    try {
      await createGroup(group);
      navigation.navigate('players', { group });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </S.Content>
    </S.Container>
  );
}
