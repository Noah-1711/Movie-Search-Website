console.log("hello")
const input= document.getElementById("inputsearch")
console.log(input)
const cards= document.getElementById("cards")


async function  findmovie(){
    cards.innerHTML=""
    let inputvalue=input.value
    console.log(inputvalue)
    const res= await fetch(`http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${inputvalue}`)
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