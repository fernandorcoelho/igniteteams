import React from 'react';
import { FlatList } from 'react-native';

import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getAllGroups } from '@storage/group/getAllGroups';

import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = React.useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const data = await getAllGroups();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
