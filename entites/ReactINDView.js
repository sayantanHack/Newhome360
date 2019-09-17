import React from  'react'; 
import  {view} from 'react-360';

export default class ReactINDView extends React.Component {
    render() {
        return (
            <view>
                <view style={{
                    width: 200,
                    heigth: 200,
                    backgroundColor: 'green',
                    transform:[
                        {rotateX: 90},
                        {translateX: -350}
                    ]
                }}>
                </view>
            </view>
        );
    }
}