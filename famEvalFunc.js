function calc(inTake) {
    let i = 0;
    let j = 0;
    let nums = [];
    let signs = [];
    let total = 0;
    let testArr = [];
    // let toArr = inTake.split('+');
    // let toNeg = inTake.split(`-`);
    // let toDiv = inTake.split(`/`);
    // let toMul = inTake.split(`*`);
    while (i < inTake.length) {
        if (Number(inTake[i]) !== NaN) {
            testArr.push(inTake[i])
            console.log(testArr, Number(inTake[i]) == NaN);
        }
        let toNum = Number(inTake[i]);
        let toStr = toNum.toString();
        toStr == 'NaN' ? signs.push(inTake[i]) : nums.push(toNum);
        i++;
        // console.log('to Numbers: ', typeof toNum, nums, signs);
    }
    while(j < nums.length){
    //   if(signs[j]=='+') {
        total += nums[j];
        console.log('total: ', total, 'numsLen: ', nums.length, 'numsCurItem: ', nums[j]);
        // }
        j++;
    }
    // nums.map((num) => {
        // }) test
        console.log(nums, signs, total, testArr /*toArr, toNeg, toDiv, toMul*/)
    }
    //test
    calc('3+6+9+1+2');
















    // if (signs[j] == '+') {
    //     total += num + nums[j + 1];
    //     console.log(total)
    // } else if (signs[j] == '-') {
    //     total += num - nums[j + 1];
    //     console.log(total)
    //     j++
    // }
    
    // for (j = 0; j < signs.length + 1; j++) {
        //     if (signs[j] == '+') {
            //        total += nums[j] + nums[j + 1];
            //        console.log(total)
            //     } else if (signs[j] == '-') {
                //        total += nums[j] - nums[j + 1];
                //        console.log(total)
    //     }
    // }