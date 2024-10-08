num = int(input())

for i in range(num):
    r, s = input().split()
    r = int(r)

    for k in s:
        for t in range(r):
            print(k,end="")

    print()