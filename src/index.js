module.exports = function toReadable(n) {
    let userNumber = n.toString();

    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    nums[30] = 'thirty';
    nums[40] = 'forty';
    nums[50] = 'fifty';
    nums[60] = 'sixty';
    nums[70] = 'seventy';
    nums[80] = 'eighty';
    nums[90] = 'ninety';
    nums[100] = 'hundred';

    if (userNumber.length == 1) {
        return nums[n];
    } else if (userNumber.length == 2) {
        if (userNumber[1] == 0 || n < 20) {
            return nums[n]
        } else {
            for (let i = 20; i <= nums.length; i++) {
                if (i.toString()[0] == userNumber[0]) {
                    return nums[i] + ' ' + nums[userNumber[1]]
                }
            }
        }
    } else if (userNumber.length == 3 && userNumber[1] == 0 && userNumber[2] == 0) {
        return nums[+userNumber[0]] + ' hundred'
    } else if (userNumber.length == 3 && userNumber[1] == 0) {
        return nums[+userNumber[0]] + ' hundred ' + nums[+userNumber[2]]
    } else if (userNumber.length == 3) {
        let twoN = userNumber.replace(userNumber[0], '');
        if (twoN[1] == 0 || +twoN < 20) {
            return nums[+userNumber[0]] + ' hundred ' + nums[twoN]
        } else {
            for (let i = 20; i <= nums.length; i++) {
                if (i.toString()[0] == twoN[0]) {
                    return nums[+userNumber[0]] + ' hundred ' + nums[i] + ' ' + nums[twoN[1]]
                }
            }
        }
    }
}