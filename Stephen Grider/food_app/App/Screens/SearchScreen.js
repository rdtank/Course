import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ResultsList from '../Components/ResultsList';
import SearchBar from '../Components/SearchBar';
import useResults from '../Hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.screen}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
});
