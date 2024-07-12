//prototype:
let arr = ['pinky', 'kiran', 'Abhi', 'Lucky'];
let object = {
    name:'Vaishu',
    city: 'Fremont',
    state: 'CA',
    getIntro: function() {
        console.log(this.name + ' from ' + this.city + ' ' + this.state)
    }
}
