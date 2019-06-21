import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';


export default class CardComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log(this.props.cards)
        const DiplayTask = this.props.cards.map((item) => {

            return (

                <Card key={item.id}>
                    <Card.Content>
                        <Title>{item.name}</Title>
                        <Paragraph></Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: item.uri }}  />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button onPress={() => { this.props.navigation.navigate('DetailsPage',{item})
  }}>Get more details</Button>
                    </Card.Actions>
                </Card>


            );

        })
        return (
            <View>{DiplayTask}</View>
        )
    }
}


