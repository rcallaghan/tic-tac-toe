#### If it was your main project, what would be your next move? What do you think is missing to your solution?

* I would use Redux to store the state
* I would store the history of the moves to allow you to go back/forward to see moves that were made
* I would implement a proper minimax solution to play vs a computer AI: https://mostafa-samir.github.io/Tic-Tac-Toe-AI/
* I would make the Computer write text to the player after making moves and or winning
* Instead of providing a combination of winning results  as an array I would research and attempt to implement an NxN board: http://stackoverflow.com/questions/20578372/tictactoe-win-logic-for-nxn-board

#### What additional steps would you take to make sure your code runs well in production and in the future. Ok, this is a silly example, we know tic-tac-toe probably won't break on us. But imagine if the board were 17x17, the rulebook 143 pages long and changing every year.

* I would implement the NxN board
* On the parent board I would pass through the amount of cells per row
* I would implement flow to use generics on data being passed through components
* I would write tests using Jest to ensure that nothing failed


#### what did you enjoy about the process of designing and implementing your solution? Is there anything you found frustrating?

* I enjoyed the fact I had never built something like this before and I learn a lot.
* I found the test frustrating only because I was first attempting to implement a minimax algorithm and I was confused and lost.

#### Things I did wrong

* My biggest mistake is that I didn't use Redux so I used React State more than I wanted to and it proved to be very messy.
* I feel some of the code I wrote was messy and rushed
* My checkForResult method is ugly and I shouldn't be passing the result as a string like that.
* I felt this was a javascript heavy test and I should have focussed more on the styling sides because of the role that is available
* I would already rewrite this solution if I had more time.