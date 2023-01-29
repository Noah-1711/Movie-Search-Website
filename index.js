const selectinput= document.getElementById("selectinput")
let selectvalue =selectinput.value
const movies= document.getElementById("movies")
const series= document.getElementById("series")

const cards= document.getElementById("cards")

radioone()

 function hello(){
    selectvalue =selectinput.value
    console.log("day",selectvalue)

    if(movies.checked == true && selectvalue =="day"){
 movies.addEventListener('change', moviesearch(selectvalue))
        // console.log("day",selectvalue)
        
    }
    else if(movies.checked==true && selectvalue=="week"){
        movies.addEventListener('change', moviesearch(selectvalue))

        // console.log("week",selectvalue)
    }
    else if(series.checked==true && selectvalue=="day"){
        series.addEventListener('rad', seriessearch(selectvalue))

        // console.log("week",selectvalue)
    }
    else if(series.checked==true && selectvalue=="week"){
        series.addEventListener('change', seriessearch(selectvalue))

        // console.log("week",selectvalue)
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

//     const res=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=3fd2be6f0c70a2a598f084ddfb75487c")
//     console.log(res)
//     const data=await res.json()
//     console.log(data)
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


 async function moviesearch(selectvalue){
    console.log("day")
    cards.innerHTML=""
     const res=  await fetch(`https://api.themoviedb.org/3/trending/movie/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
     console.log(res)
     const data = await res.json()
     console.log(data)
     console.log(data.results);
   
     
     data.results.map((ele)=>{
        cards.innerHTML +=` 
        <a onclick="moviedeatils(${ele.id})" href="./cards.html">
        <div class="poster">
        <img src="https://image.tmdb.org/t/p/w154${ele.poster_path}" />

        <div class="imgcontent">
        <h3>${ele.title}</h3>
        <small>Drama | action</small>
        <p>${ele.release_date.slice(0,4) }</p>


        </div>
        <div class="votes">
        ${(ele.vote_average*10).toFixed(1)}%
        </div>

        
    </div>
    </a>`
    

       

     })
    
     
}


async function seriessearch(selectvalue){
    cards.innerHTML=""
     console.log("hello")
     const response =await fetch(`https://api.themoviedb.org/3/trending/tv/${selectvalue}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
     console.log(response)
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
    console.log("moviesdeatils")
    localStorage.setItem('movieid',id)

   
}

function seriesdetails(id){
 console.log("series details")
 localStorage.setItem('seriesid',id)

}



