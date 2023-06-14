import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const Post = styled.View`
  flex: 1;
  padding: 15px;
  border-bottom-width: 5px;
  border-bottom-color: rgba(0, 0, 0, 0, 1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage
          source={{
            uri: 'https://w7.pngwing.com/pngs/737/1015/png-transparent-man-reading-newspaper-newspaper-information-article-newspaper-ad-miscellaneous-service-photography-thumbnail.png',
          }}
        />
      </Post>
      <StatusBar theme='auto' />
    </View>
  );
}
