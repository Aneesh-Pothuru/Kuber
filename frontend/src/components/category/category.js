import React from 'react';
import Items from '../items/items';
import './category.scss';


class category extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Electronics',
                    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/520px-Arduino_ftdi_chip-1.jpg',
                    id: 1,
                    linkUrl: 'shop/electronics'
                },
                {
                    title: 'Fashion',
                    imageUrl: 'https://wp-en.oberlo.com/wp-content/uploads/2018/04/shutterstock_466589549.jpg',
                    id: 2,
                    linkUrl: 'shop/fashion'
                },
                {
                    title: 'Home',
                    imageUrl: 'https://assets.searshomeservices.com/images/sized/KC-kitchen-layout-tips-5450a76d058e0fcd492ca1c4638ef933.jpg',
                    id: 3,
                    linkUrl: 'shop/home'
                },
                {
                    title: 'Sports',
                    imageUrl: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/giants/shum6ehceantasywsxca.jpg',
                    id: 4,
                    linkUrl: 'shop/sports'
                },
                {
                    title: 'Industrial',
                    imageUrl: 'https://developingeconomics.files.wordpress.com/2020/05/industry-construction-industrial-civil-works.jpg',
                    id: 5,
                    linkUrl: 'shop/industrial'
                },
                {
                    title: 'Toys',
                    imageUrl: 'https://image.freepik.com/free-photo/toys-floor-nursery_73683-228.jpg',
                    id: 6,
                    linkUrl: 'shop/toys'
                },
                {
                    title: 'Motors',
                    imageUrl: 'https://s.marketwatch.com/public/resources/images/MW-HY837_at_gla_ZH_20200122173813.jpg',
                    id: 7,
                    linkUrl: 'shop/motors'
                },
                {
                    title: 'Music',
                    imageUrl: 'https://www.mural-wallpaper.com/wp-content/uploads/2019/06/A-M25.jpeg',
                    id: 8,
                    linkUrl: 'shop/music'
                },
                {
                    title: 'Garden',
                    imageUrl: 'https://www.millcreekgardens.com/wp-content/uploads/2016/10/gardening-supplies-new.jpg',
                    id: 9,
                    linkUrl: 'shop/garden'
                }
            ]
        }
    }

    render() {
        return (
            <div className='menu'>{
                this.state.sections.map(section => (
                    <Items key={section.id} title={section.title} imageUrl={section.imageUrl} />
                ))
            } </div>
        )
    }
}

export default category;