function yarat(){
    var tr = document.createElement('tr');

    var th = document.createElement('th');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    var th5 = document.createElement('th');
    
    

    var inp = document.getElementById('inp')
    var inp1 = document.getElementById('inp1')
    var inp2 = document.getElementById('inp2')
    var inp3 = document.getElementById('inp3')
    var inp4 = document.getElementById('inp4')
    
    th.innerText = inp.value;
    th1.innerText = inp1.value;
    th2.innerText = inp2.value;
    th3.innerText = inp3.value;
    th4.innerText = inp4.value;

    tr.appendChild(th);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tbody.appendChild(tr);
}