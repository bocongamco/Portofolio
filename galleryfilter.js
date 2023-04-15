const gallery = document.querySelector(".gallery");

const itembox = document.querySelectorAll(".item");
console.log(itembox)


gallery.addEventListener("click",(e)=>{
    console.log(e)


    if(e.target.classList.contains("filter")){
        gallery.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");

        console.log(filterValue)

        itembox.forEach(item => {
            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.add("show")
                item.classList.remove("hide")
            }
            else{
                item.classList.add("hide")
            }
        })
    }
})