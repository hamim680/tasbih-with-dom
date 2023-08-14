const SubahanAllahValue = document.getElementById('SubahanAllahValue')
const SubahanAllahIncrease = document.getElementById('SubahanAllahIncrease')
const SubahanAllahDecrease = document.getElementById('SubahanAllahDecrease')

const AlhamdulillahValue = document.getElementById('AlhamdulillahValue')
const AlhamdulillahIncrease = document.getElementById('AlhamdulillahIncrease')
const AlhamdulillahDecrease = document.getElementById('AlhamdulillahDecrease')

const AllahuAkbarValue = document.getElementById('AllahuAkbarValue')
const AllahuAkbarIncrease = document.getElementById('AllahuAkbarIncrease')
const AllahuAkbarDecrease = document.getElementById('AllahuAkbarDecrease')

const resetbtn = document.getElementById('reset')

let SubahanAllahInitialValue = 0;
let AlhamdulillahInitialValue = 0;
let AllahuAkbarInitialValue = 0;


// subahanallah
SubahanAllahIncrease.addEventListener('click', function(){
    if(SubahanAllahInitialValue ===33){
        return alert('subahanallah fill up please another one')
    }
    SubahanAllahInitialValue++
    SubahanAllahValue.innerText = SubahanAllahInitialValue;
})

SubahanAllahDecrease.addEventListener('click', function(){
    if(SubahanAllahInitialValue === 0){
        return alert ('cant take negative value')
    }
    SubahanAllahInitialValue--
    SubahanAllahValue.innerText = SubahanAllahInitialValue;
})

// alhamdulillah
AlhamdulillahIncrease.addEventListener('click', function(){
    if(AlhamdulillahInitialValue ===33){
        return alert('subahanallah fill up please another one')
    }
    AlhamdulillahInitialValue++
    AlhamdulillahValue.innerText = AlhamdulillahInitialValue;
})

AlhamdulillahDecrease.addEventListener('click', function(){
    if(AlhamdulillahInitialValue === 0){
        return alert ('cant take negative value')
    }
    AlhamdulillahInitialValue--
    AlhamdulillahValue.innerText = AlhamdulillahInitialValue;
})
// allahuakbar
AllahuAkbarIncrease.addEventListener('click', function(){
    if(AllahuAkbarInitialValue ===34){
        return alert('subahanallah fill up please another one')
    }
    AllahuAkbarInitialValue++
    AllahuAkbarValue.innerText = AllahuAkbarInitialValue;
})

AllahuAkbarDecrease.addEventListener('click', function(){
    if(AllahuAkbarInitialValue === 0){
        return alert ('cant take negative value')
    }
    AllahuAkbarInitialValue--
    AllahuAkbarValue.innerText = AllahuAkbarInitialValue;
})

resetbtn.addEventListener('click', function(){
    SubahanAllahValue.innerText = 0;
    AlhamdulillahValue.innerText = 0;
    AllahuAkbarValue.innerText = 0;
    SubahanAllahInitialValue = 0;
    AlhamdulillahInitialValue = 0;
    AllahuAkbarInitialValue = 0;
})