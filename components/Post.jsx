import styled from 'styled-components/native';

const PostView = styled.View`
//   flex: 1;
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  // width: 500px;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
  border-width: 2px;

`;

const PostTitle = styled.Text`
font-size: 17px;
font-weight: 700;
`;

const PostDetails = styled.View`
flex: 1;
// color: red;
// background-color: red;
justify-content: center;
`;

const PostDate = styled.Text`
font-size: 12px;
color: rgba(0, 0, 0, 0.4);
margin-top: 2px;
font-weight: 700;
`;

export const Post = ({title, imageUrl, createdAt})=>{
    return (<PostView>
    <PostImage
      source={{
        uri: imageUrl,
      }}
    />

    <PostDetails>
      <PostTitle>{title}</PostTitle>
      <PostDate>{createdAt}</PostDate>
    </PostDetails>


  </PostView>)
}