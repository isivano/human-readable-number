module.exports = function toReadable (number) {
    let a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten',
            'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let str = "" + number;
    let twoDigitToWords = arg => arg[0] > 1 ? b[+(arg[0])] + " " + a[+(arg[1])] : a[+(arg[0] + arg[1])];
    if (number === 0) return "zero"
    else 
    switch(str.length){
        case 1 : return (a[+(str[0])]).trim(); 
        case 2 : return (twoDigitToWords(str)).trim();
        case 3 : return (a[str[0]] + " hundred " + twoDigitToWords(str[1] + str[2])).trim();
    }
}