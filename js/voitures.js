import {voituresInitiales} from "./data.js"

localStorage.clear()
const data= localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"))!=="undefined" ? JSON.parse(localStorage.getItem("data")) :voituresInitiales
const tbody=document.querySelector("#liste-voitures")

const afichier = ()=>{
    tbody.innerHTML=""
    for(let i=0;i<data.length;i++){
        const tr=document.createElement('tr')
        tbody.appendChild(tr)
        const td1=document.createElement('td')
        const td2=document.createElement('td')
        const td3=document.createElement('td')
        const td4=document.createElement('td')
        const td5=document.createElement('td')
        const td6=document.createElement('td')
        const td7=document.createElement('td')
        const strong=document.createElement('strong')
        strong.textContent=data[i].marque
        td1.appendChild(strong)
        td2.textContent=data[i].modele
        const id=document.createElement('span')
        id.textContent=data[i].immatriculation
        id.classList.add("registration")
        td3.appendChild(id)
        td4.textContent=data[i].categorie
        const span=document.createElement('span')
        span.textContent=" DH / jour"
        td5.classList.add("price")
        td5.textContent=data[i].prixJour
        td5.appendChild(span)
        const badge=document.createElement('span')
        badge.textContent=data[i].statut
        if(data[i].statut=="Disponible"){
            badge.classList.add("badge","badge-disponible")
        }else if (data[i].statut=="Louée"){
                badge.classList.add("badge","badge-louee")
        }else{
                badge.classList.add("badge","badge-maintenance")
        }
        
        td6.appendChild(badge)
        const actions=document.createElement('div')
        actions.classList.add("row-actions")
        td7.appendChild(actions)
        const modifier=document.createElement('button')
        modifier.type="button"
        modifier.textContent="modifier"
        modifier.classList.add("button","button-edit")
        modifier.dataset.action="modifier"
        modifier.dataset.id=""+data[i].id
        modifier.setAttribute("aria-label","Modifier ${data[i].marque} ${data[i].modele} ${data[i].immatriculation")
        actions.appendChild(modifier)
        const suprimer=document.createElement('button')
        suprimer.type="button"
        suprimer.textContent="suprimer"
        suprimer.classList.add("button","button-delete")
        suprimer.dataset.action="suprimer"
        suprimer.dataset.id=""+ data[i].id
        suprimer.setAttribute("aria-label","Suprimer ${data[i].marque} ${data[i].modele} ${data[i].immatriculation")
        actions.appendChild(suprimer)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)

    }
    const mpt=document.querySelector("#etat-vide")
    if(data.length==0){
        mpt.style.display="block"
    }
    else{
        mpt.style.display="hidden"
    }
}
afichier()