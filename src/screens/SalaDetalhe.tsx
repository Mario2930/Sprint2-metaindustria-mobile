import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Sala } from '../types/Sala';

type Props = {
  sala: Sala;
  voltar: () => void;
};

export default function SalaDetalhe({ sala, voltar }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes da Sala</Text>
      <View style={styles.card}>
        <Text style={styles.label}>ID do Registo:</Text>
        <Text style={styles.valor}>{sala.id}</Text>

        <Text style={styles.label}>Nome da Sala:</Text>
        <Text style={styles.valor}>{sala.nome}</Text>

        <Text style={styles.label}>Nível de Acesso Exigido:</Text>
        <Text style={styles.valor}>{sala.acessoNecessario}</Text>

        <Text style={styles.label}>Trabalhadores com EPI:</Text>
        <Text style={styles.valorEpiCom}>{sala.qtdPessoasComEpi}</Text>

        <Text style={styles.label}>Trabalhadores sem EPI:</Text>
        <Text style={styles.valorEpiSem}>{sala.qtdPessoasSemEpi}</Text>
      </View>
      <TouchableOpacity style={styles.botaoVoltar} onPress={voltar}>
        <Text style={styles.textoBotao}>Voltar para a Lista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 3 },
  label: { fontSize: 14, color: '#666', marginTop: 10 },
  valor: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  valorEpiCom: { fontSize: 18, fontWeight: 'bold', color: '#4CAF50' },
  valorEpiSem: { fontSize: 18, fontWeight: 'bold', color: '#F44336' },
  botaoVoltar: { marginTop: 30, backgroundColor: '#2196F3', padding: 15, borderRadius: 8, alignItems: 'center' },
  textoBotao: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});