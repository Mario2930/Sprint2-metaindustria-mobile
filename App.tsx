import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import { Sala } from './src/types/Sala';
import { salasIniciais } from './src/data/mockSalas';
import SalaCard from './src/components/SalaCard';
import SalaDetalhe from './src/screens/SalaDetalhe';
import SalaCadastro from './src/screens/SalaCadastro';

export default function App() {
  const [salas, setSalas] = useState<Sala[]>(salasIniciais);
  const [telaAtual, setTelaAtual] = useState<'lista' | 'cadastro' | 'detalhe'>('lista');
  const [salaSelecionada, setSalaSelecionada] = useState<Sala | null>(null);

  const abrirDetalhe = (sala: Sala) => {
    setSalaSelecionada(sala);
    setTelaAtual('detalhe');
  };

  const salvarNovaSala = (novaSala: Sala) => {
    setSalas([...salas, novaSala]); // Adiciona o novo registo ao estado local
    setTelaAtual('lista');
  };
  
  const renderizarTela = () => {
    if (telaAtual === 'lista') {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Gestão de Acessos</Text>
            <TouchableOpacity style={styles.botaoNovo} onPress={() => setTelaAtual('cadastro')}>
              <Text style={styles.textoBotaoNovo}>+ Registar</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={salas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SalaCard sala={item} onPress={() => abrirDetalhe(item)} />}
            contentContainerStyle={styles.lista}
          />
        </View>
      );
    }

    if (telaAtual === 'detalhe' && salaSelecionada) {
      return <SalaDetalhe sala={salaSelecionada} voltar={() => setTelaAtual('lista')} />;
    }

    if (telaAtual === 'cadastro') {
      return <SalaCadastro salvar={salvarNovaSala} cancelar={() => setTelaAtual('lista')} />;
    }

    return null;
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
  headerContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#fff', 
    elevation: 3 
  },
  header: { 
    fontSize: 18, 
    fontWeight: 'bold'
  },
  botaoNovo: { 
    backgroundColor: '#4CAF50', 
    paddingHorizontal: 12, 
    paddingVertical: 8, 
    borderRadius: 6 
  },
  textoBotaoNovo: { color: '#fff', 
    fontWeight: 'bold' 
  },
  lista: { padding: 15 }
});