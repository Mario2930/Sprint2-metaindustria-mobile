import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import { Sala } from './src/types/Sala';
import { salasIniciais } from './src/data/mockSalas';
import SalaCard from './src/components/SalaCard';

export default function App() {
  const [salas, setSalas] = useState<Sala[]>(salasIniciais);
  const [telaAtual, setTelaAtual] = useState<'lista' | 'cadastro' | 'detalhe'>('lista');

  const renderizarTela = () => {
    if (telaAtual === 'lista') {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Monitoramento de Salas</Text>
          <FlatList
            data={salas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SalaCard sala={item} />}
            contentContainerStyle={styles.lista}
          />
        </View>
      );
    }
    return <Text style={{padding: 20}}>Tela em construção...</Text>;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {renderizarTela()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { flex: 1 },
  header: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    padding: 20, 
    backgroundColor: '#fff', 
    elevation: 3 
  },
  lista: { padding: 15 }
});