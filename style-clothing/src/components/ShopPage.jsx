import React from 'react'
import CollectionPreview from './CollectionPreview'
import SHOP_DATA from '../data/ShopData'

class ShopPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionItemProps}) => (
                            <CollectionPreview key={id} {...otherCollectionItemProps}/>
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;