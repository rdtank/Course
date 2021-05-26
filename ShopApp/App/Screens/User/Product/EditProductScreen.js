import React, {useCallback, useEffect, useReducer} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import * as productActions from '../../../Store/Actions/Product';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidate = {
      ...state.inputValidate,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidate) {
      updatedFormIsValid = updatedFormIsValid && updatedValidate[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValues: updatedValues,
      inputValidate: updatedValidate,
    };
  }
  return state;
};

const EditProductScreen = ({route, navigation}) => {
  const prodId = route.params.productId;
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId),
  );
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : '',
      imageUrl: editedProduct ? editedProduct.imageUrl : '',
      description: editedProduct ? editedProduct.description : '',
      price: '',
    },
    inputValidate: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false,
    },
    formIsValid: editedProduct ? true : false,
  });

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong Input!', 'Please check the errors in the form.', [
        {text: 'Okay'},
      ]);
      return;
    }
    if (editedProduct) {
      dispatch(
        productActions.updateProduct(
          prodId,
          formState.inputValues.title,
          formState.inputValues.description,
          formState.inputValues.imageUrl,
        ),
      );
    } else {
      dispatch(
        productActions.createProduct(
          formState.inputValues.title,
          formState.inputValues.description,
          formState.inputValues.imageUrl,
          +formState.inputValues.price,
        ),
      );
    }
    navigation.goBack();
  }, [dispatch, prodId, formState]);

  useEffect(() => {
    navigation.setParams({submit: submitHandler});
  }, [submitHandler]);

  const textChangeHandler = (inputIdentifier, text) => {
    let isValid = false;
    if (text.trim().length > 0) {
      isValid = true;
    }
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid: isValid,
      input: inputIdentifier,
    });
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={100}>
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={formState.inputValues.title}
              onChangeText={textChangeHandler.bind(this, 'title')}
              autoCapitalize="words"
            />
            {!formState.inputValidate.title && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Please enter valid title!</Text>
              </View>
            )}
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
              style={styles.input}
              value={formState.inputValues.imageUrl}
              onChangeText={textChangeHandler.bind(this, 'imageUrl')}
            />
            {!formState.inputValidate.imageUrl && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  Please enter valid image url!
                </Text>
              </View>
            )}
          </View>
          {editedProduct ? null : (
            <View style={styles.formControl}>
              <Text style={styles.label}>Price</Text>
              <TextInput
                style={styles.input}
                value={formState.inputValues.price}
                onChangeText={textChangeHandler.bind(this, 'price')}
                keyboardType="decimal-pad"
              />
              {!formState.inputValidate.price && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>
                    Please enter valid price!
                  </Text>
                </View>
              )}
            </View>
          )}
          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={3}
              value={formState.inputValues.description}
              onChangeText={textChangeHandler.bind(this, 'description')}
            />
            {!formState.inputValidate.description && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  Please enter valid descrption!
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'Lemonada-Bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: 'OpenSans-Regular',
    color: 'red',
    fontSize: 13,
    letterSpacing: 0.5,
  },
});
