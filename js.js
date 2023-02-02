var proverka = 0;//создали примитивную переменную
function alll(){//вызываем функцию при нажатии кнопки
    var str=(document.getElementById('pole').value);//инициализируем строковую переменную из поля ввода
    document.getElementById('pole').value=" ";//вводим данные в поле ввода
    
proverka=proverka+1;//элементарный счетчик
 var doc=document.createElement('div.fak');//создаем в переменную элемент
doc.innerHTML=str+" "+proverka;//записываем текст + с счетчика в переменную с созданным элементом
dem.appendChild(doc);//создаем элемент уже в самом html документе

}
    