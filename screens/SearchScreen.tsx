import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5002'; 

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchPodcasts = async (query: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/podcasts/search`, {
        params: { query },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error searching podcasts:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Podcasts</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={() => searchPodcasts(query)}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.podcastCard}>
            <Text style={styles.podcastTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { padding: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 16 },
  podcastCard: { padding: 16, backgroundColor: '#f9f9f9', marginBottom: 8, borderRadius: 8 },
  podcastTitle: { fontSize: 18, fontWeight: 'bold' },
});

export default SearchScreen;
