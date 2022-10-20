import React from 'react';
import { FlatList } from 'react-native';

import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = React.useState<string[]>(['Galera da Rocket']);

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </S.Container>
  );
}
