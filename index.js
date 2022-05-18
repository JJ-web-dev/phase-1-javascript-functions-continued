function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
};

saturdayFun();

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

mondayWork();

function wrapAdjective(highlight = '*'){
    return function(say = 'hard worker' ){
        return `You are ${highlight}${say}${highlight}!`;
    }
}     

wrapAdjective();
