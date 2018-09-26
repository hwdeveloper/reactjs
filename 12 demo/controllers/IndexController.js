exports.index = function (req, res) {
    let featured = [
        {url: 'images/pi.jpg',name:'Mascot Kitty - White',price:'20'},
        {url: 'images/pi1.jpg',name:'Bite Me',price:'30'},
        {url: 'images/pi2.jpg',name:'Little Fella',price:'50'},
        {url: 'images/pi3.jpg',name:'Astral Cruise',price:'45'}]
    res.render('index', {featured:featured});

};

exports.slider = function (req, res) {
    let slider = [
        {url: 'images/banner.jpg'},
        {url: 'images/banner1.jpg'},
        {url: 'images/banner.jpg'},
        {url: 'images/banner2.jpg'}]
    res.end(JSON.stringify(slider));
}
