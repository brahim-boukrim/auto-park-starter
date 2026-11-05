import {voituresInitiales} from "./data.js"
const data= localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"))!=="undefined" ? JSON.parse(localStorage.getItem("data")) :voituresInitiales

const icon =document.querySelector(".fa-bars")
const menu=document.querySelector("#burger")
const list=document.querySelector("#list")
const start=document.querySelector("#start")
const fin=document.querySelector("#fin")
const tottime=document.querySelector("#tottime")
const timecalc=document.querySelector("#timecalc")
const time=document.querySelector("#time")
const marc=document.querySelector("#mark")
const type=document.querySelector("#type")
const plan=document.querySelector("#plan")
const tot=document.querySelector("#total")
const next1=document.querySelector("#next1")
const step1=document.querySelector("#step1")
const next2=document.querySelector("#next2")
const step2=document.querySelector("#step2")
const next3=document.querySelector("#next3")
const step3=document.querySelector("#step3")
const next4=document.querySelector("#next4")
const step4=document.querySelector("#step4")
let total=0
tot.textContent=total

const obj={}
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
                input.addEventListener("change",()=>{
                    obj.mark=data[i].marque
                    obj.categorie=data[i].categorie
                    obj.price=data[i].prixJour
                    obj.id=data[i].id
                    marc.textContent=obj.mark
                    type.textContent=obj.categorie+" · "+obj.price+" MAD/jour"
                    total=obj.price
                    const dif=new Date(fin.value)-new Date(start.value)
                    tot.textContent=total*((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)+" MAD"
                    timecalc.textContent= "Véhicule · "+ ((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)+ "×"+ obj.price+ "MAD"
                    time.textContent=((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)+" jours · dates incluses"
                    tottime.textContent=((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)*obj.price+" MAD"
                })
        }}
}
afichier()

start.setAttribute("min",date.getFullYear()+"-"+String(date.getMonth()+1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0'))

start.addEventListener("input",()=>{
    fin.min=start.value
    const dif=new Date(fin.value)-new Date(start.value)
        timecalc.textContent= "Véhicule · "+ ((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)+ "×"+ obj.price+ "MAD"
        time.textContent=((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)+" jours · dates incluses"
        tottime.textContent=((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)*obj.price+" MAD"
        plan.textContent=   `${start.value} →  ${fin.value} `
        
})
fin.addEventListener("input",()=>{
        const dif=new Date(fin.value)-new Date(start.value)
        timecalc.textContent= "Véhicule · "+ ((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)+ "×"+ obj.price+ "MAD"
        time.textContent=((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)+" jours · dates incluses"
        tottime.textContent=((dif-dif%1)+1000 * 60 * 60 * 24)/(1000 * 60 * 60 * 24)*obj.price+" MAD"
        plan.textContent=   `${start.value} →  ${fin.value} `
        
})
next1.addEventListener("click",(e) =>{
    e.preventDefault()
    step1.hidden=true
    step2.hidden=false
    const yy=document.querySelector("#index1")
    yy.textContent=""
    yy.classList.add("fa-solid","fa-check")
    yy.style.display="flex"
    yy.style.justifyContent="center"
    yy.style.alignItems="center"
        yy.style.backgroundColor="#2852E3"

})
next2.addEventListener("click",(e) =>{
    e.preventDefault()
    step2.hidden=true
    step3.hidden=false
    const yy=document.querySelector("#index2")
    yy.textContent=""
    yy.classList.add("fa-solid","fa-check")
    yy.style.display="flex"
    yy.style.justifyContent="center"
    yy.style.alignItems="center"
        yy.style.backgroundColor="#2852E3"
            yy.style.color="white"


})
next3.addEventListener("click",(e) =>{
    e.preventDefault()
    step3.hidden=true
    step4.hidden=false
    const yy=document.querySelector("#index3")
    yy.textContent=""
    yy.classList.add("fa-solid","fa-check")
    yy.style.display="flex"
    yy.style.justifyContent="center"
    yy.style.alignItems="center"
    yy.style.backgroundColor="#2852E3"
    yy.style.color="white"
})
