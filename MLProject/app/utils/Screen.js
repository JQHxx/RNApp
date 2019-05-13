import {Dimensions} from 'react-native';


const width =  Dimensions.get('window').width;

const height =  Dimensions.get('window').height;

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
export default {
    width,
    height
}