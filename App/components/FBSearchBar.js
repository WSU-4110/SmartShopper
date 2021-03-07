import React from 'react'

//components
import
{
    SafeAreaView,
    Dimensions,
    StyleSheet,
    View,
    TextInput,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native'

//vector icons
import Icon from 'react-native-vector-icons/FontAwesome5'

//reanimated
import Animated, {Easing} from 'react-native-reanimated'
const{Value, timing} = Animated

//window size
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

//declaring a component
class FBSearchBar extends React.Component
{
    constructor(props)
    {
        super(props)

        //state
        this.state =
        {
            isFocused: false,
            keyword: ''
        }

        //animation values
        this._input_box_translate_x = new Value(width)
        this._back_button_opacity = new Value(0)
        this._content_translate_y = new Value(height)
        this._content_opacity = new Value(0)
    }
    render()
    {
        return
        (
            <>
                <SafeAreaView style = {styles.header_safe_area}>
                    <View style = {styles.header}>
                        <View style = {styles.header_inner}>
                            {/*
                            <View>
                                <Image source = {require(../assets/icon.png)}
                            </View>
                            */}
                        </View>
                    </View>
                </SafeAreaView>
            </>
        )
    }
}

export default FBSearchBar

const styles = StyleSheet.create(
    {
        header_safe_area:
        {
            zIndex: 1000
        },

        header:
        {
            height: 50,
            paddingHorizontal:16
        },

        header_inner:
        {
            flex: 1,
            overflow: 'hidden',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative'
        }
    }
)