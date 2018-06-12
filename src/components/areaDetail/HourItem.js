import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

const HourItem = ({ index, HoursMap, onAddPress, person, onDeletePress }) => {
    // const { hourItemContainer, iconsContainer, personInfoContainer, personInfo } = styles;
    return (
        // <View style={hourItemContainer}>
        //     <Text>{`${HoursMap[index]} - ${HoursMap[index + 1]}`}</Text>
        //     <View style={personInfoContainer}>
        //         <Text style={personInfo}>{person || 'Boş'}</Text>            
        //     </View>
        // <View style={iconsContainer}>
        //     <Icon 
        //     raised 
        //     name="edit" 
        //     color='#FFFFFF' 
        //     containerStyle={{ backgroundColor: '#6733BA' }} 
        //     onPress={onAddPress}
        //     size={10}
        //     />
        //     <Icon 
        //     raised 
        //     name="delete" 
        //     color='#FFFFFF' 
        //     containerStyle={{ backgroundColor: '#6733BA' }} 
        //     onPress={onDeletePress}
        //     size={10}
        //     />
        // </View>
        // </View>
        <ListItem
            title={`${HoursMap[index]} - ${HoursMap[index + 1]}`}
            subtitle={person || 'Boş'}
            rightIcon={
                <View style={iconsContainer}>
                    <Icon
                        raised
                        name="edit"
                        color='#FFFFFF'
                        containerStyle={{ backgroundColor: '#6733BA' }}
                        onPress={onAddPress}
                        size={10}
                    />
                    <Icon
                        raised
                        name="delete"
                        color='#FFFFFF'
                        containerStyle={{ backgroundColor: '#6733BA' }}
                        onPress={onDeletePress}
                        size={10}
                    />
                </View>
            }
        />
    );
};

export default HourItem;

const styles = StyleSheet.create({
    hourItemContainer: {
        backgroundColor: '#dddddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 2,
        paddingRight: 5,
        paddingLeft: 5
    },
    personInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    personInfo: {
        maxWidth: 150
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
