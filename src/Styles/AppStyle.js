import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerHeader: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        width: '100%'
    },
    drawerImgText: {
         color:"black", 
         fontSize:18,
         fontWeight:'600',
         marginTop:'4%'
    },
    drawerImgSubText:{
        marginTop:'1%',
        color:'black',
        fontSize:12
    }
})