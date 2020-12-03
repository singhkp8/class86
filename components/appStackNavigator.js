import {createStackNavigator} from ' react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import recieverDetails from '../screens/recieverDetails';

export const appStackNavigator = createStackNavigator({
    BookDonatelist :{
        screen : BookDonateScreen,
        navigationOptions: {
            headerShow: false
        }
    },
    recieverDetails:{
        screen : recieverDetails,
        navigationOptions: {
            headerShow: false
        }
    },
},
{
 initialRouteName:'BookDonatelist'       
}
)