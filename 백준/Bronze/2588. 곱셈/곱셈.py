num1 = int(input())
num2 = input()
counter = 0
total = 0
num2 = num2[::-1]

for i in num2:
    i = int(i)
    print(i * num1)
    total += i * num1 * (10 ** counter)
    counter += 1

print(total)