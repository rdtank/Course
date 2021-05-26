import {Container, Header, Icon, Input, Item} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Banner from '../../Components/Banner';
import CategoryFilter from './CategoryFilter';

import ProductList from './ProductList';
import SearchedProducts from './SearchedProducts';

const {height} = Dimensions.get('window');

const data = require('../../Assets/data/products.json');
const productCategories = require('../../Assets/data/categories.json');

const ProductContainer = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    setCategories(productCategories);
    setProductsCtg(data);
    setActive(-1);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
      setCategories([]);
      setActive();
      setInitialState([]);
    };
  }, []);

  //Product Methods
  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  //Category Methods

  const changeCtg = (ctg) => {
    {
      ctg === 'all'
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(products.filter((i) => i.category.$oid === ctg)),
            setActive(true),
          ];
    }
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus ? <Icon name="ios-close" onPress={onBlur} /> : null}
        </Item>
      </Header>

      {focus ? (
        <SearchedProducts
          navigation={navigation}
          productsFiltered={productsFiltered}
        />
      ) : (
        <ScrollView>
          <View>
            <View>
              <Banner />
            </View>
            <View>
              <CategoryFilter
                categories={categories}
                categoryFilter={changeCtg}
                productCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length > 0 ? (
              <View style={styles.listContainer}>
                {productsCtg.map((item) => {
                  return (
                    <ProductList
                      navigation={navigation}
                      key={item._id.$oid}
                      item={item}
                    />
                  );
                })}
              </View>
            ) : (
              <View style={[styles.center, {height: height / 2}]}>
                <Text>No Products Found!</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
