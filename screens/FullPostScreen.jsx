import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native'

const PostImage = styled.PostImage`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`;

export const FullPostScreen = () => {
    return (
        <View>
            <Text>adsf</Text>
        {/* <PostImage source={{uri: 'https://www.nicepng.com/png/detail/126-1261957_-.png'}} /> */}
        {/* <PostText>asdfasdf</PostText> */}
        </View>
    )
}

