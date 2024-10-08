num = int(input())

for i in range(num):
    r, s = input().split()
    r = int(r)

    for item in s:
        print(item * r, end="")

    print()