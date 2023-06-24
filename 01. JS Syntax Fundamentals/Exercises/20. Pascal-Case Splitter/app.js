function separateWords(words) {
    console.log(words.split(/(?=[A-Z])/).join(', '));
}

separateWords('SplitMeIfYouCanHaHaYouCantOrYouCan')
separateWords('HoldTheDoor')
separateWords('ThisIsSoAnnoyingToDoThisIsSoAnnoyingToDo')