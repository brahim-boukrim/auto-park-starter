import {voituresInitiales} from "./data.js"
const data= localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"))!=="undefined" ? JSON.parse(localStorage.getItem("data")) :voituresInitiales
document.querySelector("#total").textContent=data.length
document.querySelector("#dispo").textContent=data.filter(elm=>elm.statut=="Disponible").length
document.querySelector("#louee").textContent=data.filter(elm=>elm.statut=="Louée").length
document.querySelector("#maint").textContent=data.filter(elm=>elm.statut=="En maintenance").length

document.querySelector("#money").textContent=data.filter(elm=>elm.statut=="Louée").reduce((tot,elm)=>tot+elm.prixJour,0) +" DH"
const tbody=document.querySelector("tbody")
const afichier = (tab=data)=>{
    tbody.innerHTML=""
    for(let i=0;i<tab.length;i++){
        const tr=document.createElement('tr')
        tbody.appendChild(tr)
        const td1=document.createElement('td')
        const td2=document.createElement('td')
        const td3=document.createElement('td')
        const td4=document.createElement('td')
        const td5=document.createElement('td')
        const td6=document.createElement('td')
        const strong=document.createElement('strong')
        strong.textContent=tab[i].marque
        td1.appendChild(strong)
        td2.textContent=tab[i].modele
        const id=document.createElement('span')
        id.textContent=tab[i].immatriculation
        id.classList.add("px-[7px]","py-[4px]","text-[#506075]","rounded-[4px]","text-[11px]","mx-auto")
        
        td3.appendChild(id)
        td4.textContent=tab[i].categorie
        const span=document.createElement('span')
        span.textContent=" DH / jour"
        td5.classList.add("price")
        td5.textContent=tab[i].prixJour
        td5.appendChild(span)
        const badge=document.createElement('span')
        badge.textContent=tab[i].statut
        if(tab[i].statut=="Disponible"){
            badge.classList.add("bg-[#eaf7f0]", "text-[#1d7048]")
        }else if (tab[i].statut=="Louée"){
                badge.classList.add("bg-[#eaf0ff]", "text-[#2c53b1]")
        }else{
                badge.classList.add("bg-[#fff4df]", "text-[#8a5910]")
        }
        td6.appendChild(badge)
        const actions=document.createElement('div')
        actions.classList.add("row-actions")
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
    }
document.querySelectorAll("table").forEach(elm => {elm.className = "w-full border-collapse text-left whitespace-nowrap bg-white ";});
document.querySelectorAll("th").forEach(elm => {elm.className = "px-[12px] py-[13px] bg-[#f6f8fc] text-[#617084] text-[10px] uppercase tracking-[0.7px] font-semibold";});
document.querySelectorAll("td").forEach(elm => {elm.className = "px-[12px] py-[18px] text-[12px] border-b border-[#edf0f5]";});
document.querySelectorAll(".table-scroll").forEach(elm => {
  elm.className = "overflow-x-auto";
});
}
afichier()
const stat=document.querySelector("#filtre-statut")
const statFunc=(table)=>{
    if(stat.value=="Disponible"){
        let temp=table.filter(elm=>elm.statut=="Disponible")
        return temp
    }
    if(stat.value=="Louée"){
        let temp=table.filter(elm=>elm.statut=="Louée")
        return temp
    }
    if(stat.value=="En maintenance"){
        let temp=table.filter(elm=>elm.statut=="En maintenance")
        return temp
    }
    return table
}
const cate=document.querySelector("#filtre-categorie")
const catFunc=(table)=>{
    if(cate.value=="Citadine"){
        let temp=table.filter(elm=>elm.categorie=="Citadine")
        return temp
    }
    if(cate.value=="Berline"){
        let temp=table.filter(elm=>elm.categorie=="Berline")
        return temp
    }
    if(cate.value=="SUV"){
        let temp=table.filter(elm=>elm.categorie=="SUV")
        return temp
    }
    return table
}
cate.addEventListener("change",()=>{
    afichier(catFunc(statFunc(data)))
})

stat.addEventListener("change",()=>{
    afichier(catFunc(statFunc(data)))
})
