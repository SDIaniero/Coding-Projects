import random


def showDie(die):
    if die == 1:
                print ("|-----------|")
                print ("|           |")
                print ("|     O     |")
                print ("|           |")
                print ("|-----------|")
                print
    elif die == 2:
                print ("|-----------|")
                print ("|           |")
                print ("|   O   O   |")
                print ("|           |")
                print ("|-----------|")
                print 
    elif die == 3:
                print ("|-----------|")
                print ("|   O   O   |")
                print ("|           |")
                print ("|     O     |")
                print ("|-----------|")
                print 
    elif die == 4:
                print ("|-----------|")
                print ("|   O   O   |")
                print ("|           |")
                print ("|   O   O   |")
                print ("|-----------|")
                print 
    elif die == 5:
                print ("|-----------|")
                print ("|   O   O   |")
                print ("|     O     |")
                print ("|   O   O   |")
                print ("|-----------|")
                print 
    elif die == 6:
                print ("|-----------|")
                print ("|   O   O   |")
                print ("|   O   O   |")
                print ("|   O   O   |")
                print ("|-----------|")
                print

leaveprogram = 0
dice_count = 0
die = random.randint(1,6)

# Prints those words and prompts the user to press enter. Works
input("Welcome to the Dice Rolling Simulator!\nPress enter to begin > ") 

# here the user can type in any number, which then ties their response to the variable dice_count
print("How many 6 sided die do you want to roll at once?")

# Ties it in
dice_count = input("> ")
 

#while loop saying; while the dice_count is NOT equal to the letter "q"..
while dice_count != "q":
    rollSum = 0
    for numDie in range(1, int(dice_count) + 1):
        value = random.randint(1,6)
        showDie(value)
        rollSum += value
    print("The sum of your rolling was " + str(rollSum))
    


    print ("If you want to quit press q otherwise press enter a new number to roll again")
    dice_count = input("> ")
