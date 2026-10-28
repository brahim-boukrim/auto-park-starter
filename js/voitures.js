import {voituresInitiales} from "./data.js"
const data= localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"))!=="undefined" ? JSON.parse(localStorage.getItem("data")) :voituresInitiales
const tbody=document.querySelector("#liste-voitures")

const idGen=()=>{
    let idd=1;
    while(true){
        if(data.filter(elm=>elm.id==idd).length!=0){
            idd++;
            continue
        }
        break
    }
    return idd
}


const ajouter=(e)=>{
    e.preventDefault()
    
    let obj={}
    const marque=document.querySelector('#marque')
    const modele=document.querySelector('#modele')
    const immatriculation=document.querySelector('#immatriculation')
    const categorie=document.querySelector('#categorie')
    const prix=document.querySelector('#prix-jour')
    const statut=document.querySelector('#statut')
    obj.marque = marque.value
    obj.modele= modele.value
    obj.immatriculation = immatriculation.value
    obj.categorie= categorie.value 
    obj.prixJour = Number(prix.value)
    obj.statut = statut.value
    obj.id=idGen()
    const validMarq=document.querySelector("#erreur-marque")
    const validMod=document.querySelector("#erreur-modele")
    const validCate=document.querySelector("#erreur-categorie")
    const validMat=document.querySelector("#erreur-immatriculation")
    const validPrix=document.querySelector("#erreur-prix-jour")
    
        validMarq.textContent=""
        validMod.textContent=""
        validMat.textContent=""
        validCate.textContent=""
        validPrix.textContent=""

    if(/^ +$/.test( marque.value)||marque.value==""){
        validMarq.textContent="invalid input"
        return
    }
    if(/^ +$/.test( modele.value)||modele.value==""){
        validMod.textContent="invalid input"
        return
    }
    if(!(/^AUTO-[0-9]+$/.test(immatriculation.value))||data.find(elm=>elm.immatriculation==immatriculation.value)){
        validMat.textContent="invalid input"
        return
    }
    if(categorie.value ==""){
        validCate.textContent="choose a categorie"
        return
    }
    if(!/^([0-9]+|[0-9]+.[0-9]+)$/.test( prix.value)|| prix.value=="" ){
        validPrix.textContent="invalid input"
        return
    }
    data.push(obj)
    save()
    marque.value =""
    modele.value =""
    immatriculation.value =""
    categorie.value =""
    prix.value =""
    statut.value ="Disponible"
    afichier()
}
 const submit=document.querySelector('#bouton-enregistrer')
 submit.addEventListener('click',ajouter)


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
        const td7=document.createElement('td')
        const strong=document.createElement('strong')
        strong.textContent=tab[i].marque
        td1.appendChild(strong)
        td2.textContent=tab[i].modele
        const id=document.createElement('span')
        id.textContent=tab[i].immatriculation
        id.classList.add("registration")
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
            badge.classList.add("badge","badge-disponible")
        }else if (tab[i].statut=="Louée"){
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
        modifier.dataset.id=""+tab[i].id
        modifier.setAttribute("aria-label","Modifier ${tab[i].marque} ${tab[i].modele} ${tab[i].immatriculation}")
        actions.appendChild(modifier)
        const suprimer=document.createElement('button')
        suprimer.type="button"
        suprimer.textContent="suprimer"
        suprimer.classList.add("button","button-delete")
        suprimer.dataset.action="suprimer"
        suprimer.dataset.id=""+ tab[i].id
        suprimer.setAttribute("aria-label","Suprimer ${tab[i].marque} ${tab[i].modele} ${tab[i].immatriculation}")
        actions.appendChild(suprimer)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        modifier.addEventListener("click",()=>{
            let hold=i;
            let idddddd=tab[i].id
            const marque=document.querySelector('#marque')
            marque.value =tab[i].marque
            const modele=document.querySelector('#modele')
            modele.value =tab[i].modele
            const immatriculation=document.querySelector('#immatriculation')
            immatriculation.value =tab[i].immatriculation
            const categorie=document.querySelector('#categorie')
            categorie.value =tab[i].categorie
            const prix=document.querySelector('#prix-jour')
            prix.value =tab[i].prixJour
            const statut=document.querySelector('#statut')
            statut.value =tab[i].statut
            const annuler=document.querySelector('#annuler-modification')
            annuler.removeAttribute("hidden")
            const submit=document.querySelector('#bouton-enregistrer')
            submit.textContent="modifier"
            let why=true;
            annuler.addEventListener("click",()=>{
                marque.value =""
                modele.value =""
                immatriculation.value =""
                categorie.value =""
                prix.value =""
                statut.value ="Disponible"
                annuler.setAttribute("hidden","")
                submit.textContent="Ajouter la voiture"
                why=false
                submit.removeEventListener("click",modifie)
                submit.addEventListener("click", ajouter)
            })
            
            
            const modifie=(e)=>{
                i=tab.findIndex(elm=>elm.id==idddddd)
                e.preventDefault()
                if(why){
                    tab[i].marque = marque.value
                    tab[i].modele= modele.value
                    tab[i].immatriculation = immatriculation.value
                    tab[i].categorie= categorie.value 
                    tab[i].prixJour = prix.value
                    tab[i].statut = statut.value
                    submit.textContent="Ajouter la voiture"
                    submit.removeEventListener("click",modifie)
                    submit.addEventListener("click", ajouter)
                    marque.value =""
                    modele.value =""
                    immatriculation.value =""
                    categorie.value =""
                    prix.value =""
                    statut.value ="Disponible"
                    i=hold
                    save()
                    afichier()
                }
            };
            submit.removeEventListener("click",ajouter)
            submit.addEventListener("click", modifie)
        })
        suprimer.addEventListener("click",()=>{
            const conf=confirm("do you want to delete this ?")
            if(conf){
            tab.splice(i,1)
            save()
            afichier()
            }
        })

    }
    const mpt=document.querySelector("#etat-vide")
    if(tab.length==0){
        mpt.style.display="block"
    }
    else{
        mpt.style.display="hidden"
    }
}
afichier()
const save=()=>{
    localStorage.setItem("data",JSON.stringify(data))
}

const tri=document.querySelector("#tri-prix")
tri.addEventListener('change',()=>{
    if(tri.value=="croissant"){
        const sortcroi=[...data]
        for(let i=0;i<sortcroi.length;i++){
            for(let j=0;j<sortcroi.length-1;j++){
                if(sortcroi[j].prixJour<sortcroi[j+1].prixJour){
                    [sortcroi[j],sortcroi[j+1]]=[sortcroi[j+1],sortcroi[j]]
                }
            }
        }
        afichier(sortcroi)
    }
    if(tri.value ==""){
        afichier()
    }
    if(tri.value=="decroissant"){
        const sortdec=[...data]
        for(let i=0;i<sortdec.length;i++){
            for(let j=0;j<sortdec.length-1;j++){
                if(sortdec[j].prixJour> sortdec[j+1].prixJour){
                    [sortdec[j],sortdec[j+1]]=[sortdec[j+1],sortdec[j]]
                }
            }
        }
        afichier(sortdec)
    }
})


