function grossIncome(basicSalary, ...allowances){
     let sum = basicSalary
     for(let allowance of allowances){
        sum += allowance
     }
     return sum
     }
     //console.log(grossIncome(20000, 6000, 43000))calculates the nhif rate for every bandwidth
     function calculateNHIF(grossPay){
        if(grossPay < 6000){
            return 150
        } else if (grossPay < 6000){
            return 300
        }else if(grossPay < 12000){
            return 400
        }
        else if(grossPay < 15000){
            return 500
        }
        else if(grossPay < 20000){
            return 600
        }
        else if(grossPay < 25000){
            return 750
        }
        else if(grossPay < 30000){
            return 850
        }
        else if(grossPay < 35000){
            return 900
        }
        else if(grossPay < 40000){
            return 950
        }
        else if(grossPay < 45000){
            return 1000
        }
        else if(grossPay < 50000){
            return 1100
        }
        else if(grossPay < 60000){
            return 1200
        }
        else if(grossPay < 70000){
            return 1300
        }
        else if(grossPay < 80000){
            return 1400
        }
        else if(grossPay < 90000){
            return 1500
        }
        else if(grossPay < 100000){
            return 1600
        }
        else if(grossPay >= 100000){
            return 1700
        }
    }
    // the handleSalary allows us to get the gross income,deductions made on the gross and the net pay after deducting the payee
    
    function handleSalary (event){
        let basic =parseInt(document.getElementById("Basic").value)
        let basicsalary = Boolean(basic) ? basic : 0

        let allowances = Array.from(document.querySelectorAll(".allowances")).map ((input)=>{
            let allowance = (parseInt(input.value))
            let checkedAllowance = Boolean (allowance) ? allowance : 0
            return checkedAllowance
        })
        let gross = grossIncome (basicsalary, ...allowances)
        let nhif = calculateNHIF(gross)
        let nssf = NSSF(gross)
        let taxableIncome = (gross - nhif - nssf)
        let payee = PAYEE(taxableIncome)
        let netSalary = netPay(taxableIncome, payee)

        //this extracts the elements from HTML by their ID
        document.getElementById("nhif").textContent = nhif
        document.getElementById("nssf").textContent = nssf
        document.getElementById("payee").textContent = payee
        document.getElementById("taxableincome").textContent = taxableIncome
        document.getElementById("netpay").textContent = netSalary
    }

    //console.log(calculateNHIF(60000))
    function NSSF(pensionablePay){
        return pensionablePay * 0.06
    }
    //console.log(NSSF(7000))
    function taxablePay(grossIncome, ...deductions){
        for(let deduction of deductions){
            grossIncome -=deduction
        }
        return grossIncome
    }
    //console.log(taxablePay(50000, 1100, 5000)) gives the taxablepay for every salary range
    function PAYEE(taxablepay){
        if(taxablepay <= 24000){
            return taxablepay * 0.1
        } else if (taxablepay <= 32333){
            return taxablepay * 0.25
        } else if(taxablepay > 32333){
            return taxablepay * 0.3
        }
    }
    //console.log(PAYEE(160000))
    function netPay(taxablepay, payee){
        return taxablepay - payee
    }
    //console.log(netPay(100000, 20000))