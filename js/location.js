import {voituresInitiales} from "./data.js"
const data= localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"))!=="undefined" ? JSON.parse(localStorage.getItem("data")) :voituresInitiales

const icon =document.querySelector(".fa-bars")
const menu=document.querySelector("#burger")
const list=document.querySelector("#list")
const start=document.querySelector("#start")
const fin=document.querySelector("#fin")
const date=new Date()
icon.addEventListener("click",()=>{
    if(menu.hidden==true){
        menu.hidden=false
    }
    else{
        menu.hidden=true
    }
})

const save=()=>{
    localStorage.setItem("data",JSON.stringify(data))
}

const afichier=()=>{
        list.innerHTML=""
        for(let i=0;i<data.length;i++){
            if(data[i].statut=="Disponible"){
                const label=document.createElement("label")
                label.className="border-2 border-gray-200 has-[:checked]:border-[#2852E3] rounded-2xl p-2 cursor-pointer"
                label.setAttribute("for",`in${data[i].id}`)
                const div=document.createElement("div")
                div.className="py-0.5 flex justify-between"
                const cat=document.createElement("p")
                cat.className="bg-[#EEF2FF] text-[#2852E3] rounded-md font-bold text-[11px] px-2 py-1 pr-6"
                cat.textContent=data[i].categorie
                const input=document.createElement("input")
                input.className="appearance-none w-5 h-5 rounded-full bg-white border-2 border-gray-300 checked:border-[6px] checked:border-[#2852E3] cursor-pointer"
                input.type="radio"
                input.name="choice"
                input.setAttribute("id",`in${data[i].id}`)
                const mark=document.createElement("p")
                mark.className="py-0.5 text-[16px] font-bold"
                mark.textContent=data[i].marque
                const stat=document.createElement("p")
                stat.className="py-0.5 text-[#16835C] text-[12px]"
                stat.textContent="Disponible"
                const price=document.createElement("p")
                price.className="py-0.5 text-[#2852E3] text-[16px] font-bold"
                price.textContent=data[i].prixJour+" MAD/jour"
                list.appendChild(label)
                label.append(div,mark,stat,price)
                div.append(cat,input)
        }}
}
afichier()

start.setAttribute("min",date.getFullYear()+"-"+String(date.getMonth()+1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0'))
fin.setAttribute("min",date.getFullYear()+"-"+String(date.getMonth()+1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0'))
fin.addEventListener("change",()=>{
    if(start.value==""){
        
    }
})
