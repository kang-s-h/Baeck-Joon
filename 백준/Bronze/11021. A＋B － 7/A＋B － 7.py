num1 = int(input())
counter = 1
for i in range(num1):
    num2, num3 = map(int,input().split())
    print("Case","#"+str(counter)+":",num2+num3)
    counter = int(counter)
    counter +=1