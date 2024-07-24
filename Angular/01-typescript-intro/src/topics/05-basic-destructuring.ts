interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details:Details;

}
interface Details{
    author: string;
    year: number;
}
const audioPlayer: AudioPlayer=
{
    audioVolume: 90,
    songDuration: 36,
    song: "X",
    details: {
        author: "Maluma",
        year: 2020
    }
}
const song="New Song";
const { song:anotherSong,songDuration:duration, details}=audioPlayer;
const {author} = details;

/*console.log("Cnacion: "+anotherSong);
console.log("Duration: "+duration);
console.log("Author: "+author);*/



const [,,trunks,krillin="not found"]: string[]=["Goku","Vegeta","Trunks"];
//const trunks = dbz[3]|| "Personaje no encontrado";
console.error("El Personaje 3 es:", krillin);



export{}