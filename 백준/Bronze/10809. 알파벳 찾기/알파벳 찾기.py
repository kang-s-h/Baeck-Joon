lst = [-1 for _ in range(26)]

str = input()
for i in str:
    lst[ord(i)-97] = str.index(i)

for i in lst:
    print(i, end = " ")
