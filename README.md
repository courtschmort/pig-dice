# Pig Dice

## Specs
| Behavior (Our program should handle:) | Example Input (When it receives:) | Example Output (It should return:) |
| - | - | - |
| The program will set the turn total object to 0 at the beginning of each player's turn | Player clicks start button | 0 |
| The program will return a number when a player clicks the roll button | Player clicks roll button | A number (1-6) |
| The program will add returned numbers (2-6) to a player's turn object | 2 + 3 + 4 + 5 | 14 |
| The program will reset the total of the turn to 0 if a 1 is rolled; begins the next player's turn | 1 | 0; "Player 2: Your turn." |
| The program will alert Player 2 of their turn and add Player 1's turn total to their game total object when Player 1 clicks the stay button | Player 1 clicks stay button | "Player 2: Your turn."; 14 |
| The program will stop and alert that a player has won when a player's game total reaches 100 or more | 101 | "You've Won Player 2!" |
| The program will use a probability formula to calculate the roll of the dice | Player clicks roll button | Probability Function Runs| 
