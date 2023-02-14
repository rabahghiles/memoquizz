export default (tries, score, startingTime) => {
    const time = Date.now() - startingTime;
    const timeSeconde = Math.round(time / 1000);
    const timePenalty = timeSeconde * 10;
    const triesPenalty = tries * 100;
    return score - (timePenalty + triesPenalty);
}