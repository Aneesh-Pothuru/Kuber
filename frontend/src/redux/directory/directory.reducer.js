const INITIAL_STATE = {
    sections: [
        {
            title: 'Electronics',
            imageUrl: 'https://www.redsharknews.com/hs-fs/hubfs/Imported_Blog_Media/fb97188652eb906d92f056b700e28cb1-1.jpg?width=1920&height=1080&name=fb97188652eb906d92f056b700e28cb1-1.jpg',
            id: 1,
            linkUrl: 'shop/electronics'
        },
        {
            title: 'Fashion',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-the-making-of-the-1-reimagined-nike-news-native-1600-1533854895.jpg',
            id: 2,
            linkUrl: 'shop/fashion'
        },
        {
            title: 'Home',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/target-home-products-1567696458.jpg',
            id: 3,
            linkUrl: 'shop/home'
        },
        // {
        //     title: 'Sports',
        //     imageUrl: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/giants/shum6ehceantasywsxca.jpg',
        //     id: 4,
        //     linkUrl: 'shop/sports'
        // },
        // {
        //     title: 'Industrial',
        //     imageUrl: 'https://developingeconomics.files.wordpress.com/2020/05/industry-construction-industrial-civil-works.jpg',
        //     id: 5,
        //     linkUrl: 'shop/industrial'
        // },
        // {
        //     title: 'Toys',
        //     imageUrl: 'https://image.freepik.com/free-photo/toys-floor-nursery_73683-228.jpg',
        //     id: 6,
        //     linkUrl: 'shop/toys'
        // },
        // {
        //     title: 'Motors',
        //     imageUrl: 'https://s.marketwatch.com/public/resources/images/MW-HY837_at_gla_ZH_20200122173813.jpg',
        //     id: 7,
        //     linkUrl: 'shop/motors'
        // },
        // {
        //     title: 'Music',
        //     imageUrl: 'https://www.mural-wallpaper.com/wp-content/uploads/2019/06/A-M25.jpeg',
        //     id: 8,
        //     linkUrl: 'shop/music'
        // },
        // {
        //     title: 'Garden',
        //     imageUrl: 'https://www.millcreekgardens.com/wp-content/uploads/2016/10/gardening-supplies-new.jpg',
        //     id: 9,
        //     linkUrl: 'shop/garden'
        // }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;