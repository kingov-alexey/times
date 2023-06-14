import React from 'react';
import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Alert, 
  FlatList, 
  ActivityIndicator, 
  RefreshControl,
  TouchableOpacity

} from 'react-native';
import {Post} from '../components/Post.jsx';
import axios from 'axios';

export const HomeScreen = () => {

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPosts = ()=>{
    setIsLoading(true);
    axios
    .get('https://6487f9130e2469c038fcb5cd.mockapi.io/article')
    .then(({data})=>{
      console.log('что в дате',data)
      setItems(data);
    })
    .catch((err) => {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось получить статьи');
      alert('ошибка при получении статей');
      setIsLoading(false);
    })
    .finally(()=>{
      setIsLoading(false);
      console.log('Данные успешно загрузились');
    });
  }


  React.useEffect(fetchPosts, []);

  if(isLoading){
    return (<View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15}}>Загрузка...</Text>
    </View>)
  }

  return (
    <View>
      

      <FlatList
      refreshControl={<RefreshControl refreshControl={isLoading} onRefresh={fetchPosts}/> }
      data={items}
      renderItem={({item}) => (
        <TouchableOpacity onPress={()=> alert('click')}>
        <Post title={item.name} imageUrl={item.avatar} createdAt={item.createdAt}/>
        </TouchableOpacity>
      )} 
      
      />

{console.log('Стейт', items)}

      {
       items.map((obj) => (<Post title={obj.name} createdAt={obj.createdAt} imageUrl={obj.avatar} />))
      }
      <StatusBar theme='auto' />
    </View>
  );
}
