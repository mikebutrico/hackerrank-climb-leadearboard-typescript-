function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  // Write your code here
  let res: number[] = [];
  let first_pass = true;
  let previous_rank = ranked[0];
  let rank_set: number[] = [];
  function findRank(array: number[], searchValue: number): number {
    let lowerBound = 0;
    let upperBound = array.length - 1;
    let midPointIndex: number = 0;
    let midPointValue: number = 0;

    while (lowerBound <= upperBound) {
      midPointIndex = Math.floor((upperBound + lowerBound) / 2);
      midPointValue = array[midPointIndex];

      if (searchValue == midPointValue) return midPointIndex + 1;
      else if (searchValue > midPointValue && midPointIndex > 0) {
        upperBound = midPointIndex - 1;
      } else if (searchValue < midPointValue) lowerBound = midPointIndex + 1;
      else if (midPointIndex == 0) {
        break;
      }
    }
    if (searchValue < array[midPointIndex]) return midPointIndex + 2;

    return midPointIndex + 1;
  }

  for (const rank of ranked) {
    if (first_pass) {
      first_pass = false;
      rank_set.push(rank);
    } else {
      if (rank != previous_rank) {
        rank_set.push(rank);
      }

      previous_rank = rank;
    }
  }

  for (const curr_player of player) {
    res.push(findRank(rank_set, curr_player));
  }

  return res;
}

let ranks = [100, 100, 50, 40, 40, 20, 10];

console.log(climbingLeaderboard(ranks, [5, 25, 50, 120]));
