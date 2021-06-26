class Series{
    constructor(name,platform){
        this.name = name ;
        this.platform = platform; 

    }
    Intro(){
        console.log("the series  " + this.name + ' is on ' +this.platform )
    }
    static scene(){
        console.log("5 Stars")
    }
}


class Movies extends Series {
    constructor(name,platform){
        super(name,platform)
    }
    Intro1(){
        console.log("The Movie " + this.name + ' is on '+ this.platform)
    }
}

class Shorts extends Series {
    constructor(name,platform,episodes){
        super(name,platform)
        this.episodes = episodes;
    }
    Intro2(){
        console.log("The Shorts " + this.name + ' is on '+ this.platform + ' of ' +this.episodes + ' episodes' )
    }
}

const a = new Series("Breaking Bad","Netflix");
a.Intro()
console.log(Series.scene())

const b = new Movies("El-Camino","Netflix")
b.Intro1()

const c = new Shorts("Software Developer","Youtube",8)
c.Intro2()

