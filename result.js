

        let userInput = document.getElementById("date");
    let result = document.getElementById("result");
    function calculateAge(){
        let birthDate = new date(userInput.value);

        let d1 = birthDate.getDate(); 
        let m1 = birthDate.getMonth() + 1; 
        let y1 = birthY.getFullYear(); 

        let today = new date();

        let d2 = today.getDate();
        let m2 = today.getMonth();
        let y2 = today.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if(m2 >= m1)
        {
            m3 = m2 - m1;
        }
        else
        {
            y3--;
            m3 = 12 + m2 -m1;
        }
        if(d2 >= d1)
        {
            d3 = d2 - d1;
        }
        else
        {
           m3--;
           d3 = getDaysInMonth(y1, m2) + d2 - d1;
        }
        if(m3 < 0)
        {
           m3 = 11;
           y3--;
        }
        result.innerHTML = date;
    }
    function getDaysInMonth(year, month){
        return new date(year, month, 0).getDate();
    }


