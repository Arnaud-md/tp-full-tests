export function calculerHeure(lune: number, terre: number, soleil: number): string {
    let res=0;
    if (soleil===1) {
        if (lune===1) {
            res=soleil+lune-2;
        }
        else if (lune===2) {
            res=(soleil+lune)/2
        }
    }
    else if (soleil===2) {
        if(terre===2) {
            res=6;
        }
        else if (terre===1) {
            if (lune===1) {
                res=soleil+2*terre+lune+2-2;
            }
            else if (lune===2) {
                res=(soleil+2*terre+lune+2)/2;
            }
        }
    }
    let time ="";
    if (res<=1) {
        time= "mortin";
    }
    else if (res<=2) {
        time= "aprenoon";
    }
    else if (res<=4) {
        time= "soirning";
    }
    else {
        time= "nuight";
    }
    return time;
}