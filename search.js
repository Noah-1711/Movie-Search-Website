const input= document.getElementById("inputsearch")
const cards= document.getElementById("cards")
const searchselect=document.getElementById("searchselect")
let selectvalue = searchselect.value

const moviedropdown= document.getElementById("movie")
const seriesdropdown= document.getElementById("tv")

searchselect.addEventListener('change',(ele)=>{
    selectvalue= searchselect.value
    console.log(selectvalue) 
    if(selectvalue =='movie'){
        console.log("movie",selectvalue)
       moviedropdown.addEventListener('change',findmovie(selectvalue)) 
    }
    else if(selectvalue =='tv'){
        console.log("series",selectvalue)
       seriesdropdown.addEventListener('change',findmovie(selectvalue)) 
    }
   

})
function movies(){
    console.log("click",selectvalue)
    if(selectvalue=='movie'){
        findmovie(selectvalue)
    }
   else{
    findtv(selectvalue)
   }

}


async function  findmovie(selectvalue){
    console.log( "func",selectvalue) 
    cards.innerHTML=""
    let inputvalue=input.value
    console.log(inputvalue)
    const res= await fetch(`https://api.themoviedb.org/3/search/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${inputvalue}`)
    console.log(res)

    const data= await res.json()
    console.log(data.results);
    data.results.map((ele)=>{
        cards.innerHTML +=` 
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />

        <div class="imgcontent">
        <h3>${ele.title}</h3>
        <small>${ele.genre_ids[0]}</small>
        <small>${ele.release_date }</small>


        </div>
        <div class="votes">
        ${(ele.vote_average*10).toFixed(1)}%
        </div>

        
    </div>`
    

       

     })

}


async function  findtv(selectvalue){
    console.log( "func",selectvalue) 
    cards.innerHTML=""
    let inputvalue=input.value
    console.log(inputvalue)
    const res= await fetch(`https://api.themoviedb.org/3/search/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${inputvalue}`)
    console.log(res)

    const data= await res.json()
    console.log(data.results);
    data.results.map((ele)=>{
        cards.innerHTML +=` 
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />

        <div class="imgcontent">
        <h3>${ele.name}</h3>
        <small>${ele.genre_ids[0]}</small>
        <small>${ele.first_air_date }</small>


        </div>
        <div class="votes">
        ${(ele.vote_average*10).toFixed(1)}%
        </div>

        
    </div>`
    

       

     })

}