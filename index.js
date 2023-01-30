const selectinput= document.getElementById("selectinput")
let selectvalue =selectinput.value
const movies= document.getElementById("movies")
const series= document.getElementById("series")

const cards= document.getElementById("cards")


radioone()

 function hello(){
    selectvalue =selectinput.value
    if(movies.checked == true && selectvalue =="day"){
 movies.addEventListener('change', moviesearch(selectvalue))
        
    }
    else if(movies.checked==true && selectvalue=="week"){
        movies.addEventListener('change', moviesearch(selectvalue))

    }
    else if(series.checked==true && selectvalue=="day"){
        series.addEventListener('rad', seriessearch(selectvalue))

    }
    else if(series.checked==true && selectvalue=="week"){
        series.addEventListener('change', seriessearch(selectvalue))

    }

 }

 function radioone(){
    moviesearch(selectvalue)
 }
 function radiotwo(){
    seriessearch(selectvalue)
 }

//  var Moviesgenre=[]
// fetchmoviegenre()
// async function fetchmoviegenre()
// {

    
//     data.genres.map((ele)=>
//     {
        
//         //console.log(ele)  
//         Moviesgenre[ele.id]=ele.name

//     })

// }
// console.log(Moviesgenre)


// var Seriesgenre=[]
// fetchtvgenre()
// async function fetchtvgenre()
// {
//     const res=await fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=3fd2be6f0c70a2a598f084ddfb75487c")
//     const data=await res.json()
   
//     data.genres.map((ele)=>
//     {
        
//         //console.log(ele)  
//         Seriesgenre[ele.id]=ele.name

//     })
    
// }

// const mgenre=[]

 async function moviesearch(selectvalue){
    cards.innerHTML=""


    
    // const moviegenre=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3fd2be6f0c70a2a598f084ddfb75487c")
    // console.log(moviegenre)
    // const genredata=await moviegenre.json()
    // console.log(genredata.genres)
    // genredata.genres.map((genre)=>{
    //    console.log(genre)
    //    mgenre[genre.id]=genre.name
       
    // })
    
    // console.log(mgenre)



     const res=  await fetch(`https://api.themoviedb.org/3/trending/movie/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
     const data = await res.json()
     console.log(data.results);
   
     data.results.map((ele)=>{
       
        cards.innerHTML +=` 
        <a onclick="moviedeatils(${ele.id})" href="./cards.html">
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />

        <div class="imgcontent">
        <h3>${ele.title}</h3>
        <small id="moviegenre">Drama | Entertainment</small>
        <p>${ele.release_date.slice(0,4) }</p>


        </div>
        <div class="votes">
        ${(ele.vote_average*10).toFixed(1)}%
        </div>

        
    </div>
    </a>`


//     ele.genre_ids.map((element)=>
//   {
//     console.log(element)
//     console.log(mgenre[element])
//     small.innerHTML += `${mgenre[element]} | `
//   })
    

       

     })

  

     
}


async function seriessearch(selectvalue){
    cards.innerHTML=""
     const response =await fetch(`https://api.themoviedb.org/3/trending/tv/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
     const data= await response.json()
     console.log(data)
     console.log(data.results);
     
     data.results.map((ele)=>{
        cards.innerHTML +=` 
        <a onclick="seriesdetails(${ele.id})" href="./cards.html">
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />

        <div class="imgcontent">
        <h3>${ele.original_name   }</h3>
        <small>Drama | action</small>
        <p>${ele.first_air_date.slice(0,4)}</p>


        </div>
        <div class="votes">
        ${(ele.vote_average*10).toFixed(1)}%
        </div>

        
    </div>
    </a>`
    

       

     })
     


}

function moviedeatils(id){
    localStorage.setItem('movieid',id)

   
}

function seriesdetails(id){
 localStorage.setItem('seriesid',id)

}



