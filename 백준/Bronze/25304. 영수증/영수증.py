total = int(input())
testcase = int(input())
result = 0

for i in range(testcase):
    item, price = map(int,input().split())
    result += item*price

if result == total:
    print("Yes")
else:
    print("No")